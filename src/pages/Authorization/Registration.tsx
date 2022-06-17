import { Field, Form } from "react-final-form";
import { Link } from "react-router-dom";

import Button from "../../common/Button/Button";
import {
  Block,
  ButtonWrapper,
  Input,
  Label,
  Wrapper,
} from "./RegistrationStyles";

import { regFields } from "../../constants/FormFields";
import userActions from "../../store/actions/userActions";
import { useDispatch } from "../../store";
import { push } from "connected-react-router";

const Registration = () => {
  const dispatch = useDispatch();
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
          await dispatch(userActions.registration(formObj));
          dispatch(push("/"));
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {regFields.map((item, index) => (
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
            ))}
            <ButtonWrapper>
              <Button type="submit">Submit</Button>
            </ButtonWrapper>
            <Link to="/authorization">Уже есть аккаунт? Войти</Link>
          </form>
        )}
      </Form>
    </Wrapper>
  );
};

export default Registration;
