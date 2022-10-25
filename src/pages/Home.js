import React, { useState } from "react";
import UploadPicsModal from "../components/UploadPicsModal";
import UploadFileModal from "../components/UploadFileModal";
import VoiceCallModal from "../components/VoiceCall";
import VideoCallModal from "../components/VideoCall";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import ChatArea from "../components/ChatArea";

const Home = () => {
    // const { authTokens, logoutUser } = useContext(AuthContext);
    const [anchorViewProfileEl, setAnchorViewProfileEl] = useState(null);

    const handleViewProfileClose = () => {
        setAnchorViewProfileEl(null);
    };

    const handleViewProfileClick = (event) => {
        setAnchorViewProfileEl(event.currentTarget);
    };

    // let getNotes = async () => {
    //     let response = await fetch("http://localhost:3000/api/notes", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: "Bearer " + String(authTokens.access),
    //         },
    //     });

    //     let data = await response.json();

    //     if (response.status === 200) {
    //         setNotes(data);
    //     } else if (response.statusText === "Unauthorized") {
    //         logoutUser();
    //     }
    // };

    return (
        <div className="h-full flex chat-page">
            <Navbar />
            <Aside handleViewProfileClick={handleViewProfileClick} />
            {/* Before you select a chat */}
            {/* <main className="flex-1 flex justify-center items-center">
                <p className="font-medium text-[16px] leading-[24px] text-[#FDFDFD]">
                    Your messages will appear here
                </p>
            </main> */}
            <ChatArea
                anchorViewProfileEl={anchorViewProfileEl}
                handleViewProfileClose={handleViewProfileClose}
            />
            {/* <ChatDialog /> */}
            <VoiceCallModal />
            <VideoCallModal />
            <UploadPicsModal />
            <UploadFileModal />
        </div>
    );
};

export default Home;
