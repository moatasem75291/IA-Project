import React from 'react';
import "../Style_Pages/Main.css"

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Contact_Us from './Contact_Us';
import { Link } from 'react-router-dom';
const Main = () => {
    return (
        <>
        <Header/>
               <div className="landing d-flex justify-content-center ">
        <div className="text-center ">
            <h1>Welcome to Eary!</h1>
            <p className="fs-20  mb-9"> Make that ears hear here </p>
            <Link><button className='main-btn'><strong> know more </strong></button></Link>
        </div>
        </div>

        <Footer />
        </>
        
 
    );
};

export default Main;