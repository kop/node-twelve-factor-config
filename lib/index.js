const ConfigEntry = require('./entry');

/**
 * Config.
 */
class Config {

  /**
   * Class constructor.
   *
   * @param {Object} options
   */
  constructor(options) {
    this.prefix = options.prefix || '';
  }

  /**
   * Creates a new configuration entry.
   *
   * @param {String} name
   * @param {*} defaultValue
   * @return {ConfigEntry}
   */
  entry(name, defaultValue = undefined) {
    return new ConfigEntry({
      name,
      namePrefix: this.prefix,
      default: defaultValue,
    });
  }
}

module.exports = Config;
