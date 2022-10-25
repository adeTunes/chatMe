import React from "react";
import * as Images from "../utils";

export default function Aside({ handleViewProfileClick }) {
    return (
        <aside className="w-[300px] pt-[40px] overflow-auto flex flex-col gap-[25px] items-start  bg-[#212143]">
            <div
                onClick={handleViewProfileClick}
                className="flex items-center cursor-pointer px-[25px] gap-[12px]">
                <img
                    src={Images.ProfilePicture}
                    className="rounded-[50%] w-[50px] h-[50px]"
                    alt=""
                />
                <div className="flex flex-col items-start gap-[4px]">
                    <p className="font-[600] text-[14px] leading-[24px] text-[#fff]">
                        Tunes Adeks
                    </p>
                    <p className="font-[400] text-[12px] leading-[20px] text-[#9FA19C]">
                        Hey there! I use ChatMe
                    </p>
                </div>
            </div>
            <div className="px-[25px]">
                <div className="w-full flex items-center gap-[15px] h-[50px] opacity-50 bg-[#F9FAFB] rounded-[15px] border border-solid border-[#EBEBEB] p-[10px] ">
                    <img src={Images.SearchIcon} className="w-[16px]" alt="" />
                    <input
                        type="search"
                        placeholder="search"
                        className="w-full h-full outline-0"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-[15px] w-full items-start overflow-auto">
                <p className="font-semibold px-[25px] text-[14px] leading-[24px] text-[#fff]">
                    Recent Chats
                </p>
                <ul className="flex flex-col gap-[10px] w-full pb-[20px] items-start overflow-auto">
                    <li className="flex relative px-[25px] active py-[8px] w-full items-center gap-[12px]">
                        <img
                            src={Images.Person4}
                            className="rounded-[50%] object-cover w-[50px] h-[50px]"
                            alt=""
                        />
                        <img
                            src={Images.Online}
                            className="absolute bottom-[10px] left-[60px]"
                            alt=""
                        />
                        <div className="flex flex-col items-start gap-[4px]">
                            <p className="font-[600] text-[14px] leading-[24px] text-[#fff]">
                                James Brits
                            </p>
                            <p className="font-[400] text-[12px] leading-[20px] text-[#9FA19C]">
                                Hi love! How are you doing t...
                            </p>
                        </div>
                    </li>
                    <li className="flex relative px-[25px] py-[8px] items-center gap-[12px]">
                        <img
                            src={Images.Person3}
                            className="rounded-[50%] object-cover w-[50px] h-[50px]"
                            alt=""
                        />
                        <img
                            src={Images.Offline}
                            className="absolute bottom-[10px] left-[60px]"
                            alt=""
                        />
                        <div className="flex flex-col items-start gap-[4px]">
                            <p className="font-[600] text-[14px] leading-[24px] text-[#fff]">
                                Abraham Adeks
                            </p>
                            <p className="font-[400] text-[12px] leading-[20px] text-[#9FA19C]">
                                Hey! Good evening. Still expec...
                            </p>
                        </div>
                    </li>
                    <li className="flex relative px-[25px] py-[8px] items-center gap-[12px]">
                        <img
                            src={Images.Person5}
                            className="rounded-[50%] object-cover w-[50px] h-[50px]"
                            alt=""
                        />
                        <img
                            src={Images.Online}
                            className="absolute bottom-[10px] left-[60px]"
                            alt=""
                        />
                        <div className="flex flex-col items-start gap-[4px]">
                            <p className="font-[600] text-[14px] leading-[24px] text-[#fff]">
                                Davies Stormborn
                            </p>
                            <p className="font-[400] text-[12px] leading-[20px] text-[#9FA19C]">
                                Hey! Good evening. Still expec...
                            </p>
                        </div>
                    </li>
                    <li className="flex relative px-[25px] py-[8px] items-center gap-[12px]">
                        <img
                            src={Images.Person6}
                            className="rounded-[50%] object-cover w-[50px] h-[50px]"
                            alt=""
                        />
                        <img
                            src={Images.Offline}
                            className="absolute bottom-[10px] left-[60px]"
                            alt=""
                        />
                        <div className="flex flex-col items-start gap-[4px]">
                            <p className="font-[600] text-[14px] leading-[24px] text-[#fff]">
                                Abraham Adeks
                            </p>
                            <p className="font-[400] text-[12px] leading-[20px] text-[#9FA19C]">
                                Hey! Good evening. Still expec...
                            </p>
                        </div>
                    </li>
                    <li className="flex relative px-[25px] py-[8px] items-center gap-[12px]">
                        <img
                            src={Images.Person7}
                            className="rounded-[50%] object-cover w-[50px] h-[50px]"
                            alt=""
                        />
                        <img
                            src={Images.Online}
                            className="absolute bottom-[10px] left-[60px]"
                            alt=""
                        />
                        <div className="flex flex-col items-start gap-[4px]">
                            <p className="font-[600] text-[14px] leading-[24px] text-[#fff]">
                                Koder Black
                            </p>
                            <p className="font-[400] text-[12px] leading-[20px] text-[#9FA19C]">
                                Hey! Good evening. Still expec...
                            </p>
                        </div>
                    </li>
                    <li className="flex relative px-[25px] py-[8px] items-center gap-[12px]">
                        <img
                            src={Images.Person8}
                            className="rounded-[50%] object-cover w-[50px] h-[50px]"
                            alt=""
                        />
                        <img
                            src={Images.Offline}
                            className="absolute bottom-[10px] left-[60px]"
                            alt=""
                        />
                        <div className="flex flex-col items-start gap-[4px]">
                            <p className="font-[600] text-[14px] leading-[24px] text-[#fff]">
                                Sansa Stark
                            </p>
                            <p className="font-[400] text-[12px] leading-[20px] text-[#9FA19C]">
                                Hey! Good evening. Still expec...
                            </p>
                        </div>
                    </li>
                    <li className="flex relative px-[25px] py-[8px] items-center gap-[12px]">
                        <img
                            src={Images.Person9}
                            className="rounded-[50%] object-cover w-[50px] h-[50px]"
                            alt=""
                        />
                        <img
                            src={Images.Online}
                            className="absolute bottom-[10px] left-[60px]"
                            alt=""
                        />
                        <div className="flex flex-col items-start gap-[4px]">
                            <p className="font-[600] text-[14px] leading-[24px] text-[#fff]">
                                Ayra Savage
                            </p>
                            <p className="font-[400] text-[12px] leading-[20px] text-[#9FA19C]">
                                Hey! Good evening. Still expec...
                            </p>
                        </div>
                    </li>
                    <li className="flex relative px-[25px] py-[8px] items-center gap-[12px]">
                        <img
                            src={Images.Person10}
                            className="rounded-[50%] object-cover w-[50px] h-[50px]"
                            alt=""
                        />
                        <img
                            src={Images.Offline}
                            className="absolute bottom-[10px] left-[60px]"
                            alt=""
                        />
                        <div className="flex flex-col items-start gap-[4px]">
                            <p className="font-[600] text-[14px] leading-[24px] text-[#fff]">
                                Abraham Adeks
                            </p>
                            <p className="font-[400] text-[12px] leading-[20px] text-[#9FA19C]">
                                Hey! Good evening. Still expec...
                            </p>
                        </div>
                    </li>
                    <li className="flex relative px-[25px] py-[8px] items-center gap-[12px]">
                        <img
                            src={Images.Person11}
                            className="rounded-[50%] object-cover w-[50px] h-[50px]"
                            alt=""
                        />
                        <img
                            src={Images.Online}
                            className="absolute bottom-[10px] left-[60px]"
                            alt=""
                        />
                        <div className="flex flex-col items-start gap-[4px]">
                            <p className="font-[600] text-[14px] leading-[24px] text-[#fff]">
                                Abraham Adeks
                            </p>
                            <p className="font-[400] text-[12px] leading-[20px] text-[#9FA19C]">
                                Hey! Good evening. Still expec...
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
