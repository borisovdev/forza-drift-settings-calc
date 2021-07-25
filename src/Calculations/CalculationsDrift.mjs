export default class CalculationsDrift {

  _frontPayload;
  _calcFormulas;
  _stabilizers;
  _springs;
  _shockAbsorbers;

  constructor(
    frontPayload,
    calcFormulas,
    stabilizers,
    springs,
    shockAbsorbers,
  ) {
    this._frontPayload = frontPayload;
    this._calcFormulas = calcFormulas;
    this._stabilizers = stabilizers;
    this._springs = springs;
    this._shockAbsorbers = shockAbsorbers;
  }

  get springs() {
    return this._calcFormulas.getDriftAverageSettings(this._frontPayload, this._springs.MAX_SETTINGS_VALUE, this._springs.MIN_SETTINGS_VALUE);
  }

  get shockAbsorbers() {
    return this._calcFormulas.getDriftAverageSettings(this._frontPayload, this._shockAbsorbers.MAX_SETTINGS_VALUE, this._shockAbsorbers.MIN_SETTINGS_VALUE);
  }

  get stabilizers() {
    return this._calcFormulas.getDriftAverageSettings(this._frontPayload, this._stabilizers.MAX_SETTINGS_VALUE, this._stabilizers.MIN_SETTINGS_VALUE);
  }

}
