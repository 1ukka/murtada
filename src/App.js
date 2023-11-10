import React from 'react';
function App(){
    return (
        <div>
           <div className="header">
        <div className="container">
            <div className="content">
                <h1 className="fonttype">To<span style="color: #0000ff;">D</span>o</h1>
                <ul>
                    <li>Home</li>
                    <li className="textcolor">About</li>
                </ul>
            </div>
        </div>
    </div>    
        <hr></hr>
    <div className="container">
        <div className="title">
            <div>
                <h1>Welcome.</h1>
                <p>This is my first challenge with Html and CSS</p>
            </div>
        </div>
        <div className="mainimg">
            <img src="./assets/pic.jpeg"></img>
        </div>
        <div className="creator"><p>this app created by <span style="color: #0000ff;">Aon2023</span></p></div>
    </div>
    <div className="header">
        <div className="container">
            <div className="content">
                <h1 className="fonttype">To<span>D</span>o</h1>
                <ul>
                    <li className="textcolor">Home</li>
                    <li >About</li>
                </ul>
            </div>
        </div>
        <hr></hr>
    </div>
    <main className="container">
        <div className="title">
            <div>
                <h1>Simple todo app</h1>
                <p>This todo app for test design.</p>
            </div>
        </div>
        <div className="enter">
            <input className="inputbtn" type="text" placeholder="Write Text Here ..."></input>
            <button className="btn">+ Add New</button>
        </div>
        <hr></hr>
            <div className="task">
                <div className="tasktext">
                    <h2>Hello this is my first Todo</h2>
                </div>
                <div className="taskbtn">
                    <button className="deletbtn">x</button>
                </div>
            </div>
            <div className="task">
                <div className="tasktext">
                    <h2>Hello this is my second Todo</h2>
                </div>
                <div className="taskbtn">
                    <button className="deletbtn">x</button>
                </div>
            </div>
            <div className="task">
                <div className="tasktext">
                    <p>Hello this is my 3th Todo</p>
                </div>
                <div className="taskbtn">
                    <button className="deletbtn">x</button>
                </div>
            </div>
        <div><h3>total list: 3</h3></div>
        <div><button className="btntwo">+ Add Task</button></div>
    </main>
    </div>
    );
};

export default App;