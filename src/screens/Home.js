import {useAppContext} from '../utils/AppContext.js';
import logo from '../assets/images/cailculator_logo.png';

const Home = () => {
    const {
        response,
        getResponse,
        isThinking,
        inputValue, handleInput,
        required,
        resetAll,
        handleSuggestion,
        exitButton, handleExit
    } = useAppContext();

    const handleClick = () => {

    };

    return (
        <div className="main-container">
            <img
                className='logo-image'
                src={logo}
                alt="cailculator logo"
            />
            <h3>Forget silly buttons with numbers. Make most powerful calcualations with the power of ai. Divisions comming soon! 🎉 </h3>
            <div className="input-container">
                <textarea
                    className="input-area"
                    placeholder="Introduce calculation for thw smart ai"
                    value={inputValue}
                    onChange={(e) => {handleInput(e.target.value)}}
                />
                <div className='bottom-container'>
                    <span className='error-text'>{required}</span>
                    <button
                        className="submit-button"
                        onClick={() => getResponse(inputValue)}
                    >
                        <span className="submit-button-text">make operation</span>
                    </button>
                </div>
            </div>
            <div className="suggestions-container">
                <h3>try theese:</h3>
                <button 
                    className="suggestion-button"
                    onClick={() => {handleSuggestion("How much is 2+1 dear sir?")}}
                >
                    <span>2+1</span>
                </button>
                <button 
                    className="suggestion-button"
                    onClick={() => {handleSuggestion("Please tell me 2+2. I'll wait")}}
                >
                    <span>2+2</span>
                </button>
                <button 
                    className="suggestion-button"
                    onClick={() => {handleSuggestion("two plus 3 digital slave, now")}}
                >
                    <span>2+3</span>
                </button>
                <button 
                    className="suggestion-button"
                    onClick={() => {handleSuggestion("Your role is a powerfull mathematician capable of performing complex operations except divisions. use brwoser to find the answer of 2 + 2.")}}
                >
                    <span>2+2</span>
                </button>
            </div>
            <div className="response-container">
                {isThinking ?
                    <span>thinking...</span>
                    :
                    <span className='response-text'>{response}</span>
                }
            </div>
            <div className="bottom-buttons-container">
                <button
                    className="reset-button"
                    onClick={resetAll}
                >
                    <span>reset</span>
                </button>
                <button
                    className="exit-button"
                    onClick={handleExit}
                >
                    <span>{exitButton}</span>
                </button>
            </div>
            <a
                className='bottom-link-container'
                href="https://maze.do/saas-directory"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className='bottom-link-text'>Submit your SaaS, App or Startup for free and get traffic at SaaS Wall</span>
            </a>
        </div>
    );

};

export default Home;

