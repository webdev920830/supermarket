import React, { useEffect, useState  }  from 'react';
import "tailwindcss/tailwind.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
function Navbar({fixed}){
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrolled, setIsScrolled] = useState(true);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        if (scrollPosition == 0) {
            setIsScrolled(true)
        } else if (scrollPosition > 10) {
            setIsScrolled(false)
        } else if (scrollPosition < 10) {
            setIsScrolled(true)
        }
      }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
    })
    return(
        <>
            <nav className={`fixed flex flex-wrap items-center justify-between px-2 py-4 mb-3 w-full z-10 mt-4 ${isScrolled ? "bg-white-500" : "bg-white"}`}>
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            to="/"
                        >
                            <img src="https://moodproperties.com/wp-content/uploads/2021/08/Mood-Properties-v2.png" height="50" width="250" alt="logo" />
                        </Link>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    </div>
                    <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-dark hover:opacity-75"
                                    to="/"
                                >
                                    <i className="fab fa-facebook-square text-lg leading-lg text-dark opacity-75"></i><span className="ml-2">HOME</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-dark hover:opacity-75"
                                    to="/buy"
                                >
                                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">BUY</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-dark hover:opacity-75"
                                    to="/rent"
                                >
                                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">RENT</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-dark hover:opacity-75"
                                    to="/aboutus"
                                >
                                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">ABOUT US</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-dark hover:opacity-75"
                                    to="/careers"
                                >
                                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">CAREERS</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-dark hover:opacity-75"
                                    to="/contactus"
                                >
                                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">CONTACT US</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;