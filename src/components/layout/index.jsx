import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import { useTranslation } from "react-i18next";

export const Layout = () => {
    const {i18n} = useTranslation();

    return (
        <div dir={i18n.dir()} className="flex flex-col justify-center items-center h-full p-2 bg-slate-50">
            <Header />
            <div className="container mx-auto p-3 rounded-lg shadow-lg w-full h-[calc(100vh-115px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
