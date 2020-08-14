// window.setTimeout(changeStatus, 3000);

document.querySelectorAll("p").forEach(elem => elem.
addEventListener("click", changeStatus)); 

function changeStatus(event) {
    var element =  event.target;
    element.innerHTML =  "Warning! Solar waves.";
    element.classList.add('warning');
}


