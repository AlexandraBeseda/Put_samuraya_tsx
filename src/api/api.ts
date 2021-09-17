import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "cc3df63a-f5f2-455f-9c95-f8ce5b37aa87",
    }
})

export const userAPI = {
    getUsers(pageNumber: number = 1, pageSize: number = 10) {
        return instance
            .get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data);
    },

    followUser(userId: number) {
        return instance
            .post(`follow/${userId}`)
            //мы отправляем в гет запросе параметр, в котором указываем, что мы авторизованы
            //т.е. вместе с кукис
            //браузер не отправляем куку автоматически
            //только с данным параметром
            .then(response => response.data);
    },

    unFollowUser(userId: number) {
        return instance
            .delete(`follow/${userId}`)
            .then(response => response.data);
    },

    getUserProfile(userId: string) {
        console.warn("Obsolete method. Please use profileApi object.")
        return profileAPI.getUserProfile(userId);
    },

}

export const profileAPI = {

    getUserProfile(userId: string) {

        return instance
            .get(`profile/` + userId)
            .then(response => response.data);
    },
    getUserStatus(userId: string) {
        debugger
        return instance
            .get(`profile/status/` + userId);
    },
    updateUserStatus(status: string) {
        return instance
            .put(`profile/status`, {status: status});
    },
}

export const authAPI = {

    login() {
        return instance
            .get(`auth/me`)
            .then(response => response.data);
        //мы отправляем в гет запросе параметр, в котором указываем, что мы авторизованы
        //т.е. вместе с кукис
        //браузер не отправляем куку автоматически
        //только с данным параметром
    }
}



