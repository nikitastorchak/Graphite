import { FC, useCallback, useMemo, useState } from "react";
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

import {
  handleFilterFields,
  handleValidateFields,
} from "../../services/FormUtils/Utils";
import userActions from "../../store/actions/userActions";

import { AuthFields } from "../../constants/FormFields";

const Authorization: FC = () => {
  const dispatch = useDispatch();
  const [variant, setVariant] = useState<"email" | "phone">("email");

  const handleVariantChanger = useCallback(() => {
    setVariant(variant === "email" ? "phone" : "email");
  }, [variant]);

  const handleOnSubmit = async (formObj: FormProps) => {
    if ((formObj.phone || formObj.email) && formObj.password) {
      formObj.type = variant;
      await dispatch(userActions.authorization(formObj));
      dispatch(push("/"));
    } else {
      alert("Заполните все поля");
    }
  };

  const handleFields = useMemo(
    () => handleFilterFields(AuthFields, variant),
    [variant]
  );

  return (
    <Wrapper>
      <Form
        onSubmit={handleOnSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {handleFields.map((item, index) => {
              const { id, name, label, placeholder, type } = item;
              return (
                <Field
                  name={name}
                  validate={handleValidateFields(name)}
                  render={({ input, meta }) => (
                    <Block>
                      <Label htmlFor={id}>{label}</Label>
                      <Input
                        {...input}
                        id={id}
                        type={type}
                        placeholder={placeholder}
                      />
                      {meta.error && meta.touched && (
                        <Error>{meta.error}</Error>
                      )}
                    </Block>
                  )}
                />
              );
            })}
            <ButtonWrapper>
              <Button type="submit">Войти</Button>
            </ButtonWrapper>
          </form>
        )}
      />
      <ChangeField onClick={handleVariantChanger}>
        {variant === "email"
          ? "Использовать номер телефона для входа"
          : "Использовать email для входа"}
      </ChangeField>
      <Link to="/registration">Нет аккаунта? Зарегистрироваться</Link>
    </Wrapper>
  );
};

export default Authorization;
