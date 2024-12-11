import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { Navbar } from "./Navbar";

export const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Hamburger size={20} toggle={setOpen} toggled={open} />
            {open && (
                <div className="absolute bg-blue-300 backdrop:blur-md w-60 top-14 left-12  p-2 rounded-xl shadow-lg">
                    <Navbar />
                </div>
            )}
        </>
    );
};
