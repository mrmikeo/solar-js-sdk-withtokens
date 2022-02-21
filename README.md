# Solar SDK

<p align="center">
    <img src="https://github.com/solar-network/solar-js-sdk/blob/master/banner.jpg" />
</p>


[![https://t.me/nayiem](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAC1JREFUWEft0EERAAAAAUH6lxbDZxU4s815PffjAAECBAgQIECAAAECBAgQIDAaPwAh6O5R/QAAAABJRU5ErkJggg==)]

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

