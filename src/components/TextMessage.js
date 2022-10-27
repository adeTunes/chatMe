import React from "react";
import moment from "moment";
import { ChatIcon, ChatIcon2 } from "../utils";

export default function TextMessage({ message, status }) {
    return status === "owner" ? (
        <li className="owner">
            <div className="max-w-[55%] flex flex-col gap-[10px] items-start">
                <p className="relative leading-[20px] text-[13px] text-[#212143] font-normal bg-[#FDFDFD] p-[10px] rounded-[13px]">
                    <span>{message.text}</span>
                    <img src={ChatIcon} alt="" />
                </p>
                <p className="bg-[#FDFDFD] text-[13px] px-[6px] opacity-50 rounded-[15px]">
                    {moment(message.date_sent).format("LT")}
                </p>
            </div>
        </li>
    ) : (
        <li key={message.url} className="received">
            <div className="flex max-w-[60%] gap-[10px] flex-col">
                <p className="relative leading-[20px] text-[13px] text-[#212143] font-normal bg-[#FDFDFD] p-[10px] rounded-[13px]">
                    <span>{message.text}</span>
                    <img src={ChatIcon2} alt="" />
                </p>
                <p
                    id="received-date"
                    className="bg-[#FDFDFD] text-[13px] px-[6px] opacity-50 rounded-[15px]">
                    {moment(message.date_sent).format("LT")}
                </p>
            </div>
        </li>
    );

    // <li className={status}>
    //     <div className="flex max-w-[60%] gap-[10px] flex-col">
    //         <p className="relative leading-[20px] text-[13px] text-[#212143] font-normal bg-[#FDFDFD] p-[10px] rounded-[13px]">
    //             <span>{message.text}</span>
    //             <img src={icon} alt="" />
    //         </p>
    //         <p
    //             id="received-date"
    //             className="bg-[#FDFDFD] text-[13px] px-[6px] opacity-50 rounded-[15px]">
    //             {moment(message.date_sent).format("LT")}
    //         </p>
    //     </div>
    // </li>
}
