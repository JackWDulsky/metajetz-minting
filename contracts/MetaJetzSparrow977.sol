// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '@openzeppelin/contracts/finance/PaymentSplitter.sol';
import '@openzeppelin/contracts/utils/cryptography/MerkleProof.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/utils/Strings.sol';

// @author codingwithdidem
// @contact codingwithdidem@gmail.com

contract MetaJetzSparrow977 is
  ERC721,
  Ownable,
  ReentrancyGuard,
  PaymentSplitter
{
  using Strings for uint256;
  using Counters for Counters.Counter;

  bytes32 public root;

  address proxyRegistryAddress;

  uint256 public maxSupply = 4000;
  uint256 public ownerMaxSupply = 150;

  string public baseURI;
  string public notRevealedUriBase =
    'ipfs://QmVs7TYPpHZZ22ypir8FMZyTkvYiiEePBVAhWGtve8K8hS/'; // Done
  string public baseExtension = '.json';

  bool public paused = false;
  bool public revealed = false;
  bool public presaleM = false;
  bool public publicM = false;

  uint256 public presaleAmountLimit = 2;
  uint256 public publicSaleAmountLimit = 10;

  mapping(address => uint256) public _presaleClaimed;

  uint256 public _priceWhiteListSale = 35000000000000000; // 0.035 ETH
  uint256 public _pricePublicSale = 70000000000000000; // 0.07 ETH

  Counters.Counter private _tokenIds;

  uint256[] private _teamShares = [50, 50]; // 2 TEAM Wallets
  address[] private _team = [
    0x9781354709A3E0d7Bc3C0073EAd4c3900EEA8649,
    0xe1332D37221e9b806cC41e5dDC581563eF59E469
  ];

  constructor(
    string memory uri,
    bytes32 merkleroot,
    address _proxyRegistryAddress
  )
    ERC721('MetaJetzSparrow977', 'MS9')
    PaymentSplitter(_team, _teamShares) // Split the payment based on the teamshares percentages
    ReentrancyGuard() // A modifier that can prevent reentrancy during certain functions
  {
    root = merkleroot;
    proxyRegistryAddress = _proxyRegistryAddress;

    setBaseURI(uri);
  }

  function setBaseURI(string memory _tokenBaseURI) public onlyOwner {
    baseURI = _tokenBaseURI;
  }

  function _baseURI() internal view override returns (string memory) {
    return baseURI;
  }

  function reveal() public onlyOwner {
    revealed = true;
  }

  function setMerkleRoot(bytes32 merkleroot) public onlyOwner {
    root = merkleroot;
  }

  modifier onlyAccounts() {
    require(msg.sender == tx.origin, 'Not allowed origin');
    _;
  }

  modifier isValidMerkleProof(bytes32[] calldata _proof) {
    require(
      MerkleProof.verify(
        _proof,
        root,
        keccak256(abi.encodePacked(msg.sender))
      ) == true,
      'Not allowed origin'
    );
    _;
  }

  function togglePause() public onlyOwner {
    paused = !paused;
  }

  function togglePresale() public onlyOwner {
    presaleM = !presaleM;
  }

  function togglePublicSale() public onlyOwner {
    publicM = !publicM;
  }

  function changeOwnerMintAmount(uint256 newOwnerMaxSupply) public onlyOwner {
    ownerMaxSupply = newOwnerMaxSupply;
  }

  function changePreSalePrice(uint256 newPrice) public onlyOwner {
    _priceWhiteListSale = newPrice;
  }

  function changePublicSalePrice(uint256 newPrice) public onlyOwner {
    _pricePublicSale = newPrice;
  }

  function changePreSaleMintLimit(uint256 newAmount) public onlyOwner {
    presaleAmountLimit = newAmount;
  }

  function changePublicSaleMintLimit(uint256 newAmount) public onlyOwner {
    publicSaleAmountLimit = newAmount;
  }

  function mintOwner(uint256 _amount) external payable onlyOwner {
    require(!paused, 'MetaJetz Sparrow 977: Contract is paused');
    uint256 current = _tokenIds.current();
    require(
      current + _amount <= maxSupply,
      'MetaJetz Sparrow 977: Max supply exceeded'
    );
    require(0 <= msg.value, 'MetaJetz Sparrow 977: Not enough ethers sent');
    for (uint256 i = 0; i < _amount; i++) {
      mintInternal();
    }
  }

  function presaleMint(
    address account,
    uint256 _amount,
    bytes32[] calldata _proof
  ) external payable isValidMerkleProof(_proof) onlyAccounts {
    require(msg.sender == account, 'MetaJetz Sparrow 977: Not allowed');
    require(presaleM, 'MetaJetz Sparrow 977: Presale is OFF');
    require(!paused, 'MetaJetz Sparrow 977: Contract is paused');
    require(
      _amount <= presaleAmountLimit,
      'MetaJetz Sparrow 977: Presale limit exceeded with amount requested'
    );
    require(
      _presaleClaimed[msg.sender] + _amount <= presaleAmountLimit,
      'MetaJetz Sparrow 977: Presale limit exceeded with amount requested'
    );

    uint256 current = _tokenIds.current();

    require(
      current + _amount <= (maxSupply - ownerMaxSupply),
      'MetaJetz Sparrow 977: max supply exceeded'
    );
    require(
      _priceWhiteListSale * _amount <= msg.value,
      'MetaJetz Sparrow 977: Not enough ethers sent'
    );

    _presaleClaimed[msg.sender] += _amount;

    for (uint256 i = 0; i < _amount; i++) {
      mintInternal();
    }
  }

  function publicSaleMint(uint256 _amount) external payable onlyAccounts {
    require(publicM, 'MetaJetz Sparrow 977: Public Sale is OFF');
    require(!paused, 'MetaJetz Sparrow 977: Contract is Paused');
    require(_amount > 0, 'MetaJetz Sparrow 977: zero amount');

    uint256 current = _tokenIds.current();
    require(
      _amount <= publicSaleAmountLimit,
      'MetaJetz Sparrow 977: Public sale limit exceeded with amount requested'
    );
    require(
      _presaleClaimed[msg.sender] + _amount <= publicSaleAmountLimit,
      'MetaJetz Sparrow 977: Public sale limit exceeded with amount requested'
    );
    require(
      current + _amount <= (maxSupply - ownerMaxSupply),
      'MetaJetz Sparrow 977: Max supply exceeded'
    );
    require(
      _pricePublicSale * _amount <= msg.value,
      'MetaJetz Sparrow 977: Not enough ethers sent'
    );

    for (uint256 i = 0; i < _amount; i++) {
      mintInternal();
    }
  }

  function mintInternal() internal nonReentrant {
    _tokenIds.increment();

    uint256 tokenId = _tokenIds.current();
    _safeMint(msg.sender, tokenId);
  }

  function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(
      _exists(tokenId),
      'ERC721Metadata: URI query for nonexistent token'
    );
    if (revealed == false) {
      return
        string(
          abi.encodePacked(
            notRevealedUriBase,
            tokenId.toString(),
            baseExtension
          )
        );
    }

    string memory currentBaseURI = _baseURI();

    return
      bytes(currentBaseURI).length > 0
        ? string(
          abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension)
        )
        : '';
  }

  function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
    baseExtension = _newBaseExtension;
  }

  function setNotRevealedURIBase(string memory _notRevealedURIBase)
    public
    onlyOwner
  {
    notRevealedUriBase = _notRevealedURIBase;
  }

  function totalSupply() public view returns (uint256) {
    return _tokenIds.current();
  }

  /**
   * Override isApprovedForAll to whitelist user's OpenSea proxy accounts to enable gas-less listings.
   */
  function isApprovedForAll(address owner, address operator)
    public
    view
    override
    returns (bool)
  {
    // Whitelist OpenSea proxy contract for easy trading.
    ProxyRegistry proxyRegistry = ProxyRegistry(proxyRegistryAddress);
    if (address(proxyRegistry.proxies(owner)) == operator) {
      return true;
    }

    return super.isApprovedForAll(owner, operator);
  }
}

/**
  @title An OpenSea delegate proxy contract which we include for whitelisting.
  @author OpenSea
*/
contract OwnableDelegateProxy {

}

/**
  @title An OpenSea proxy registry contract which we include for whitelisting.
  @author OpenSea
*/
contract ProxyRegistry {
  mapping(address => OwnableDelegateProxy) public proxies;
}
