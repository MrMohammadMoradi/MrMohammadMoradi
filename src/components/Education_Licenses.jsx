import logo from "@src/assets/images/lar-logo.png";
import quera from "@src/assets/images/quera_logo.jpeg"
import { t } from "i18next";

const data = [
    {
        id: 0,
        titleSection: "HomePage.education",
        photo: logo,
        titleCard: "HomePage.university",
        subTitle: "HomePage.degree",
        date: "HomePage.uni_date",
        haveLink: false,
        link: "",
    },
    {
        id: 1,
        titleSection: "HomePage.licenses",
        photo: quera,
        titleCard: "HomePage.course_name",
        subTitle:"HomePage.company",
        date: "HomePage.course_date",
        haveLink: true,
        link: "https://quera.org/certificate/myzbvykf/",
    },
];

export const Education_Licenses = () => {
    return (
        <div className="flex flex-col cursor-default">
            {
                data.map((item)=>(
                    <div key={item.id} className="flex flex-col px-5 py-3">
                <h3 className="text-2xl text-blue-950 font-bold text-center">
                    {t(item.titleSection)}
                </h3>
                <div className="flex flex-col md:flex-row p-2 items-center rounded-xl hover:shadow-xl">
                    <img className="rounded-xl size-20" src={item.photo} alt={t(item.titleCard)} />
                    <div className="flex flex-col ps-2 text-center md:text-start">
                        <h4 className=" font-bold">{t(item.titleCard)}</h4>
                        <p className="">{t(item.subTitle)}</p>
                        <p className="text-gray-700">{t(item.date)}</p>
                        <div className="flex justify-center items-center md:justify-start">
                        {
                            item.haveLink ? (
                                <a href={item.link}
                                    target="_blank"
                                    className="px-3 py-2 w-40 text-center rounded-full hover:shadow-xl">
                                        {t('HomePage.certificate')}
                                </a>
                            ) : ("")
                        }
                        </div>
                    </div>
                </div>
            </div>
                ))
            }
        </div>
    );
};
