export default class CalculationsFormulas {

  static _instance;

  constructor() {}

  static getInstance() {
    if (!this._instance) this._instance = new CalculationsFormulas();

    return this._instance;
  }

  /**
   * Getting averaged settings value
   * 
   * @param {number} frontPayload 
   * @param {number} maxSettingValue 
   * @param {number} minSettingValue 
   * @return {array} [number, number] ``` [val_for_front, val_for_back] ```
   */
   getDriftAverageSettings(frontPayload, maxSettingValue, minSettingValue) {
    return [
      (maxSettingValue - minSettingValue) * (frontPayload) + minSettingValue,
      (maxSettingValue - minSettingValue) * (1.00 - frontPayload) + minSettingValue,
    ]; 
  }
  
}
