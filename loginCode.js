function checkCreds(){
    console.log("checkCreds() started.....");
    var firstName =document.getElementById("fName").value;
    console.log("First Name"+ firstName);
    var lastName = document.getElementById("lNAme").value;
    console.log("Last Name"+lastName);
    var badgeNumber= document.getElementById("badgeID");
    console.log("Badge Number"+badgeNumber);


    var fullName= firstName + "" + lastName;
    console.log("Full Name"+fullName);

    var fullNameLength =fullName.length;
    console.log(fullNameLength);
    if(fullNameLength>21 || fullNameLength < 3){
       document.getElementById("loginStatus").innerHTML
        ="Invalid Full Name please resubmint";
    }else if(badgeNumber >999 || badgeNumber<1){
            document.getElementById(" LoginStatus").innerHTML ="Invalid Badgw Number! Please try Again"
    }else{
        alert("Access Has been granted"+ fullName);
        location.replace("./blastOff.html");
    }

}
