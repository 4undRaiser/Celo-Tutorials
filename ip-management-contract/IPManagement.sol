// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract IPManagement is ERC721URIStorage, Ownable {
    uint private counter;

    enum Category {
        Patent,
        Copyright,
        Trademark
    }

    struct IP {
        string ipDescription;
        uint256 price;
        Category category;
        address payable owner;
        bool purchased;
    }

    mapping(uint => IP) public ips;

    event IPRegistered(
        uint tokenId,
        string ipDescription,
        uint256 price,
        address payable owner,
        Category category
    );

    event IPPurchased(
        uint tokenId,
        string ipDescription,
        uint256 price,
        address payable owner,
        Category category
    );

    constructor() ERC721("IPManagement", "IPM") {}

    function registerIP(
        string memory _description,
        uint256 _price,
        Category _category,
        string memory tokenURI
    ) public onlyOwner {
        counter++;
        uint tokenId = counter;

        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);

        ips[tokenId] = IP(
            _description,
            _price,
            _category,
            payable(msg.sender),
            false
        );
        emit IPRegistered(
            tokenId,
            _description,
            _price,
            payable(msg.sender),
            _category
        );
    }

    function purchaseIP(uint tokenId) public payable {
        IP memory _ip = ips[tokenId];
        require(!_ip.purchased, "IP already purchased");
        require(msg.value == _ip.price, "Incorrect value sent");

        _ip.owner.transfer(msg.value);
        _ip.purchased = true;
        ips[tokenId] = _ip;

        _transfer(_ip.owner, msg.sender, tokenId);

        emit IPPurchased(
            tokenId,
            _ip.ipDescription,
            msg.value,
            _ip.owner,
            _ip.category
        );
    }

    function updateIP(
        uint tokenId,
        string memory _description,
        uint256 _price,
        Category _category
    ) public {
        IP memory _ip = ips[tokenId];
        require(_ip.owner == msg.sender, "Only owner can update the IP");
        _ip.ipDescription = _description;
        _ip.price = _price;
        _ip.category = _category;
        ips[tokenId] = _ip;
    }

    function deleteIP(uint tokenId) public {
        IP memory _ip = ips[tokenId];
        require(_ip.owner == msg.sender, "Only owner can delete the IP");
        delete ips[tokenId];
        _burn(tokenId);
    }
}
