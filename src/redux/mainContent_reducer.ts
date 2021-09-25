import {ActionsType} from "./reduxStore";
import {Dispatch} from "redux";
import {profileAPI, userAPI} from "../api/api";
import {setStatus} from "./users_reducer";

export const addPost = (newPost: string) => ({type: "ADD_POST", newPost} as const);

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
            small: string,
            large: string,
        }
}

export type PostsDataArrayPropTypes = {
    postsData: Array<NewPostType>,
    usersProfiles: ProfileType | null,
    status: string,
}

export type NewPostType = {
    id: number,
    message: string,
    likes: number
}

const initialState: PostsDataArrayPropTypes = {
    postsData: [
        {id: 1, message: 'Hello!How are you?', likes: 10},
        {id: 2, message: 'I saw you yesterday', likes: 30},
        {id: 3, message: 'Buy some potatoes?', likes: 0},
        {id: 4, message: 'I want cheese', likes: 10},
        {id: 5, message: 'Hurry', likes: 100}
    ],
    usersProfiles: null,
    status: "",
};

export const mainContent_reducer = (state: PostsDataArrayPropTypes = initialState, action: ActionsType): PostsDataArrayPropTypes => {
    switch (action.type) {
        case "ADD_POST": {
            let stateCopy = {
                ...state, postsData: [...state.postsData,
                    {id: 5, message: action.newPost, likes: 155}]
            };
            //stateCopy.textNewPost = " ";
            return stateCopy
        }

        case "SET_USER_PROFILE": {
            return {...state, usersProfiles: action.usersProfiles}
        }
        case "SET_STATUS": {
            debugger
            return {...state, status: action.status}
        }
        default:
            return state
    }
}


export const getUserProfileThunkCreator = (userID: string) => {
    return (dispatch: Dispatch) => {
        userAPI.getUserProfile(userID)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}

export const getUserStatusTC = (userID: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserStatus(userID)
            .then(response => {
                debugger
                dispatch(setStatus(response.data));
            })
    }
}

export const updateUserStatusTC = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateUserStatus(status)
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}