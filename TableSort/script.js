tableData = require('./tableDataObj.js');

document.addEventListener('click',hClick);
tableData.getData();
let sortArr = tableData.sortData(tableData.ageArr);

function hClick(e){
    if(e.target.dataset.type){
        tableData.thAge.dataset.type='up';
        tableData.thName.dataset.type='up';
        sortArr.reverse();

        for(let i=0; i<tableData.age.length; i++){
            tableData.age[i].textContent = sortArr[i];
            tableData.name[i].textContent = tableData.ageObj[sortArr[i]];
        }
    }

}

