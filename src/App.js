import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter, Link, Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import {combineReducers, createStore} from "redux";
import userInfo from "./reducers/user";
import Homepage from "./components/homepage";
import personalProfile from "./reducers/personalProfile";
import PersonalProfileScreen from "./components/PersonalProfileScreen";

function App() {
    const reducer = combineReducers({userInfo, personalProfile})
    const store = createStore(reducer);
  return (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path={"/register"} element={<Register/>}/>
                <Route exact path={"/login"} element={<Login/>}/>
                <Route path={"/"} element={<Homepage/>}/>
                <Route path={"/profile"} element={<PersonalProfileScreen/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
