import Home from "./screens/Home";
import {AppProvider} from "./utils/AppContext";
import './styles/Styles.css'

const App = () => {
    return (
        <AppProvider>
            <Home/>
        </AppProvider>
    );
}

export default App;
