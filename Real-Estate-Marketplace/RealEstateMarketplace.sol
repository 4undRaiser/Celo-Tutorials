// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

interface IERC20Token {
    function transfer(address, uint256) external returns (bool);

    function approve(address, uint256) external returns (bool);

    function transferFrom(address, address, uint256) external returns (bool);

    function totalSupply() external view returns (uint256);

    function balanceOf(address) external view returns (uint256);

    function allowance(address, address) external view returns (uint256);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );
}

contract RealEstateMarketplace is ERC721, Ownable, Pausable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct Property {
        uint256 id;
        string location;
        uint256 price;
        address payable owner;
        bool forSale;
    }

    mapping(uint256 => Property) public properties;

    event PropertyRegistered(uint256 indexed tokenId);
    event PropertyPurchased(uint256 indexed tokenId, address indexed buyer);
    event PropertyUpdated(uint256 indexed tokenId);
    event PropertyWithdrawn(uint256 indexed tokenId);

    constructor() ERC721("RealEstateMarketplace", "REMP") {}

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function registerProperty(
        string memory location,
        uint256 price
    ) public whenNotPaused {
        _tokenIds.increment();
        uint256 tokenId = _tokenIds.current();

        _mint(msg.sender, tokenId);

        Property memory newProperty = Property(
            tokenId,
            location,
            price,
            payable(msg.sender),
            true
        );
        properties[tokenId] = newProperty;

        emit PropertyRegistered(tokenId);
    }

    function buyProperty(uint256 tokenId) public payable whenNotPaused {
        Property storage property = properties[tokenId];

        require(property.forSale, "Property is not for sale.");
        require(msg.value >= property.price, "Insufficient funds.");

        require(
            IERC20Token(cUsdTokenAddress).transferFrom(
                msg.sender,
                property.owner,
                property.price
            ),
            "Transfer failed."
        );
        property.owner = payable(msg.sender);
        property.forSale = false;

        emit PropertyPurchased(tokenId, msg.sender);
    }

    function updatePropertyPrice(
        uint256 tokenId,
        uint256 newPrice
    ) public whenNotPaused {
        Property storage property = properties[tokenId];

        require(
            msg.sender == property.owner,
            "Only the property owner can update the price."
        );
        require(property.forSale, "Property is not for sale.");

        property.price = newPrice;

        emit PropertyUpdated(tokenId);
    }

    function putPropertyForSale(
        uint256 tokenId,
        uint256 price
    ) public whenNotPaused {
        Property storage property = properties[tokenId];

        require(
            msg.sender == property.owner,
            "Only the property owner can put the property for sale."
        );
        require(!property.forSale, "Property is already for sale.");

        property.price = price;
        property.forSale = true;
    }

    function withdrawProperty(uint256 tokenId) public whenNotPaused {
        Property storage property = properties[tokenId];

        require(
            msg.sender == property.owner,
            "Only the property owner can withdraw the property from sale."
        );
        require(property.forSale, "Property is not for sale.");

        property.forSale = false;

        emit PropertyWithdrawn(tokenId);
    }

    function getPropertyDetails(
        uint256 tokenId
    ) public view returns (Property memory) {
        return properties[tokenId];
    }
}
