import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import JokeList from "../components/JokeList";
import Home from "../components/Home";
import "../styles.css";

const JokeContainer = () => {

    const [jokes, setJokes] = useState([]);
    const [tenJokes, setTenJokes] = useState([]);
    const [flipped, setFlipped] = useState(false);


    const fetchJokes = async () => {
        const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
        const data = await response.json();
        setJokes([data]);
    }

    const fetchTenJokes = async () => {
        const response = await fetch("https://official-joke-api.appspot.com/random_ten");
        const data = await response.json();
        setTenJokes(data);
    }

    useEffect(() => {
        fetchJokes();
        fetchTenJokes();
    }, []);

    const handleClickButton = () => {
        fetchJokes();
        setFlipped(false);
    }

    const handleClickButtonTen = () => {
        fetchTenJokes();
        setFlipped(false);
    }

    const handleCardClick = () => {
        setFlipped(!flipped);
      };

    const jokeRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Home onButtonClick={handleClickButton} onButtonClickTen={handleClickButtonTen}/>,
            children: [
                {
                    path: "/jokes/random",
                    element: <JokeList jokes={jokes} onCardClick={handleCardClick} flipped={flipped}/>
                },
                //path for random ten jokes
                {
                    path: "/random_ten",
                    element: <JokeList jokes={tenJokes} onCardClick={handleCardClick} flipped={flipped}/>
                }
            ]
        }
    ])

    return ( 
        <>
        <h1>Bad Jokes Directory</h1>
        <hr />
        <RouterProvider router={jokeRoutes} />
        </>
     );
}
 
export default JokeContainer;