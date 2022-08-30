import NavBar from "../NavBar/NavBar";
import Katie_With_Books from "../../Assets/Katie_With_Books.JPG";
import "./LandingPage.css"

function LandingPage() {
    return (
        <>
            <NavBar />
            <div className="landing-page">
                <div className="left-side">
                    <img alt="Katie With Books" src={Katie_With_Books} />
                </div>
                {/* <div className="right-side"> */}

                <div className="right-side">
                    <h1>Hello, I’m Katie!</h1>
                    <br></br>
                    <p>
                        There’s nothing I love more than getting lost in a good
                        book, and I like to review them too. 
                        <br></br>
                        <br></br>
                        My favourite book
                        of all time is The Book Thief by Markus Zusak. If you
                        haven’t read it, you should go do so now!
                        
                        <br></br>
                        <br></br>If you have
                        read it, and you can’t decide what to pick up next, head
                        to the ‘Reviews’ tab. You can search all of my reviews
                        by book Title or Author.
                    </p>
                {/* </div> */}
                </div>
            </div>
        </>
    );
}

export default LandingPage;
