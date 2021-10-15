import {addPost, deletePost, mainContent_reducer} from "./mainContent_reducer";


let initialState = {
    postsData: [
        {id: 1, message: 'Hello!How are you?', likes: 10},
        {id: 2, message: 'I saw you yesterday', likes: 30},
        {id: 3, message: 'Buy some potatoes?', likes: 0},
        {id: 4, message: 'I want cheese', likes: 10},
        {id: 5, message: 'Hurry', likes: 100}
    ],
    usersProfiles: null,
    status: "",
}

test("Posts array should be incremented", () => {
    let action = addPost("NEW POST TEST");

    let newState = mainContent_reducer(initialState, action);

    expect(newState.postsData.length).toBe(6);
    expect(newState.postsData[5].message).toBe("NEW POST TEST");
})

test("New post name number 5 must be 'NEW POST TEST' ", () => {
    let action = addPost("NEW POST TEST");

    let newState = mainContent_reducer(initialState, action);

    expect(newState.postsData[5].message).toBe("NEW POST TEST");
})

test("Delete post by id ", () => {
    let action =deletePost(1);

    let newState = mainContent_reducer(initialState, action);

    expect(newState.postsData.length).toBe(4);
})