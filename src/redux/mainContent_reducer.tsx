import {ActionsType} from "./reduxStore";


const ADD_POST = "ADD_POST";
const CHANGE_NEW_TEXT_CALLBACK = "CHANGE_NEW_TEXT_CALLBACK";

export const addPostAC = () => ({type: ADD_POST} as const);

export const changeNewTextCallbackAC = (postNewText: string) => {
    return {
        type: CHANGE_NEW_TEXT_CALLBACK,
        postNewText: postNewText
    } as const
}

export type PostsDataArrayPropTypes = {
    textNewPost: string
    postsData: Array<NewPostType>
}


export type NewPostType = {
    id: number,
    message: string,
    likes: number
}


const initialState: PostsDataArrayPropTypes = {
    textNewPost: "",
    postsData: [
        {id: 1, message: 'Hello!How are you?', likes: 10},
        {id: 2, message: 'I saw you yesterday', likes: 30},
        {id: 3, message: 'Buy some potatoes?', likes: 0},
        {id: 4, message: 'I want cheese', likes: 10},
        {id: 5, message: 'Hurry', likes: 100}
    ]
};


export const mainContent_reducer = (state: PostsDataArrayPropTypes = initialState, action: ActionsType): PostsDataArrayPropTypes => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {
                ...state, postsData: [...state.postsData,
                    {id: 5, message: state.textNewPost, likes: 155}]
            };
            stateCopy.textNewPost = " ";
            return stateCopy
        }

        case CHANGE_NEW_TEXT_CALLBACK: {
            return {...state, textNewPost: action.postNewText};
        }
        default:
            return state
    }
}