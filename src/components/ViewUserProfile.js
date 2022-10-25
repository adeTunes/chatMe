import * as React from "react";
import Menu from "@mui/material/Menu";
import { ProfilePicture } from "../utils";

export default function ViewUserProfile({
    anchorViewProfileEl,
    handleViewProfileClose,
}) {
    const open = Boolean(anchorViewProfileEl);

    const style = {
        position: "absolute",
        top: "2%",
        left: "0%",
    };

    return (
        <div>
            <Menu
                sx={style}
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorViewProfileEl}
                open={open}
                onClose={handleViewProfileClose}>
                <div className="py-[25px] px-[25px] flex flex-col items-center gap-[25px]">
                    <div className="flex items-center cursor-pointer px-[25px] gap-[12px]">
                        <img
                            src={ProfilePicture}
                            className="rounded-[50%] w-[50px] h-[50px]"
                            alt=""
                        />
                        <div className="flex flex-col items-start gap-[4px]">
                            <p className="font-[600] text-[13px] leading-[24px] text-[#212143]">
                                Tunes Adeks
                            </p>
                            <p className="font-[400] text-[11px] leading-[20px] text-[#9FA19C]">
                                Hey there! I use ChatMe
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <p className="font-[500] text-[12px] tracking-wide text-[#54565B]">
                            Update Status
                        </p>
                        <textarea
                            className="border rounded-[15px] border-solid text-[#9FA19C] text-[14px] font-normal outline-0 border-[#EBEBEB] bg-[#F9FAFB]"
                            style={{
                                padding: "15px",
                                resize: "none",
                                width: "280px",
                                height: "150px",
                            }}
                            placeholder="Hey there! I use ChatMe"></textarea>
                    </div>
                    <button className="w-full bg-[#212143] rounded-[10px] py-[15px] text-[#fff] text-[14px] font-bold">
                        Update
                    </button>
                </div>
            </Menu>
        </div>
    );
}
