import { Link } from "react-router-dom";
import "./LandingPage.css"

function LandingPage() {
    return (
        <>
            <nav className="nav">
                <Link to="/" className="Home">Home</Link>
                <Link to="/reviews" className="Review">Reviews</Link>
            </nav>
            <div>
                <h1>Landing Page</h1>
            </div>
        </>
    );
}

export default LandingPage;
