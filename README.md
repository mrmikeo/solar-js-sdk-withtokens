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

## Solar Api Methods (solarApi)

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
receiverAddress: Solar address to send to  
amount: Amount in solar units (ie, 1 SXP = 100000000 solar units)  
memo: Up to 255 characters which will be placed into VendorField  
passPhrase: Senders mnemonic passphrase  
secondPassphrse:  Senders second mnemonic passphrase (if enabled)  
feeOverride: Override default fee settings with new value.  Value is in solar units, ie 0.02SXP = 2000000  
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
page: (int, default 1) The number of the page that will be returned  
limit: (int, default 100) The number of resources per page  
id: (string, default null) The id number of the block to be retrieved  
height: (int, default null) The height of the block to be retrieved  
orderBy: (string: default 'timestamp:desc') The column by which the resources will be sorted  
The orderBy parameter supports the following values: id, height, previous_block, payload_hash, generator_public_key, timestamp  
**Returns**  
Array of block objects

## getBlockByHeight
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getBlockByID
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getLastBlock
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getTransactionsByBlockID
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## searchBlocks
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## listDelegates
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getDelegate
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getDelegateBlocks
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getDelegateVoters
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## searchDelegates
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getNodeConfig
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getNodeCryptoConfig
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getNodeFeeStats
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getNodeStatus
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getNodeSyncStatus
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getPeers
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getPeerByIP
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## createTransaction
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getTransactionByID
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## listTransactions
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## listUnconfirmedTransactions
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getUnconfirmedTransactionByID
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## searchTransactions
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getTransactionTypes
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getTransactionFees
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## listVotes
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getVoteByID
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## listWallets
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getWalletByID
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getWalletBalance
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getWalletTransactions
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getWalletReceivedTransactions
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getWalletSentTransactions
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getWalletVotes
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## getTopWallets
**Method**  
solarApi.  
**Inputs**  

**Returns**  


## searchWallets
**Method**  
solarApi.  
**Inputs**  

**Returns**  




## Solar SLP1 Api Methods (solarSlp1)
