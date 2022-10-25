import { Menu } from "@mantine/core";
import {} from "@tabler/icons";
import { OptionsChat } from "../utils";

export default function OptionsMenu() {
    return (
        <Menu shadow="md" transition="slide-down" offset={35}>
            <Menu.Target>
                <img
                    className="h-[12px] cursor-pointer"
                    src={OptionsChat}
                    alt=""
                />
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>
                    <span className="text-[14px] font-semibold text-[#212143]">
                        Clear Chat
                    </span>
                </Menu.Label>
                <Menu.Label>
                    <span className="text-[14px] font-semibold text-[#FF0909]">
                        Block User
                    </span>
                </Menu.Label>
            </Menu.Dropdown>
        </Menu>
    );
}
