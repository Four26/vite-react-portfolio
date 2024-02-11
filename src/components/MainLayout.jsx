import React, { useState, useEffect } from "react";
import "./mainlayout.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./projects/Portfolio";

const MainLayout = () => {
    const [themeMode, setThemeMode] = useState("light");
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        document.body.classList.add(themeMode);
        return () => document.body.classList.remove(themeMode);
    }, [themeMode]);

    useEffect(()=> {
        const intervalID = setInterval(()=> {
            setCurrentYear(new Date().getFullYear());
        }, 60000);
        return () => clearInterval(intervalID);
    }, [])

    const handleToggle = () => {
        setThemeMode((themeMode) => (themeMode === "light" ? "dark" : "light"));
    };

    return (
        <>
            <div className={`navbar ${themeMode}`}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Projects</Link>
                    </li>
                </ul>
                <div className="toogle" onClick={handleToggle}>
                    {themeMode === "light" ? <p>🌑</p> : <p>🌕</p>}
                </div>
            </div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/portfolio" element={<Portfolio />} />
            </Routes>
            <div className="footer">
                <div className="paragraph">
                    <p>Created with 💚 by Franklin Abonero</p>
                    <p>©️ {currentYear}</p>
                </div>
            </div>
        </>
    );
};

export default MainLayout;
