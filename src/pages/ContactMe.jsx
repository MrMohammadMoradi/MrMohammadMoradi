import { ContactList } from "@src/components/ContactList";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";

export const ContactMe = () => {
    return (
        <div className="flex flex-col ps-5 h-full justify-center overflow-y-auto bg-[url('@src/assets/images/Contact-me.jpg')] bg-no-repeat bg-cover rounded-md">
            <div className="flex flex-col items-center md:items-start p-5 h-28 sm:h-20 justify-between">
                <div className="flex">
                    <BsFillTelephoneOutboundFill size={24} />
                    <a href="tel:+989908343360" className="ps-2">
                        Call Me :
                        <span className="font-bold hover:text-blue-950 ">
                            +98-990-834-3360
                        </span>
                    </a>
                </div>
                <div className="flex">
                    <MdAttachEmail size={24} />
                    <a
                        href="mailto:MrMohammad.moradi@yahoo.com"
                        className="ps-2"
                    >
                        Send Mail :
                        <span className="font-bold hover:text-blue-950">
                            MrMohammad.moradi@yahoo.com
                        </span>
                    </a>
                </div>
            </div>
            <div className="flex flex-col flex-wrap md:flex-row p-5 items-center">
                <p className="text-xl font-bold">My social Networks :</p>
                <ContactList />
            </div>
        </div>
    );
};

