import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { CloseUploadPics, UploadedFile } from "../utils";
import SendIconConatainer from "./SendIcon";

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

export default function UploadFileModal() {
    const { handleFileUploadClose, openFileUpload } = useContext(AuthContext);

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openFileUpload}
                onClose={handleFileUploadClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={openFileUpload}>
                    <Box sx={style}>
                        <div className="flex bg-[#F9FAFB] py-[15px] px-[20px] justify-end">
                            <img
                                onClick={handleFileUploadClose}
                                src={CloseUploadPics}
                                className="w-[18px] h-[18px] cursor-pointer"
                                alt=""
                            />
                        </div>
                        <div className="w-[200px] flex flex-col items-center my-[15px] mx-[40px] min-h-[200px]">
                            <img
                                src={UploadedFile}
                                className="rounded-[20px]"
                                alt=""
                            />
                            <p className="text-[10px]">
                                How to become a millionaire in one week.pdf
                            </p>
                        </div>
                        <div className="flex  py-[15px] bg-[#F9FAFB] px-[20px] justify-end">
                            <SendIconConatainer />
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
