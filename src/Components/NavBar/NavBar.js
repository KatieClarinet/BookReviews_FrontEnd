import React from "react";
import { Link } from "react-router-dom";
// import "./NavBar.css";
import { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";

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
                    height: 50px;
                    color: #c68541;
                    display: flex;
                    justify-content: flex-end;
                    font-size: 4vh;
                }

                .link {
                    padding: 0 5px;
                    overflow: hidden;
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
                    height: 15vh;
                    background-color: #4f7978;
                    justify-content: space-around;
                    align-items: center;
                    width: 100vw;
                    position: fixed;
                  }
              
                   .link {
                    padding: 5px;
                      
                  }
                 
              }
              

            `}</style>
        </>
    );
}

export default NavBar;
