// Example
var a,b;
var birthYear = window.prompt("Insert the year you were born,please");
var month = window.prompt("Insert the month you were born,please");
var date = parseInt(window.prompt("Insert the Date you were born,please"));
var year = window.prompt("At what year do you want to know you age?");
var newmonth = window.prompt("what will month");
var newdate = parseInt(window.prompt("At what date of the month"));

var currentAge = year - birthYear;

function birthDate_1(a, b){

    var Lsit_of_Months, List_of_Values_on_months, Month, Day, Indext_of_Month, Value_of_the_month, Last_Value_of_the_Date;
    Lsit_of_Months = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(',');
    List_of_Values_on_months = '0,31,59,90,120,151,181,212,243,273,304,334'.split(',');
    Month = a;
    Day = b;
    Indext_of_Month = Lsit_of_Months.indexOf(Month);
    Value_of_the_month = List_of_Values_on_months[Indext_of_Month];
    Last_Value_of_the_Date = (Value_of_the_month - 0) + Day;
    return Last_Value_of_the_Date;
}



var c = parseInt(birthDate_1(month,date));
var d = parseInt(birthDate_1(newmonth,newdate));
cd = d-c ;

if(cd >0){


if(cd >334){ 
    gap = cd -334;
    window.alert(`you will be ${currentAge} years, 11 month and ${gap} days years old.`);
}

else if(cd > 304){
    gap = cd - 304;
    window.alert(`you will be ${currentAge} years, 10 months and ${gap} days years old.`);
}
else if(cd > 273){
    gap = cd - 273;
    window.alert(`you will be ${currentAge} years, 9 months and ${gap} days years old.`);
}

else if(cd > 243){
    gap = cd - 243;
    window.alert(`you will be ${currentAge} years, 8 months and ${gap} days years old.`);
}
else if(cd > 212){
    gap = cd - 212;
    window.alert(`you will be ${currentAge} years, 7 months and ${gap} days years old.`);
}
else if(cd > 181){
    gap = cd - 181;
    window.alert(`you will be ${currentAge} years, 6 months and ${gap} days years old.`);
}
else if(cd > 151){
    gap = cd - 151;
    window.alert(`you will be ${currentAge} years, 5 months and ${gap} days years old.`);
}
else if(cd > 120){
    gap = cd - 120;
    window.alert(`you will be ${currentAge} years, 4 months and ${gap} days years old.`);
}
else if(cd > 90){
    gap = cd - 90;
    window.alert(`you will be ${currentAge} years, 3 months and ${gap} days years old.`);
}
else if(cd > 59){
    gap = cd - 59;
    window.alert(`you will be ${currentAge} years, 2 months and ${gap} days years old.`);
}
else if(cd > 31){
    gap = cd - 31;
    window.alert(`you will be ${currentAge} years, 1 months and ${gap} days years old.`);
}
else{
    window.alert(`you will be ${currentAge} years, and ${cd} days years old.`);
}

}

else if(cd < 0){

    currentAge= currentAge-1;

    if(cd < -334){ 
        
        gap = 0-(cd + 334);
        window.alert(`you will be ${currentAge} years and ${gap} days years old.`);
    }
    
    else if(cd < -304){
        
        gap = 0-(cd + 304);
        window.alert(`you will be ${currentAge} years, 1 months and ${gap} days years old.`);
    }
    else if(cd < -273){
        
        gap = 0-(cd + 273);
        window.alert(`you will be ${currentAge} years, 2 months and ${gap} days years old.`);
    }
    
    else if(cd < -243){

        gap = 0-(cd + 243);
        window.alert(`you will be ${currentAge} years, 3 months and ${gap} days years old.`);
    }
    else if(cd < -212){
    
        gap = 0-(cd + 212);
        window.alert(`you will be ${currentAge} years, 4 months and ${gap} days years old.`);
    }
    else if(cd < -181){
    
        gap = 0-(cd + 181);
        window.alert(`you will be ${currentAge} years, 5 months and ${gap} days years old.`);
    }
    else if(cd < -151){
        gap = 0-(cd + 151);
        window.alert(`you will be ${currentAge} years, 6 months and ${gap} days years old.`);
    }
    else if(cd < -120){

        gap = 0-(cd + 120);
        window.alert(`you will be ${currentAge} years, 7 months and ${gap} days years old.`);
    }
    else if(cd < -90){
    
        gap = 0-(cd + 90);
        window.alert(`you will be ${currentAge} years, 8 months and ${gap} days years old.`);
    }
    else if(cd < -59){

        gap = 0-(cd + 59);
        window.alert(`you will be ${currentAge} years, 9 months and ${gap} days years old.`);
    }
    else if(cd < - 31){
        gap = 0-(cd + 31);
        window.alert(`you will be ${currentAge} years, 10 months and ${gap} days years old.`);
    }
    else{

        gap = 0 - cd;
        window.alert(`you will be ${currentAge} years, 11 months and ${cd} days years old.`);
    }
    
}

else{
    window.alert(`you will exactly be ${currentAge} years old`);
}



