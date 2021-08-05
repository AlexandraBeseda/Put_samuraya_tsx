import React, {ChangeEvent} from "react";
import s from './Posts.module.css';
import {NewPost} from "./NewPost/NewPost";
import {addPostAC, changeNewTextCallbackAC, NewPostType} from "../../../../redux/mainContent_reducer";
import {ActionsType} from "../../../../redux/reduxStore";


export type PostsDataArrayPropTypes = {
    arrayPosts: Array<NewPostType>,
    textForNewPost: string,/*
    dispatch: (action: ActionsType) => void,*/
    addPost:()=>void,
    changeNewTextCallback:(e: ChangeEvent<HTMLTextAreaElement>)=>void
}

export const Posts = (props: PostsDataArrayPropTypes) => {
    const postsElements = props.arrayPosts.map(p => <NewPost key={p.id}
                                                             id={p.id}
                                                             message={p.message}
                                                             likes={p.likes}/>);

    const addPost = () => {
        props.addPost();
    }
    const changeNewTextCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
       props.changeNewTextCallback(e);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.item}>
                <div>
                    <textarea onChange={changeNewTextCallback} value={props.textForNewPost}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}