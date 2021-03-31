import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Axios from "axios"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

//toast
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css"

//Firebase
import firebase from "firebase/app"
import "firebase/auth"

//Components
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Notfound from "./pages/Notfound"
import { UserContext } from './context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';
import firebaseConfig from './Config/firebaseConfig'


firebase.initializeApp(firebaseConfig)

const App = () => {

    const [user, setUser] = useState(null)

    return (

        <Router>
            <ToastContainer />
            <UserContext.Provider value={{ user, setUser }}>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="*" component={Notfound} />
                </Switch>
                <Footer />
            </UserContext.Provider>
        </Router>

    );
}

export default App;
