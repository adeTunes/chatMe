import React, { useContext, useState } from "react";
import moment from "moment";
import AuthContext from "../context/AuthContext";
import * as Images from "../utils";
import OptionsMenu from "./ChatOptions";
import Microphone from "./Microphone";
import PositionedMenu from "./SecondPartyProfile";
import SendIconConatainer from "./SendIcon";
import { Timer } from "./Timer";
import ViewImage from "./ViewImage";
import ViewUserProfile from "./ViewUserProfile";
import TextMessage from "./TextMessage";
import ImageMessage from "./ImageMessage";
import FileMessage from "./FileMessage";

export default function ChatArea({
    handleViewProfileClose,
    anchorViewProfileEl,
}) {
    const [recordingInProgress, setRecordingInProgress] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorViewPicsEl, setAnchorViewPicsEl] = useState(null);

    const {
        handleOpen,
        handleVoiceCallOpen,
        handleFileUploadOpen,
        handleVideoCallOpen,
        pause,
        start,
        reset,
        user,
        currentConversation,
        usersDetails,
        groupByDate,
    } = useContext(AuthContext);

    const handleStartRecording = () => {
        setRecordingInProgress(true);
        start();
    };
    const handleStopRecording = () => {
        reset();
        setRecordingInProgress(false);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleViewPicsClick = (event) => {
        setAnchorViewPicsEl(event.currentTarget);
    };

    const handleViewPicsClose = () => {
        setAnchorViewPicsEl(null);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <main className="flex-1 flex flex-col">
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
                            src={Images.Offline}
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
                        src={Images.PhoneChat}
                        onClick={() => {
                            handleVoiceCallOpen();
                            start();
                        }}
                        alt=""
                    />
                    <img
                        className="w-[16px] h-[12px] cursor-pointer"
                        src={Images.VideoChat}
                        alt=""
                        onClick={() => {
                            handleVideoCallOpen();
                            start();
                        }}
                    />

                    <OptionsMenu />
                </div>
            </div>
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
                                            : moment(new Date(item)).format(
                                                  "ll"
                                              )}
                                    </span>
                                </p>
                            )
                        )}
                </ul>
            </div>
            <div className="bg-white px-[20px] flex items-center">
                <div className="flex items-center mr-[20px] gap-[20px]">
                    <img
                        className="cursor-pointer w-[14px] h-[16px]"
                        src={Images.SendDocs}
                        onClick={handleFileUploadOpen}
                        alt=""
                    />
                    <img
                        className="cursor-pointer w-[14px] h-[16px]"
                        src={Images.SendPics}
                        onClick={handleOpen}
                        alt=""
                    />
                    {recordingInProgress ? (
                        <Microphone color="fill-[#0064FF] stroke-[#0064FF]" />
                    ) : (
                        <Microphone
                            color="stroke-[#212143] fill-transparent"
                            handleStartRecording={handleStartRecording}
                        />
                    )}
                </div>
                {recordingInProgress ? (
                    <>
                        <div className="flex-1 flex gap-[15px] py-[24px] items-center">
                            <small>
                                <Timer />
                            </small>
                            <img
                                src={Images.RecordingStop}
                                onClick={() => pause()}
                                className="w-[16px] cursor-pointer h-[16px]"
                                alt=""
                            />
                        </div>
                        <SendIconConatainer
                            handleStopRecording={handleStopRecording}
                        />
                    </>
                ) : (
                    <>
                        <textarea
                            placeholder="Write a message"
                            style={{ resize: "none" }}
                            className="w-full flex-1 pt-[25px] h-full max-h-[600px] outline-0 text-[14px]"></textarea>
                        <SendIconConatainer />
                    </>
                )}
            </div>
            <PositionedMenu
                handleViewPicsClick={handleViewPicsClick}
                handleClose={handleClose}
                anchorEl={anchorEl}
            />
            <ViewImage
                handleViewPicsClose={handleViewPicsClose}
                anchorViewPicsEl={anchorViewPicsEl}
            />
            <ViewUserProfile
                anchorViewProfileEl={anchorViewProfileEl}
                handleViewProfileClose={handleViewProfileClose}
            />
        </main>
    );
}
