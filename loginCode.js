function creditCheck(){
    console.log("creditCheck() started");
    var firstName;
    var lastName;
    var fullName;
    var badgeNumb;
    var fullnameLength;

    // extract the first name
    firstName = document.getElementById("fName").value;
    console.log("The first name is " + firstName);

    //extract the last name
    lastName = document.getElementById("lName").value;
    console.log("The last name is " + lastName);

    //build the full name
    fullName = firstName + " " + lastName;
    console.log("The full name is " + fullName);

    //extract the badge number
    badgeNumb = document.getElementById("badgeID").value;
    console.log("The badge number is " + badgeNumb);

    //figure out name length
    fullnameLength = fullName.length;
    console.log("The full name length is " + fullnameLength);

    //input validation
    if(fullnameLength > 20 || fullnameLength == 1){
        console.log("Invalid login, please try again");
        document.getElementById("loginStatus").innerHTML = "Invalid login, please try again";
    } else if(badgeNumb > 999 || badgeNumb < 1) {
        console.log("Invalid badge ID, please try again");
        document.getElementById("loginStatus").innerHTML = "Invalid Badge ID, please try again";
    } else {
        console.log("Welcome");
        document.getElementById("loginStatus").innerHTML = "welcome";
        alert("welcome, " + fullName + " to UAT Space!!");
        location.replace("./UATSpace.html");
    }
}