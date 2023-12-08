import Joke from "./Joke";
import "../styles.css";

const JokeList = ({jokes, onCardClick, flipped}) => {
    //create list of joke and ten joke components

    const jokeComponents = jokes.map((joke => {
        return <Joke key={joke.id} joke={joke} className="joke-wrapper" flipped={flipped}/>
    }))

   
    return ( 
        <>
        {/* ternary operator that makes it so that if the number of jokes in the array is 1, title is Random Joke. If this statement is falsy, make h2 Random Ten Jokes */}
            <h2>{jokes.length === 1 ? "Random Joke" : "Random Ten Jokes"}</h2>
           <div className="joke-list" onClick={onCardClick}>{jokeComponents}</div>
            
        </>
     );
}
 
export default JokeList;
