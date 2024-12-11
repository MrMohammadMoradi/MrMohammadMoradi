import { FaLinkedin, FaTelegram } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";

const contactItem = [
    {
        id: 0,
        contactName: "Github",
        contactIcon: <VscGithub size={80} />,
        contactLink: "https://github.com/MrMohammadMoradi",
    },
    {
        id: 1,
        contactName: "Linkedin",
        contactIcon: <FaLinkedin size={80} color="rgb(1, 81, 161)" />,
        contactLink: "www.linkedin.com/in/mr-mohammad-moradi",
    },
    {
        id: 2,
        contactName: "Telegram",
        contactIcon: <FaTelegram size={80} color="rgb(40, 156, 214)" />,
        contactLink: "https://t.me/mr_Mmoradi",
    },
];
export const ContactList = () => {
    return (
        <div className="flex flex-row flex-wrap justify-evenly w-72 sm:w-96 p-1 sm:p-3">
            {contactItem.map((item) => (
                <a
                    href={item.contactLink}
                    target="_blank"
                    key={item.id}
                    className="flex flex-col size-28 rounded-xl hover:shadow-xl duration-150 ease-in hover:bg-white justify-center items-center"
                >
                    <span>{item.contactIcon}</span>
                    <span>{item.contactName}</span>
                </a>
            ))}
        </div>
    );
};
