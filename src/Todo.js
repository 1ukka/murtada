import React from 'react'; 
function todo(){
    return(
        <div>
        <header class="header">
        <div class="container">
            <div class="content">
                <h1 class="fonttype">To<span style="color: #0000ff;">D</span>o</h1>
                <ul>
                    <li class="textcolor">Home</li>
                    <li >About</li>
                </ul>
            </div>
        </div>
        <hr></hr>
    </header>
    <main class="container">
        <div class="title">
            <div>
                <h1>Simple todo app</h1>
                <p>This todo app for test design.</p>
            </div>
        </div>
        <div class="enter">
            <input class="inputbtn" type="text" placeholder="Write Text Here ..."></input>
            <button class="btn">+ Add New</button>
        </div>
        <hr></hr>
            <div class="task">
                <div class="tasktext">
                    <h2>Hello this is my first Todo</h2>
                </div>
                <div class="taskbtn">
                    <button class="deletbtn">x</button>
                </div>
            </div>
            <div class="task">
                <div class="tasktext">
                    <h2>Hello this is my second Todo</h2>
                </div>
                <div class="taskbtn">
                    <button class="deletbtn">x</button>
                </div>
            </div>
            <div class="task">
                <div class="tasktext">
                    <p>Hello this is my 3th Todo</p>
                </div>
                <div class="taskbtn">
                    <button class="deletbtn">x</button>
                </div>
            </div>
        <div><h3>total list: 3</h3></div>
        <div><button class="btntwo">+ Add Task</button></div>
    </main>
    </div>
    )
}

export default todo;