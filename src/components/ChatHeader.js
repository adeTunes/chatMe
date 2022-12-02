import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Offline, PhoneChat, VideoChat } from "../utils";
import OptionsMenu from "./ChatOptions";

export default function ChatHeader({ setAnchorEl }) {
    const {
        handleVoiceCallOpen,
        handleVideoCallOpen,
        start,
        user,
        currentConversation,
        usersDetails,
    } = useContext(AuthContext);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <div className="chat-header flex justify-between px-[40px] py-[10px]">
            <div className="flex relative items-center gap-[12px]">
                <span onClick={handleClick}>
                    <img
                        src={
                            currentConversation.starter === user.id
                                ? usersDetails.reduce((acc, el) => {
                                      el.userId ===
                                          currentConversation.second_party &&
                                          acc.push(el.userDP);
                                      return acc;
                                  }, [])
                                : usersDetails.reduce((acc, el) => {
                                      el.userId ===
                                          currentConversation.starter &&
                                          acc.push(el.userDP);
                                      return acc;
                                  }, [])
                        }
                        className="rounded-[50%] cursor-pointer object-cover w-[40px] h-[40px]"
                        alt=""
                    />
                    <img
                        src={Offline}
                        className="absolute bottom-[6px] left-[27px]"
                        alt=""
                    />
                </span>
                <div className="flex flex-col items-start gap-[4px]">
                    <p className="font-[600] text-[14px] leading-[24px] text-[#212143]">
                        {currentConversation
                            ? currentConversation.starter === user.id
                                ? currentConversation.second_party_username.toUpperCase()
                                : currentConversation.starter_username.toUpperCase()
                            : ""}
                    </p>
                    <p
                        style={{
                            whiteSpace: "nowrap",
                        }}
                        className="font-[400] text-[12px] leading-[20px] text-[#54565B]">
                        Hey ChatMellers! Patronize me, I sell all types of
                        weavons and wigs.
                    </p>
                </div>
            </div>
            <div className="flex gap-[25px] items-center">
                <img
                    className="w-[16px] h-[12px] cursor-pointer"
                    src={PhoneChat}
                    onClick={() => {
                        handleVoiceCallOpen();
                        start();
                    }}
                    alt=""
                />
                <img
                    className="w-[16px] h-[12px] cursor-pointer"
                    src={VideoChat}
                    alt=""
                    onClick={() => {
                        handleVideoCallOpen();
                        start();
                    }}
                />

                <OptionsMenu />
            </div>
        </div>
    );
}
