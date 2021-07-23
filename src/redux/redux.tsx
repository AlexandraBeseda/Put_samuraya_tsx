

export type MessagePropTypes = {
    id: number,
    message: string
};
export type DialogItemPropTypes = {
    id: number,
    name: string,
    avatar: string
};
type DialogsPropTypes = {
    dialogsData: Array<DialogItemPropTypes>,
};
type NewPostType = {
    id: number,
    message: string,
    likes: number
};
export type PostsDataArrayPropTypes = {
    messageForNewPost: string,
    postsData: Array<NewPostType>;
};


export type SideBarType = { friends: Array<HumanPropTypes> };
export type HumanPropTypes = {
    id: number,
    name: string,
    avatar: string
}

export type RootStateType = {
    mainContent: PostsDataArrayPropTypes,
    dialogsPage: DialogsPropTypes,
    messagesData: Array<MessagePropTypes>,
    messageDataForNewPost: string,
    sideBar: SideBarType
}


export type StoreType = {
    _state: RootStateType,
    addPost:()=>void
    changeNewTextCallback:(newText: string)=>void
    addMessage:()=>void
    changeNewMessageCallback:(newMessage: string)=>void
    _renderEntireTree:()=>void
    subscriber:(observer: () => void)=>void
    getState:()=>RootStateType
}

export const store:StoreType = {
    _state: {

        mainContent: {
            messageForNewPost: "",
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
            ]
        },
        messageDataForNewPost: "Here!",
        messagesData: [
            {id: 1, message: "Hi sweet!"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Go home!"},
            {id: 4, message: "Try again tomorrow."},
            {id: 5, message: "No."},
        ],

        sideBar: {
            friends: [
                {id: 1, name: "Jeka", avatar: "https://twitchgid.ru/wp-content/uploads/2020/11/avi-6.jpeg"},
                {id: 2, name: "Lesya", avatar: "https://twitchgid.ru/wp-content/uploads/2020/11/avi-1.jpeg"},
                {id: 3, name: "Vera", avatar: "https://twitchgid.ru/wp-content/uploads/2020/11/avi-16.jpeg"}]
        }
    },
    addPost () {
        const newPost: NewPostType = {
            id: 5,
            message: this._state.mainContent.messageForNewPost,
            likes: 155
        };
        this._state.mainContent.postsData.push(newPost);
        this._state.mainContent.messageForNewPost = "";
        this._renderEntireTree();
    },
    changeNewTextCallback(newText: string){
        this._state.mainContent.messageForNewPost = newText;
        this._renderEntireTree();
    },
    addMessage() {
        const newMessage: MessagePropTypes =
            {
                id: 6,
                message: this._state.messageDataForNewPost
            };
        this._state.messagesData.push(newMessage);
        this._state.messageDataForNewPost = "";
        this._renderEntireTree();
    },
    changeNewMessageCallback(newMessage: string) {
       this._state.messageDataForNewPost = newMessage;
        this._renderEntireTree();
    },
    _renderEntireTree() {
        console.log("state was changed")
    },


    subscriber(observer) {
        this._renderEntireTree = observer;
    },

    getState(){
        return this._state;
    }
}