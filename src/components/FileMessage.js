import React from "react";
import moment from "moment";
import { ChatIcon, ChatIcon2, PdfLogo } from "../utils";

export default function FileMessage({ message, status }) {
    return status === "owner" ? (
        <li className="owner">
            <div className="flex flex-col gap-[10px]">
                <div className="bg-white p-[16px] flex flex-col gap-[10px] items-center justify-center relative z-[2] rounded-[10px]">
                    <img
                        src={PdfLogo}
                        className="object-cover rounded-[10px]"
                        alt=""
                    />
                    <p className="text-[7px]">
                        {message.files
                            .replace(
                                "http://localhost:8000/media/conversation_files/",
                                ""
                            )
                            .replaceAll("_", " ")}
                    </p>
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
            <div className="flex flex-col gap-[10px]">
                <div className="bg-white p-[16px] flex flex-col gap-[10px] items-center justify-center relative z-[2] rounded-[10px]">
                    <img
                        src={PdfLogo}
                        className="object-cover rounded-[10px]"
                        alt=""
                    />
                    <p className="text-[7px]">
                        {message.files
                            .replace(
                                "http://localhost:8000/media/conversation_files/",
                                ""
                            )
                            .replaceAll("_", " ")}
                    </p>
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
}
