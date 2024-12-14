import me from "@src/assets/images/me.png";
import { SkillList } from "../components/SkillList";
import { Education_Licenses } from "../components/Education_Licenses";
import { useTranslation } from "react-i18next";
export const HomePage = () => {
    const { t } = useTranslation();
    return (
        <div className="h-full overflow-y-auto">
            <div className="flex flex-col md:flex-row cursor-default justify-around items-center pt-2 pb-5">
                <div className="flex flex-col font-bold">
                    <span className="text-lg">{t("HomePage.hi")}</span>
                    <h2 className="text-6xl text-blue-600 drop-shadow-md text-center md:text-start hover:drop-shadow-xl duration-150 ease-linear">
                        {t("layout.myName")}
                    </h2>
                    <p className="text-center text-xl">
                        Junior Web Front-end (ReactJs) developer
                    </p>
                </div>
                <img
                    src={me}
                    className="size-72 pt-2 duration-200 ease-linear rounded-full hover:shadow-lg hover:shadow-blue-950"
                    alt="mohammad-moradi"
                />
            </div>
            <div className="py-5 border-y-2 cursor-default">
                <h3 className="font-bold text-center text-2xl text-blue-950">
                    {t("HomePage.introduction")}
                </h3>
                <p className="p-3 text-center md:text-start">
                    {t("HomePage.intro_p1")}
                </p>
                <p className="p-3 text-center md:text-start">
                    {t("HomePage.intro_p2")}
                </p>
                <p className="p-3 text-center md:text-start">
                    {t("HomePage.intro_p3")}
                </p>
            </div>
            <div className="py-5 ">
                <SkillList />
            </div>
            <div className="py-5  border-y-2">
                <Education_Licenses />
            </div>
        </div>
    );
};
