import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import {combineReducers, createStore} from "redux";
import userInfo from "./reducers/user";
import Homepage from "./components/homepage";
import personalProfile from "./reducers/personalProfile";
import PersonalProfileScreen from "./components/PersonalProfileScreen";
import Dashboard from "./components/Dashboard";
import BaseFrame from "./components/BaseFrame";
import GraphEncryptionPage from "./components/GraphEncryptionPage";
import GraphDecryptionPage from "./components/GraphDecryptionPage";
import GraphListPage from "./components/GraphListPage";

function App() {
    const reducer = combineReducers({userInfo, personalProfile})
    const store = createStore(reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return (
        <Provider store={store}>
            <BrowserRouter>
                <BaseFrame>
                    <Routes>
                        <Route path={"/home"} element={<Dashboard/>}/>
                        <Route path={"/home/encrypt"} element={<Dashboard><GraphEncryptionPage/></Dashboard>}/>
                        <Route path={"/home/decrypt"} element={<Dashboard><GraphDecryptionPage/></Dashboard>}/>
                        <Route path={"/home/graph-list"} element={<Dashboard><GraphListPage/></Dashboard>}/>
                        <Route path={"/register"} element={<Register/>}/>
                        <Route exact path={"/login"} element={<Login/>}/>
                        <Route path={"/"} element={<Homepage/>}/>
                        <Route path={"/profile"} element={<PersonalProfileScreen/>}/>
                    </Routes>
                </BaseFrame>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
