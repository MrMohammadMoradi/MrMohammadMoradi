import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { Navbar } from "./Navbar";
import { useTranslation } from "react-i18next";

export const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);
    const {i18n} = useTranslation();

    return (
        <>
            <Hamburger size={20} toggle={setOpen} toggled={open} />
            {open && (
                <div className={`absolute z-10 bg-blue-300 backdrop:blur-md w-60 top-14 ${i18n.dir() == "rtl" ? ("right-12") : ("left-12")} p-2 rounded-xl shadow-lg`}>
                    <Navbar />
                </div>
            )}
        </>
    );
};
