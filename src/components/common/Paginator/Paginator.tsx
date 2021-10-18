import React from "react";
import s from "./Paginator.module.css";

export type PaginatorPropTypes = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
}

export const Paginator: React.FC<PaginatorPropTypes> = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span key={p.toString()}
                                 className={(currentPage === p) ? s.selectedPage : ""}
                                 onClick={() => {
                                     onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
        </div>
    );
}