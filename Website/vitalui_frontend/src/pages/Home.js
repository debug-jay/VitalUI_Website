import Navigation from "../components/Navigation";
import Heading from "../components/Heading";
import Body from "../components/Body";
import Footing from "../components/Footing";

function Home(){
    return(
        <>
        <div className="App">
            <Navigation/>
            <Heading />
            <Body />
            <Footing />
        </div>
            
        </>
    );
}

export default Home;