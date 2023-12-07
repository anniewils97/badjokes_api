import "../styles.css";
import { Link, Outlet } from "react-router-dom";

const Home = ({onButtonClick, onButtonClickTen}) => {
    return ( 
        <>
        <nav>
            <ul>
                <button className="joke-button" onClick={onButtonClick}><Link to="/jokes/random">Generate New Joke</Link></button>
                <button className="joke-button" onClick={onButtonClickTen}><Link to="/random_ten">Generate Ten Jokes</Link></button>
            </ul>
        </nav>
        <Outlet />
        </>
     );
}
 
export default Home;