/**
 * This class is responsible for 12-factor config parsing.
 */
class ConfigParser {

  /**
   * Class constructor.
   *
   * @param {Object} settings Parser settings.
   * @param {String} settings.prefix Prefix to prepend to each ENV variable.
   */
  constructor(settings = {}) {
    this.prefix = settings.prefix || '';
  }

  /**
   * Creates a new configuration entry and returns it's value.
   *
   * @param {String} name - Name of the ENV variable.
   * @param {*?} defaultValue - Value to use as default one.
   * @return {*}
   */
  val(name, defaultValue = undefined) {

    const envVarName = this.prefix + name;
    const value = process.env[envVarName] || defaultValue;

    if (value === undefined) {
      throw new Error(`Required ENV variable is not defined: "${envVarName}".`);
    }

    if (String(value).toLowerCase() === 'null') {
      return null;
    }

    return value;
  }

  /**
   * Creates a new configuration entry and returns it's value in string format.
   *
   * @param {String} name - Name of the ENV variable.
   * @param {String|undefined?} defaultValue - Value to use as default one.
   * @return {String}
   */
  string(name, defaultValue = undefined) {
    return this.val(name, defaultValue);
  }

  /**
   * Creates a new configuration entry and returns it's value in number format.
   *
   * @param {String} name - Name of the ENV variable.
   * @param {Number|undefined?} defaultValue - Value to use as default one.
   * @return {Number}
   */
  number(name, defaultValue = undefined) {
    const value = this.val(name, defaultValue);
    return (value === null) ? null : Number(value);
  }

  /**
   * Creates a new configuration entry and returns it's value in boolean format.
   *
   * @param {String} name - Name of the ENV variable.
   * @param {Boolean|undefined?} defaultValue - Value to use as default one.
   * @return {Boolean}
   */
  boolean(name, defaultValue = undefined) {
    const value = this.val(name, defaultValue);
    return (value === null) ? null : ConfigParser.parseBooleanValue(value);
  }

  /**
   * Creates a new configuration entry and checks that it's value is in predefined range.
   *
   * @param {String} name - Name of the ENV variable.
   * @param {*?} defaultValue - Value to use as default one.
   * @param {Array?} range - A list of accepted values.
   * @return {*}
   */
  range(name, defaultValue = undefined, range = []) {

    const envVarName = this.prefix + name;
    const value = this.val(name, defaultValue);

    if (value === null) {
      return null;
    }

    if (range.length && range.indexOf(value) < 0) {
      throw new Error(`Given value for ENV variable "${envVarName}" is not accepted.`);
    }

    return value;
  }

  /**
   * Parse string and extract boolean from it.
   *
   * @param {String} value - Value to parse.
   * @return {Boolean} Operation result.
   */
  static parseBooleanValue(value) {
    const trueValues = ['true', 't', 'yes', 'y', 'on', '1'];
    return (trueValues.indexOf(String(value).toLowerCase()) >= 0);
  }
}

module.exports = ConfigParser;
