import "../styles.css";


const Joke = ({joke, flipped}) => {
    return ( 
        <article className={`joke-card ${flipped ? "flipped" : ""}`}>
            <div className="joke-content front">
            <h3>{joke.setup}</h3>
        </div>
        <div className="joke-content back">
            <h4>{joke.punchline}</h4>
            <h5>Type of joke: {joke.type}</h5>
            </div>
        </article>
     );
}
 
export default Joke;