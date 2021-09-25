import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsConnectMapPropTypes} from "./DialogsContainer";
import {Field, Formik, FormikErrors} from "formik";


export const Dialogs: React.FC<DialogsConnectMapPropTypes> = (props) => {

    const dialogsElements = props.dialogsData.map(d => <DialogItem key={d.id}
                                                                   name={d.name}
                                                                   id={d.id}
                                                                   avatar={d.avatar}/>);
    const messagesElements = props.messagesDataPosts.map(m => <Message key={m.id}
                                                                       id={m.id}
                                                                       message={m.message}/>)
    return (
        <div className={s.tableDialogs}>
            <div className={s.dialogsItems}>
                <div>{dialogsElements}</div>
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageForm callback={props.addMessage} buttonTitle={"Send Message"}/>

            </div>
        </div>
    );
}


type AddMessageFormType = {
    callback: (newMessage: string) => void,
    buttonTitle: string,
}
type FormValues = {
    message: string
}
const AddMessageForm: React.FC<AddMessageFormType> = (props) => {

    return (
        <Formik
            initialValues={{message: ''}}
            validate={values => {
                let errors: FormikErrors<FormValues> = {};
                if (!values.message) {
                    errors.message = "Required";
                } else if (values.message.length > 30) {
                    errors.message = "Message must be less 30 symbols"
                }

                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                alert(JSON.stringify(values));
                setSubmitting(false);
                props.callback(values.message)
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
                    {/*свойство нэйм, это то, что мы туда запихиваем!*/}
                    <Field style={errors.message && touched.message && {border: '1px solid red'}}
                           name={"message"}
                           component={"textarea"}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.message}/>
                    {touched.message && errors.message && <div className={s.errorText}>{errors.message}</div>}

                    <div>
                        <button type="submit" disabled={isSubmitting}>
                            {props.buttonTitle}
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    );
}

