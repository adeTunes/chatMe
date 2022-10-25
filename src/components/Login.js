import { Modal } from "@mantine/core";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Logo from "../utils/images/c3.png";

function OpenModal() {
    const { opened, closeModal, loginUser, openRegModal, openForgotModal } =
        useContext(AuthContext);

    const switchModal = () => {
        closeModal();
        openRegModal();
    };

    const forgotModalOpen = () => {
        closeModal();
        openForgotModal();
    };

    return (
        <>
            <Modal
                opened={opened}
                withCloseButton={false}
                size="45%"
                onClose={closeModal}>
                <div className="flex justify-center mb-[20px]">
                    <img className="h-[60px]" src={Logo} alt="" />
                </div>
                <form onSubmit={loginUser} className="mx-[40px]">
                    <p className=" font-medium text-[24px] leading-[24px] text-[#54565B] mb-[20px]">
                        Login
                    </p>
                    <div className="flex flex-col gap-[15px] mb-[15px] items-start">
                        <p className="font-medium text-[14px] leading-[24px] tracking-[.02em] text-[#54565B]">
                            Username
                        </p>
                        <input
                            className="p-[13px_20px] w-full bg-[#F9FAFB] border border-solid border-[#EBEBEB] rounded-[15px]"
                            type="text"
                            placeholder="Username"
                            name="username"
                        />
                    </div>
                    <div className="flex flex-col gap-[15px] items-start">
                        <p className="font-medium text-[14px] leading-[24px] tracking-[.02em] text-[#54565B]">
                            Password
                        </p>
                        <input
                            className="p-[13px_20px] w-full bg-[#F9FAFB] border border-solid border-[#EBEBEB] rounded-[15px]"
                            type="password"
                            placeholder="**********"
                            name="password"
                        />
                    </div>
                    <div className="flex justify-between items-center mt-[30px] mb-[30px]">
                        <span className="flex items-center gap-[10px]">
                            <input
                                className="border border-solid border-[rgba(9, 15, 71, 0.22)] rounded-[3px]"
                                type="checkbox"
                                name="rememberMe"
                                id="remember-me"
                            />
                            <label
                                htmlFor="remember-me"
                                className="font-[400] text-[16px] leading-[24px] text-[#54565B]">
                                Remember me
                            </label>
                        </span>
                        <p
                            onClick={forgotModalOpen}
                            className="font-[400] cursor-pointer text-[16px] leading-[24px] text-[#0064FF]">
                            Forgot Password?
                        </p>
                    </div>
                    <button className="bg-[#212143] rounded-[10px] font-[700] text-[16px] leading-[37px] w-full h-[60px] text-[#fff]">
                        Sign In
                    </button>
                    <p
                        onClick={switchModal}
                        className="mt-[20px] cursor-pointer font-[400] text-[16px] leading-[24px] text-[#0064FF] text-center">
                        Create an account
                    </p>
                </form>
            </Modal>
        </>
    );
}

export default OpenModal;
