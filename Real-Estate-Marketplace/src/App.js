import "./App.css";
import Home from "./components/home";
import { Properties } from "./components/Properties";
import { useState, useEffect, useCallback } from "react";
import Web3 from "web3";
import { newKitFromWeb3 } from "@celo/contractkit";
import RealEstateMarketplace from "./contracts/RealEstateMarketplace.abi.json";
import IERC from "./contracts/IERC.abi.json";

import BigNumber from "bignumber.js";

const ERC20_DECIMALS = 18;
const contractAddress = "0x4f43Ab8Cba473D1B38C395EDF0CD5a308Dee19D7";
const cUSDContractAddress = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1";

function App() {
  const [contract, setcontract] = useState(null);
  const [address, setAddress] = useState(null);
  const [kit, setKit] = useState(null);
  const [cUSDBalance, setcUSDBalance] = useState(0);
  const [properties, setProperties] = useState([]);

  const connectToWallet = async () => {
    if (window.celo) {
      try {
        await window.celo.enable();
        const web3 = new Web3(window.celo);
        let kit = newKitFromWeb3(web3);

        const accounts = await kit.web3.eth.getAccounts();
        const user_address = accounts[0];
        kit.defaultAccount = user_address;

        await setAddress(user_address);
        await setKit(kit);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Error Occurred");
    }
  };

  const getBalance = useCallback(async () => {
    try {
      const balance = await kit.getTotalBalance(address);
      const USDBalance = balance.cUSD.shiftedBy(-ERC20_DECIMALS).toFixed(2);

      const contract = new kit.web3.eth.Contract(RealEstateMarketplace, contractAddress);
      setcontract(contract);
      setcUSDBalance(USDBalance);
    } catch (error) {
      console.log(error);
    }
  }, [address, kit]);

  const getProperties = async () => {
    try {
      const nfts = [];
      const nftsLength = await contract.methods
        .getAllProperties()
        .call();
      // contract starts minting from index 1
      for (let i = 1; i <= Number(nftsLength); i++) {
        const nft = new Promise(async (resolve) => {
          const property = await contract.methods
            .getProperty(i)
            .call();
          resolve({
            index: i,
            image: property.image,
            location: property.location,
            id: property.id,
            price: property.price,
            owner: property.owner,
            forSale: property.forSale,
          });
        });
        nfts.push(nft);
      }
      const _nfts = await Promise.all(nfts);
      setProperties(_nfts);
    } catch (e) {
      console.log({ e });
    }
  };

  const addProperty = async (_image, _location, _price) => {
    let price = new BigNumber(_price).shiftedBy(ERC20_DECIMALS).toString();
    try {
      await contract.methods
        .registerProperty(_image, _location, price)
        .send({ from: address });
      getProperties();
    } catch (error) {
      alert(error);
    }
  };

  const changePrice = async (_index, _newPrice) => {
    let newprice = new BigNumber(_newPrice).shiftedBy(ERC20_DECIMALS).toString();
    try {
      await contract.methods
        .updatePropertyPrice(_index, newprice)
        .send({ from: address });
      getProperties();
    } catch (error) {
      alert(error);
    }
  };

  const sellProperty = async (_index, _sellPrice) => {
    let sellprice = new BigNumber(_sellPrice).shiftedBy(ERC20_DECIMALS).toString();
    try {
      await contract.methods
        .putPropertyForSale(_index, sellprice)
        .send({ from: address });
      getProperties();
    } catch (error) {
      alert(error);
    }
  };

  const withdrawSale = async (_index) => {
    try {
      await contract.methods
        .withdrawProperty(_index)
        .send({ from: address });
      getProperties();
    } catch (error) {
      alert(error);
    }
  };

  const buyProperty = async (_index) => {
    try {
      const cUSDContract = new kit.web3.eth.Contract(IERC, cUSDContractAddress);
      
      await cUSDContract.methods
        .approve(contractAddress, properties[_index].price)
        .send({ from: address });
      await contract.methods
        .buyProperty(_index)
        .send({ from: address });
      getProperties();
      getBalance();
      alert("you have successfully sent cusd to this user");
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    connectToWallet();
  }, []);

  useEffect(() => {
    if (kit && address) {
      getBalance();
    }
  }, [kit, address, getBalance]);

  useEffect(() => {
    if (contract) {
      getProperties();
    }
  }, [contract, getProperties]);

  return (
    <div className="App">
      <Home cUSDBalance={cUSDBalance} addProperty={addProperty} />
      <Properties
        properties={properties}
        changePrice={changePrice}
        sellProperty={sellProperty}
        withdrawSale={withdrawSale}
        walletAddress={address}
        buyProperty={buyProperty}
      />
    </div>
  );
}

export default App;
