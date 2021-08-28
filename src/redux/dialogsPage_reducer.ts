import {ActionsType} from "./reduxStore";

export const addMessage = () => {
    return {
        type: "ADD_MESSAGE",
    } as const
}
export const changeNewMessageCallback = (newMessage:string) => {
    return {
        type: "CHANGE_NEW_MESSAGE_CALLBACK",
        newMessage: newMessage,
    } as const
}
export type DialogsPropTypes = {
    dialogsData: Array<DialogItemPropTypes>,
    messagesDataPosts: Array<MessagePropTypes>,
    messageDataNewPost: string,
}
export type MessagePropTypes = {
    id: number,
    message: string,
};
export type DialogItemPropTypes = {
    id: number,
    name: string,
    avatar: string
};

const initialState = {
    dialogsData: [
        {id: 1, name: "Yauheni", avatar: "https://twitchgid.ru/wp-content/uploads/2020/11/avi-19.jpeg"},
        {id: 2, name: "Nina", avatar: "https://twitchgid.ru/wp-content/uploads/2020/11/avi-10.jpeg"},
        {id: 3, name: "Alina", avatar: "https://twitchgid.ru/wp-content/uploads/2020/11/avi-12.jpeg"},
        {id: 4, name: "Nasty", avatar: "https://twitchgid.ru/wp-content/uploads/2020/11/avi-18.jpeg"},
        {id: 5, name: "Ira", avatar: "https://twitchgid.ru/wp-content/uploads/2020/11/avi-6.jpeg"},
    ],
    messagesDataPosts: [
        {id: 1, message: "Hi sweet!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Go home!"},
        {id: 4, message: "Try again tomorrow."},
        {id: 5, message: "No."},
    ],
    messageDataNewPost: "",
};

export const dialogsPage_reducer = (state: DialogsPropTypes = initialState, action: ActionsType): DialogsPropTypes => {

    switch (action.type) {
        case "ADD_MESSAGE": {
            let stateCopy = {
                ...state,
                messagesDataPosts:
                    [...state.messagesDataPosts,
                        {id: 6, message: state.messageDataNewPost}]
            };
            stateCopy.messageDataNewPost = " ";
            return stateCopy
        }
        case "CHANGE_NEW_MESSAGE_CALLBACK": {
            return {...state, messageDataNewPost: action.newMessage};
        }
        default:
            return state
    }
}