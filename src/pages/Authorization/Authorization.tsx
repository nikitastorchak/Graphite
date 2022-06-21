import { Field, Form } from "react-final-form";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "../../store";
import { push } from "connected-react-router";
import { AuthFields } from "../../constants/FormFields";
import Utils from "../../services/FormUtils/Utils";

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

import userActions from "../../store/actions/userActions";

const Authorization = () => {
  const [variant, setVariant] = useState<"email" | "phone">("email");
  const dispatch = useDispatch();

  const variantHandler = useCallback((): void => {
    variant === "email" ? setVariant("phone") : setVariant("email");
  }, [variant]);

  const onSubmit = useCallback(
    async (formObj: FormProps) => {
      formObj.type = variant;
      await dispatch(userActions.authorization(formObj));
      dispatch(push("/"));
    },
    [variant]
  );

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {AuthFields.map((item, index) =>
              (variant === "email" && item.name === "phone") ||
              (variant === "phone" && item.name === "email") ? (
                false
              ) : (
                <Field
                  key={index}
                  name={item.name}
                  validate={Utils.validationHandler(item)}
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
                      {meta.error && meta.touched && (
                        <Error>{meta.error}</Error>
                      )}
                    </Block>
                  )}
                </Field>
              )
            )}
            <ChangeField onClick={variantHandler}>
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
