import logo from "@src/assets/images/lar-logo.png";
import quera from "@src/assets/images/quera_logo.jpeg"

const data = [
    {
        id: 0,
        titleSection: "Education",
        photo: logo,
        titleCard: "Larestan Higher Education Complex",
        subTitle:
            "Bachelor of Computer Engineering, Computer Software EngineeringBachelor of Computer Engineering,Computer Software Engineering",
        date: "Sep 2019 - Aug 2024",
        haveLink: false,
        link: "",
    },
    {
        id: 1,
        titleSection: "Licenses & certifications",
        photo: quera,
        titleCard: "TASK-ORIENTED BOOTCAMP IN FRONT-END DEVELOPMENT WITH REACT",
        subTitle:"Quera",
        date: "Issued Jun 2023",
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
                    {item.titleSection}
                </h3>
                <div className="flex flex-col md:flex-row p-2 items-center rounded-xl hover:shadow-xl">
                    <img className="rounded-xl size-20" src={item.photo} alt={item.titleCard} />
                    <div className="flex flex-col ps-2 text-center md:text-start">
                        <h4 className=" font-bold">{item.titleCard}</h4>
                        <p className="">{item.subTitle}</p>
                        <p className="text-gray-700">{item.date}</p>
                        <div className="flex justify-center items-center md:justify-start">
                        {
                            item.haveLink ? (
                                <a href={item.link}
                                    target="_blank"
                                    className="px-3 py-2 w-40 text-center rounded-full hover:shadow-xl">
                                        Show credential
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
