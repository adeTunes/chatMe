import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import * as Images from "../utils";
import ConversationList from "./ConversationList";

export default function Aside({ handleViewProfileClick }) {
    const { conversations, user } = useContext(AuthContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [userSearch, setUserSearch] = useState(null);
    const handleSearch = () => {
        const result = conversations.filter((el) => {
            return (
                (el.second_party_username === user.username &&
                    el.starter_username.includes(searchTerm)) ||
                (el.stater_username === user.username &&
                    el.second_party_username.includes(searchTerm))
            );
        });

        setUserSearch(result);
    };

    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
    };

    useEffect(() => {
        searchTerm === "" && setUserSearch(null);
    }, [searchTerm]);

    return (
        <aside className="w-[300px] pt-[40px] overflow-auto flex flex-col gap-[25px] items-start  bg-[#212143]">
            <div
                onClick={handleViewProfileClick}
                className="flex items-center cursor-pointer px-[25px] gap-[12px]">
                <img
                    src={user.profile_picture}
                    className="rounded-[50%] object-cover w-[50px] h-[50px]"
                    alt=""
                />
                <div className="flex flex-col items-start gap-[4px]">
                    <p className="font-[600] text-[14px] leading-[24px] text-[#fff]">
                        {user.username.replace(
                            user.username[0],
                            user.username[0].toLocaleUpperCase()
                        )}
                    </p>
                    <p className="font-[400] text-[12px] leading-[20px] text-[#9FA19C]">
                        Hey there! I use ChatMe
                    </p>
                </div>
            </div>
            <div className="px-[25px]">
                <div className="w-full flex items-center gap-[15px] h-[50px] opacity-50 bg-[#F9FAFB] rounded-[15px] border border-solid border-[#EBEBEB] p-[10px] ">
                    <img src={Images.SearchIcon} className="w-[16px]" alt="" />
                    <input
                        type="search"
                        placeholder="search"
                        className="w-full h-full outline-0"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKey}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-[15px] w-full items-start overflow-auto">
                <p className="font-semibold px-[25px] text-[14px] leading-[24px] text-[#fff]">
                    Recent Chats
                </p>
                <ul className="flex flex-col w-full pb-[20px] items-start overflow-auto">
                    {userSearch ? (
                        userSearch.map((item) => (
                            <ConversationList key={item.id} item={item} />
                        ))
                    ) : conversations.length > 0 ? (
                        conversations.map((item) => (
                            <ConversationList key={item.id} item={item} />
                        ))
                    ) : (
                        <span>Search for a user to start a conversation</span>
                    )}
                </ul>
            </div>
        </aside>
    );
}
