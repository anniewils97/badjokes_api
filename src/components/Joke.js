import "../styles.css";


const Joke = ({joke}) => {
    return ( 
        <article>
            <h3>{joke.setup}</h3>
            <h4>{joke.punchline}</h4>
            <h5>Type of joke: {joke.type}</h5>
        </article>
     );
}
 
export default Joke;