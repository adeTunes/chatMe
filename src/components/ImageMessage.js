import React from "react";
import moment from "moment";
import { ChatIcon, ChatIcon2 } from "../utils";

export default function ImageMessage({ message, status }) {
    return status === "owner" ? (
        <li className="owner">
            <div className="flex flex-col gap-[10px] w-[48%] max-w-[338px]">
                <div className="bg-white p-[4px] relative z-[2] rounded-[10px]">
                    <img
                        src={message.images}
                        className="object-cover w-full rounded-[10px]"
                        alt=""
                    />
                    <img
                        className="absolute bottom-[-13px] z-[-1] right-[-15px]"
                        src={ChatIcon}
                        alt=""
                    />
                </div>
                <p className="bg-[#FDFDFD] self-start text-[13px] px-[6px] opacity-50 rounded-[15px]">
                    {moment(message.date_sent).format("LT")}
                </p>
            </div>
        </li>
    ) : (
        <li className="received">
            <div className="flex flex-col gap-[10px] w-[48%] max-w-[338px]">
                <div className="bg-white p-[4px] relative z-[2] rounded-[10px]">
                    <img
                        src={message.images}
                        className="object-cover w-full rounded-[10px]"
                        alt=""
                    />
                    <img
                        className="absolute bottom-[-13px] z-[-1] left-[-15px]"
                        src={ChatIcon2}
                        alt=""
                    />
                </div>
                <p className="bg-[#FDFDFD] self-end text-[13px] px-[6px] opacity-50 rounded-[15px]">
                    {moment(message.date_sent).format("LT")}
                </p>
            </div>
        </li>
    );

    // <li className={status}>
    //     <div className="flex flex-col gap-[10px] w-[48%] max-w-[338px]">
    //         <div className="bg-white p-[4px] relative z-[2] rounded-[10px]">
    //             <img
    //                 src={message.images}
    //                 className="object-cover w-full rounded-[10px]"
    //                 alt=""
    //             />
    //             <img
    //                 className="absolute bottom-[-13px] z-[-1] right-[-15px]"
    //                 src={icon}
    //                 alt=""
    //             />
    //         </div>
    //         <p className="bg-[#FDFDFD] self-start text-[13px] px-[6px] opacity-50 rounded-[15px]">
    //             {moment(message.date_sent).format("LT")}
    //         </p>
    //     </div>
    // </li>
}
