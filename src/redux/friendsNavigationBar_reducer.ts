export type friendsNavigationBarType = {
    friendsNavigationBar:
        { friends: Array<HumanPropTypes> }
};
export type HumanPropTypes = {
    id: number,
    name: string,
    avatar: string
}


const initialState: friendsNavigationBarType = {
    friendsNavigationBar: {
        friends: [
            {id: 1, name: "Jeka", avatar: "https://twitchgid.ru/wp-content/uploads/2020/11/avi-6.jpeg"},
            {id: 2, name: "Lesya", avatar: "https://twitchgid.ru/wp-content/uploads/2020/11/avi-1.jpeg"},
            {id: 3, name: "Vera", avatar: "https://twitchgid.ru/wp-content/uploads/2020/11/avi-16.jpeg"}]
    }
}


export const friendsNavigationBar_reducer = (state: friendsNavigationBarType = initialState): friendsNavigationBarType => {

    return state;
}


