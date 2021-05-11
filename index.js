const resultSpace = document.querySelector('.result-space');
const inputValue = document.querySelector('.main-input');
const submit = document.querySelector('.submit-button');

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

    if(inputValue.value != dupl(arr)) {
        return "";
    } else {
        ul.appendChild(li);
        li.innerText = dupl(arr);
    }
}

submit.addEventListener("click", function() {
    let userValue = inputValue.value;
    let low = userValue.toLowerCase();

    arr.push(low.trim().split(',').join(',').toLowerCase());
    
    check();
    // let check = arr.forEach(elem => elem === inputValue.value ? addToList() : alert('no'));

    inputValue.value = "";
});

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