import {addPostAC} from "./mainContent_reducer";


/*export type MessagePropTypes = {
    id: number,
    message: string
};
export type DialogItemPropTypes = {
    id: number,
    name: string,
    avatar: string
};
export type DialogsPropTypes = {
    dialogsData: Array<DialogItemPropTypes>,
    messagesDataPosts: Array<MessagePropTypes>,
    messageDataNewPost: string,
};*/
/*type NewPostType = {
    id: number,
    message: string,
    likes: number
};*/
/*export type PostsDataArrayPropTypes = {
    textNewPost: string,
    postsData: Array<NewPostType>;
};*/


/*export type friendsNavigationBarType = { friends: Array<HumanPropTypes> };*/

/*export type HumanPropTypes = {
    id: number,
    name: string,
    avatar: string
}*/

/*export type RootStateType = {
    mainContent: PostsDataArrayPropTypes,
    dialogsPage: DialogsPropTypes,
     friendsNavigationBar: friendsNavigationBarType
}*/

/*export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextCallbackAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof changeNewMessageCallback>;*/

/*export type StoreType = {
    _state: RootStateType,
    _callSubscriber: () => void,
    subscribe: (observer: () => void) => void,
    getState: () => RootStateType,
    dispatch: (action: ActionsType) => void
}*/

/*export const store: StoreType = {
    _state: {

        mainContent: {
            textNewPost: "",
            postsData: [
                {id: 1, message: 'Hello!How are you?', likes: 10},
                {id: 2, message: 'I saw you yesterday', likes: 30},
                {id: 3, message: 'Buy some potatoes?', likes: 0},
                {id: 4, message: 'I want cheese', likes: 10},
                {id: 5, message: 'Hurry', likes: 100}
            ]
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Yauheni", avatar: "https://twitchgid.ru/wp-content/uploads/2020/11/avi-19.jpeg"},
                {id: 2, name: "Nina", avatar: "https://twitchgid.ru/wp-content/uploads/2020/11/avi-10.jpeg"},
                {id: 3, name: "Alina", avatar: "https://twitchgid.ru/wp-content/uploads/2020/11/avi-12.jpeg"},
                {id: 4, name: "Nasty", avatar: "https://twitchgid.ru/wp-content/uploads/2020/11/avi-18.jpeg"},
                {id: 5, name: "Ira", avatar: "https://twitchgid.ru/wp-content/uploads/2020/11/avi-6.jpeg"},
            ],
            messageDataNewPost: "",
            messagesDataPosts: [
                {id: 1, message: "Hi sweet!"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Go home!"},
                {id: 4, message: "Try again tomorrow."},
                {id: 5, message: "No."},
            ],
        },*/




        //это закоментил Паша
        // friendsNavigationBar: {
        //     friends: [
        //         {id: 1, name: "Jeka", avatar: "https://twitchgid.ru/wp-content/uploads/2020/11/avi-6.jpeg"},
        //         {id: 2, name: "Lesya", avatar: "https://twitchgid.ru/wp-content/uploads/2020/11/avi-1.jpeg"},
        //         {id: 3, name: "Vera", avatar: "https://twitchgid.ru/wp-content/uploads/2020/11/avi-16.jpeg"}]
        // }
   // },


   /* _callSubscriber() {
        console.log("state was changed")
    },*/
    /*   addPost() {
           const newPost: NewPostType = {
               id: 5,
               message: this._state.mainContent.textNewPost,
               likes: 155
           };
           this._state.mainContent.postsData.push(newPost);
           this._state.mainContent.textNewPost = "";
           this._callSubscriber();
       },

       changeNewTextCallback(newText: string) {
           this._state.mainContent.textNewPost = newText;
           this._callSubscriber();
       },

       addMessage() {
           const newMessage: MessagePropTypes =
               {
                   id: 6,
                   message: this._state.dialogsPage.messageDataNewPost
               };
           this._state.dialogsPage.messagesDataPosts.push(newMessage);
           this._state.dialogsPage.messageDataNewPost = "";
           this._callSubscriber();
       },
       changeNewMessageCallback(newMessage: string) {
           this._state.dialogsPage.messageDataNewPost = newMessage;
           this._callSubscriber();
       },*/


/*    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {

        this._state.mainContent = mainContent_reducer(this._state.mainContent, action);
        this._state.dialogsPage = dialogsPage_reducer(this._state.dialogsPage, action)
        this._callSubscriber();
    }*/
/*
}*/
