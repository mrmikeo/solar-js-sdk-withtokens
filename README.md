# Solar SDK

<p align="center">
    <img src="https://github.com/solar-network/solar-js-sdk/blob/master/banner.jpg" />
</p>


[Telegram](https://t.me/nayiem)

A Promised NodeJS Module for connecting with the Solar v2 API


## Install via npm

```
npm install --save https://github.com/solar-network/solar-js-sdk

```

## Example Code

```
const solarSdk = require("solar-js-sdk");

const solarApi = new solarSdk.solarApi('http://65.21.252.34:6003/api');
const solarSlp1 = new solarSdk.solarSlp1Api(solarApi, 'https://slp.testnet.sh/api');

(async () => {

	  var blockheight = await solarApi.getBlockHeight();

	  console.log("BlockHeight: " + blockheight);


	  var tokens = await solarSlp1.listTokens();

	  console.log(tokens);



})();
```

Jump To [solarApi Methods](#solar-api-methods-solarapi)  
Jump To [solarSlp1 Methods](#solar-slp1-api-methods-solarslp1)  
Jump To [solarSlp2 Methods](#solar-slp2-api-methods-solarslp2)  
Jump To [Common JSON Objects](#common-json-objects)  

# Solar Api Methods (solarApi)

## getNewAddress
**Method**  
solarApi.getNewAddress()

**Returns**  
New Address Object:
```
{
	recipientId: "*address*",
	pubkey: "*public key*",
	privkey: "*private key*",
	mnemonic: "*mnemonic phrase*"
}
```

## validateAddress
**Method**  
solarApi.validateAddress(address)

**Inputs**  
address: Solar address to validate

**Returns**  
true, false, or error (false)

## buildTransaction
**Method**  
solarApi.buildTransaction(receiverAddress, amount, memo, passPhrase, secondPassphrase = null, feeOverride = null)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|receiverAddress|string|Solar address to send to  |
|amount|int|Amount in solar units (ie, 1 SXP = 100000000 solar units)  |
|memo|string|Up to 255 characters which will be placed into VendorField  |
|passPhrase|string|Senders mnemonic passphrase  |
|secondPassphrse|string|Senders second mnemonic passphrase (if enabled)  |
|feeOverride|int|Override default fee settings with new value.  Value is in solar units, ie 0.02SXP = 2000000|

**Returns**  
signed transaction object 

## getApiUrl
**Method**  
solarApi.getApiUrl()

**Returns**  
Current endpoint url, such as "https://sxp.mainnet.sh/api"

## getBlockChain
**Method**  
solarApi.getBlockChain()

**Returns**  
General blockchain information:
```
{
  "data":{
    "block":{
      "height":569492,
        "id":"6e11a01f00dcee07ee1cee93a5cbdc6d76b744307d283bdfd20ad60afd7dd07a"
      },
    "supply":"42567693025000000"
  }
}
```

## listBlocks
**Method**  
solarApi.listBlocks(page, limit, id, height, orderBy)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|page|int|(default 1) The number of the page that will be returned|
|limit|int|(default 100) The number of resources per page|
|id|string|(default null) The id number of the block to be retrieved|
|height|int|(default null) The height of the block to be retrieved|
|orderBy|string|(default 'timestamp:desc') The column by which the resources will be sorted|

The orderBy parameter supports the following values: id, height, previous_block, payload_hash, generator_public_key, timestamp

**Returns**  
Array of block objects

## getBlockByHeight
**Method**  
solarApi.getBlockByHeight(height)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|height|int|block height to retrieve information for|

**Returns**  
block object

## getBlockByID
**Method**  
solarApi.getBlockByID(id)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|id|string|block id to retrieve information for|

**Returns**  
block object

## getLastBlock
**Method**  
solarApi.getLastBlock()

**Returns**  
block object of last created block

## getTransactionsByBlockID
**Method**  
solarApi.getTransactionsByBlockID(id)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|id|string|block id to retrieve transaction list from|

**Returns**  
array of transaction objects

## searchBlocks
**Method**  
solarApi.searchBlocks(page, limit, body)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|page|int|The number of the page that will be returned.|
|limit|int|The number of resources per page.|

body is a json object which can contain any of the following:

|Name|Type|Description|
|----|-----|-------| 
|id|string|ID of the block.|
|version|int|Version of the block.|
|previousBlock|int|ID of the previous block.|
|payloadHash|string|Hash of the payload.|
|generatorPublicKey|string|Public key of the forger who forged the block.|
|blockSignature|string|Signature of the block.|
|timestamp|object|Timestamp range for block creation time. Measured in number of seconds since the genesis block.|
|timestamp.from|int|Block creation time must be bigger or equal to this.|
|timestamp.to|int|Block creation time must be smaller or equal to this.|
|height|object|Height range of the block. The genesis block has height 1.|
|height.from|int|Block height must be bigger or equal to this.|
|height.to|int|Block height must be smaller or equal to this.|
|numberOfTransactions|object|Ranage for number of transactions contained in the block.|
|numberOfTransactions.from|int|The number of transactions in the block must be bigger or equal to this.  |
|numberOfTransactions.to|int|The number of transactions in the block must be smaller or equal to this.  |
|totalAmount|object|Range for total amount transacted in the block, including block reward, transaction fees and transactions' amounts. In satoshi. |
|totalAmount.from|int|Block total amount must be bigger or equal to this.  |
|totalAmount.to|int|Block total amount must be smaller or equal to this.  |
|totalFee|object|Range for the sum of all transactions' fees in the block. In satoshi.  |
|totalFee.from|int|The sum of all transactions' fees in the block must be bigger or equal to this.  |
|totalFee.to|int|The sum of all transactions' fees in the block must be smaller or equal to this.  |
|reward|object|Range for block reward. In satoshi.  |
|reward.from|int|Block reward must be bigger or equal to this.  |
|reward.to|int|Block reward must be smaller or equal to this.  |
|payloadLength|object|Range for block payload length. In bytes.  |
|payloadLength.from|int|Block payload length must be bigger or equal to this.  |
|payloadLength.to|int|Block payload length must be smaller or equal to this.  |
            
**Returns**  
array of matching block objects

## listDelegates
**Method**  
solarApi.listDelegates(page, limit, orderBy)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|page|int|The number of the page that will be returned.  |
|limit|int|The number of resources per page.  |
|orderBy|string|The column by which the resources will be sorted.|

orderBy valid fields:  username, rank, votes

**Returns**  
array of delegate objects

## getDelegate
**Method**  
solarApi.getDelegate(identifier)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|identifier|string|{username|address|publicKey}|

**Returns**  
delegate object

## getDelegateBlocks
**Method**  
solarApi.getDelegateBlocks(identifier, page, limit)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|page|int|The number of the page that will be returned.  |
|limit|int|The number of resources per page.  |
|identifier|string|(REQUIRED) {username|address|publicKey}|
            
**Returns**  
array of matching block objects

## getDelegateVoters
**Method**  
solarApi.getDelegateVoters = function(identifier, page, limit)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|page|int|The number of the page that will be returned.  |
|limit|int|The number of resources per page.  |
|identifier|string|(REQUIRED) {username|address|publicKey}|

**Returns**  
array of voter objects

## searchDelegates
**Method**  
solarApi.searchDelegates(page, limit, body)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|page|int|The number of the page that will be returned.|
|limit|int|The number of resources per page.|

body is a json object which can contain any of the following:

|Name|Type|Description|
|----|-----|-------| 
|address|string|The address of the delegate to be retrieved.|
|publicKey|string|The public key of the delegate to be retrieved.|
|username|string|The username of the delegate to be retrieved.|
|usernames|array|The usernames of the delegates to be retrieved.|
|approval|object|The approval rate of the delegates to be retrieved.|
|approval.from|float|The lower limit of the approval rate.|
|approval.to|float|The upper limit of the approval rate.|
|forgedFees|object|The forged fees of the delegates to be retrieved.|
|forgedFees.from|int|The lower limit of the forged fees.|
|forgedFees.to|int|The upper limit of the forged fees.|
|forgedRewards|object|The forged rewards of the delegates to be retrieved.|
|forgedRewards.from|int|The lower limit of the forged rewards.|
|forgedRewards.to|int|The upper limit of the forged rewards.|
|forgedTotal|object|The forged total of the delegates to be retrieved.|
|forgedTotal.from|int|The lower limit of the forged total.|
|forgedTotal.to|int|The upper limit of the forged total.|
|producedBlocks|object|The produced blocks count of the delegates to be retrieved.|
|producedBlocks.from|int|The lower limit of the produced blocks count.|
|producedBlocks.to|int|The upper limit of the produced blocks count.|
|voteBalance|object|The vote balance of the delegates to be retrieved.|
|voteBalance.from|int|The lower limit of the vote balance.|
|voteBalance.to|int|The upper limit of the vote balance.|
            
**Returns**  
array of matching delegate objects

## getNodeConfig
**Method**  
solarApi.getNodeConfig()

**Returns**  
node configuration object

## getNodeCryptoConfig
**Method**  
solarApi.getNodeCryptoConfig

**Returns**  
node crypto configuration object

## getNodeFeeStats
**Method**  
solarApi..getNodeFeeStats()

**Returns**  
fee statistics object

## getNodeStatus
**Method**  
solarApi.getNodeStatus()

**Returns**  
node status object

## getNodeSyncStatus
**Method**  
solarApi.getNodeSyncStatus()

**Returns**  
node sync status information

## getPeers
**Method**  
solarApi.getPeers(page, limit, port, status, os, version, orderBy)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|page|int|The number of the page that will be returned.|
|limit|int|The number of resources per page.|
|port|int|The port by which the resources will be filtered.|
|status|string|The status by which the resources will be filtered.|
|os|string|The operating system by which the resources will be filtered.|
|version|string|The node version by which the resources will be filtered.|
|orderBy|string|The column by which the resources will be sorted.|
            
**Returns**  
array of peer objects

## getPeerByIP
**Method**  
solarApi.getPeerByIP(ip)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|ip|string|IP address of peer|

**Returns**  
peer object

## createTransaction
**Method**  
solarApi.createTransaction(transactions)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|transactions|array|Array of signed transaction objects to send for confirmation|

**Returns**  
transaction result object

## getTransactionByID
**Method**  
solarApi.getTransactionByID(id)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|id|string|Transaction ID to retrieve|

**Returns**  
transaction object

## listTransactions
**Method**  
solarApi.listTransactions(page, limit, type, blockId, id, orderBy)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|page|int|The number of the page that will be returned.|
|limit|int|The number of resources per page.|
|type|int|The transaction type to be retrieved.|
|blockId|int|The block id to be retrieved.|
|id|int|The transaction id to be retrieved.|
|orderBy|string|The column by which the resources will be sorted.|
            
The orderBy parameter supports the following values: id, block_id, type, version, timestamp, amount, fee
            
**Returns**  
array of matching transaction objects

## listUnconfirmedTransactions
**Method**  
solarApi.listUnconfirmedTransactions(page, limit)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|page|int|The number of the page that will be returned.|
|limit|int|The number of resources per page.|
            
**Returns**  
array of unconfirmed transaction objects

## getUnconfirmedTransactionByID
**Method**  
solarApi.getUnconfirmedTransactionByID(id)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|id|string|The transaction id.|

**Returns**  
transaction object

## searchTransactions
**Method**  
solarApi.searchTransactions(page, limit, body)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|page|int|The number of the page that will be returned.|
|limit|int|The number of resources per page.|

body is a json object containing any of the following:

|Name|Type|Description|
|----|-----|-------| 
|orderBy|string|The field in which to order the results|
|id|string|Transaction id|
|blockId|string|Block id|
|type|int|Transaction type|
|version|int|Transaction version|
|senderPublicKey|string|Sender public key|
|senderId|string|Sender address|
|recipientId|string|Recipient address|
|ownerId|string|...|
|vendorFieldHex|string|...|
|timestamp|object|Timestamp|
|timestamp.from|int|Seconds in epoch time|
|timestamp.to|int|Seconds in epoch time|
|amount|object|Amount|
|amount.from|int|Amount in satoshis|
|amount.to|int|Amount in satoshis|
|fee|object|Fee|
|fee.from|int|Fee in satoshis|
|fee.to|int|Fee in satoshis|
            
**Returns**  
array of transaction objects

## getTransactionTypes
**Method**  
solarApi.getTransactionTypes()

**Returns**  
list of available transaction types

## getTransactionFees
**Method**  
solarApi.getTransactionFees()

**Returns**  
List of fees incurred for each type of transaction

## listVotes
**Method**  
solarApi.listVotes(page, limit, orderBy)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|page|int|The number of the page that will be returned.|
|limit|int|The number of resources per page.|
|orderBy|string|The column by which the resources will be sorted.|
            
**Returns**  
array of vote transactions

## getVoteByID
**Method**  
solarApi.getVoteByID(id)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|id|string|Transaction id of the vote to be retrieved|

**Returns**  
vote transaction object

## listWallets
**Method**  
solarApi.listWallets(page, limit, orderBy)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|page|int|The number of the page that will be returned.|
|limit|int|The number of resources per page.|
|orderBy|string|The column by which the resources will be sorted.|
      
The orderBy parameter supports the following values: address, balance, username, vote
 
**Returns**  
array of wallet objects

## getWalletByID
**Method**  
solarApi.getWalletByID(id)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|id|string|Address or public key of wallet|

**Returns**  
wallet information object

## getWalletBalance
**Method**  
solarApi.getWalletBalance(id)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|id|string|Address or public key of wallet|

**Returns**  
Balance in human readable form (ie. NOT in satoshis, but in decimal format)

## getWalletTransactions
**Method**  
solarApi.getWalletTransactions(id, page, limit)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|id|string|(REQUIRED) The identifier of the wallet to be retrieved (either publicKey or address)|
|page|int|The number of the page that will be returned.|
|limit|int|The number of resources per page.|
            
**Returns**  
Array of transaction objects

## getWalletReceivedTransactions
**Method**  
solarApi.getWalletReceivedTransactions(id, page, limit)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|id|string|(REQUIRED) The identifier of the wallet to be retrieved (either publicKey or address)|
|page|int|The number of the page that will be returned.|
|limit|int|The number of resources per page.|
            
**Returns**  
Array of transaction objects

## getWalletSentTransactions
**Method**  
solarApi.getWalletSentTransactions(id, page, limit)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|id|string|(REQUIRED) The identifier of the wallet to be retrieved (either publicKey or address)
|page|int|The number of the page that will be returned.|
|limit|int|The number of resources per page.|
            
**Returns**  
Array of transaction objects

## getWalletVotes
**Method**  
solarApi.getWalletVotes(id, page, limit)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|id|string|(REQUIRED) The identifier of the wallet to be retrieved (either publicKey or address)|
|page|int|The number of the page that will be returned.|
|limit|int|The number of resources per page.|
            
**Returns**  
Array of vote transaction objects

## getTopWallets
**Method**  
solarApi.getTopWallets(page, limit)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|page|int|The number of the page that will be returned.|
|limit|int|The number of resources per page.|
            
**Returns**  
array of wallet objects

## searchWallets
**Method**  
solarApi.searchWallets(page, limit, body)

**Inputs**  
|Name|Type|Description|
|----|-----|-------| 
|page|int|The number of the page that will be returned.|
|limit|int|The number of resources per page.|

** body is a json object

|Name|Type|Description|
|----|-----|-------| 
|address|string|Address to search|
|publicKey|string|public key to search|
|secondPublicKey|string|Second public key|
|vote|string|Voting for which delegate|
|username|string|Username, if set|
|balance|object|Balance|
|balance.from|int|Amount in satoshis|
|balance.to|int|Amount in satoshis|
|votebalance|object|Amount|
|votebalance.from|int|Amount in satoshis|
|votebalance.to|int|Amount in satoshis|
            
**Returns**  
Array of wallet objects



## Solar SLP1 Api Methods (solarSlp1)

## getStatus
**Method**  
solarSlp1.getStatus()
      
**Returns**  
Status object of connected node


## getPeerInfo
**Method**  
solarSlp1.getPeerInfo()
       
**Returns**  
Peer information object of connected node

## listTokens
**Method**  
solarSlp1.getPeerInfo()
       
**Inputs**  


**Returns**  
Peer information object of connected node

## getToken
**Method**  
solarSlp1.
       
**Inputs**  


**Returns**  
Peer information object of connected node

## getTokenWithMeta
**Method**  
solarSlp1.
       
**Inputs**  


**Returns**  
Peer information object of connected node

## getTokenIdByTxid
**Method**  
solarSlp1.
       
**Inputs**  


**Returns**  
Peer information object of connected node

## getTokensByOwner
**Method**  
solarSlp1.
       
**Inputs**  


**Returns**  
Peer information object of connected node

## listAddresses
**Method**  
solarSlp1.
       
**Inputs**  


**Returns**  
Peer information object of connected node

## getAddress
**Method**  
solarSlp1.
       
**Inputs**  


**Returns**  
Peer information object of connected node

## getAddressesByTokenId
**Method**  
solarSlp1.
       
**Inputs**  


**Returns**  
Peer information object of connected node

## getBalance
**Method**  
solarSlp1.
       
**Inputs**  


**Returns**  
Peer information object of connected node

## listTransactions
**Method**  
solarSlp1.
       
**Inputs**  


**Returns**  
Peer information object of connected node

## getTransaction
**Method**  
solarSlp1.
       
**Inputs**  


**Returns**  
Peer information object of connected node

## listTokenTransactions
**Method**  
solarSlp1.
       
**Inputs**  


**Returns**  
Peer information object of connected node

## listTokenAddressTransactions
**Method**  
solarSlp1.
       
**Inputs**  


**Returns**  
Peer information object of connected node

## generateToken
**Method**  
solarSlp1.
       
**Inputs**  


**Returns**  
Peer information object of connected node

## mintToken
**Method**  
solarSlp1.
       
**Inputs**  


**Returns**  
Peer information object of connected node

## burnToken
**Method**  
solarSlp1.
       
**Inputs**  


**Returns**  
Peer information object of connected node

## sendToken
**Method**  
solarSlp1.
       
**Inputs**  


**Returns**  
Peer information object of connected node

## pauseToken
**Method**  
solarSlp1.
       
**Inputs**  


**Returns**  
Peer information object of connected node

## resumeToken
**Method**  
solarSlp1.
       
**Inputs**  


**Returns**  
Peer information object of connected node

## newTokenOwner
**Method**  
solarSlp1.
       
**Inputs**  


**Returns**  
Peer information object of connected node




# Solar SLP2 Api Methods (solarSlp2)




# Common JSON Object Types

## Block
```
{	
	id:"6e3784bed06b5c1581d5b78787ac587e1396ff58a2acef4d4b713f50ccea4cbe"
	version:0
	height:569534
	previous:"73b17a8a6043798b47df07780466f992727753f4b9091149c16e6c8b2bdea97a"
	forged: {
		reward:"1162500000"
		fee:"0"
		amount:"0"
		total:"1162500000"
	}
	payload: {
		hash:"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
		length:0
	}
	generator: {	
		username:"beta106"
		address:"D9DGVfuoyLWkG7h2iH8HnWM3kFTd28H3cp"
		publicKey:"021ea11edbe1d10af043c4bb17506d4ed623ab05eb042d6ba40c8da06e5cbd7405"
	}
	signature:"3044022066a163bfaa2385cf86c6cf8adbabf4126ea77cb66feb761430a52a91928ff2c4022040e09563400f54f8a69136f842567d6c646d4d87a9d9fa7e428583c63e3985b4"
	confirmations:1
	transactions:0
	timestamp: {
		epoch:5205688
		unix:1645423288
		human:"2022-02-21T06:01:28.000Z"
	}
}
```

