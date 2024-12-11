import { Link } from "react-router-dom";

const links = [
    {
        id: 0,
        linkName: "HomePage",
        pathLink: "/",
    },
    {
        id: 1,
        linkName: "About Me",
        pathLink: "/about-me",
    },
    {
        id: 2,
        linkName: "Contact Me",
        pathLink: "/contact-me",
    },
];
export const Navbar = () => {
    return (
        <>
            <ul className="flex flex-col md:flex-row w-full justify-evenly">
                {links.map((item) => (
                    <li key={item.id} className="flex my-1 md:my-0 w-56 md:w-32 text-center">
                        <Link
                            className=" px-2 py-1 cursor-pointer w-full duration-150 bg-white shadow-lg rounded-xl hover:bg-blue-950 hover:text-white hover:transition-all ease-in "
                            to={item.pathLink}
                        >
                            {item.linkName}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};
