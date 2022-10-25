import * as React from "react";
import Menu from "@mui/material/Menu";
import {
    RotateImage,
    CloseUploadPics,
    UploadedPics,
    DeleteUploadPics,
} from "../utils";

export default function ViewImage({ anchorViewPicsEl, handleViewPicsClose }) {
    const open = Boolean(anchorViewPicsEl);

    const style = {
        position: "absolute",
        top: "-27.5%",
        left: "-1.5%",
        width: "350px",
    };
    const [degree, setDegree] = React.useState(0);

    const imageRef = React.useRef();

    const rotateFunction = () => {
        setDegree((prevState) => prevState + 90);
        imageRef.current.style.transform = `rotate(${degree}deg)`;
    };

    return (
        <div>
            <Menu
                sx={style}
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorViewPicsEl}
                open={open}
                onClose={handleViewPicsClose}>
                <div className="pb-[45px]">
                    <div className="flex py-[10px] px-[20px] items-center justify-between">
                        <div className="flex items-center gap-[15px]">
                            <img
                                src={RotateImage}
                                className="w-[18px] h-[18px] cursor-pointer"
                                alt=""
                                onClick={rotateFunction}
                            />
                            <img
                                className="w-[18px] h-[18px] cursor-pointer"
                                src={DeleteUploadPics}
                                alt=""
                            />
                        </div>
                        <p className="text-[#54565B] text-[11px] font-bold">
                            1/12
                        </p>
                        <img
                            onClick={handleViewPicsClose}
                            src={CloseUploadPics}
                            className="w-[18px] h-[18px] cursor-pointer"
                            alt=""
                        />
                    </div>
                    <div className="w-[226px] flex flex-col gap-[10px] my-[15px] mx-[40px] h-[226px]">
                        <p className="font-bold text-[12px] text-[#212143]">
                            Media
                        </p>
                        <img
                            ref={imageRef}
                            src={UploadedPics}
                            className="rounded-[20px]"
                            alt=""
                        />
                    </div>
                </div>
            </Menu>
        </div>
    );
}
