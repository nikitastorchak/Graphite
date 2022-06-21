import { AuthFields } from "../../constants/FormFields";

export const handleValidateFields = (fieldName: any) => {
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

export const handleFilterFields = (fields: any, variant: "email" | "phone") =>
  AuthFields.filter(
    (field) => field.name !== (variant === "email" ? "phone" : "email")
  );

export const validateFieldRequired = (value: string) =>
  !value && "Обязательное поле";

export const validateMustBeNumber = (value: number) =>
  isNaN(value) && "Поле должно содержать только числа";

export const validateMinValue = (min: number) => (value: string) =>
  value.length <= min && `Поле должно содержать минимум ${min} символов`;

export const composeValidators =
  (...validators: any[]) =>
  (value: any) =>
    validators.reduce((error, validator) => error || validator(value), null);
