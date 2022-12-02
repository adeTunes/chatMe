import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import PositionedMenu from "./SecondPartyProfile";
import ViewImage from "./ViewImage";
import ViewUserProfile from "./ViewUserProfile";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import ChatMessages from "./ChatMessages";

export default function ChatArea({
    handleViewProfileClose,
    anchorViewProfileEl,
}) {
    const [recordingInProgress, setRecordingInProgress] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorViewPicsEl, setAnchorViewPicsEl] = useState(null);

    const { start, reset } = useContext(AuthContext);

    const handleStartRecording = () => {
        setRecordingInProgress(true);
        start();
    };
    const handleStopRecording = () => {
        reset();
        setRecordingInProgress(false);
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
            <ChatHeader setAnchorEl={setAnchorEl} />
            <ChatMessages />
            <ChatFooter
                handleStartRecording={handleStartRecording}
                handleStopRecording={handleStopRecording}
                recordingInProgress={recordingInProgress}
            />
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
