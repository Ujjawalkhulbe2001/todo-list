const mark ={
    fullname: 'mark  jjjjj',
    mass: 78,
    height: 1.69,

    calcbmi: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john ={
    fullname: 'john kkkkk',
    mass: 78,
    height: 1.69,

    calcbmi: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcbmi();
john.calcbmi();

console.log(mark.bmi , john.bmi);

if(mark.bmi > john.bmi){
    console.log(`${mark.fullname} has greater bmi then ${john.fullname}`);
}
else{
    console.log(`${john.fullname} has greater bmi then ${mark.fullname}`);
}
