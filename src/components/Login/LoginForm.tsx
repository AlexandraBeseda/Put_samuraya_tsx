import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Field, Formik, FormikErrors} from "formik";
import {logIn} from "../../redux/auth_reducer";
import s from "./Login.module.css";
import {store} from "../../redux/reduxStore";


type FormValues = {
    email: string,
    password: string,
}

export const LoginForm: React.FC = () => {

    const dispatch = useDispatch();
    //если нам приходит некорректный ответ от сервера
    const errorMessageFromServer = useSelector(() => store.getState().auth.authError);

    return (<Formik
        initialValues={{email: '', password: '', rememberMe: false}}
        validate={(values) => {
            let errors: FormikErrors<FormValues> = {};
            if (!values.email) {
                errors.email = "Required";
            } /*else if (values.email.length < 5) {
                errors.email = "Email must be more then 5 symbols"
            }*/

            if (!values.password) {
                errors.password = "Required";
            } /*else if (values.password.length < 5) {
                errors.password = "Password must be more then 5 symbols"
            }*/

            return errors;
        }}
        onSubmit={(values, {setSubmitting}) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            dispatch(logIn(values.email, values.password, values.rememberMe));
            debugger
        }}
    >
        {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>

                <div>Email</div>
                <input className={errors.email ? s.errorInput : ""}
                       type="email"
                       name="email"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.email}
                />
                {touched.email && errors.email && <div className={s.errorText}>{errors.email}</div>}
                <div>Password</div>
                <input className={errors.password ? s.errorInput : ""}
                       type="password"
                       name="password"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.password}
                />
                {touched.password && errors.password && <div className={s.errorText}>{errors.password}</div>}


                <div>
                    <Field type="checkbox" name="rememberMe"/>
                    <label>Remember Me</label>

                </div>
                <div className={s.errorText}>{errorMessageFromServer}</div>
                <div>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </div>
            </form>
        )}
    </Formik>)
}