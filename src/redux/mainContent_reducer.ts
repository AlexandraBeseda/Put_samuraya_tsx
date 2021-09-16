import {ActionsType} from "./reduxStore";
import {ChangeEvent} from "react";
import {Dispatch} from "redux";
import {userAPI} from "../api/api";

export const addPost = () => ({type: "ADD_POST"} as const);

export const changeNewTextCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
    return {
        type: "CHANGE_NEW_TEXT_CALLBACK",
        postNewText: e.currentTarget.value,
    } as const
}

export const setUserProfile = (userProfiles: ProfileType) => {
    return {
        type: "SET_USER_PROFILE",
        usersProfiles: userProfiles,
    } as const
}

export type ProfileType = {
    userId: number,
    aboutMe: string,
    //lookingForAJob: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: null | string,
    fullName: string,//уточнить всегда ли есть имя
    contacts: {
        github: null | string,
        vk: null | string,
        facebook: null | string,
        instagram: null | string,
        twitter: null | string,
        website: null | string,
        youtube: null | string,
        mainLink: null | string,
    }
    photos:
        {
            small: string ,
            large: string ,
        }
}

export type PostsDataArrayPropTypes = {
    textNewPost: string,
    postsData: Array<NewPostType>,
    usersProfiles: ProfileType | null,
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
    ],
    usersProfiles: null,
};

export const mainContent_reducer = (state: PostsDataArrayPropTypes = initialState, action: ActionsType): PostsDataArrayPropTypes => {
    switch (action.type) {
        case "ADD_POST": {
            let stateCopy = {
                ...state, postsData: [...state.postsData,
                    {id: 5, message: state.textNewPost, likes: 155}]
            };
            stateCopy.textNewPost = " ";
            return stateCopy
        }
        case "CHANGE_NEW_TEXT_CALLBACK": {
            return {...state, textNewPost: action.postNewText};
        }
        case "SET_USER_PROFILE": {
            debugger
            return {...state, usersProfiles: action.usersProfiles}
        }
        default:
            return state
    }
}


export const getUserProfileThunkCreator = (userID: string) => {
    return (dispatch: Dispatch) => {
        userAPI.getUserProfile(userID)
            .then(data => {dispatch(setUserProfile(data));
            })
    }
}