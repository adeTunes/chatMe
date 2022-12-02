import moment from "moment";
import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import FileMessage from "./FileMessage";
import ImageMessage from "./ImageMessage";
import TextMessage from "./TextMessage";

export default function ChatMessages() {
    const { user, groupByDate } = useContext(AuthContext);

    return (
        <div className="flex-1 overflow-auto">
            <ul className="px-[30px] py-[5px] flex flex-col gap-[30px]">
                {Object.entries(groupByDate)
                    .flat()
                    .map((item, idx) =>
                        Array.isArray(item) ? (
                            item.map((message) =>
                                message.text &&
                                !message.files &&
                                !message.images ? (
                                    user.id === message.sender ? (
                                        <TextMessage
                                            key={message.url}
                                            message={message}
                                            status="owner"
                                        />
                                    ) : (
                                        <TextMessage
                                            key={message.url}
                                            message={message}
                                            status="received"
                                        />
                                    )
                                ) : !message.text &&
                                  !message.files &&
                                  message.images ? (
                                    user.id === message.sender ? (
                                        <ImageMessage
                                            key={message.url}
                                            message={message}
                                            status="owner"
                                        />
                                    ) : (
                                        <ImageMessage
                                            key={message.url}
                                            message={message}
                                            status="received"
                                        />
                                    )
                                ) : !message.text &&
                                  message.files &&
                                  !message.images ? (
                                    user.id === message.sender ? (
                                        <FileMessage
                                            key={message.url}
                                            message={message}
                                            status="owner"
                                        />
                                    ) : (
                                        <FileMessage
                                            key={message.url}
                                            message={message}
                                            status="received"
                                        />
                                    )
                                ) : null
                            )
                        ) : (
                            <p key={idx} className="flex justify-center">
                                <span className="bg-[#54565B] text-[13px] text-[#9FA19C] font-[400] px-[16px] opacity-50 rounded-[15px]">
                                    {moment(new Date(item))
                                        .calendar()
                                        .includes("Yesterday") ||
                                    moment(new Date(item))
                                        .calendar()
                                        .includes("Today")
                                        ? moment(new Date(item))
                                              .calendar()
                                              .split(" ")[0]
                                        : moment(new Date(item))
                                              .format("ll")
                                              .includes("2022")
                                        ? moment(new Date(item))
                                              .format("ll")
                                              .replace(", 2022", "")
                                        : moment(new Date(item)).format("ll")}
                                </span>
                            </p>
                        )
                    )}
            </ul>
        </div>
    );
}
