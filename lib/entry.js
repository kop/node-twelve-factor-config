/**
 * Configuration entry.
 */
class ConfigEntry {

  /**
   * Class constructor.
   *
   * @param {Object} options Config entry options.
   * @param {String} options.name Name of the ENV variable to check.
   * @param {String?} options.namePrefix Prefix to use with ENV var names.
   * @param {*} options.default Default value to use if ENV var is not set.
   */
  constructor(options) {

    // Resolve ENV var name
    if (!options.name) {
      throw new Error('Name of the config entry ENV variable is missing!');
    }
    const envVarPrefix = options.namePrefix || '';
    const envVarName = envVarPrefix + options.name;

    /* eslint no-prototype-builtins: "off" */
    this.value = process.env[envVarName] || options.default;
    if (this.value === undefined) {
      throw new Error(`Required ENV variable is not defined: "${envVarName}".`);
    }
  }

  /**
   * Returns configuration value as is.
   *
   * @return {*}
   */
  val() {
    return this.value;
  }

  /**
   * Returns configuration value converted to Boolean.
   *
   * @return {Boolean}
   */
  boolVal() {
    return Boolean(this.value);
  }

  /**
   * Returns configuration value converted to String.
   *
   * @return {String}
   */
  stringVal() {
    return String(this.value);
  }

  /**
   * Returns configuration value converted to Number.
   *
   * @return {Number}
   */
  numberVal() {
    return Number(this.value);
  }
}

module.exports = ConfigEntry;
