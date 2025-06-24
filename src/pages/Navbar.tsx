import { FaEnvelope } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="wrapper px-10 md:px-15 lg:px-20">
            <header className="py-10 ">
                <div className="flex justify-between items-center max-w-auto mx-auto ">
                    <a className="text-2xl font-mono font-semibold">
                        Franklin Abonero
                    </a>
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-6 font-mono text-lg">
                            <li>
                                <a
                                    href="mailto:franklinabonero28@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors"
                                >
                                    <FaEnvelope className="text-lg" />
                                    <span className="hidden lg:inline underline">franklinabonero28@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="hover:text-orange-600 transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className="hover:text-orange-600 transition-colors"
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="hover:text-orange-600 transition-colors"
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-orange-600 transition-colors"
                                    href="https://drive.google.com/file/d/1PJxdRML58hBh0VoxQStd_CHGDZa5EKIU/view?usp=drive_link">
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden"
                    >
                        {isOpen ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}
                    </button>
                </div>

                {isOpen && (
                    <nav className="md:hidden">
                        <ul className="flex flex-col mt-4 items-start gap-2 font-mono text-lg">
                            <li>
                                <a
                                    href="mailto:franklinabonero28@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors"
                                >
                                    <FaEnvelope className="text-lg" />
                                    <span className="hidden lg:inline">franklinabonero28@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="hover:text-orange-600 transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className="hover:text-orange-600 transition-colors"
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="hover:text-orange-600 transition-colors"
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-orange-600 transition-colors"
                                    href="https://drive.google.com/file/d/1PJxdRML58hBh0VoxQStd_CHGDZa5EKIU/view?usp=drive_link">
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </nav>
                )}
            </header>
        </div>

    );
};

export default Navbar;