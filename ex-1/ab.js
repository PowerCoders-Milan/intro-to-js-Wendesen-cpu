window.alert("Here we are");
var input = window.prompt("If you want to know about your future, then input the word PLAY");
if (input == "PLAY"){
    var numChild = [1,2,3,4,5];
    var partnersName=["Matha","Jessica","Betty","Alessia","Alem","Tirhas","Chaltu"];
    var JobTitle =["Engineer","Doctor","Programmer","Professor","Footballer","Trader","politician"];
    var location =["USA","Italy","UK","Japan","South Africa","Ethiopia"];
    

    var randonNum = Math.floor(Math.random() * 7) + 1 ;
    window.alert("In the future, you will get married to your partner called "+partnersName[randonNum] +" and will have "+ numChild[randonNum]+"children."+ " You will also be a successful "+JobTitle[randonNum]+" and will be living in "+ location[randonNum]+".");
}