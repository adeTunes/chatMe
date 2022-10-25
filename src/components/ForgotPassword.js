import { Modal } from "@mantine/core";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Logo from "../utils/images/c3.png";
import SignInBack from "../utils/images/sign-in-back.png";

function OpenForgotModal() {
    const { forgotOpened, openModal, closeForgotModal } =
        useContext(AuthContext);

    const switchModal = () => {
        closeForgotModal();
        openModal();
    };

    return (
        <>
            <Modal
                opened={forgotOpened}
                withCloseButton={false}
                size="45%"
                onClose={closeForgotModal}>
                <div className="flex justify-center mb-[20px]">
                    <img className="h-[60px]" src={Logo} alt="" />
                </div>
                <form className="mx-[40px] mt-[60px]">
                    <p className=" font-medium text-[24px] leading-[24px] text-[#54565B] mb-[14px]">
                        Forgot Password?
                    </p>
                    <p className=" font-normal text-[13px] leading-[24px] text-[#9FA19C]">
                        Enter your email address below, and we'll email
                        instructions for setting a new one
                    </p>
                    <input
                        className="p-[13px_20px] my-[40px] w-full bg-[#F9FAFB] border border-solid border-[#EBEBEB] rounded-[15px]"
                        type="email"
                        placeholder="Email Address"
                    />
                    <button className="bg-[#212143] rounded-[10px] font-[700] text-[16px] leading-[37px] w-full h-[60px] text-[#fff]">
                        Submit
                    </button>
                    <p
                        onClick={switchModal}
                        className="mt-[20px] cursor-pointer flex gap-[13px] items-center justify-center font-[400] text-[16px] leading-[24px] text-[#0064FF]">
                        <img src={SignInBack} alt="" />
                        Back to Sign In
                    </p>
                </form>
            </Modal>
        </>
    );
}

export default OpenForgotModal;
