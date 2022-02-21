# Solar SDK

<p align="center">
    <img src="https://github.com/solar-network/solar-js-sdk/blob/master/banner.jpg" />
</p>


[![https://t.me/nayiem](https://cdn4.telesco.pe/file/Z7xOQJeJtiMmp0Q0XtSzGhsauqsAW74TQodQcKNH8tjiEWLA8q7PAuNbWOSWQHvO9DJ9gncyxh8bcliwZZPjgqMl9thoSKt8MFTImVqhACU0-VwlCp__DJX95caaD6f0_55UC4DwLkICrDXGFGNlCLfXw3inPVIFigPaPL7bnnkrBxaPrCL7acmqrt6JfwEOvq369L_-thrbcQ0CNA5tb8Ev3HlFdIpoQ4ThH1BpnidH_jRbntEeTyJGVFXToVZG_H5viJM5YsORoFEbxvwJ_JazhhA7d0pv8PLRKIm4hMmjOak4CORwbqk5qx9FFt1e8vVUNeq9R7Regz9GtbcVuw.jpg)]

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

