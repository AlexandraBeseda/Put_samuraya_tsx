import React from "react";
import s from './Posts.module.css';
import {NewPost} from "./NewPost/NewPost";
import {PostsConnectMapPropTypes} from "./PostsContainer";
import {Field, Formik, FormikErrors} from "formik";

export const Posts: React.FC<PostsConnectMapPropTypes> = React.memo((props) => {
    console.log("RENDER functional component Posts")
    const postsElements = [...props.postsData]
        .reverse()
        .map(p => <NewPost key={p.id}
                           id={p.id}
                           message={p.message}
                           likes={p.likes}/>);


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.item}>
                <AddPostForm callback={props.addPost} buttonTitle={"Send Post"}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
})

type AddPostFormType = {
    callback: (newMessage: string) => void,
    buttonTitle: string,
}

type FormValues = {
    post: string
}

const AddPostForm: React.FC<AddPostFormType> = (props) => {

    return (
        <Formik
            initialValues={{post: ''}}
            validate={values => {
                let errors: FormikErrors<FormValues> = {};
                if (!values.post) {
                    errors.post = "Required";
                } else if (values.post.length > 15) {
                    errors.post = "Post must be less 15 symbols"
                }

                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                // alert(JSON.stringify(values));
                debugger
                setSubmitting(false);
                props.callback(values.post)
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
                    <div>
                        <Field
                            /*    error={errors.post && touched.post}*/
                            style={errors.post && touched.post && {border: '1px solid red'}}
                            /*classname={errors.post && touched.post ? s.errorInput : ""}*/
                            name={"post"}
                            component={"textarea"}
                            placeholder={"write your post"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.post}/></div>

                    {touched.post && errors.post && <div className={s.errorText}>{errors.post}</div>}

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