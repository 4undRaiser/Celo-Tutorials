// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract CarbonCreditToken is ERC20, Ownable {
    uint256 public totalCarbonCredits;

    event BoughtCredits(address indexed buyer, uint256 amount);
    event SoldCredits(address indexed seller, uint256 amount);
    event TransferredCredits(
        address indexed from,
        address indexed to,
        uint256 amount
    );

    constructor() ERC20("CarbonCreditToken", "CCT") {
        totalCarbonCredits = 0;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
        totalCarbonCredits += amount;
    }

    function burn(address from, uint256 amount) public onlyOwner {
        _burn(from, amount);
        totalCarbonCredits -= amount;
    }

    function buyCredits(uint256 amount) public payable {
        require(msg.value >= amount, "Not enough CELO sent");
        _mint(msg.sender, amount);
        totalCarbonCredits += amount;
        emit BoughtCredits(msg.sender, amount);
    }

    function sellCredits(uint256 amount) public {
        require(balanceOf(msg.sender) >= amount, "Not enough credits");
        _burn(msg.sender, amount);
        totalCarbonCredits -= amount;
        payable(msg.sender).transfer(amount);
        emit SoldCredits(msg.sender, amount);
    }

    function transferCredits(address to, uint256 amount) public {
        require(balanceOf(msg.sender) >= amount, "Not enough credits");
        _transfer(msg.sender, to, amount);
        emit TransferredCredits(msg.sender, to, amount);
    }

    function checkBalance(address user) public view returns (uint256) {
        return balanceOf(user);
    }

    function withdrawCELO(uint256 amount) public onlyOwner {
        require(
            address(this).balance >= amount,
            "Not enough CELO in the contract"
        );
        payable(owner()).transfer(amount);
    }
}
