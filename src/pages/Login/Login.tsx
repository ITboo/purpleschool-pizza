import { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import TextTitle from "../../components/TextTitle/TextTitle.tsx";
import Input from "../../components/Input/Input.tsx";
import Button from "../../components/Button/Button.tsx";

import { AppDispatch, RootState } from "../../store/store.ts";
import { login, userActions } from "../../store/User.slice.ts";

import styles from "./Login.module.css";

export type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { jwt, loginErrorMessage } = useSelector((s: RootState) => s.user);

  useEffect(() => {
    if (jwt) {
      navigate("/");
    }
  }, [jwt, navigate]);

  async function submit(e: FormEvent) {
    e.preventDefault();
    dispatch(userActions.clearLoginError());
    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;
    await SendLogin(email.value, password.value);
  }

  async function SendLogin(email: string, password: string) {
    dispatch(login({ email, password }));
}

  return (
    <div className={styles.login}>
      <>
        <p className={styles.hint}>login: ap@ya.ru</p>
        <p className={styles.hint}>password: ap@ya.ru</p>
      </>
      <TextTitle>Вход</TextTitle>
      {loginErrorMessage && (
        <div className={styles.error}>{loginErrorMessage}</div>
      )}
      <form className={styles.form} onSubmit={submit}>
        <div className={styles.field}>
          <label htmlFor="email">Ваш email</label>
          <Input id="email" name="email" placeholder="Email" />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Ваш пароль</label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
          />
        </div>
        <Button size="big">Вход</Button>
      </form>
      <div className={styles.links}>
        <div>Нет акканута?</div>
        <Link to="/auth/register">Зарегистрироваться</Link>
      </div>
    </div>
  );
}
