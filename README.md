# Node Solar SDK

[![https://t.me/@nayiem](https://telegram.me/@nayiem)

A Promised NodeJS Module for connecting with the Solar v2 API

## Install via git

```
git clone https://github.com/solar-network/solar-js-sdk
cd solar-js-sdk
npm install

node index.js
```

index.js:

```
const solarApi = require("./../lib/dsolarApi");
const solarjs = require("solarjs");


(async () => {

  var alias = await solarApi.getAlias();

  console.log("Alias: " + data.alias);

})();
```

## Install via npm

```
npm install --save https://github.com/solar-network/solar-js-sdk

```
const solarApi = require("./../lib/dsolarApi");
const solarjs = require("solarjs");


(async () => {

  var alias = await solarApi.getAlias();

  console.log("Alias: " + data.alias);

})();
```

