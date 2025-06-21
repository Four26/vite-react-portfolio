import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap } from "react-icons/fa";
import { SiExpress, SiTypescript, SiPhp, SiCisco, SiCodeigniter, SiSocketdotio, SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdOutlineLockPerson, MdSupportAgent } from "react-icons/md";
import { FaNetworkWired, FaTools, FaWrench } from "react-icons/fa";

const skills = [
    { icon: <RiTailwindCssFill />, label: "Tailwind CSS", color: "text-sky-500", type: "Frontend" },
    { icon: <FaBootstrap />, label: "Bootsrap", color: "text-purple-800", type: "Frontend" },
    { icon: <FaReact />, label: "React", color: "text-blue-500", type: "Frontend" },
    { icon: <SiTypescript />, label: "TypeScript", color: "text-blue-600", type: "Frontend" },
    { icon: <FaHtml5 />, label: "HTML5", color: "text-orange-600", type: "Frontend" },
    { icon: <FaCss3Alt />, label: "CSS3", color: "text-blue-600", type: "Frontend" },
    { icon: <FaJsSquare />, label: "JavaScript", color: "text-yellow-400", type: "Frontend" },
    { icon: <FaNodeJs />, label: "Node.js", color: "text-green-600", type: "Backend" },
    { icon: <SiCodeigniter />, label: "Codeigniter", color: "text-orange-600", type: "Backend" },
    { icon: <SiExpress />, label: "Express", color: "text-gray-800", type: "Backend" },
    { icon: <SiPhp />, label: "PHP", color: "text-[#777BB4]", type: "Backend" },
    { icon: <SiSocketdotio />, label: "Socket.io", color: "text-[#010101 ]", type: "Backend" },
    { icon: <BiLogoPostgresql />, label: "PostgreSQL", color: "text-blue-300", type: "Backend" },
    { icon: <SiMysql />, label: "MySQL", color: "text-[#00758F ]", type: "Backend" },
    { icon: <MdOutlineLockPerson />, label: "Session", color: "text-gray-600", type: "Backend" },
    { icon: <FaNetworkWired />, label: "LAN/WAN", color: "text-sky-600", type: "Networking" },
    { icon: <FaWrench />, label: "Troubleshooting", color: "text-gray-600", type: "Networking" },
    { icon: <SiCisco />, label: "Cisco Packet Tracer", color: "text-[#1BA0D7]", type: "Networking" },
    { icon: <FaTools />, label: "System Maintenance", color: "text-gray-700", type: "Networking" },
    { icon: <MdSupportAgent />, label: "Tech Support", color: "text-purple-600", type: "Networking" },
];

const Skills = () => {
    return (
        <div className="wrapper px-10 md:px-15 lg:px-20">
            <section id="skills" className="max-w-auto pt-10 pb-20">
                <h1 className="text-center text-3xl font-mono font-bold mb-10">Technical Skills</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {["Frontend", "Backend", "Networking"].map((type) => (
                        <div
                            key={type}
                            className="border border-gray-200 overflow-hidden flex flex-col justify-between gap-4 tracking-wider h-full shadow"
                        >
                            <h2 className="text-center text-xl font-semibold border-b py-4 border-gray-400">{type}</h2>
                            <ul className="p-6 grid gap-4 flex-1 text-gray-800">
                                {skills.filter((skill) => skill.type === type).map((skill) => (
                                    <li
                                        key={skill.label}
                                        className="flex items-center gap-3"
                                    >
                                        <span className={`text-2xl ${skill.color}`}>
                                            {skill.icon}
                                        </span>
                                        <span className="font-medium">
                                            {skill.label}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Skills;