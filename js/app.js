/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
document.getElementById("name1").innerHTML = "Tay-Tay";


/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

document.getElementById("position2").innerHTML = "Project Manager";

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

document.getElementById("alias3").innerHTML = "Concatenation";


/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var profileElem = document.getElementsByClassName("profile");
profileElem[0].innerHTML = "Purple";

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

var profileElem2 = document.getElementsByClassName("profile");
profileElem2[1].innerHTML = "Knowing is not enough, we must apply. Willing is not enough, we must do.";

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var aliasElem = document.getElementsByClassName("alias");
aliasElem[2].innerHTML = "Nick Fury";

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var divElem = document.createElement("div");
divElem.id = "name7";
divElem.innerHTML = "Peter Griffin";
document.getElementById("nameParent").appendChild(divElem);

 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

var divElem2 = document.createElement("div");
divElem2.id = "alias8";
divElem2.innerHTML = "Old Man Riverwalk";
document.getElementById("aliasParent").appendChild(divElem2);


//Final Boss
/*9. Create your own profile.*/
var nameDiv = document.createElement("div");
nameDiv.id = "name9";
nameDiv.innerHTML = "M";
var blockClass = document.getElementsByClassName("block3 col-sm-4");
blockClass[2].appendChild(nameDiv);

var posDiv = document.createElement("div");
posDiv.id = "position9";
posDiv.innerHTML = "PM";
var blockClass = document.getElementsByClassName("block3 col-sm-4");
blockClass[2].appendChild(posDiv);

var aliasDiv = document.createElement("div");
aliasDiv.id = "alias9";
aliasDiv.innerHTML = "tiny one";
var blockClass = document.getElementsByClassName("block3 col-sm-4");
blockClass[2].appendChild(aliasDiv);

var bioDiv = document.createElement("div");
bioDiv.id = "bio9";
bioDiv.innerHTML = "I like to travel";
var blockClass = document.getElementsByClassName("block3 col-sm-4");
blockClass[2].appendChild(bioDiv);
