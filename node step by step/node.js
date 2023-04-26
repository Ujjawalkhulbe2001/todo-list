var markmass = 78 ; 
var markheight = 1.69;
var johnmass = 92 ;
var johnheight = 1.95 ;

//var bmi;
const johnbmi = johnmass /(johnheight * johnheight);
const markbmi = markmass/ (markheight * markheight );
//console.log(johnbmi);
//console.log(markbmi);

if(johnbmi > markbmi ){
    console.log('john bmi (${johnbmi}) is greater then mark bmi (${markbmi}) ');
}
else {
    console.log("mark bmi 'markbmi' is greater then john bmi (${johnbmi}) ");
}