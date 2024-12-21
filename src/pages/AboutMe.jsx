import { useTranslation } from "react-i18next";

export const AboutMe = () => {
    const { t } = useTranslation();
    return (
        <div className="h-full overflow-y-auto">
            <div className="flex flex-col p-5 cursor-default">
                <div className="flex flex-col py-5 px-3">
                    <h3 className="font-bold text-2xl text-blue-950">
                        {t("AboutMePage.aboutPage_title1")}
                    </h3>
                    <p className="">{t("AboutMePage.aboutPage_p1")}</p>
                </div>
                <div className="flex flex-col py-5 px-3">
                    <h3 className="font-bold text-2xl text-blue-950">
                        {t("AboutMePage.aboutPage_title2")}
                    </h3>
                    <p className="">{t("AboutMePage.aboutPage_p2")}</p>
                </div>
                <div className="flex flex-col py-5 px-3">
                    <h3 className="font-bold text-2xl text-blue-950">
                        {t("AboutMePage.aboutPage_title3")}
                    </h3>
                    <p className="">{t("AboutMePage.aboutPage_p3")}</p>
                </div>
            </div>
        </div>
    );
};
