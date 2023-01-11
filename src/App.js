import './App.css';
import {Route, Router, Routes} from "react-router-dom";
import Main from "./Pages/Main/Main";
import Cart from "./Components/Cart/Cart";
import PageNotFound from "./Pages/404/PageNotFound";


function App() {

    return (

        <div className="App">
            <Routes>
                <Route path="/"
                       element={<Main/>}

                />
                <Route path='cart'
                       element={<Cart/>}
                />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default App;
