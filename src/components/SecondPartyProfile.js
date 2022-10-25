import * as React from "react";
import Menu from "@mui/material/Menu";
import {
    ChatMedia1,
    ChatMedia2,
    ChatMedia3,
    ChatMedia4,
    ChatMedia5,
    DocLogo,
    PdfIcon,
    PptLogo,
    XlsLogo,
} from "../utils";
// import MenuItem from "@mui/material/MenuItem";

export default function PositionedMenu({
    anchorEl,
    handleViewPicsClick,
    handleClose,
}) {
    const open = Boolean(anchorEl);
    const [collapse, setCollapse] = React.useState(false);

    const style = {
        position: "absolute",
        top: "3%",
        left: "-3%",
        width: "350px",
    };

    return (
        <div>
            <Menu
                sx={style}
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                // anchorOrigin={{
                //   vertical: 'top',
                //   horizontal: 'left',
                // }}
                // transformOrigin={{
                //   vertical: 'top',
                //   horizontal: 'left',
                // }}
            >
                <div className="flex flex-col py-[15px] px-[15px] gap-[15px]">
                    <div className="flex flex-col gap-[7px] ">
                        <p className=" font-bold text-[13px] text-[#212143]">
                            About
                        </p>
                        <p className="font-[400] text-[11px] text-[#54565B]">
                            Hey ChatMellers! Patronize me, I sell all types of
                            weavons and wigs
                        </p>
                    </div>
                    <div className="flex flex-col gap-[10px] ">
                        <div className="flex flex-col gap-[7px]">
                            <p className=" font-bold text-[13px] text-[#212143]">
                                Media
                            </p>
                            <ul className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-[6px]">
                                <li
                                    onClick={handleViewPicsClick}
                                    className="w-[50px] cursor-pointer h-[50px]">
                                    <img src={ChatMedia1} alt="" />
                                </li>
                                <li className="w-[50px] h-[50px]">
                                    <img src={ChatMedia2} alt="" />
                                </li>
                                <li className="w-[50px] h-[50px]">
                                    <img src={ChatMedia3} alt="" />
                                </li>
                                <li className="w-[50px] h-[50px]">
                                    <img src={ChatMedia4} alt="" />
                                </li>
                                <li className="w-[50px] h-[50px]">
                                    <img src={ChatMedia5} alt="" />
                                </li>
                                {collapse ? (
                                    <>
                                        <li className="w-[50px] h-[50px]">
                                            <img src={ChatMedia4} alt="" />
                                        </li>
                                        <li className="w-[50px] h-[50px]">
                                            <img src={ChatMedia4} alt="" />
                                        </li>
                                        <li className="w-[50px] h-[50px]">
                                            <img src={ChatMedia1} alt="" />
                                        </li>
                                        <li className="w-[50px] h-[50px]">
                                            <img src={ChatMedia5} alt="" />
                                        </li>
                                        <li className="w-[50px] h-[50px]">
                                            <img src={ChatMedia4} alt="" />
                                        </li>
                                        <li className="w-[50px] h-[50px]">
                                            <img src={ChatMedia2} alt="" />
                                        </li>
                                        <li className="w-[50px] h-[50px]">
                                            <img src={ChatMedia3} alt="" />
                                        </li>
                                        <li className="w-[50px] h-[50px]">
                                            <img src={ChatMedia4} alt="" />
                                        </li>
                                    </>
                                ) : null}
                            </ul>
                        </div>
                        <p
                            onClick={() => setCollapse(!collapse)}
                            className="self-center cursor-pointer font-normal text-[11px] text-[#54565B]">
                            {collapse ? "See less" : "See more"}
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-[13px] text-[#212143]">
                            Document
                        </p>
                        <ul className="flex gap-[8px]">
                            <li className="w-[50px] h-[50px]">
                                <img src={PdfIcon} alt="" />
                            </li>
                            <li className="w-[50px] h-[50px]">
                                <img src={PptLogo} alt="" />
                            </li>
                            <li className="w-[50px] h-[50px]">
                                <img src={XlsLogo} alt="" />
                            </li>
                            <li className="w-[50px] h-[50px]">
                                <img src={DocLogo} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </Menu>
        </div>
    );
}

// import { Menu } from "@mantine/core";
// import {} from "@tabler/icons";
// import { Person4 } from "../utils";

// export default function SecondPartyProfile() {
//     return (
//         <Menu
//             shadow="md"
//             transition="slide-down"
//             width={360}
//             position="bottom-right"
//             offset={50}>
//             <Menu.Target>
// <img
//     src={Person4}
//     className="rounded-[50%] cursor-pointer object-cover w-[40px] h-[40px]"
//     alt=""
// />
//             </Menu.Target>

//             <Menu.Dropdown>
//                 <Menu.Label>
//                     <div className="flex flex-col gap-[20px]">
//                         <div className="flex flex-col gap-[10px]">
//                             <p>About</p>
//                             <p>
//                                 Hey ChatMellers! Patronize me, I sell all types
//                                 of weavons and wigs
//                             </p>
//                         </div>
//                         <div></div>
//                         <div></div>
//                     </div>
//                 </Menu.Label>
//             </Menu.Dropdown>
//         </Menu>
//     );
// }
