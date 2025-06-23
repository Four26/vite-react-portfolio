import image from "../components/image";
const Projects = () => {

    const projects = [
        { id: 1, title: "File Uploader", description: "A stripped-down version of Google Drive built with React and Express.", link: "https://github.com/Four26/file-uploader", image: image.fileUploader },
        { id: 2, title: "Inventory Manager", description: "A full-stack Inventory Management System with a React frontend and an Express backend.", link: "https://github.com/Four26/inventory-management.git", image: image.inventoryManager },
        { id: 3, title: "Barangay Luna Management System", description: "A management system with face recognition is an undergraduate thesis. It allows the admin to register the resident and issue barangay certificates using face recognition. ", link: "https://github.com/Four26/brgy-management-system.git", image: image.managementSystem },
        { id: 4, title: "Memory Game", description: "A simple memory pokemon card game built with ReactVite.", link: "https://github.com/Four26/memory-game.git", image: image.memoryGame },
        { id: 5, title: "Fake Store", description: "A fake store built with HTML, CSS, and JavaScript. It also includes a minimal configuration for state management, routing, and managing products in a shopping cart.", link: "https://github.com/Four26/shopping-cart-odin.git", image: image.fakeStore },
        { id: 6, title: "Image API", description: "A simple image fetcher built with HTML, CSS, and JavaScript.", link: "https://github.com/Four26/image-api.git", image: image.imageApi },
        { id: 7, title: "Palindrome Checker", description: "A palindrome checker built with HTML, CSS and JavaScript.", link: "https://github.com/Four26/Palindrome-Checker.git", image: image.palindromeChecker },
        { id: 8, title: "Resume Builder", description: "A resume builder built with HTML, CSS, and JavaScript.", link: "https://github.com/Four26/CV-builder.git", image: image.resumeBuilder },
        { id: 9, title: "Discord Bot", description: "A discord bot that can generate a csv file of roles in a discord server. ", link: "https://github.com/Four26/role-csv.git", image: image.discordBot }
    ];
    return (
        <div className="wrapper px-10 md:px-15 lg:px-20">
            <section id="projects" className="max-w-auto pt-10 pb-20">
                <h2 className="text-3xl font-bold font-mono text-center mb-10">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-7 auto-rows-fr">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex flex-col gap-2 h-full"
                        >
                            <img className="w-full h-60 border border-gray-200 hover:border-orange-600 hover:border-2 transition-colors ease-in-out" src={project.image} alt={project.title} />
                            <div className="flex-grow">
                                <h2 className="font-bold font-mono text-xl">{project.title}</h2>
                                <p className="font-mono">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-orange-600 hover:underline mt-auto"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Projects;