import React from "react";
import {UsersConnectMapPropTypes} from "./UsersContainer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User/User";

type UsersAPIComponentPropType = {
    onPageChanged: (pageNumber: number) => void
}

export const Users: React.FC<UsersConnectMapPropTypes & UsersAPIComponentPropType> = ({
                                                                                          totalUsersCount,
                                                                                          pageSize,
                                                                                          currentPage,
                                                                                          onPageChanged,
                                                                                          users,
                                                                                          follow,
                                                                                          unFollow,
                                                                                          followingInProgress,
                                                                                          ...props
                                                                                      }) => {

    return (
        <div>
            <Paginator totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            <div>
                {users.map((u) =>
                <User key={u.id}
                      user={u}
                      follow={follow}
                      unFollow={unFollow}
                      followingInProgress={followingInProgress}/>
            )
            }
            </div>
        </div>
    );

}
