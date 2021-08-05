import React from "react";
import HeaderStyle from './Header.module.css';

export const Header=()=>{
   // debugger
    return(
          <header className={HeaderStyle.header}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwmALuU19xPRQx_5_ZQK8QqG5HpA79AD5Iw&usqp=CAU' alt="nothingSpecial"/>
          </header>
    );
}
