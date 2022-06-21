export default class Utils {
  static validationHandler = (item: any) => {
    if (item.name === "password") {
      return this.composeValidators(this.required, this.minValue(8));
    }
    if (item.name === "phone") {
      return this.composeValidators(
        this.required,
        this.mustBeNumber,
        this.minValue(11)
      );
    } else {
      return this.composeValidators(this.required);
    }
  };

  static required = (value: string) => !value && "Обязательное поле";

  static mustBeNumber = (value: number) =>
    isNaN(value) && "Поле должно содержать только числа";

  static minValue = (min: number) => (value: string) =>
    value.length <= min && `Поле должно содержать минимум ${min} символов`;

  static composeValidators =
    (...validators: any[]) =>
    (value: any) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );
}
