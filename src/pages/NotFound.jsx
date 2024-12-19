import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const NotFound = () => {
	const {t} = useTranslation();
    return (
        <div className="relative w-full h-full bg-white bg-[url('@src/assets/gifs/404Minimal.gif')] bg-no-repeat bg-contain bg-center">
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <div className="flex flex-col items-center">
                    <p className="font-bold text-2xl text-center">
						{
							t('NotFoundPage.notFound')
						}
					</p>
                    <Link to={"/"}>
                        <button className="bg-blue-950 text-white rounded-md p-2 mt-2">
							{
								t('NotFoundPage.backHome')
							}
						</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
