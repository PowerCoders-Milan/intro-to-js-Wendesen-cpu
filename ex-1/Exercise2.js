window.alert("Here we go!");
var input = window.prompt("If you want to know about your future, then input the word PLAY");
if (input == "PLAY"){

    var numChild = [1,2,3,4,5,6];
    var partnersName=["Matha","Jessica","Betty","Alessia","Alem","Tirhas","Chaltu"];
    var jobTitle =["Engineer","Doctor","Programmer","Professor","Footballer","Trader","politician"];
    var location =["USA","Italy","UK","Japan","South Africa","Ethiopia","Cameroon"];
    

    var randonNum = Math.floor(Math.random() * 7) + 1 ;
    window.alert("In the future, you will get married to "+partnersName[randonNum] +" and will have "+ numChild[randonNum]+" children."+ " You will also be a successful "+JobTitle[randonNum]+" and will be living in "+ location[randonNum]+".");
}