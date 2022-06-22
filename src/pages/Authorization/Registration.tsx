import { FC } from "react";
import { Field, Form } from "react-final-form";
import { Link } from "react-router-dom";
import { useDispatch } from "../../store";
import { push } from "connected-react-router";

import Button from "../../common/Button/Button";
import {
  Block,
  ButtonWrapper,
  Input,
  Label,
  Wrapper,
} from "./RegistrationStyles";

import userActions from "../../store/actions/userActions";
import { handleValidateFields } from "../../services/FormUtils/Utils";

import { RegFields } from "../../constants/FormFields";

import { Error, FormProps } from "./AutorizationStyles";

const Registration: FC = () => {
  const dispatch = useDispatch();

  const handleOnSubmit = async (formObj: FormProps) => {
    if (formObj.phone && formObj.email && formObj.password) {
      await dispatch(userActions.registration(formObj));
      dispatch(push("/"));
    } else {
      alert("Заполните все необходимые поля");
    }
  };

  return (
    <Wrapper>
      <Form
        onSubmit={handleOnSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {RegFields.map((item, index) => {
              const { id, name, label, placeholder, type } = item;
              return (
                <Field
                  name={name}
                  validate={handleValidateFields}
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
              <Button type="submit">Зарегистрироваться</Button>
            </ButtonWrapper>
          </form>
        )}
      />
      <Link to="/authorization">Уже есть аккаунт? Войти</Link>
    </Wrapper>
  );
};

export default Registration;
