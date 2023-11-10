import React from 'react';
import pic from './assets/pic.jpeg';
function App(){
    return (
        <div>
            <div className='header'>
                <div className='container'>
                    <div className='content'>
                    <h1 className="fonttype">To<span className='d'>D</span>o</h1>
                    <ul className='ull'>
                    <li className='lii'>Home</li>
                    <li className="textcolor">About</li>
                </ul>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='container'>
                <div className='title'>
                <div>
                <h1>Welcome.</h1>
                <p>This is my first challenge with Html and CSS</p>
                </div>
                </div>
                <div className='mainimg'>
                    <img src='./assets/pic.jpeg'></img>
                </div>
                <div className="creator"><p>this app created by <span className='aon'>Aon2023</span></p></div>
            </div>
           <div>second section</div> 
    </div>
    );
};

export default App;