import React, {ChangeEvent} from "react";
import s from './Posts.module.css';
import {NewPost, NewPostType} from "./NewPost/NewPost";


export type PostsDataArrayPropTypes = {
    arrayPosts: Array<NewPostType>;
    addPost: () => void
    messageForNewPost: string
    changeNewTextCallback: (newText: string) => void
}

export const Posts = (props: PostsDataArrayPropTypes) => {
    let postsElements = props.arrayPosts.map(p => <NewPost key={p.id} id={p.id} message={p.message} likes={p.likes}/>);


    // let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        //   if (newPostElement.current) {
        props.addPost();
        //      newPostElement.current.value="";
        //    }
    }

    const changeNewTextCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallback(e.currentTarget.value);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.item}>
                <div>
                    {/*
                    <textarea ref={newPostElement}></textarea>
*/}
                    <textarea onChange={changeNewTextCallback} value={props.messageForNewPost}/>
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