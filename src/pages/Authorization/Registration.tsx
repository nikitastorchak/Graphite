import { Field, Form } from "react-final-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../common/Button/Button";

const Wrapper = styled.div`
  margin-top: 50px;
  padding: 0 15px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;
const Label = styled.label`
  width: fit-content;
  margin: 10px;
`;
const Input = styled.input`
  padding: 15px;
  border-radius: 5px;
  border: none;
  outline: none;
`;

const Registration = () => {
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
        onSubmit={(formObj) => {
          console.log(formObj);
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="name"
              validate={composeValidators(required, minValue(2))}
            >
              {({ input, meta }) => (
                <Block>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Имя" type="text" {...input} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </Block>
              )}
            </Field>
            <Field
              name="secondName"
              validate={composeValidators(required, minValue(2))}
            >
              {({ input, meta }) => (
                <Block>
                  <Label htmlFor="secondName">Фамилия</Label>
                  <Input
                    id="secondName"
                    placeholder="Фамилия"
                    type="text"
                    {...input}
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </Block>
              )}
            </Field>
            <Field
              name="email"
              validate={composeValidators(required, minValue(8))}
            >
              {({ input, meta }) => (
                <Block>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Email"
                    type="text"
                    {...input}
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </Block>
              )}
            </Field>
            <Field
              name="password"
              validate={composeValidators(required, minValue(8))}
            >
              {({ input, meta }) => (
                <Block>
                  <Label htmlFor="password">Пароль</Label>
                  <Input
                    id="password"
                    placeholder="Пароль"
                    type="password"
                    {...input}
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </Block>
              )}
            </Field>
            <Field name="repeatPassword" validate={composeValidators(required)}>
              {({ input, meta }) => (
                <Block>
                  <Label htmlFor="repeatPassword">Повторите пароль</Label>
                  <Input
                    id="repeatPassword"
                    placeholder="Повторите пароль"
                    type="password"
                    {...input}
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </Block>
              )}
            </Field>
            <Field name="address">
              {({ input, meta }) => (
                <Block>
                  <Label htmlFor="address">Адресс</Label>
                  <Input
                    id="address"
                    placeholder="Адресс"
                    type="text"
                    {...input}
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </Block>
              )}
            </Field>
            <Field
              name="phone"
              validate={composeValidators(required, mustBeNumber, minValue(11))}
            >
              {({ input, meta }) => (
                <Block>
                  <Label htmlFor="phone">Тел.</Label>
                  <Input
                    id="phone"
                    placeholder="Номер телефона"
                    type="number"
                    {...input}
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </Block>
              )}
            </Field>
            <Link to="/authorization">Уже есть аккаунт? Войти</Link>
            <ButtonWrapper>
              <Button type="submit">Submit</Button>
            </ButtonWrapper>
          </form>
        )}
      </Form>
    </Wrapper>
  );
};

export default Registration;
