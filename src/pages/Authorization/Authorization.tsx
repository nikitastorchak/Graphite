import { Field, Form } from "react-final-form";
import styled from "styled-components";
import Button from "../../common/Button/Button";
import { useState } from "react";

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

const Authorization = () => {
  const [variant, setVariant] = useState<"email" | "phone">("email");
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

  const fields = [
    {
      name: "email",
      id: "email",
      label: "Email",
      placeholder: "Email",
      type: "email",
    },
    {
      name: "phone",
      id: "phone",
      label: "Тел.",
      placeholder: "Номер телефона",
      type: "number",
    },
    {
      name: "password",
      id: "password",
      label: "Пароль",
      placeholder: "Пароль",
      type: "password",
    },
  ];

  return (
    <Wrapper>
      <Form
        onSubmit={(formObj) => {
          console.log(formObj); //TODO make a request on BE
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {fields.map((item, index) => {
              return (
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
              );
            })}
            <button onClick={() => variantHandler()}>
              {variant === "email"
                ? "Использовать номер телефона для входа"
                : "Использовать email для входа"}
            </button>
            <ButtonWrapper>
              <Button type="submit">Submit</Button>
            </ButtonWrapper>
          </form>
        )}
      </Form>
    </Wrapper>
  );
};

export default Authorization;
