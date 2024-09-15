var toggleBtn = document.getElementById('button');

function toggle() {
    if (document.body.style.backgroundColor === "white" || document.body.style.backgroundColor === "")  {
    document.body.style.backgroundColor = "black";
    button.style.backgroundColor = "white";
    button.style.color = "black";
    toggleBtn.textContent = "Day";
    } else {
    document.body.style.backgroundColor = "white";  
    button.style.backgroundColor = "black";
    button.style.color = "white";
    toggleBtn.textContent = "Night"; 
    }
}

toggleBtn.addEventListener('click', toggle);
