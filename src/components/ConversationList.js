import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { ImagePlaceholder } from "../utils";

export default function ConversationList({ item }) {
    const { usersDetails, active, handleClickedConversation, user } =
        useContext(AuthContext);

    return (
        <li
            onClick={() => handleClickedConversation(item)}
            className={`flex relative list-hover cursor-pointer py-[8px] px-[25px] ${
                active === item.id ? "active" : ""
            } py-[8px] w-full items-center gap-[12px]`}>
            <img
                src={
                    item.starter === user.id
                        ? usersDetails.reduce((acc, el) => {
                              el.userId === item.second_party &&
                                  acc.push(el.userDP);
                              return acc;
                          }, [])
                        : usersDetails.reduce((acc, el) => {
                              el.userId === item.starter && acc.push(el.userDP);
                              return acc;
                          }, [])
                }
                className="rounded-[50%] object-cover w-[50px] h-[50px]"
                alt=""
            />
            {/* <img
                                    src={Images.Online}
                                    className="absolute bottom-[10px] left-[60px]"
                                    alt=""
                                /> */}
            <div className="flex flex-col items-start gap-[4px]">
                <p className="font-[600] text-[14px] leading-[24px] text-[#fff]">
                    {item.second_party === user.id
                        ? item.starter_username.replace(
                              item.starter_username[0],
                              item.starter_username[0].toLocaleUpperCase()
                          )
                        : item.second_party_username.replace(
                              item.second_party_username[0],
                              item.second_party_username[0].toLocaleUpperCase()
                          )}
                </p>
                <p
                    title={
                        item.last_message
                            ? (item.last_message.text &&
                                  item.last_message.text) ||
                              (item.last_message.files &&
                                  item.last_message.files
                                      .replace(
                                          "http://localhost:8000/media/conversation_files/",
                                          ""
                                      )
                                      .replaceAll("_", " ")) ||
                              (item.last_message.images &&
                                  item.last_message.images
                                      .replace(
                                          "http://localhost:8000/media/conversation_images/",
                                          ""
                                      )
                                      .replaceAll("_", " "))
                            : ""
                    }
                    className="font-[400] flex items-center gap-[8px] text-[12px] leading-[20px] text-[#9FA19C]">
                    {/* If last message is just text */}
                    {item.last_message
                        ? item.last_message.text &&
                          !item.last_message.files &&
                          !item.last_message.images &&
                          item.last_message.text
                              .split("")
                              .reduce((acc, el, idx) => {
                                  idx < 20
                                      ? acc.push(el)
                                      : idx >= 20 && idx < 23 && acc.push(".");
                                  return acc;
                              }, [])
                              .join("")
                        : ""}

                    {/* If last message is text and image */}
                    {item.last_message
                        ? item.last_message.text &&
                          item.last_message.images && (
                              <>
                                  <img
                                      className="w-[1em] h-[1em]"
                                      src={ImagePlaceholder}
                                      alt=""
                                  />
                                  {item.last_message.text
                                      .split("")
                                      .reduce((acc, el, idx) => {
                                          idx < 20
                                              ? acc.push(el)
                                              : idx >= 20 &&
                                                idx < 23 &&
                                                acc.push(".");
                                          return acc;
                                      }, [])
                                      .join("")}
                              </>
                          )
                        : ""}

                    {/* if the last message is just file */}
                    {item.last_message
                        ? item.last_message.files &&
                          !item.last_message.text &&
                          !item.last_message.images && (
                              <span
                                  style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "5px",
                                  }}>
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1em"
                                      height="1em"
                                      preserveAspectRatio="xMidYMid meet"
                                      viewBox="0 0 16 16">
                                      <g fill="gray">
                                          <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0z" />
                                          <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0z" />
                                      </g>
                                  </svg>
                                  {item.last_message.files
                                      .replace(
                                          "http://localhost:8000/media/conversation_files/",
                                          ""
                                      )
                                      .replaceAll("_", " ")}
                              </span>
                          )
                        : ""}

                    {/* if the last message is just image */}
                    {item.last_message
                        ? item.last_message.images &&
                          !item.last_message.text &&
                          !item.last_message.files && (
                              <>
                                  <img
                                      className="w-[1em] h-[1em]"
                                      src={ImagePlaceholder}
                                      alt=""
                                  />
                                  {item.last_message.images
                                      .replace(
                                          "http://localhost:8000/media/conversation_images/",
                                          ""
                                      )
                                      .replaceAll("_", " ")}
                              </>
                          )
                        : ""}
                </p>
            </div>
        </li>
    );
}
