export const addMessage = (newMessage: string) => {
    return {
        type: "samuray/dialogsPage/ADD_MESSAGE",
        newMessage
    } as const
}

export type DialogsPropTypes = {
    dialogsData: Array<DialogItemPropTypes>,
    messagesDataPosts: Array<MessagePropTypes>,

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
};


export type DialogsReducerActionsType = ReturnType<typeof addMessage>;

export const dialogsPage_reducer = (state: DialogsPropTypes = initialState, action: DialogsReducerActionsType): DialogsPropTypes => {

    switch (action.type) {
        case "samuray/dialogsPage/ADD_MESSAGE": {
            return {
                ...state,
                messagesDataPosts:
                    [...state.messagesDataPosts,
                        {id: 6, message: action.newMessage}]
            }
        }
        default:
            return state
    }
}