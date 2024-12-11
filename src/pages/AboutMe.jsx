export const AboutMe = () => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - 2001;
    console.log(age);
    return (
        <div className="h-full overflow-y-auto">
            <div className="flex flex-col p-5 cursor-default">
                <div className="flex flex-col py-5 px-3">
                    <h3 className="font-bold text-2xl text-blue-950">
                        First, a full introduction of myself :
                    </h3>
                    <p className=""></p>
                    <p className=""></p>
                </div>
                <div className="flex flex-col py-5 px-3">
                    <h3 className="font-bold text-2xl text-blue-950">
                        Second, my entrance into the programming world :
                    </h3>
                    <p className=""></p>
                    <p className=""></p>
                </div>
                <div className="flex flex-col py-5 px-3">
                    <h3 className="font-bold text-2xl text-blue-950">
                        Third, what I am looking for now :
                    </h3>
                    <p className=""></p>
                    <p className=""></p>
                </div>
            </div>
        </div>
    );
};
