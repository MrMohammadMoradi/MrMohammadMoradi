import { ContactList } from "@src/components/ContactList";
import { useTranslation } from "react-i18next";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";

export const ContactMe = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="flex flex-col ps-5 h-full justify-center overflow-y-auto bg-[url('@src/assets/images/Contact-me.jpg')] bg-no-repeat bg-cover rounded-md">
            <div
                className={`flex flex-col items-center ${
                    i18n.dir() == "rtl" ? " md:items-end" : " md:items-start"
                } p-5 h-28 sm:h-20 justify-between`}
            >
                <div className="flex w-1/2">
                    <BsFillTelephoneOutboundFill size={24} />
                    <a href="tel:+989908343360" className="ps-2">
                        {t("ContactMePage.call")}:
                        <span className="font-bold hover:text-blue-950 ">
                            +98-990-834-3360
                        </span>
                    </a>
                </div>
                <div className="flex w-1/2">
                    <MdAttachEmail size={24} />
                    <a
                        href="mailto:MrMohammad.moradi@yahoo.com"
                        className="ps-2"
                    >
                        {t("ContactMePage.mail")}:
                        <span className="font-bold hover:text-blue-950">
                            MrMohammad.moradi@yahoo.com
                        </span>
                    </a>
                </div>
                <div className="flex flex-col w-1/2 flex-wrap md:flex-row py-5 items-center">
                    <p className="text-xl font-bold">
                        {t("ContactMePage.networks")} :
                    </p>
                    <ContactList />
                </div>
            </div>
        </div>
    );
};
