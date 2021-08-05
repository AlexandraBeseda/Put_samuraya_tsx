import React from "react";
import s from './NewPost.module.css';
import {NewPostType} from "../../../../../redux/mainContent_reducer";


export const NewPost = (props: NewPostType) => {
    return (
        <div>
            <img className={s.img}
                 src="https://www.meme-arsenal.com/memes/1217413852947b0ec148f82a87e89ddc.jpg" alt="postImage"/>
            {props.message}
            <div>Likes {props.likes}</div>


        </div>
    );
}