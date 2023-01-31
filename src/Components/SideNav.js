import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Img/odor-bi.svg";

import {faUnlockKeyhole} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function SideNav(){
    return (
        <div className="sidenav-container">
            <div className="sidenav-wrap">
                <div className="sidenavList">
                    <Link to='/LCD'>
                        <img style={{ marginTop: '32px' }} 
                             src={Logo} alt="로고" />
                    </Link>
                    <ul>
                        <li className="navMeunBtnWrap">
                            <Link className="navMenuBtn" to="/LCD">
                                <FontAwesomeIcon icon={faUnlockKeyhole} />
                                <span>에코뷰 LCD</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}