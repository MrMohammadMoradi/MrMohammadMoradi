import { ContactList } from "@src/components/ContactList";
import { useTranslation } from "react-i18next";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";

export const ContactMe = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="flex flex-col ps-5 h-full justify-start md:justify-center overflow-y-auto bg-[url('@src/assets/images/Contact-me.jpg')] bg-no-repeat bg-cover rounded-md">
            <div
                className={`flex flex-col items-center ${
                    i18n.dir() == "rtl" ? " items-end" : " items-start"
                } p-5 w-full h-20 md:h-28 sm:h-20 justify-between`}
            >
                <div className="flex ">
                    <a href="tel:+989908343360" className="ps-2 flex flex-col md:flex-row ">
                        <span className="flex">
                            <BsFillTelephoneOutboundFill size={24} />
                            {t("ContactMePage.call")}:
                        </span>
                        <span className="font-bold hover:text-blue-950 ">
                            +98-990-834-3360
                        </span>
                    </a>
                </div>
                <div className="flex justify-center md:w-1/2">
                    <a
                        href="mailto:MrMohammad.moradi@yahoo.com"
                        className="ps-2 flex flex-col md:flex-row "
                    >
                        <span className="flex">
                            <MdAttachEmail size={24} />
                            {t("ContactMePage.mail")}:
                        </span>
                        <span className="font-bold hover:text-blue-950">
                            MrMohammad.moradi@yahoo.com
                        </span>
                    </a>
                </div>
                <div className="flex flex-col md:w-1/2 flex-wrap md:flex-row py-5 items-center">
                    <p className="text-xl font-bold">
                        {t("ContactMePage.networks")} :
                    </p>
                    <ContactList />
                </div>
            </div>
        </div>
    );
};
