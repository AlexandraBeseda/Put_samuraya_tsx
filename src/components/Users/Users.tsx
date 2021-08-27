import React from "react";
import {UsersConnectMapPropTypes} from "./UsersContainer";
import s from "./Users.module.css"
import axios from "axios";
import userPhoto from "./../../assets/images/ironman-marvel-super-hero-earth-saver-avenger.png"


export class Users extends React.Component<UsersConnectMapPropTypes> {


    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                debugger
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    follow = (userID: number) => {
        this.props.follow(userID)
    }
    unFollow = (userID: number) => {
        this.props.unFollow(userID)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                debugger
                this.props.setUsers(response.data.items);
            })
    }

    render() {

        debugger
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>


                <div>
                    {pages.map(p => {
                        return <span
                            className={(this.props.currentPage === p) ? s.selectedPage : ""}
                            onClick={() => {
                                this.onPageChanged(p)
                            }}>{p}</span>
                    })}
                </div>
                {this.props.users.map((u) =>

                    <div key={u.id}>
                            <span>
                        <div>
                            <img src={u.photos.small ? u.photos.small : userPhoto} alt="yourFace"
                                 className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    this.unFollow(u.id)
                                }}>Follow</button>
                                : <button onClick={() => {
                                    this.follow(u.id)
                                }}>Unfollow</button>}
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
}
