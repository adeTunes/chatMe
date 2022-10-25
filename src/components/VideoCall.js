import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Caller, VideoCall, EndCall } from "../utils";
import { Timer } from "./Timer";

const style = {
    position: "absolute",
    top: "50%",
    left: "60%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: 0,
    outline: 0,
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    py: 4,
    px: 5,
    borderRadius: "15px",
};

export default function VideoCallModal() {
    const { handleVideoCallClose, openVideoCall, reset } =
        useContext(AuthContext);
    const [videoConnected, setVideoConnected] = React.useState(true);
    const [firstPics, setFirstPics] = React.useState(VideoCall);
    const [secondPics, setSecondPics] = React.useState(Caller);

    const handleSwitchPics = () => {
        setFirstPics(secondPics);
        setSecondPics(firstPics);
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openVideoCall}
                onClose={handleVideoCallClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={openVideoCall}>
                    <Box sx={style}>
                        <p className="text-[13px] flex flex-col items-center font-bold text-[#212143]">
                            <span>Video call</span>
                            {videoConnected ? (
                                <span className="text-[#9FA19C] text-[11px]">
                                    <Timer />
                                </span>
                            ) : null}
                        </p>
                        <img
                            src={firstPics}
                            className="w-[300px] caller-pics h-[250px] rounded-[5px]"
                            alt=""
                        />
                        <div className="flex justify-between items-center">
                            <img
                                src={EndCall}
                                className="w-[40px] object-cover cursor-pointer h-[40px]"
                                alt=""
                                onClick={() => {
                                    handleVideoCallClose();
                                    reset();
                                }}
                            />
                            <img
                                src={secondPics}
                                className="w-[100px] cursor-pointer h-[90px] border border-[#54565B] rounded-[1.69138px] border-solid"
                                alt=""
                                onClick={handleSwitchPics}
                            />
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
