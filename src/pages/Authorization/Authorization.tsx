import { FC, useCallback, useState } from "react";
import { Field, Form } from "react-final-form";
import { Link } from "react-router-dom";
import { useDispatch } from "../../store";
import { push } from "connected-react-router";

import Button from "../../common/Button/Button";
import {
  Block,
  ButtonWrapper,
  ChangeField,
  Error,
  FormProps,
  Input,
  Label,
  Wrapper,
} from "./AutorizationStyles";

import { AuthFields } from "../../constants/FormFields";
import userActions from "../../store/actions/userActions";

const Authorization: FC = () => {
  const dispatch = useDispatch();
  const [variant, setVariant] = useState<"email" | "phone">("email");

  const handleVariantChanger = useCallback((): void => {
    setVariant(variant === "email" ? "phone" : "email");
  }, [variant]);

  const handleSubmit = useCallback(async (formObj: FormProps) => {
    formObj.type = variant;
    await dispatch(userActions.authorization(formObj));
    dispatch(push("/"));
  }, []);

  const handleFilterFields = useCallback(
    () =>
      AuthFields.filter(
        (field) => field.name !== (variant === "email" ? "phone" : "email")
      ),
    [variant]
  );

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {handleFilterFields().map((item, index) => {
              const { id, name, label, placeholder, type } = item;
              return (
                <Field
                  key={index}
                  name={name}
                  // TODO validate={Utils.handleValidateFields(item)}
                >
                  {({ input, meta }) => (
                    <Block>
                      <Label htmlFor={id}>{label}</Label>
                      <Input
                        id={name}
                        placeholder={placeholder}
                        type={type}
                        {...input}
                      />
                      {meta.error && meta.touched && (
                        <Error>{meta.error}</Error>
                      )}
                    </Block>
                  )}
                </Field>
              );
            })}
            <ChangeField onClick={handleVariantChanger}>
              {variant === "email"
                ? "Использовать номер телефона для входа"
                : "Использовать email для входа"}
            </ChangeField>
            <ButtonWrapper>
              <Button type="submit">Войти</Button>
            </ButtonWrapper>
            <Link to="/registration">Нет аккаунта? Зарегистрироваться</Link>
          </form>
        )}
      </Form>
    </Wrapper>
  );
};

export default Authorization;
