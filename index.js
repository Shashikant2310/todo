
const cont = document.getElementById('todos');
const form = document.querySelector('form')


document.getElementById('btn').disabled = true;

document.getElementById('input').onkeyup = () => {

    if (document.getElementById('input').value.length > 0) {
        document.getElementById('btn').disabled = false;
    } else {
        document.getElementById('btn').disabled = true;
    }
};

form.onsubmit = () => {
    let li = document.createElement('li');
    const task = document.getElementById('input').value;
    li.innerText = task;
    cont.append(li);
    const span = document.createElement('span')
    span.innerHTML = "\u00d7";
    li.appendChild(span)
    saveData()
    document.getElementById('input').value = '';

    /*li.addEventListener("click", () => {
        li.classList.toggle("completed")
    })
    li.addEventListener("contextmenu", () => {
        li.remove()
    })*/

    document.getElementById('btn').disabled = true;

    return false;
}
cont.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("completed")
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
})

function saveData() {
    localStorage.setItem("data", cont.innerHTML);
}
function showData() {
    cont.innerHTML = localStorage.getItem("data")
}
showData()

