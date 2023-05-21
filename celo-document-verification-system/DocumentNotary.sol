// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DocumentNotary {
    struct Document {
        string documentHash;
        bool isNotarized;
        address owner;
        mapping(address => bool) signers;
        uint256 signerCount;
    }

    mapping(string => Document) public documents;
    mapping(address => bool) public notaries;

    modifier onlyOwner(string memory _documentHash) {
        require(
            msg.sender == documents[_documentHash].owner,
            "Not the document owner"
        );
        _;
    }

    modifier onlyNotary() {
        require(notaries[msg.sender], "Not a registered notary");
        _;
    }

    event DocumentAdded(string _documentHash, address indexed _owner);
    event DocumentNotarized(string _documentHash, address indexed _notary);
    event DocumentSigned(string _documentHash, address indexed _signer);

    constructor() {
        // The contract deployer is added as a notary by default
        notaries[msg.sender] = true;
    }

    function registerNotary(address _notary) public onlyNotary {
        notaries[_notary] = true;
    }

    function addDocument(string memory _documentHash) public {
        require(
            bytes(documents[_documentHash].documentHash).length == 0,
            "Document already exists"
        );

        Document storage doc = documents[_documentHash];
        doc.documentHash = _documentHash;
        doc.isNotarized = false;
        doc.owner = msg.sender;

        emit DocumentAdded(_documentHash, msg.sender);
    }

    function notarizeDocument(string memory _documentHash) public onlyNotary {
        require(
            !documents[_documentHash].isNotarized,
            "Document already notarized"
        );

        documents[_documentHash].isNotarized = true;

        emit DocumentNotarized(_documentHash, msg.sender);
    }

    function signDocument(
        string memory _documentHash
    ) public onlyOwner(_documentHash) {
        require(
            !documents[_documentHash].signers[msg.sender],
            "Already signed the document"
        );

        documents[_documentHash].signers[msg.sender] = true;
        documents[_documentHash].signerCount++;

        emit DocumentSigned(_documentHash, msg.sender);
    }

    function verifyDocument(
        string memory _documentHash,
        address _signer
    ) public view returns (bool, uint256) {
        return (
            documents[_documentHash].signers[_signer],
            documents[_documentHash].signerCount
        );
    }
}
