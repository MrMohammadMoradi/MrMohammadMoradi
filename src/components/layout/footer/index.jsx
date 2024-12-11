import { FaHeart } from "react-icons/fa6";

export const Footer = () => {
    return (
        <div className="flex justify-center items-center py-2 ">
            <span className="px-1">Product by </span>
            <FaHeart color="red"/>
        </div>
    );
};