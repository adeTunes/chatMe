import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { SendIcon } from "../utils";

const SendIconConatainer = ({ handleStopRecording }) => {
    const { reset } = useContext(AuthContext);

    const handleSendVoiceNote = () => {
        reset();
        handleStopRecording();
    };

    return (
        <div className="sendIcon rounded-[50%] p-[10px]">
            <img
                src={SendIcon}
                onClick={handleSendVoiceNote}
                className="w-[16px] h-[16px]"
                alt=""
            />
        </div>
    );
};

export default SendIconConatainer;
