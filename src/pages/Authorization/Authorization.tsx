import { Field, Form } from "react-final-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "../../store";

import Button from "../../common/Button/Button";
import {
  Block,
  ButtonWrapper,
  ChangeField,
  Input,
  Label,
  Wrapper,
} from "./AutorizationStyles";

import userActions from "../../store/actions/userActions";
import { authFields } from "../../constants/FormFields";

const Authorization = () => {
  const [variant, setVariant] = useState<"email" | "phone">("email");
  const dispatch = useDispatch();
  const variantHandler = () => {
    variant === "email" ? setVariant("phone") : setVariant("email");
  };
  const validationHandler = (item: any) => {
    if (item.name === "password") {
      return composeValidators(required, minValue(8));
    }
    if (item.name === "phone") {
      return composeValidators(required, mustBeNumber, minValue(11));
    } else {
      return composeValidators(required);
    }
  };
  const required = (value: any) => (value ? undefined : "Обязательное поле");
  const mustBeNumber = (value: any) =>
    isNaN(value) ? "Поле должно содержать только числа" : undefined;
  const minValue = (min: any) => (value: any) =>
    isNaN(value) || value >= min
      ? undefined
      : `Поле должно содержать минимум ${min} символов`;
  const composeValidators =
    (...validators: any[]) =>
    (value: any) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );

  return (
    <Wrapper>
      <Form
        onSubmit={async (formObj) => {
          formObj.type = variant;
          await dispatch(userActions.authorization(formObj));
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {authFields.map((item, index) =>
              (variant === "email" && item.name === "phone") ||
              (variant === "phone" && item.name === "email") ? undefined : (
                <Field
                  key={index}
                  name={item.name}
                  validate={validationHandler(item)}
                >
                  {({ input, meta }) => (
                    <Block>
                      <Label htmlFor={item.id}>{item.label}</Label>
                      <Input
                        id={item.name}
                        placeholder={item.placeholder}
                        type={item.type}
                        {...input}
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Block>
                  )}
                </Field>
              )
            )}
            <ChangeField onClick={() => variantHandler()}>
              {variant === "email"
                ? "Использовать номер телефона для входа"
                : "Использовать email для входа"}
            </ChangeField>
            <ButtonWrapper>
              <Button type="submit">Submit</Button>
            </ButtonWrapper>
            <Link to="/registration">Нет аккаунта? Зарегистрироваться</Link>
          </form>
        )}
      </Form>
    </Wrapper>
  );
};

export default Authorization;
