import React from 'react';
import "../Style_Pages/Main.css"
import 'bootstrap/dist/css/bootstrap.css';



const Main = () => {
    return (
        
        <div className="landing d-flex justify-content-center ">
        <div className="text-center ">
            <h1>Welcome to Eary!</h1>
            <p className="fs-20  mb-9"> Make that ears hear here </p>
            <button className='main-btn'><strong> know more </strong></button>
        </div>
        </div>
    );
};

export default Main;