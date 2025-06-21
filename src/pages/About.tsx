import profile from "../assets/photo_6329993255944565582_y.jpg";

const About = () => {
    return (
        <div className="wrapper px-10 md:px-15 lg:px-20">
            <section id="about" className="max-w-auto pt-10 pb-20">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Profile Image - Full width on mobile, constrained on desktop */}
                    <div className="w-full lg:w-1/3 flex justify-center">
                        <img
                            src={profile}
                            alt="Franklin Abonero"
                            className="w-full max-w-md h-auto shadow-lg object-cover"
                        />
                    </div>

                    {/* Bio Content - Full width on mobile, 2/3 on desktop */}
                    <div className="w-full lg:w-2/3 space-y-6">
                        <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wide text-gray-800">
                            Hi! I'm <span className="text-orange-600">Franklin Abonero</span>
                        </h1>

                        <p className="text-lg md:text-xl font-serif text-gray-700">
                            Computer Engineering graduate from the Philippines.
                        </p>

                        <div className="space-y-4">
                            <p className="font-mono text-base md:text-lg text-gray-600 leading-relaxed">
                                I'm a self-taught web developer with a passion for learning new technologies,
                                technical support, and networking fundamentals.
                            </p>
                            <p className="font-mono text-base md:text-lg text-gray-600 leading-relaxed">
                                I enjoy solving technical problems, optimizing systems, and building clean,
                                efficient web applications. With a strong passion for learning, I'm always
                                looking to expand my skillset and grow as a developer.
                            </p>
                            <p className="font-mono text-base md:text-lg text-gray-600 leading-relaxed">
                                When I'm not coding, you'll probably find me watching Naruto or playing Clash of Clans.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;