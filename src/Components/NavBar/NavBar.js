import React from "react";
import { Link } from "react-router-dom";
// import "./NavBar.css";
import { useState } from "react";
import Hamburger from "../Hamburger/Hamburger.js";

function NavBar() {
    // const [hamburgerVisible, set]
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
        console.log("clicked");
    };

    return (
        <>
            <div>
                <nav className="navigation">
                    <Link to="/" className="link">
                        Home
                    </Link>
                    <Link to="/reviews" className="link">
                        Reviews
                    </Link>
                </nav>
                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen} />
                </div>
            </div>

            <style>{`
                .navigation {
                    padding-top: 10px;
                    width: 99vw;
                    color: #c68541;
                    display: flex;
                    justify-content: flex-end;
                }

                .link {
                    padding: 0 5px;
                    overflow: hidden;
                    font-size: 1.9vw;
                    font-family: 'Quicksand', sans-serif;
                }
                

                a:link {
                    color: #c68541;
                    text-decoration: none;
                }

                a:visited {
                    color: #c68541;
                }

                a:hover {
                    color: #4f7978;
                }

                .hamburger{
                    visibility: ${hamburgerOpen ? "visible" : "hidden"};
                    z-index: 6;
                    
                } 
                @media only screen and (max-width: 900px) {
                    .hamburger {
                    visibility: visible;
                    display: fixed;
                      padding-top: 10px;
                      margin-left: 10px;
                      z-index: 6;
                  }

                  .navigation {
                    display: ${hamburgerOpen ? "flex" : "none"};
                    flex-direction: column;
                    background-color: #4f7978;
                    justify-content: space-around;
                    align-items: center;
                    width: 100vw;
                    position: fixed;
                    
                  }

                  .link {
                    margin: 2vh;
                    font-size: 5vw;
                      
                  }

                    }
                @media only screen and (max-width: 600px) {
                  
                  .hamburger {
                    visibility: visible;
                    display: fixed;
                      padding-top: 10px;
                      margin-left: 10px;
                      z-index: 6;
                  }

                  .navigation {
                    display: ${hamburgerOpen ? "flex" : "none"};
                    flex-direction: column;
                    background-color: #4f7978;
                    justify-content: space-around;
                    align-items: center;
                    width: 100vw;
                    position: fixed;
                  }
              
                  .link {
                    padding: 1vh;
                    font-size: 10vw;
                  }
                 
              }
              

            `}</style>
        </>
    );
}

export default NavBar;
