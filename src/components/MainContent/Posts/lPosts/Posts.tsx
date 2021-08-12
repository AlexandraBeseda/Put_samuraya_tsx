import React, {ChangeEvent} from "react";
import s from './Posts.module.css';
import {NewPost} from "./NewPost/NewPost";

import {PostsConnectMapPropTypes} from "./PostsContainer";


/*export type PostsDataArrayPropTypes = {
    arrayPosts: Array<NewPostType>,
    textForNewPost: string,
    addPost:()=>void,
    changeNewTextCallback:(e: ChangeEvent<HTMLTextAreaElement>)=>void
}*/

export const Posts: React.FC<PostsConnectMapPropTypes> = (props) => {
    const postsElements = props.postsData.map(p => <NewPost key={p.id}
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
                    <textarea onChange={changeNewTextCallback} value={props.textNewPost}/>
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