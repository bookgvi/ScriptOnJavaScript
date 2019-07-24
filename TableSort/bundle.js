(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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


},{"./tableDataObj.js":2}],2:[function(require,module,exports){
module.exports = {
    age: document.querySelectorAll('tr>td:nth-child(1)'),
    name: document.querySelectorAll('tr>td:nth-child(2)'),
    thAge: document.querySelector('tr>th:nth-child(1)'),
    thName: document.querySelector('tr>th:nth-child(2)'),

    ageObj: {},
    ageArr: [],

    getData: function(){
        for(let i=0; i<this.age.length; i++){
            this.ageArr[i] = +this.age[i].innerHTML;
            this.ageObj[this.age[i].innerHTML] = this.name[i].innerHTML;
        }
        
    },

    sortData: function(arr){
        let sortArr = [];
        for(let i=0;i<arr.length;i++){
            sortArr[i] = arr.reduce((prev, current)=>{
                return Math.max(prev, current);
            },0);
            delete arr[arr.indexOf(sortArr[i])];
        }
        return sortArr;
    }

}
},{}]},{},[1]);
