import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full p-2 bg-slate-50">
            <Header />
            <div className="container mx-auto p-3 rounded-lg shadow-lg w-full h-[calc(100vh-105px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
