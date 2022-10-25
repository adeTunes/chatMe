import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { CloseUploadPics, UploadedPics, RotateImage } from "../utils";
import SendIconConatainer from "./SendIcon";
import { useState } from "react";

const style = {
    position: "absolute",
    top: "50%",
    left: "65%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: 0,
    outline: 0,
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
    p: 1,
    borderRadius: "15px",
};

export default function UploadPicsModal() {
    const { handleClose, open } = useContext(AuthContext);
    const [degree, setDegree] = useState(0);

    const imageRef = React.useRef();

    const rotateFunction = () => {
        setDegree((prevState) => prevState + 90);
        imageRef.current.style.transform = `rotate(${degree}deg)`;
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={open}>
                    <Box sx={style}>
                        <div className="flex bg-[#F9FAFB] py-[15px] px-[20px] items-center justify-between">
                            <div>
                                <img
                                    src={RotateImage}
                                    className="w-[18px] h-[18px] cursor-pointer"
                                    alt=""
                                    onClick={rotateFunction}
                                />
                            </div>
                            <img
                                onClick={handleClose}
                                src={CloseUploadPics}
                                className="w-[18px] h-[18px] cursor-pointer"
                                alt=""
                            />
                        </div>
                        <div className="w-[310px] my-[15px] mx-[40px] h-[310px]">
                            <img
                                ref={imageRef}
                                src={UploadedPics}
                                className="rounded-[20px]"
                                alt=""
                            />
                        </div>
                        <div className="flex gap-[20px] py-[15px] bg-[#F9FAFB] px-[20px] items-center justify-between">
                            <input
                                type="text"
                                className="text-[13px] bg-transparent outline-0 w-full"
                                placeholder="Write caption"
                            />
                            <SendIconConatainer />
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
