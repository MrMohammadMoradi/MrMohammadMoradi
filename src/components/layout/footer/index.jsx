import { useTranslation } from "react-i18next";
import { FaHeart } from "react-icons/fa6";

export const Footer = () => {
    const {t} = useTranslation()
    return (
        <div className="flex justify-center items-center py-2 ">
            <span className="px-1">
                {t('layout.footer')}
            </span>
            <FaHeart color="red"/>
        </div>
    );
};