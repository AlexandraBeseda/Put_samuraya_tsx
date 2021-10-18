import {Dispatch} from "redux";
import {profileAPI, userAPI} from "../api/api";
import {setStatus} from "./users_reducer";


export const addPost = (newPost: string) => ({
    type: "samuray/main_content/ADD_POST", newPost
} as const);
export const deletePost = (postId: number) => ({
    type: "samuray/main_content/DELETE_POST", postId
} as const);

export const setUserProfile = (userProfiles: ProfileType) => ({
    type: "samuray/main_content/SET_USER_PROFILE", usersProfiles: userProfiles
} as const)


export type ProfileType = {
    userId: number,
    aboutMe: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: null | string,
    fullName: string,
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

export type MainContentReducerActionsType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>;

export const mainContent_reducer = (state: PostsDataArrayPropTypes = initialState, action: MainContentReducerActionsType): PostsDataArrayPropTypes => {
    switch (action.type) {
        case "samuray/main_content/ADD_POST": {
            let stateCopy = {
                ...state, postsData: [...state.postsData,
                    {id: 5, message: action.newPost, likes: 155}]
            };
            return stateCopy
        }
        case "samuray/main_content/SET_USER_PROFILE": {
            return {...state, usersProfiles: action.usersProfiles}
        }
        case "samuray/users/SET_STATUS": {
            return {...state, status: action.status}
        }
        case "samuray/main_content/DELETE_POST": {
            return {...state, postsData: state.postsData.filter(p => p.id !== action.postId)}
        }
        default:
            return state
    }
}


export const getUserProfileThunkCreator = (userID: string) => {
    return async (dispatch: Dispatch) => {
        let response = await userAPI.getUserProfile(userID);
        dispatch(setUserProfile(response));
    }
}

export const getUserStatusTC = (userID: string) => {
    return async (dispatch: Dispatch) => {
        let response = await profileAPI.getUserStatus(userID);
        dispatch(setStatus(response.data))
    }
}

export const updateUserStatusTC = (status: string) => {
    return async (dispatch: Dispatch) => {
        let response =  await profileAPI.updateUserStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}