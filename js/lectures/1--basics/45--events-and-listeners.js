"use strict";
console.log(document.querySelector('.overlay'));
const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');
/* 
btn.onclick = function() {
    alert('Click');
}; 
*/
// let i = 0;
const deleteElement = (e) => {
    // e.target.remove();
    // console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
//    i++;
//    if (i == 1) {
//        btn.removeEventListener('mouseenter', deleteElement);
//    }
};

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event.target);
});

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement);
});