import React, { useState } from 'react';
import './navbar.css'
import { FiHome ,FiBook, FiDollarSign, FiLogOut,FiChevronRight,FiSearch,FiMoon,FiSun } from 'react-icons/fi';
function Navbar(props) {
    const [sidebar, setSidebar] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    const handleToggleSidebar = () => setSidebar(!sidebar);
    const handleToggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <div className={`App ${darkMode ? 'dark' : ''}`}>
            <nav className={`sidebar ${sidebar ? 'close' : ''}`}>
                <header>
                    <div className="image-text">
                        <span className="image">
                            {/* <img src="logo.png" alt=""> */}
                        </span>
                        <div className="text logo-text">
                            <span className="name">OneTrades</span>
                            <span className="profession">Client</span>
                        </div>
                    </div>
                    <FiChevronRight className="toggle" onClick={handleToggleSidebar} />
                </header>
                <div className="menu-bar">
                    <div className="menu">
                        <li className="search-box" onClick={() => setSidebar(true)}>
                            <FiSearch className="icon" />
                            <input type="text" placeholder="Search..." />
                        </li>
                        <ul className="menu-links">
                            <li className="nav-link">
                                <a href="/account">
                                    <FiHome className="icon" />
                                    <span className="text nav-text">Dashboard</span>
                                </a>
                            </li>
                           
                            <li className="nav-link">
                                <a href="/account/books">
                                    <FiBook className="icon" />
                                    <span className="text nav-text">Books</span>
                                </a>
                            </li>
                           
                        </ul>
                    </div>
                    <div className="bottom-content">
                        <li className="">
                            <a href="/login">
                                <FiLogOut className="icon" />
                                <span className="text nav-text">Logout</span>
                            </a>
                        </li>
                        
                        {/* <li className="mode" onClick={handleToggleDarkMode}>
                            <div className="sun-moon">
                                <FiMoon className="icon moon" />
                                <FiSun className="icon sun" />
                            </div>
                            <span className="mode-text text">{darkMode ? 'Light mode' : 'Dark mode'}</span>
                            <div className="toggle-switch">
                                <span className="switch"></span>
                            </div>
                        </li> */}
                    </div>
                </div>
            </nav>
            <section className="home">
                <div className="text">{props.children}</div>
            </section>
        </div>
    );
}
export default Navbar;
