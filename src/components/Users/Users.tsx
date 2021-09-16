import React from "react";
import {UsersConnectMapPropTypes} from "./UsersContainer";
import s from "./Users.module.css"
import userPhoto from "./../../assets/images/ironman-marvel-super-hero-earth-saver-avenger.png";
import {NavLink} from "react-router-dom";


type UsersAPIComponentPropType = {
    onPageChanged: (pageNumber: number) => void
}

export const Users: React.FC<UsersConnectMapPropTypes & UsersAPIComponentPropType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span key={p.toString()}
                                 className={(props.currentPage === p) ? s.selectedPage : ""}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {props.users.map((u) =>

                <div key={u.id}>
                            <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}><img src={u.photos.small ? u.photos.small : userPhoto}
                                                                  alt="yourFace"
                                                                  className={s.userPhoto}/></NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.unFollow(u.id)}}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{}</div>
                                    <div>{}</div>
                                </span>
                            </span>
                </div>
            )
            }
        </div>
    );

}
