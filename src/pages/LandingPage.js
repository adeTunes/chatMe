import React from "react";
import { useContext } from "react";
import OpenForgotModal from "../components/ForgotPassword";
import OpenModal from "../components/Login";
import OpenRegModal from "../components/Register";
import AuthContext from "../context/AuthContext";
import Logo from "../utils/images/Logo.png";
import Trusted from "../utils/images/Trusted.png";

const LandingPage = () => {
    const { openModal, openRegModal } = useContext(AuthContext);

    return (
        <div className="landingPageContainer flex flex-col">
            <nav className="flex justify-between items-center px-[60px] pt-[44px]">
                <img className="w-[53px]" src={Logo} alt="" />
                <div className="flex items-center gap-[70px]">
                    <ul className="flex items-center gap-[60px]">
                        <li className="text-[#22A5FF] font-[800] text-[14px] leading-[17px]">
                            Home
                        </li>
                        <li className="font-[400] text-[#fff] text-[14px] leading-[17px]">
                            About Us
                        </li>
                        <li className="font-[400] text-[#fff] text-[14px] leading-[17px]">
                            Contact Us
                        </li>
                    </ul>
                    <p
                        onClick={openModal}
                        className="py-[16px] cursor-pointer px-[36px] chat-friends rounded-[10px]">
                        Chat Friends
                    </p>
                </div>
            </nav>
            <div className="pl-[60px] flex items-center flex-1">
                <div className="flex flex-col items-start">
                    <p className="ash-tag">#Chat Me On</p>
                    <div className="mt-[8px] mb-[26px] flex items-center gap-[20px]">
                        <p className="font-[900] text-[74px] leading-[90px] text-[#fff]">
                            Chat
                        </p>
                        <p className="animated-text">Friends</p>
                    </div>
                    <p className="w-[508px] mb-[50px] font-[500] text-[14px] leading-[24px] text-justify tracking-[.02em] capitalize text-[#fff]">
                        ChatMe is an online platform providing a chatting sphere
                        for users to interact - text, send pictures, upload
                        documents, record voice note, have a voice call, as well
                        as video chatting feature. The service is free of cost
                        and is available 24/7. Welcome to the world of ChatMe.
                    </p>
                    <p
                        onClick={openRegModal}
                        className="cta-btn cursor-pointer p-[16px_36px] rounded-[10px]">
                        Register
                    </p>
                    <div className="flex mt-[24px] items-center gap-[14px]">
                        <img
                            className="w-[16px] h-[16px]"
                            src={Trusted}
                            alt=""
                        />
                        <p className="font-[500] text-[14px] leading-[24px] tracking-[.02em] text-[#fff] opacity-50">
                            trusted by 1+ Thousand users.
                        </p>
                    </div>
                </div>
                <OpenModal />
                <OpenRegModal />
                <OpenForgotModal />
            </div>
        </div>
    );
};

export default LandingPage;
