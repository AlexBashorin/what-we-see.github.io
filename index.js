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
    // let lastItem = arr[arr.length - 1];
    // if(arr.includes(inputValue.value) === true) {
    //     resultSpace.innerHTML = inputValue.value;
    //     // resultSpace.insertAdjacentText('afterbegin', inputValue.value);
    // }
    let lastelem = inputValue.value;
    let dupl = array => array.filter((item, index) => array.indexOf(item) != index);
    resultSpace.innerHTML = dupl(arr);
}

submit.addEventListener("click", function() {
    arr.push(inputValue.value);
    check();
    // let check = arr.forEach(elem => elem === inputValue.value ? addToList() : alert('no'));

    // if(check) {
    //     addToList();
    // } else {
    //     alert('no match');
    // }

    // for(let i=0; i<arr.length; i++) {
    //     if(arr.length === 0 || arr[i] === inputValue.value) {
    //         addToList()
    //     } else if(arr[i] != inputValue.value) {
    //         // let lastchild = resultSpace.lastChild;
    //         // lastchild.style.display = 'none';
    //     }
    // }

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