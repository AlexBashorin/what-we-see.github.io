const resultSpace = document.querySelector('.result-space');
const inputValue = document.querySelector('.main-input');
const submit = document.querySelector('.submit-button');
const clearList = document.querySelector('.clear-list');

let arr = [];

function addToList() {
    let ul = document.createElement('UL');
    let li = document.createElement('LI');
    ul.classList.add('ul-result');
    li.classList.add('li-result');

    ul.appendChild(li);
    li.insertAdjacentText('afterbegin', inputValue.value);
    resultSpace.appendChild(ul);
}

function check() {
    let dupl = array => array.filter((item, index) => array.indexOf(item) != index).splice(-1);
    let li = document.createElement('LI');
    let ul = document.querySelector('.result-list');

    // let newAr = arr.map(e => e.trim().toLowerCase());
    let correctInput = inputValue.value.trim().toLowerCase();

    if(correctInput != dupl(arr)) {
        return "";
    } else {
        ul.appendChild(li);
        li.innerText = dupl(arr);
    }
}

submit.addEventListener("click", function() {
    let userValue = inputValue.value.trim().toLowerCase();
    arr.push(userValue);
    
    check();
    inputValue.value = "";

    localStorage.setItem(arr, JSON.stringify(arr));
    arr = JSON.parse(localStorage.getItem(arr));
    removeItem(arr);
    // localStorage.setItem(resultSpace, inputValue.value);
    // resultSpace = JSON.parse(localStorage.getItem(inputValue.value));
});

inputValue.addEventListener('keydown', function(event) {
    if(event.code == "Enter") {
        arr.push(inputValue.value.trim().toLowerCase());

        check();
        inputValue.value = "";
    }
});

clearList.addEventListener('click', function() {
    
    // removeItem(arr);
})

// LOCAL-STORAGE
// localStorage.setItem(arr, JSON.stringify(arr));
// arr = JSON.parse(localStorage.getItem("arr"));

// try {
//     localStorage.setItem('myKey', arr);
//   } catch (e) {
//     if (e == QUOTA_EXCEEDED_ERR) {
//      alert('Превышен лимит');
//     }
//   }

// function showMatches(array){
//     const count = {}
//     const result = []
    
//     array.forEach(item => {
//         if (count[item]) {
//            count[item] +=1
//            return
//         }
//         count[item] = 1
//     })
    
//     for (let prop in count){
//         if (count[prop] >=2){
//             result.push(prop)
//         }
//     }
    
//     resultSpace.insertAdjacentText('afterbegin', count);
//     return result;
    
//     }

// showMatches(arr);