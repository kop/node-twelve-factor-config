Twelve Config
=============

[![Dependency Status](https://gemnasium.com/badges/github.com/kop/node-twelve-config.svg)](https://gemnasium.com/github.com/kop/node-twelve-config)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/kop/node-twelve-config/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/kop/node-twelve-config/?branch=master)

An easy to use 12factor configuration for Node.js.


Configuration and usage
-----------------------

```js
const config = new TwelveConfig({prefix: "MY_APP_"});
config.val('ENV_VAR_NAME', 'default value');
config.string('ENV_VAR_NAME', 'default value'); // works same as previous
config.number('ENV_VAR_NAME', 100);
config.boolean('ENV_VAR_NAME', true);
config.range('ENV_VAR_NAME', 'default value', ['default value', 'another value']);
```