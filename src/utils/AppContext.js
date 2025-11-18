import {createContext, useContext, useEffect, useState} from 'react';
import {responses, exitText} from './Responses';

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [response, setResponse] = useState("Make calculation above");
    const [isThinking, setIsThinking] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [required, setRequired] = useState();
    const [exitButton, setExitButton] = useState("")

    useEffect(() => {
        handleExit()
    }, []);

    const getResponse = (text) => {
        console.log(text)
        if (!text) {
            setRequired("Am I a joke?")
            return
        };
        setIsThinking(true);
        setTimeout(() => {
            setIsThinking(false);
            if (!Array.isArray(responses) || responses.length === 0) return null;
            const randomIndex = Math.floor(Math.random() * responses.length);
            const newResponse = responses[randomIndex];
            setResponse(newResponse);
            return newResponse;
        }, 2000);
    }

    const resetAll = () => {
        setInputValue("");
        setRequired("");
        setResponse("")
    };

    const handleSuggestion = (text) => {
        setRequired("");
        setInputValue(text);
        getResponse(text);
    };

    const handleInput = (value) => {
        setInputValue(value);
        setRequired("");
    };

    const handleExit = () => {
        setRequired("");
        if (!Array.isArray(exitText) || exitText.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * exitText.length);
        const newExitText = exitText[randomIndex];
        setExitButton(newExitText);
    };

    // ----- Context Values ---- //
    const contextValue = {
        response,
        getResponse,
        isThinking,
        inputValue, handleInput,
        required,
        resetAll,
        handleSuggestion,
        exitButton, handleExit,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );

};

// ----- Custom Hook ----- //
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within a ContextProvider");
    }
    return context;
};
