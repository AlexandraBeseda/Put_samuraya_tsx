import React from "react";
import s from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt="#" className={s.themeImg}
                     src='https://st2.depositphotos.com/1021014/7859/i/600/depositphotos_78597430-stock-photo-nature-background-panorama.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
                {/*
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xziIGkclzhD48fUCxhNpPVlA-rgW7wDIboEKN-lIG9m1HZmMy-w8zPSNtTguFprxb0E&usqp=CAU'/>
*/}
            </div>
        </div>


    );
}