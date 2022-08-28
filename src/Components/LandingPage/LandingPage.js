import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link> | <Link to="/reviews">Reviews</Link>
            </nav>
            <div className="App">
                <h1>Landing Page</h1>
            </div>
        </>
    );
}

export default LandingPage;
