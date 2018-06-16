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



//Final Boss
/*9. Create your own profile.*/

