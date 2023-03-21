const rowsPerPage = 8;
const rows = document.querySelectorAll('#my-table tbody tr')
const rowsCount = rows.length;
const pageCount = Math.ceil(rowsCount/rowsPerPage);
const numbers = document.querySelector('#numbers');


/* 
    대상.innerHTML= <li><a href="">2</a></li>
    for(초기값;조건;증감)

*/

for(let i=0; i<=pageCount.length; i++){
    // numbers.innerHTML = '<li><a href="">'+i+'</a></li>';
    numbers.innerHTML = `<li><a href="">${i}</a></li>`;
}