const resultSpace = document.querySelector('.result-space');
const inputValue = document.querySelector('.main-input');
const submit = document.querySelector('.submit-button');
const clearList = document.querySelector('.clear-list');
const ul = document.querySelector('.result-list');

// let li = document.createElement('LI');
// ul.appendChild(li);

let arr = [];

// function mySave() {
//     localStorage.setItem("resSpace", li.textContent);
//     saveRes = localStorage.getItem("resSpace");

// }

function check() {
    let dupl = array => array.filter((item, index) => array.indexOf(item) != index).splice(-1);
    let li = document.createElement('LI');
    let ul = document.querySelector('.result-list');

    let correctInput = inputValue.value.trim().toLowerCase();
    
    local();

    if(correctInput != dupl(newArr)) {
        return "";
    } else {
        // resultSpace.innerHTML = saveRes;
        ul.appendChild(li);
        li.innerText = dupl(newArr);
    }
}

function local() {
    localStorage.setItem("myArray", JSON.stringify(arr));
    newArr = JSON.parse(localStorage.getItem("myArray"));
}

submit.addEventListener("click", function() {
    let userValue = inputValue.value.trim().toLowerCase();
    arr.push(userValue);
    check();
    inputValue.value = "";  
});

inputValue.addEventListener('keydown', function(event) {
    if(event.code == "Enter") {
        arr.push(inputValue.value.trim().toLowerCase());
        check();
        inputValue.value = "";
    }
});

clearList.addEventListener('click', function() {
    localStorage.removeItem('myArray');
    // localStorage.clear();
});

document.body.onload = check;

// try {
//     localStorage.setItem('myKey', arr);
//   } catch (e) {
//     if (e == QUOTA_EXCEEDED_ERR) {
//      alert('Превышен лимит');
//     }
// }
