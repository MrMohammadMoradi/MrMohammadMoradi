import { HamburgerMenu } from "./HamburgerMenu";
import { Navbar } from "./Navbar";

export const Header = () => {
    return (
        <div className="container rounded-xl shadow-md px-3 py-2">
            <nav className="flex justify-between items-center">
                <div className="flex flex-row md:hidden">
                    <HamburgerMenu />
                </div>
                <div className="hidden md:flex w-[400px] ">
                    <Navbar />
                </div>
                <h2 className="font-bold px-3">
                    Mohammad Moradi
                </h2>
            </nav>
        </div>
    );
};
