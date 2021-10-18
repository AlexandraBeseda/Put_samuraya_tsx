import React from "react";
import s from "./../Users.module.css"
import userPhoto from "./../../../assets/images/ironman-marvel-super-hero-earth-saver-avenger.png";
import {NavLink} from "react-router-dom";
import {UserTypes} from "../../../redux/users_reducer";


type UserPropTypes = {
    user: UserTypes
    followingInProgress: number[],
    follow: (userID: number) => void,
    unFollow: (userID: number) => void,
}

export const User: React.FC<UserPropTypes> = ({
                                                  user, followingInProgress,
                                                  follow,
                                                  unFollow
                                              }) => {
    return (
        <div>
            <span>
                        <div>
                            <NavLink to={"/profile/" + user.id}><img
                                src={user.photos.small ? user.photos.small : userPhoto}
                                alt="yourFace"
                                className={s.userPhoto}/></NavLink>
                        </div>
                        <div>
                            {user.followed ?
                                <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    unFollow(user.id)
                                }}>Unfollow</button>
                                :
                                <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    follow(user.id)
                                }}>Follow</button>}
                        </div>
                    </span>
            <span>
                                <span>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                    <div>{}</div>
                                    <div>{}</div>
                                </span>
                            </span>


        </div>
    );

}