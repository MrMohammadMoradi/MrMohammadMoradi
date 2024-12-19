import { t } from "i18next";
import { HamburgerMenu } from "./HamburgerMenu";
import { Navbar } from "./Navbar";
import { useTranslation } from "react-i18next";

export const Header = () => {
    const {
        i18n: { changeLanguage, language },
    } = useTranslation();
    const handelChangeLanguage = (e) => {
        const { value } = e.target;
        changeLanguage(value);
    };
    return (
        <div className="container rounded-xl shadow-md px-3 py-2">
            <nav className="flex justify-between items-center">
                <div className="flex gap-2 justify-center items-center">
                    <div className="flex flex-row lg:hidden">
                        <HamburgerMenu />
                    </div>
                    <div className="hidden lg:flex w-[700px] ">
                        <Navbar />
                    </div>
                    <div>
                        <select
                            name="selectLang"
                            className="px-2 py-1 rounded-2xl"
                            onChange={handelChangeLanguage}
                            id="selectLang"
                            value={language}
                        >
                            <option value="en">
                                {t('layout.enLang')}
                            </option>
                            <option value="fa">
                                {t('layout.faLang')}
                            </option>
                        </select>
                    </div>
                </div>
                <h2 className="font-bold px-3">
                    {t('layout.myName')}
                </h2>
            </nav>
        </div>
    );
};
