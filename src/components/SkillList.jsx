import { BiLogoJavascript } from "react-icons/bi";
import { FaWordpress } from "react-icons/fa";
import {
    FaBootstrap,
    FaCss3Alt,
    FaGitAlt,
    FaReact,
    FaSass,
} from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";

const skillItems = [
    {
        id: 0,
        skillName: "HTML5",
        skillIcon: <TiHtml5 size={64} color="rgb(221, 75, 37)" />,
        reference: "https://html.spec.whatwg.org/",
    },
    {
        id: 1,
        skillName: "CSS3",
        skillIcon: <FaCss3Alt size={64} color="rgb(33, 76, 229)" />,
        reference: "https://www.w3.org/TR/CSS/",
    },
    {
        id: 2,
        skillName: "JavaScript",
        skillIcon: <BiLogoJavascript size={64} color="rgb(237, 214, 24)" />,
        reference: "https://www.javascript.com/",
    },
    {
        id: 3,
        skillName: "React",
        skillIcon: <FaReact size={64} color="rgb(88, 196, 220)" />,
        reference: "https://react.dev/",
    },
    {
        id: 4,
        skillName: "TypeScript",
        skillIcon: <SiTypescript size={64} color="1573c0" />,
        reference: "https://www.typescriptlang.org/",
    },
    {
        id: 5,
        skillName: "TailwindCss",
        skillIcon: <RiTailwindCssFill size={64} color="rgb(56, 189, 248)" />,
        reference: "https://tailwindcss.com/",
    },
    {
        id: 6,
        skillName: "Bootstrap",
        skillIcon: <FaBootstrap size={64} color="rgb(113, 16, 245)" />,
        reference: "https://getbootstrap.com/",
    },
    {
        id: 7,
        skillName: "SCSS",
        skillIcon: <FaSass size={64} color="rgb(207, 100, 154)" />,
        reference: "https://sass-lang.com/",
    },
    {
        id: 8,
        skillName: "Git",
        skillIcon: <FaGitAlt size={64} color="rgb(245, 77, 39)" />,
        reference: "https://git-scm.com/",
    },
    {
        id: 9,
        skillName: "Github",
        skillIcon: <VscGithub size={64} />,
        reference: "https://github.com/",
    },
    {
        id: 10,
        skillName: "WordPress",
        skillIcon: <FaWordpress size={64} color="rgb(32, 113, 150)"/>,
        reference: "https://fa.wordpress.org/",
    },
];
export const SkillList = () => {
    return (
        <>
            <h3 className="font-bold text-center cursor-default text-2xl text-blue-950">
                SkillList
            </h3>
            <div className="container py-4 flex flex-wrap justify-evenly items-center">
                {skillItems.map((item) => (
                    <a
                        key={item.id}
                        href={item.reference}
                        target="_blank"
                        className=""
                    >
                        <div className="flex flex-col hover:shadow-lg justify-between w-24 h-32 p-2 items-center rounded-xl">
                            {item.skillIcon}
                            <p className="">{item.skillName}</p>
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
};
