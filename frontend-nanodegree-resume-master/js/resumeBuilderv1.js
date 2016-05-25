/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio =
{
	"name" : "Casey McArdle", 
	"age"  : 22,
	"desiredRole" : "Aspiring Junior Web Developer",
	"contact" : 
	{
	"email" : "casey_jgm@hotmail.com",
	"mobile" :  "+447496072777",
	"github" : "CaseyJamess",
	"location" : "Manchester"
	},

	"welcomeMessage" : "Thanks for checking out my work!", 
	"skills" : ["BlueJ", " Processing", " Android Studio", " JavaScript"],
	"bioPic" : "images/BJJProf.jpg"
};
var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.desiredRole;
var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var email = bio.contact.mobile;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var mobile = bio.contact.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var github = bio.contact.github;
var formattedGitHub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGitHub);

var location = bio.contact.location;
var formattedLocation = HTMLlocation.replace("%data%", location);
$("#header").append(formattedLocation);


var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);

var skills = bio.skills;
var formattedSkills = HTMLskills.replace("%data%", skills);
$("#header").append(formattedSkills);


