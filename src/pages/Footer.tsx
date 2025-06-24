const Footer = () => {
    return (
        <div className="wrapper px-10 md:px-15 lg:px-20">
            <footer className="mt-10 py-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-start md:items-start gap-15 text-sm">
                {/* Left Section */}
                <div className="flex-1 text-left space-y-1">
                    <p>Built with React, Typescript, Tailwind CSS, and Vite</p>
                    <p className="italic">Passionate about building scalable and accessible web apps.</p>
                    <p>
                        © {new Date().getFullYear()} Made and maintained by{" "}
                        <span className="text-orange-600 font-medium">Franklin Abonero</span>
                    </p>
                </div>

                {/* Right Section */}
                <div className="flex flex-col sm:flex-row gap-10 w-auto justify-between">
                    <div className="pages">
                        <h2 className="text-orange-600 text-2xl font-mono mb-5">Pages</h2>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-4 font-mono">
                            <li><a className="hover:text-orange-600 transition-colors" href="#about">About</a></li>
                            <li><a className="hover:text-orange-600 transition-colors" href="#skills">Skills</a></li>
                            <li><a className="hover:text-orange-600 transition-colors" href="#projects">Projects</a></li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors" href="https://drive.google.com/file/d/1PJxdRML58hBh0VoxQStd_CHGDZa5EKIU/view?usp=drive_link">
                                    Resume
                                </a></li>
                        </ul>
                    </div>

                    <div className="connect">
                        <h2 className="text-orange-600 text-2xl font-mono mb-5">Get in touch</h2>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-4 font-mono">
                            <li><a className="hover:text-orange-600 transition-colors" href="mailto:franklinabonero28@gmail.com">Email</a></li>
                            <li><a className="hover:text-orange-600 transition-colors" href="https://www.linkedin.com/in/franklinabonero/" target="_blank">LinkedIn</a></li>
                            <li><a className="hover:text-orange-600 transition-colors" href="https://github.com/Four26" target="_blank">GitHub</a></li>
                            <li><a className="hover:text-orange-600 transition-colors" href="https://www.facebook.com/frank.abonero20/" target="_blank">Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
