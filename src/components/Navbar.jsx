import React from "react";
import * as Images from "../utils";

export default function Navbar() {
    return (
        <nav className="w-[50px] bg-[#212143] opacity-80">
            <div className="flex h-full py-[40px] items-center flex-col justify-between">
                <div className="flex flex-col items-center gap-[60px]">
                    <img src={Images.Logo} className="h-[41px]" alt="" />
                    <ul className="flex flex-col gap-[40px] items-center">
                        <li>
                            <img
                                src={Images.HomeIcon}
                                className="w-[20px] h-[20px]"
                                alt=""
                            />
                        </li>
                        <li>
                            <img
                                src={Images.Settings}
                                className="w-[20px] h-[20px]"
                                alt=""
                            />
                        </li>
                        <li>
                            <img
                                src={Images.Phone}
                                className="w-[20px] h-[20px]"
                                alt=""
                            />
                        </li>
                        <li>
                            <img
                                src={Images.Video}
                                className="w-[20px] h-[20px]"
                                alt=""
                            />
                        </li>
                    </ul>
                </div>
                <div>
                    <img
                        src={Images.Logout}
                        className="w-[20px] h-[20px]"
                        alt=""
                    />
                </div>
            </div>
        </nav>
    );
}
