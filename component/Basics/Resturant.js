import React, { useState } from "react";
import "./Style.css"
import Menu from "./MenuApi"
import MeanuCard from "./MeanuCard";
import Navbar from "./Navbar";


const uniqueList = [...new Set(
    Menu.map((curElem) => {
    return curElem.category
})
),
    "All",
];
// console.log(uniqueList)

const Resturant = () => {

    const[meanuData, setMenuData]= useState(Menu)
    const[menuList, setmenuList] = useState(uniqueList)
    // console.log(meanuData)

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        }) ;
        setMenuData(updatedList)
    }

    return (
        <div>
            <Navbar filterItem= {filterItem} menuList={menuList}/>
            <MeanuCard meanuData={meanuData}/>
        </div>
        
    );
};

export default Resturant;