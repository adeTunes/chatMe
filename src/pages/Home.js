import React, { useContext, useState } from "react";
import UploadPicsModal from "../components/UploadPicsModal";
import UploadFileModal from "../components/UploadFileModal";
import VoiceCallModal from "../components/VoiceCall";
import VideoCallModal from "../components/VideoCall";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import ChatArea from "../components/ChatArea";
import AuthContext from "../context/AuthContext";

const Home = () => {
    const { currentConversation } = useContext(AuthContext);
    const [anchorViewProfileEl, setAnchorViewProfileEl] = useState(null);

    const handleViewProfileClose = () => {
        setAnchorViewProfileEl(null);
    };

    const handleViewProfileClick = (event) => {
        setAnchorViewProfileEl(event.currentTarget);
    };

    return (
        <div className="h-full flex chat-page">
            <Navbar />
            <Aside handleViewProfileClick={handleViewProfileClick} />
            {/* Before you select a chat */}
            {currentConversation ? (
                <>
                    <ChatArea
                        anchorViewProfileEl={anchorViewProfileEl}
                        handleViewProfileClose={handleViewProfileClose}
                    />
                    <VoiceCallModal />
                    <VideoCallModal />
                    <UploadPicsModal />
                    <UploadFileModal />
                </>
            ) : (
                <main className="flex-1 flex justify-center items-center">
                    <p className="font-medium text-[16px] leading-[24px] text-[#FDFDFD]">
                        Your messages will appear here
                    </p>
                </main>
            )}
        </div>
    );
};

export default Home;
