@kop/twelve-factor-config
=========================

[![CircleCI](https://img.shields.io/circleci/project/kop/node-twelve-factor-config.svg?maxAge=2592000)](https://circleci.com/gh/kop/node-twelve-factor-config)
[![Scrutinizer](https://img.shields.io/scrutinizer/g/kop/node-twelve-factor-config.svg?maxAge=2592000)](https://scrutinizer-ci.com/g/kop/node-twelve-factor-config/?branch=master)
[![Package version](https://img.shields.io/npm/v/@kop/twelve-factor-config.svg?maxAge=2592000)](https://www.npmjs.com/package/@kop/twelve-factor-config)
[![Monthly downloads](https://img.shields.io/npm/dm/@kop/twelve-factor-config.svg?maxAge=2592000)](https://www.npmjs.com/package/@kop/twelve-factor-config)
[![License](https://img.shields.io/github/license/kop/node-twelve-factor-config.svg?maxAge=2592000)](https://github.com/kop/node-twelve-factor-config/blob/master/LICENSE.md)

An easy to use 12factor configuration for Node.js.


Configuration and usage
-----------------------

```js
const config = new ConfigParser({prefix: "MY_APP_"});
config.val('ENV_VAR_NAME', 'default value');
config.string('ENV_VAR_NAME', 'default value'); // works same as previous
config.number('ENV_VAR_NAME', 100);
config.boolean('ENV_VAR_NAME', true);
config.range('ENV_VAR_NAME', 'default value', ['default value', 'another value']);
```