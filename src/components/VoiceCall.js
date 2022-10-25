import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Caller, EndCall } from "../utils";
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
    alignItems: "center",
    py: 4,
    px: 6,
    borderRadius: "15px",
};

export default function VoiceCallModal() {
    const { handleVoiceCallClose, openVoiceCall, reset } =
        useContext(AuthContext);
    const [callConnected, setCallConnected] = React.useState(true);

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openVoiceCall}
                onClose={handleVoiceCallClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={openVoiceCall}>
                    <Box sx={style}>
                        <p className="text-[13px] flex flex-col items-center font-bold text-[#212143]">
                            <span>Voice call</span>
                            {callConnected ? (
                                <span className="text-[#9FA19C] text-[11px]">
                                    <Timer />
                                </span>
                            ) : null}
                        </p>
                        <img
                            src={Caller}
                            className="w-[200px] caller-pics h-[200px] rounded-[50%]"
                            alt=""
                        />
                        <img
                            src={EndCall}
                            className="w-[40px] cursor-pointer h-[40px]"
                            alt=""
                            onClick={() => {
                                handleVoiceCallClose();
                                reset();
                            }}
                        />
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
