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