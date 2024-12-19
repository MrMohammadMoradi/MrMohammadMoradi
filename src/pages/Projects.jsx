import { useTranslation } from "react-i18next";

export const Projects = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col">
            <h2 className="text-center font-bold text-2xl text-blue-950">{t("ProjectsPage.projects")}</h2>
            <div className="flex flex-wrap">{}</div>
        </div>
    );
};
