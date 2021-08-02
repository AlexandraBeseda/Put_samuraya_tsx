import {NewPostType} from "../components/MainContent/Posts/lPosts/NewPost/NewPost";
import {ActionsType, PostsDataArrayPropTypes} from "./store";

const ADD_POST = "ADD_POST";
const CHANGE_NEW_TEXT_CALLBACK = "CHANGE_NEW_TEXT_CALLBACK";

export const addPostAC = () => ({type: ADD_POST} as const);

export const changeNewTextCallbackAC = (postNewText: string) => {
    return {
        type: CHANGE_NEW_TEXT_CALLBACK,
        postNewText: postNewText
    } as const
}


export const mainContent_reducer = (state: PostsDataArrayPropTypes, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: NewPostType = {
                id: 5,
                message: state.textNewPost,
                likes: 155
            };
            state.postsData.push(newPost);
            state.textNewPost = "";
            break;
        case CHANGE_NEW_TEXT_CALLBACK:
            state.textNewPost = action.postNewText;
            break;
    }
    return state;
}

