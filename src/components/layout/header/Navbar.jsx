import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const links = [
    {
        id: 0,
        linkName: "layout.homPage_btn",
        pathLink: "/",
    },
    {
        id: 1,
        linkName: "layout.aboutMe_btn",
        pathLink: "/about-me",
    },
    {
        id: 2,
        linkName: "layout.projects_btn",
        pathLink: "/projects",
    },
    {
        id: 3,
        linkName: "layout.contactMe_btn",
        pathLink: "/contact-me",
    },
];
export const Navbar = () => {
    const {t} = useTranslation()
    return (
        <>
            <ul className="flex flex-col gap-2 lg:flex-row md:w-[750px] justify-evenly">
                {links.map((item) => (
                    <li key={item.id} className="flex my-1 md:w-40 lg:my-0 text-center">
                        <Link
                            className=" px-3 py-2 cursor-pointer w-full duration-150 bg-white shadow-lg rounded-xl hover:bg-blue-950 hover:text-white hover:transition-all ease-in "
                            to={item.pathLink}
                        >
                            {t(item.linkName)}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};
