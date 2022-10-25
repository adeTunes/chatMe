import { Modal } from "@mantine/core";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Logo from "../utils/images/c3.png";
import SignInBack from "../utils/images/sign-in-back.png";

function OpenRegModal() {
    const { regOpened, closeRegModal, openModal } = useContext(AuthContext);

    const switchModal = () => {
        closeRegModal();
        openModal();
    };

    return (
        <>
            <Modal
                opened={regOpened}
                withCloseButton={false}
                size="45%"
                onClose={closeRegModal}>
                <div className="flex justify-center mb-[20px]">
                    <img className="h-[60px]" src={Logo} alt="" />
                </div>
                <form className="mx-[40px]">
                    <p className=" font-medium text-[24px] leading-[24px] text-[#54565B] mb-[14px]">
                        Create Account
                    </p>
                    <p className=" font-normal text-[13px] leading-[24px] text-[#9FA19C]">
                        By signing up for ChatMe, you agree to our{" "}
                        <span className="text-[13px] cursor-pointer font-normal leading-[24px] underline text-[#0064FF]">
                            terms of service
                        </span>
                    </p>
                    <div className="flex flex-col gap-[15px] my-[35px]">
                        <input
                            className="p-[13px_20px] w-full bg-[#F9FAFB] border border-solid border-[#EBEBEB] rounded-[15px]"
                            type="email"
                            placeholder="Email Address"
                        />
                        <input
                            className="p-[13px_20px] w-full bg-[#F9FAFB] border border-solid border-[#EBEBEB] rounded-[15px]"
                            type="text"
                            placeholder="Username"
                        />
                        <input
                            className="p-[13px_20px] w-full bg-[#F9FAFB] border border-solid border-[#EBEBEB] rounded-[15px]"
                            type="password"
                            placeholder="Password"
                        />
                        <input
                            className="p-[13px_20px] w-full bg-[#F9FAFB] border border-solid border-[#EBEBEB] rounded-[15px]"
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </div>
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

export default OpenRegModal;
