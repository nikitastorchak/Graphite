const Utils = (): void => {
  const handleValidateFields = (fieldName: any) => {
    if (fieldName === "password") {
      return composeValidators(validateFieldRequired, validateMinValue(8));
    }
    if (fieldName === "phone") {
      return composeValidators(
        validateFieldRequired,
        validateMustBeNumber,
        validateMinValue(11)
      );
    }
    return composeValidators(validateFieldRequired);
  };

  const validateFieldRequired = (value: string) =>
    !value && "Обязательное поле";

  const validateMustBeNumber = (value: number) =>
    isNaN(value) && "Поле должно содержать только числа";

  const validateMinValue = (min: number) => (value: string) =>
    value.length <= min && `Поле должно содержать минимум ${min} символов`;

  const composeValidators =
    (...validators: any[]) =>
    (value: any) =>
      validators.reduce((error, validator) => error || validator(value), null);
};

export default Utils;
