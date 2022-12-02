import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { RecordingStop, SendDocs, SendPics } from "../utils";
import Microphone from "./Microphone";
import SendIconConatainer from "./SendIcon";
import { Timer } from "./Timer";

export default function ChatFooter({
    recordingInProgress,
    handleStartRecording,
    handleStopRecording,
}) {
    const { handleOpen, handleFileUploadOpen, pause } = useContext(AuthContext);

    return (
        <div className="bg-white px-[20px] flex items-center">
            <div className="flex items-center mr-[20px] gap-[20px]">
                <img
                    className="cursor-pointer w-[14px] h-[16px]"
                    src={SendDocs}
                    onClick={handleFileUploadOpen}
                    alt=""
                />
                <img
                    className="cursor-pointer w-[14px] h-[16px]"
                    src={SendPics}
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
                            src={RecordingStop}
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
                        className="w-full flex-1 pt-[25px] h-full max-h-[600px] outline-0 text-[14px]"
                        // onChange={}
                    ></textarea>
                    <SendIconConatainer />
                </>
            )}
        </div>
    );
}
