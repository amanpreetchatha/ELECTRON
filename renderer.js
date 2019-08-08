// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

startButton=document.querySelector('#startbutton');

startButton.addEventListener('click',createNewProject);

const createNewProject = function(){
    form=document.querySelector('#charterform');
}