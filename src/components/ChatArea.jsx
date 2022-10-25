import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import * as Images from "../utils";
import OptionsMenu from "./ChatOptions";
import Microphone from "./Microphone";
import PositionedMenu from "./SecondPartyProfile";
import SendIconConatainer from "./SendIcon";
import { Timer } from "./Timer";
import ViewImage from "./ViewImage";
import ViewUserProfile from "./ViewUserProfile";

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
                            src={Images.Person4}
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
                            Abraham Adeks
                        </p>
                        <p className="font-[400] text-[12px] leading-[20px] text-[#54565B]">
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
                    <li className="received">
                        <div className="flex max-w-[60%] gap-[10px] flex-col">
                            <p className="relative leading-[20px] text-[13px] text-[#212143] font-normal bg-[#FDFDFD] p-[10px] rounded-[13px]">
                                Hello Janet. You can call me Tunes. It's
                                pleasure to meet you. I'm from the States. Texas
                                to be precise. What about you? Where do you
                                reside?
                                <img src={Images.ChatIcon2} alt="" />
                            </p>
                            <p
                                id="received-date"
                                className="bg-[#FDFDFD] text-[13px] px-[6px] opacity-50 rounded-[15px]">
                                6:40PM
                            </p>
                        </div>
                    </li>
                    <li className="owner">
                        <div className="max-w-[55%] flex flex-col gap-[10px] items-start">
                            <p className="relative leading-[20px] text-[13px] text-[#212143] font-normal bg-[#FDFDFD] p-[10px] rounded-[13px]">
                                Hello. Good evening there... I'm Janet Brits How
                                you doing today?
                                <img src={Images.ChatIcon} alt="" />
                            </p>
                            <p className="bg-[#FDFDFD] text-[13px] px-[6px] opacity-50 rounded-[15px]">
                                7:00PM
                            </p>
                        </div>
                    </li>
                    <li className="owner">
                        <div className="max-w-[55%] flex flex-col gap-[10px] items-start">
                            <p className="relative leading-[20px] text-[13px] text-[#212143] font-normal bg-[#FDFDFD] p-[10px] rounded-[13px]">
                                Hello. Good evening there... I'm Janet Brits How
                                you doing today?
                                <img src={Images.ChatIcon} alt="" />
                            </p>
                            <p className="bg-[#FDFDFD] text-[13px] px-[6px] opacity-50 rounded-[15px]">
                                7:50PM
                            </p>
                        </div>
                    </li>
                    <li className="received">
                        <div className="flex max-w-[55%] gap-[10px] flex-col">
                            <p className="relative leading-[20px] text-[13px] text-[#212143] font-normal bg-[#FDFDFD] p-[10px] rounded-[13px]">
                                Hi love! How are you doing today?
                                <img src={Images.ChatIcon2} alt="" />
                            </p>
                            <p
                                id="received-date"
                                className="bg-[#FDFDFD] text-[13px] px-[6px] opacity-50 rounded-[15px]">
                                7:30PM
                            </p>
                        </div>
                    </li>
                    <li className="received">
                        <div className="flex max-w-[55%] gap-[10px] flex-col">
                            <p className="relative leading-[20px] text-[13px] text-[#212143] font-normal bg-[#FDFDFD] p-[10px] rounded-[13px]">
                                Hello Janet. You can call me Tunes. It's
                                pleasure to meet you. I'm from the States. Texas
                                to be precise. What about you? Where do you
                                reside?
                                <img src={Images.ChatIcon2} alt="" />
                            </p>
                            <p
                                id="received-date"
                                className="bg-[#FDFDFD] text-[13px] px-[6px] opacity-50 rounded-[15px]">
                                7:45PM
                            </p>
                        </div>
                    </li>
                    {/* Picture message */}
                    <li className="owner">
                        <div className="flex flex-col gap-[10px] w-[48%] max-w-[338px]">
                            <div className="bg-white p-[4px] relative z-[2] rounded-[10px]">
                                <img
                                    src={Images.UploadPicture}
                                    className="object-cover w-full rounded-[10px]"
                                    alt=""
                                />
                                <img
                                    className="absolute bottom-[-13px] z-[-1] right-[-15px]"
                                    src={Images.ChatIcon}
                                    alt=""
                                />
                            </div>
                            <p className="bg-[#FDFDFD] self-start text-[13px] px-[6px] opacity-50 rounded-[15px]">
                                7:50PM
                            </p>
                        </div>
                    </li>
                    <li className="received">
                        <div className="flex flex-col gap-[10px] w-[48%] max-w-[338px]">
                            <div className="bg-white p-[4px] relative z-[2] rounded-[10px]">
                                <img
                                    src={Images.UploadPicture}
                                    className="object-cover w-full rounded-[10px]"
                                    alt=""
                                />
                                <img
                                    className="absolute bottom-[-13px] z-[-1] left-[-15px]"
                                    src={Images.ChatIcon2}
                                    alt=""
                                />
                            </div>
                            <p className="bg-[#FDFDFD] self-end text-[13px] px-[6px] opacity-50 rounded-[15px]">
                                7:50PM
                            </p>
                        </div>
                    </li>
                    {/* File message */}
                    <li className="owner">
                        <div className="flex flex-col gap-[10px]">
                            <div className="bg-white p-[16px] flex flex-col gap-[10px] items-center justify-center relative z-[2] rounded-[10px]">
                                <img
                                    src={Images.PdfLogo}
                                    className="object-cover rounded-[10px]"
                                    alt=""
                                />
                                <p className="text-[7px]">
                                    How to become a millionaire in a week.pdf
                                </p>
                                <img
                                    className="absolute bottom-[-13px] z-[-1] right-[-15px]"
                                    src={Images.ChatIcon}
                                    alt=""
                                />
                            </div>
                            <p className="bg-[#FDFDFD] self-start text-[13px] px-[6px] opacity-50 rounded-[15px]">
                                7:50PM
                            </p>
                        </div>
                    </li>
                    <li className="received">
                        <div className="flex flex-col gap-[10px]">
                            <div className="bg-white p-[16px] flex flex-col gap-[10px] items-center justify-center relative z-[2] rounded-[10px]">
                                <img
                                    src={Images.PdfLogo}
                                    className="object-cover rounded-[10px]"
                                    alt=""
                                />
                                <p className="text-[7px]">
                                    How to become a millionaire in a week.pdf
                                </p>
                                <img
                                    className="absolute bottom-[-13px] z-[-1] left-[-15px]"
                                    src={Images.ChatIcon2}
                                    alt=""
                                />
                            </div>
                            <p className="bg-[#FDFDFD] self-end text-[13px] px-[6px] opacity-50 rounded-[15px]">
                                7:50PM
                            </p>
                        </div>
                    </li>
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
