import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStopwatch } from "react-timer-hook";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(
        useState(() =>
            localStorage.getItem("users")
                ? JSON.parse(localStorage.getItem("users"))
                : []
        )
    );
    const [usersDetails, setUsersDetails] = useState(() =>
        localStorage.getItem("usersDetails")
            ? JSON.parse(localStorage.getItem("usersDetails"))
            : []
    );
    const [conversations, setConversations] = useState(() =>
        localStorage.getItem("conversations")
            ? JSON.parse(localStorage.getItem("conversations"))
            : []
    );
    const [user, setUser] = useState(() =>
        localStorage.getItem("authUser")
            ? JSON.parse(localStorage.getItem("authUser"))
            : null
    );
    const [authTokens, setAuthTokens] = useState(() =>
        localStorage.getItem("authTokens")
            ? JSON.parse(localStorage.getItem("authTokens"))
            : null
    );
    const [loginErr, setLoginErr] = useState(false);
    const [loading, setLoading] = useState(true);
    const BASE_URL = "http://localhost:8000/";
    const [opened, setOpened] = useState(false);
    const [regOpened, setRegOpened] = useState(false);
    const [forgotOpened, setForgotOpened] = useState(false);
    const [open, setOpen] = useState(false);
    const [openFileUpload, setOpenFileUpload] = useState(false);
    const [openVoiceCall, setOpenVoiceCall] = useState(false);
    const [openVideoCall, setOpenVideoCall] = useState(false);
    const { seconds, minutes, start, reset, pause } = useStopwatch({
        autoStart: true,
    });
    const [active, setActive] = useState(null);
    const [currentConversation, setCurrentConversation] = useState(null);
    const [messages, setMessages] = useState(() =>
        localStorage.getItem("messages")
            ? JSON.parse(localStorage.getItem("conversations"))
            : []
    );
    const [groupByDate, setGroupByDate] = useState(null);
    const [filesList, setFilesList] = useState(null);

    const navigate = useNavigate();

    let loginUser = async (e) => {
        e.preventDefault();
        const adminDetails = {
            email: "ore@mail.com",
            password: "abcd1234",
        };
        let adminResponse = await fetch(BASE_URL + "api/accounts/token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(adminDetails),
        });

        let adminData = await adminResponse.json();

        if (adminResponse.status === 200) {
            let response = await fetch(
                BASE_URL + "api/accounts/user_authenticate/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + String(adminData.access),
                    },
                    body: JSON.stringify({
                        username: e.target.username.value,
                        password: e.target.password.value,
                    }),
                }
            );
            let data = await response.json();
            if (response.status === 200) {
                setAuthTokens({ refresh: data.refresh, access: data.access });
                setUser(data.data);
                localStorage.setItem("authUser", JSON.stringify(data.data));
                localStorage.setItem(
                    "authTokens",
                    JSON.stringify({
                        refresh: data.refresh,
                        access: data.access,
                    })
                );
            } else setLoginErr(true);

            const userResponse = await fetch(
                BASE_URL + "api/accounts/users_list/",
                {
                    headers: {
                        Authorization: `Bearer ${data.access}`,
                    },
                }
            );
            const userData = await userResponse.json();
            setUsers(userData);
            localStorage.setItem("users", JSON.stringify(userData));
            setUsersDetails(
                userData.reduce((acc, item) => {
                    acc.push({
                        userId: item.id,
                        userDP: item.profile_picture,
                    });
                    return acc;
                }, [])
            );
            localStorage.setItem(
                "usersDetails",
                JSON.stringify(
                    userData.reduce((acc, item) => {
                        acc.push({
                            userId: item.id,
                            userDP: item.profile_picture,
                        });
                        return acc;
                    }, [])
                )
            );

            const conversationResponse = await fetch(
                BASE_URL + `api/chat/user_conversation_list/${data.data.id}/`,
                {
                    headers: {
                        Authorization: `Bearer ${data.access}`,
                    },
                }
            );
            const conversationData = await conversationResponse.json();
            setConversations(conversationData);
            localStorage.setItem(
                "conversations",
                JSON.stringify(conversationData)
            );
            navigate("/app");
        }
    };

    let logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        setUsers([]);
        setUsersDetails([]);
        setConversations([]);
        localStorage.removeItem("authUser");
        localStorage.removeItem("authTokens");
        localStorage.removeItem("users");
        localStorage.removeItem("usersDetails");
        localStorage.removeItem("conversations");
        navigate("/");
    };

    let updateToken = async () => {
        if (user) {
            let response = await fetch(
                BASE_URL + "api/accounts/token_refresh/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ refresh: authTokens?.refresh }),
                }
            );

            let data = await response.json();

            if (response.status === 200) {
                setAuthTokens({ refresh: data.refresh, access: data.access });
                localStorage.setItem(
                    "authTokens",
                    JSON.stringify({
                        refresh: data.refresh,
                        access: data.access,
                    })
                );
                console.log("new token received");
            } else {
                logoutUser();
            }
        }

        if (loading) setLoading(false);
    };

    const openModal = () => setOpened(true);
    const closeModal = () => setOpened(false);
    const openRegModal = () => setRegOpened(true);
    const closeRegModal = () => setRegOpened(false);
    const openForgotModal = () => setForgotOpened(true);
    const closeForgotModal = () => setForgotOpened(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleFileUploadOpen = () => setOpenFileUpload(true);
    const handleFileUploadClose = () => setOpenFileUpload(false);
    const handleVoiceCallClose = () => setOpenVoiceCall(false);
    const handleVoiceCallOpen = () => setOpenVoiceCall(true);
    const handleVideoCallOpen = () => setOpenVideoCall(true);
    const handleVideoCallClose = () => setOpenVideoCall(false);

    const handleClickedConversation = async (conversation) => {
        setActive(conversation.id);
        let response = await fetch(
            BASE_URL + "api/chat/conversation_messages/" + conversation.id,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + String(authTokens.access),
                },
            }
        );

        let data = await response.json();

        if (response.status === 200) {
            setMessages(data);
            console.log();
            setGroupByDate(
                data.reduce((acc, el, idx, arr) => {
                    let date = new Date(el.date_sent).toLocaleDateString(); //10/11/13 //10/22/22
                    acc[date] = (acc[date] ?? []).concat([el]); // acc[date] === date && [acc[date] ?? [], el]; [al].concat([el]) // [al, el]
                    return acc;
                }, {})
            );
            setFilesList(
                data.reduce((acc, el) => {
                    el.files &&
                        acc.push(
                            el.files
                                .replace(
                                    "http://localhost:8000/media/conversation_files/",
                                    ""
                                )
                                .replaceAll("_", " ")
                        );
                    return acc;
                }, [])
            );
            // setFilesList()
            localStorage.setItem("messages", JSON.stringify(data));
        } else if (response.statusText === "Unauthorized") {
            logoutUser();
        }
        setCurrentConversation(conversation);
    };

    let contextData = {
        BASE_URL,
        openFileUpload,
        open,
        opened,
        regOpened,
        forgotOpened,
        users,
        usersDetails,
        conversations,
        user,
        loginErr,
        authTokens,
        seconds,
        minutes,
        openVoiceCall,
        openVideoCall,
        active,
        currentConversation,
        messages,
        groupByDate,
        filesList,
        handleClickedConversation,
        handleVideoCallOpen,
        handleVideoCallClose,
        handleVoiceCallClose,
        handleVoiceCallOpen,
        pause,
        start,
        reset,
        handleFileUploadOpen,
        handleFileUploadClose,
        handleClose,
        handleOpen,
        openForgotModal,
        closeForgotModal,
        openRegModal,
        closeRegModal,
        closeModal,
        openModal,
        loginUser,
        logoutUser,
    };

    useEffect(() => {
        if (loading) {
            updateToken();
        }
        const interval = setInterval(() => {
            if (authTokens) {
                updateToken();
            }
        }, [240000]);

        return () => clearInterval(interval);
    }, [authTokens, loading]);

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};
