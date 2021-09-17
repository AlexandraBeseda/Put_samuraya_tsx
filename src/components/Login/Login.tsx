import {Field, Formik} from 'formik';
import React from "react";


const LoginForm: React.FC = () => {
    return (<Formik
        initialValues={{login: '', password: '', rememberMe: false}}
       /* validate={values => {
            const errors = {};
            if (!values.login) {
                errors.login = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }
            return errors;
        }}*/
        onSubmit={(values, {setSubmitting}) => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
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
                <input
                    type="login"
                    name="login"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.login}
                />
{/*                {errors.email && touched.email && errors.email}*/}
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />

                <Field type="checkbox" name="rememberMe" />
              {/*  {errors.password && touched.password && errors.password}*/}
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </form>
        )}
    </Formik>)
}


export const Login: React.FC = (props) => {
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm/>
        </div>
    );
}
