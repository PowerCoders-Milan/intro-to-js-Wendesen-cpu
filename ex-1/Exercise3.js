window.alert("Here we go!");
var input = window.prompt("If you want to know about your future, then input the word PLAY");
if (input == "PLAY"){

    var numChild = [0,1,2,3,4,5,6,7,8,9];
    var partnersName=["Matha","Jessica","Betty","Alessia","Alem","Tirhas","Chaltu","Semira","Melika","Meseret"];
    var jobTitle =["Engineer","Doctor","Programmer","Professor","Footballer","Trader","politician","Pastor","Singer","Manager"];
    var living =["USA","Italy","UK","Japan","Africa","Ethiopia","Cameroon","England","Austalia","China"];
    

    var randonNum = Math.floor(Math.random() * 10);

    window.alert(`In the future, you will get married to ${partnersName[randonNum]} and will have ${numChild[randonNum]} kids. You will also be a successful ${jobTitle[randonNum]} and will be living in ${living[randonNum]}.);
}