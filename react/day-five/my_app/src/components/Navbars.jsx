// import react from './react';
import {AppContext} from "../contexts/AppContext"
import { useContext } from "react";
import styles from './Navbar.module.css'
import { AuthContext } from "../contexts/AuthContext";

function Navbars(){
    const vals= useContext(AppContext);
    const authVal=useContext(AuthContext);
    console.log("in navbar.jsx", vals.theme,authVal.isAuth);
    return(
        <div>
            <div className={vals.theme==="light" ? styles.navlight : styles.navdark} >
            <p>Navbar</p>
            <p>{"theme is "+  vals.theme }</p>
            <p> Auth :- {authVal.isAuth ? "Yes" : "No" } </p>
            </div>
        </div>
    )
}

export default Navbars;