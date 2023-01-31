import React from "react";
import Bi from "./Img/odorBiMini.svg";


export default function Lcd(){
    
    return (
            <div className="container1">
                <div className="EcoViewLcd">
                    <div className="EcoViewBI">
                        <img style={{ marginTop: '30px' }} src={Bi} alt="로고" />
                    </div>
                    <div className="EcoList">
                        <ul>
                            <li className="Listwrap1">
                                <div className="ListText1">
                                    <div className="ListTitle">온도</div>
                                    <div>
                                        <span className="ListNumber1">28</span> <span className="ListSymbol">℃</span>
                                    </div>
                                </div>
                            </li>
                            <li className="Listwrap2">
                                <div className="ListText1">
                                    <div className="ListTitle">습도</div>
                                    <div>
                                        <span className="ListNumber1">28</span> <span className="ListSymbol">%</span>
                                    </div>
                                </div>
                            </li>
                            <li className="Listwrap3">
                                <div className="ListText1">
                                    <div className="ListTitle">암모니아</div>
                                    <div>
                                        <span className="ListNumber2">0.01</span> <span className="ListSymbol">ppm</span>
                                    </div>
                                </div>
                            </li>
                            <li className="Listwrap4">
                                <div className="ListText1">
                                    <div className="ListTitle">황화수소</div>
                                    <div>
                                        <span className="ListNumber2">0.01</span> <span className="ListSymbol">ppm</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>

        )
    }