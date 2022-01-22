/*
 * A Promised NodeJS Module for connecting with the Solar SSLP API
 */

const request = require("request");
const Big = require('big.js');
const solarApi = require("./../lib/dsolarApi");
const solarjs = require("solarjs");
const sapi = new solarApi.default();

var solarApi = /** @class */ (function() {

    function solarApi(apiURL) {
        if (apiURL === void 0)
            this.apiURL = 'https://sxp.mainnet.sh/api/v2';
        else
            this.apiURL = apiURL;

        return this;
    };

    solarApi.prototype.getApiUrl = function() {

        return this.apiURL;

    };

    /* Status */

    solarApi.prototype.getStatus = function() {

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/status', { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    solarApi.prototype.getPeerInfo = function() {

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/peerinfo', { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    /* Tokens */

    solarApi.prototype.listTokens = function(limit = 100, page = 1) {

        var querystring = "";

        if (page !== undefined) querystring += 'page=' + page + "&";
        if (limit !== undefined) querystring += 'limit=' + limit + "&";

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/tokens?' + querystring, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    solarApi.prototype.getToken = function(tokenid) {

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/token/' + tokenid, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };


    solarApi.prototype.getTokenWithMeta = function(tokenid) {

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/tokenWithMeta/' + tokenid, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    solarApi.prototype.getTokenIdByTxid = function(transactionid) {

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/transaction/' + transactionid, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }

                if (body && body[0] && body[0].transactionDetails.tokenIdHex) {

                    var tokenid = body[0].transactionDetails.tokenIdHex;
                    resolve({ tokenId: tokenid });


                } else if (body && body[0] && body[0].invalidReason) {

                    resolve({ error: body[0].invalidReason });

                } else {
                    resolve({});
                }

            });

        });

    };

    solarApi.prototype.getTokensByOwner = function(address = '', limit = 100, page = 1) {

        var querystring = "";

        if (page !== undefined) querystring += 'page=' + page + "&";
        if (limit !== undefined) querystring += 'limit=' + limit + "&";

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/tokensByOwner/' + address + '?' + querystring, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    /* Addresses */

    solarApi.prototype.listAddresses = function(limit = 100, page = 1) {

        var querystring = "";

        if (page !== undefined) querystring += 'page=' + page + "&";
        if (limit !== undefined) querystring += 'limit=' + limit + "&";

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/addresses?' + querystring, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    solarApi.prototype.getAddress = function(address) {

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/address/' + address, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    solarApi.prototype.getAddressesByTokenId = function(tokenid = '', limit = 100, page = 1) {

        var querystring = "";

        if (page !== undefined) querystring += 'page=' + page + "&";
        if (limit !== undefined) querystring += 'limit=' + limit + "&";

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/addressesByTokenId/' + tokenid + '?' + querystring, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    /* Balance */

    solarApi.prototype.getBalance = function(tokenid = '', address = '') {

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/balance/' + tokenid + '/' + address, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    /* Transactions */

    solarApi.prototype.listTransactions = function(limit = 100, page = 1) {

        var querystring = "";

        if (page !== undefined) querystring += 'page=' + page + "&";
        if (limit !== undefined) querystring += 'limit=' + limit + "&";

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/transactions?' + querystring, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    solarApi.prototype.getTransaction = function(transactionid = '') {

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/transaction/' + transactionid, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    solarApi.prototype.listTokenTransactions = function(tokenid = '', limit = 100, page = 1) {

        var querystring = "";

        if (page !== undefined) querystring += 'page=' + page + "&";
        if (limit !== undefined) querystring += 'limit=' + limit + "&";

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/transactions/' + tokenid + '?' + querystring, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    solarApi.prototype.listTokenAddressTransactions = function(tokenid = '', address = '', limit = 100, page = 1) {

        var querystring = "";

        if (page !== undefined) querystring += 'page=' + page + "&";
        if (limit !== undefined) querystring += 'limit=' + limit + "&";

        return new Promise((resolve, reject) => {

            request.get(this.apiURL + '/transactions/' + tokenid + '/' + address + '?' + querystring, { json: true }, function(error, response, body) {

                if (error) {
                    reject(error);
                    return;
                }
                resolve(body);

            });

        });

    };

    solarApi.prototype.generateToken = function(passPhrase = '', secondPassphrase = null, tokenName = '', tokenTicker = '', tokenQuantity = 0, tokenDecimals = 8, tokenUri = '', tokenNote = '', tokenPausable = false, tokenMintable = false) {

        return new Promise((resolve, reject) => {

            (async() => {

                var error = false;

                try {

                    var name = tokenName;
                    var ticker = tokenTicker;
                    var quantity = Big(tokenQuantity);
                    var decimals = parseInt(tokenDecimals);
                    var uri = tokenUri;
                    var note = tokenNote;
                    var pausable = tokenPausable;
                    var mintable = tokenMintable;

                    if (!name || !ticker || !quantity || !decimals)
                        error = 'Missing required fields'

                    var maxqt = new Big('10000000000000000000');

                    try {

                        var testnumber = new Big(contractData.qt);

                        if (quantity.lt(1) || quantity.gt(maxqt)) {
                            // Quantity cannot be less than one and must me an integer
                            error = 'Quantity cannot be less than one and must me an integer';
                        }


                    } catch (e) {

                        // Quantity is not a number
                        error = 'Quantity is not a number';

                    }

                    try {

                        var testdigits = new Big(tokenDecimals);

                    } catch (e) {

                        // Digits is not a number
                        error = 'Decimals must be a number';

                    }


                    if (!tokenDecimals || testdigits.lt(0) || testdigits.gt(8)) {
                        // Decimal formatting issue.  Should be a number between 0 and 8
                        error = 'Decimal formatting issue.  Should be a number between 0 and 8';
                    }

                    if (ticker.length < 3 || ticker.length > 8) {

                        // Symbol (Ticker) size issue.  Should be a string between 3 and 8 characters
                        error = 'Symbol length issue.  Should be a string between 3 and 8 characters';

                    }

                    if (name.length < 3 || name.length > 24) {

                        // Token name size issue.  Should be a string between 3 and 24 characters
                        error = 'Token name length issue.  Should be a string between 3 and 24 characters';

                    }

                    if (uri && uri.length > 180) {

                        // Document Uri size issue.  Should be a string no more than 32 characters, or it can be empty
                        error = 'Token document uri too long.  Should be empty or no more than 32 characters';

                    }

                    if (note && note.length > 180) {

                        // Note size issue.  Should be a string no more than 32 characters, or it can be empty
                        error = 'Note field too long.  Should be empty or no more than 32 characters';

                    }

                    if (error == false) {

                        var expon = new Big('1e' + decimals);
                        var rawquantity = new Big(quantity).times(expon).toFixed(0);

                        var jsontemplate = { "sslp1": { "tp": "GENESIS", "na": name, "sy": ticker, "de": decimals.toString(), "qt": rawquantity, "du": uri, "no": note, "pa": pausable, "mi": mintable } };
                        var body = JSON.stringify(jsontemplate);

                        var toAddress = 'DRYpgcx9dB7rMFi3ANDQUjmHBYPvC3w9zN'; // SSLP-1 Master Address
                        var feeOverride = 2000000; // 0.02 SXP
                        var solarAmount = 1; // 0.00000001 SXP
                        var vendorField = body;
                        var version = null; // Not typically used

                        var transaction = solarjs.transaction.createTransaction(toAddress, solarAmount, vendorField, passPhrase, secondPassphrase, version, feeOverride);

                        var transactionId = transaction.id;

                        var sendResult = await sapi.createTransaction([transaction]);

                        if (sendResult.data && sendResult.data.accept[0] == transactionId) {
                            // Successful Transaction
                            var txid = transactionId;
                            var error = null;

                            resolve({ success: true, txid: txid, message: '' });
                        } else {
                            // Failed Transaction
                            var txid = null;

                            if (sendResult.errors)
                                var error = sendResult.errors[transactionId][0].message;
                            else
                                var error = 'Unknown Error';

                            resolve({ success: false, txid: null, message: error });
                        }

                    } else {
                        resolve({ success: false, txid: null, message: error });
                    }

                } catch (e) {
                    resolve({ success: false, txid: null, message: e });
                }

            })();

        });

    };

    solarApi.prototype.mintToken = function(passPhrase = '', secondPassphrase = null, tokenId = '', mintQuantity = 0, transactionNote = '') {

        return new Promise((resolve, reject) => {

            (async() => {

                var error = false;

                try {

                    ////
                    //  Get token info

                    var tokeninfo = await this.getToken(tokenId);

                    if (!tokenId)
                        error = 'Missing required fields';

                    if (tokenId == '')
                        error = 'Invalid Data';

                    if (tokeninfo[0] && tokeninfo[0].tokenDetails) {
                        var decimals = tokeninfo[0].tokenDetails.decimals;
                        //var mintable = tokeninfo[0].tokenDetails.mintable;
                        var mintable = true;

                        if (mintable == false) {
                            error = "Token not mintable";
                        }
                    } else {
                        error = 'Token not found';
                    }

                    if (error == false) {

                        var expon = new Big('1e' + decimals);
                        var rawquantity = new Big(mintQuantity).times(expon).toFixed(0);

                        var jsontemplate = { "sslp1": { "tp": "MINT", "id": tokenId, "qt": rawquantity, "no": transactionNote } };

                        var body = JSON.stringify(jsontemplate);

                        var toAddress = 'SXPJgWWdxrUqn7hnrtMWbVh7wgz2tP6hnh'; // SSLP-1 Master Address
                        var feeOverride = 2000000; // 0.02 SXP
                        var solarAmount = 1; // 0.00000001 SXP
                        var vendorField = body;
                        var version = null; // Not typically used

                        var transaction = solarjs.transaction.createTransaction(toAddress, solarAmount, vendorField, passPhrase, secondPassphrase, version, feeOverride);

                        var transactionId = transaction.id;

                        var sendResult = await sapi.createTransaction([transaction]);

                        if (sendResult.data && sendResult.data.accept[0] == transactionId) {
                            // Successful Transaction
                            var txid = transactionId;
                            var error = null;

                            resolve({ success: true, txid: txid, message: '' });
                        } else {
                            // Failed Transaction
                            var txid = null;

                            if (sendResult.errors)
                                var error = sendResult.errors[transactionId][0].message;
                            else
                                var error = 'Unknown Error';

                            resolve({ success: false, txid: null, message: error });
                        }

                    } else {
                        resolve({ success: false, txid: null, message: error });
                    }

                } catch (e) {
                    resolve({ success: false, txid: null, message: e });
                }

            })();

        });

    };

    solarApi.prototype.burnToken = function(passPhrase = '', secondPassphrase = null, tokenId = '', burnQuantity = 0, transactionNote = '') {

        return new Promise((resolve, reject) => {

            (async() => {

                var error = false;

                try {

                    ////
                    //  Get token info

                    var tokeninfo = await this.getToken(tokenId);

                    if (!tokenId)
                        error = 'Missing required fields';

                    if (tokenId == '')
                        error = 'Invalid Data';

                    if (tokeninfo[0] && tokeninfo[0].tokenDetails) {
                        var decimals = tokeninfo[0].tokenDetails.decimals;
                    } else {
                        error = 'Token not found';
                    }

                    if (error == false) {

                        var expon = new Big('1e' + decimals);
                        var rawquantity = new Big(mintQuantity).times(expon).toFixed(0);

                        var jsontemplate = { "sslp1": { "tp": "BURN", "id": tokenId, "qt": rawquantity, "no": transactionNote } };

                        var body = JSON.stringify(jsontemplate);

                        var toAddress = 'SXPJgWWdxrUqn7hnrtMWbVh7wgz2tP6hnh'; // SSLP-1 Master Address
                        var feeOverride = 2000000; // 0.02 SXP
                        var solarAmount = 1; // 0.00000001 SXP
                        var vendorField = body;
                        var version = null; // Not typically used

                        var transaction = solarjs.transaction.createTransaction(toAddress, solarAmount, vendorField, passPhrase, secondPassphrase, version, feeOverride);

                        var transactionId = transaction.id;

                        var sendResult = await sapi.createTransaction([transaction]);

                        if (sendResult.data && sendResult.data.accept[0] == transactionId) {
                            // Successful Transaction
                            var txid = transactionId;
                            var error = null;

                            resolve({ success: true, txid: txid, message: '' });
                        } else {
                            // Failed Transaction
                            var txid = null;

                            if (sendResult.errors)
                                var error = sendResult.errors[transactionId][0].message;
                            else
                                var error = 'Unknown Error';

                            resolve({ success: false, txid: null, message: error });
                        }

                    } else {
                        resolve({ success: false, txid: null, message: error });
                    }

                } catch (e) {
                    resolve({ success: false, txid: null, message: e });
                }

            })();

        });

    };

    solarApi.prototype.sendToken = function(passPhrase = '', secondPassphrase = null, tokenId = '', toAddress = '', sendQuantity = 0, transactionNote = '') {

        return new Promise((resolve, reject) => {

            (async() => {

                var error = false;

                try {

                    ////
                    //  Get token info

                    var tokeninfo = await this.getToken(tokenId);

                    if (!tokenId)
                        error = 'Missing required fields';

                    if (tokenId == '')
                        error = 'Invalid Data';

                    if (tokeninfo[0] && tokeninfo[0].tokenDetails) {
                        var decimals = tokeninfo[0].tokenDetails.decimals;

                        var senderkeys = solarjs.crypto.getKeys(passPhrase);
                        var senderpublickey = senderkeys.publicKey;
                        var senderaddress = solarjs.crypto.getAddress(senderpublickey);

                        var senderBalance = await this.getBalance(tokenId, senderaddress);

                        if (Big(senderBalance).lt(sendQuantity)) {
                            error = 'Not enough balance';
                        }

                    } else {
                        error = 'Token not found';
                    }

                    if (error == false) {

                        var expon = new Big('1e' + decimals);
                        var rawquantity = new Big(sendQuantity).times(expon).toFixed(0);

                        var jsontemplate = { "sslp1": { "tp": "SEND", "id": tokenId, "qt": rawquantity, "no": transactionNote } };

                        var body = JSON.stringify(jsontemplate);

                        var feeOverride = 2000000; // 0.02 SXP
                        var solarAmount = 1; // 0.00000001 SXP
                        var vendorField = body;
                        var version = null; // Not typically used

                        var transaction = solarjs.transaction.createTransaction(toAddress, solarAmount, vendorField, passPhrase, secondPassphrase, version, feeOverride);

                        var transactionId = transaction.id;

                        var sendResult = await sapi.createTransaction([transaction]);

                        if (sendResult.data && sendResult.data.accept[0] == transactionId) {
                            // Successful Transaction
                            var txid = transactionId;
                            var error = null;

                            resolve({ success: true, txid: txid, message: '' });
                        } else {
                            // Failed Transaction
                            var txid = null;

                            if (sendResult.errors)
                                var error = sendResult.errors[transactionId][0].message;
                            else
                                var error = 'Unknown Error';

                            resolve({ success: false, txid: null, message: error });
                        }

                    } else {
                        resolve({ success: false, txid: null, message: error });
                    }

                } catch (e) {
                    resolve({ success: false, txid: null, message: e });
                }

            })();

        });

    };

    solarApi.prototype.pauseToken = function(passPhrase = '', secondPassphrase = null, tokenId = '', transactionNote = '') {

        return new Promise((resolve, reject) => {

            (async() => {

                var error = false;

                try {

                    ////
                    //  Get token info

                    var tokeninfo = await this.getToken(tokenId);

                    if (!tokenId)
                        error = 'Missing required fields';

                    if (tokenId == '')
                        error = 'Invalid Data';

                    if (tokeninfo[0] && tokeninfo[0].tokenDetails) {
                        //var pausable = tokeninfo[0].tokenDetails.pausable;
                        var pausable = true;

                        if (pausable == false) {
                            error = "Token not pausable";
                        }
                    } else {
                        error = 'Token not found';
                    }

                    if (error == false) {

                        var jsontemplate = { "sslp1": { "tp": "PAUSE", "id": tokenId, "no": transactionNote } };

                        var body = JSON.stringify(jsontemplate);

                        var toAddress = 'SXPJgWWdxrUqn7hnrtMWbVh7wgz2tP6hnh'; // SSLP-1 Master Address
                        var feeOverride = 2000000; // 0.02 SXP
                        var solarAmount = 1; // 0.00000001 SXP
                        var vendorField = body;
                        var version = null; // Not typically used

                        var transaction = solarjs.transaction.createTransaction(toAddress, solarAmount, vendorField, passPhrase, secondPassphrase, version, feeOverride);

                        var transactionId = transaction.id;

                        var sendResult = await sapi.createTransaction([transaction]);

                        if (sendResult.data && sendResult.data.accept[0] == transactionId) {
                            // Successful Transaction
                            var txid = transactionId;
                            var error = null;

                            resolve({ success: true, txid: txid, message: '' });
                        } else {
                            // Failed Transaction
                            var txid = null;

                            if (sendResult.errors)
                                var error = sendResult.errors[transactionId][0].message;
                            else
                                var error = 'Unknown Error';

                            resolve({ success: false, txid: null, message: error });
                        }

                    } else {
                        resolve({ success: false, txid: null, message: error });
                    }

                } catch (e) {
                    resolve({ success: false, txid: null, message: e });
                }

            })();

        });

    };

    solarApi.prototype.resumeToken = function(passPhrase = '', secondPassphrase = null, tokenId = '', transactionNote = '') {

        return new Promise((resolve, reject) => {

            (async() => {

                var error = false;

                try {

                    ////
                    //  Get token info

                    var tokeninfo = await this.getToken(tokenId);

                    if (!tokenId)
                        error = 'Missing required fields';

                    if (tokenId == '')
                        error = 'Invalid Data';

                    if (tokeninfo[0] && tokeninfo[0].tokenDetails) {
                        //var pausable = tokeninfo[0].tokenDetails.pausable;
                        var pausable = true;

                        if (pausable == false) {
                            error = "Token not pausable";
                        }
                    } else {
                        error = 'Token not found';
                    }

                    if (error == false) {

                        var jsontemplate = { "sslp1": { "tp": "RESUME", "id": tokenId, "no": transactionNote } };

                        var body = JSON.stringify(jsontemplate);

                        var toAddress = 'SXPJgWWdxrUqn7hnrtMWbVh7wgz2tP6hnh'; // SSLP-1 Master Address
                        var feeOverride = 2000000; // 0.02 SXP
                        var solarAmount = 1; // 0.00000001 SXP
                        var vendorField = body;
                        var version = null; // Not typically used

                        var transaction = solarjs.transaction.createTransaction(toAddress, solarAmount, vendorField, passPhrase, secondPassphrase, version, feeOverride);

                        var transactionId = transaction.id;

                        var sendResult = await sapi.createTransaction([transaction]);

                        if (sendResult.data && sendResult.data.accept[0] == transactionId) {
                            // Successful Transaction
                            var txid = transactionId;
                            var error = null;

                            resolve({ success: true, txid: txid, message: '' });
                        } else {
                            // Failed Transaction
                            var txid = null;

                            if (sendResult.errors)
                                var error = sendResult.errors[transactionId][0].message;
                            else
                                var error = 'Unknown Error';

                            resolve({ success: false, txid: null, message: error });
                        }

                    } else {
                        resolve({ success: false, txid: null, message: error });
                    }

                } catch (e) {
                    resolve({ success: false, txid: null, message: e });
                }

            })();

        });

    };

    solarApi.prototype.newTokenOwner = function(passPhrase = '', secondPassphrase = null, tokenId = '', newOwnerAddress = '', transactionNote = '') {

        return new Promise((resolve, reject) => {

            (async() => {

                var error = false;

                try {

                    ////
                    //  Get token info

                    var tokeninfo = await this.getToken(tokenId);

                    if (!tokenId)
                        error = 'Missing required fields';

                    if (tokenId == '')
                        error = 'Invalid Data';

                    if (tokeninfo[0] && tokeninfo[0].tokenDetails) {
                        var currentOwner = tokeninfo[0].tokenDetails.ownerAddress;

                        var senderkeys = solarjs.crypto.getKeys(passPhrase);
                        var senderpublickey = senderkeys.publicKey;
                        var senderaddress = solarjs.crypto.getAddress(senderpublickey);

                        if (senderaddress != currentOwner) {
                            error = 'You are not the current owner';
                        }

                    } else {
                        error = 'Token not found';
                    }

                    if (error == false) {
                        var jsontemplate = { "sslp1": { "tp": "NEWOWNER", "id": tokenId, "no": transactionNote } };

                        var body = JSON.stringify(jsontemplate);

                        var toAddress = newOwnerAddress; // New token owner address
                        var feeOverride = 2000000; // 0.02 SXP
                        var solarAmount = 1; // 0.00000001 SXP
                        var vendorField = body;
                        var version = null; // Not typically used

                        var transaction = solarjs.transaction.createTransaction(toAddress, solarAmount, vendorField, passPhrase, secondPassphrase, version, feeOverride);

                        var transactionId = transaction.id;

                        var sendResult = await sapi.createTransaction([transaction]);

                        if (sendResult.data && sendResult.data.accept[0] == transactionId) {
                            // Successful Transaction
                            var txid = transactionId;
                            var error = null;

                            resolve({ success: true, txid: txid, message: '' });
                        } else {
                            // Failed Transaction
                            var txid = null;

                            if (sendResult.errors)
                                var error = sendResult.errors[transactionId][0].message;
                            else
                                var error = 'Unknown Error';

                            resolve({ success: false, txid: null, message: error });
                        }

                    } else {
                        resolve({ success: false, txid: null, message: error });
                    }

                } catch (e) {
                    resolve({ success: false, txid: null, message: e });
                }

            })();

        });

    };

    return solarApi;

}());

exports.default = solarApi;