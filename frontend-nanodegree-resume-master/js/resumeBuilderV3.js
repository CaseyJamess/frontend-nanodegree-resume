/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio =
{
	"name" : "Casey McArdle", 
	"desiredRole" : "Aspiring Junior Web Developer",
	"contact" : 
	{
	"email" : "casey_jgm@hotmail.com",
	"mobile" :  "+447496072777",
	"github" : "CaseyJamess",
	"location" : "Manchester"
	},

	"welcomeMessage" : "Thanks for checking out my work!", 
	"skills" : ["BlueJ", "Processing", "Android Studio", "JavaScript"],
	"bioPic" : "images/BJJProf.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", bio.desiredRole);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
$("#topContacts").append(formattedEmail);

var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
$("#topContacts").append(formattedMobile);

var formattedGitHub = HTMLgithub.replace("%data%", bio.contact.github);
$("#topContacts").append(formattedGitHub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
$("#topContacts").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);

var formattedSkills = HTMLskills.replace("%data%", bio.skills);
$("#header").append(formattedSkills);

var work = {}; 
work["description"] = "Skilled Baker";
work["employer"] = "Tesco Stores LTD";
work["years"] = "2012-2016";
work["city"] = "Padiham";

var education = {};
education.school = "Q.E.G.S.";
education.years = "2004-2009";
education.city = "Blackburn";

//var formattedWork = HTMLworkStart.replace("%data%",
 var formattedEmployer = HTMLworkEmployer.replace("%data%", work.description);
 var formattedDescription = HTMLworkTitle.replace("%data%", work.employer);
 var formattedYears = HTMLworkDates.replace("%data%", work.years);
 var formattedCity = HTMLworkLocation.replace("%data%", work.city);  

 var formattedSchool = HTMLschoolName.replace("%data%", education["school"]);
 
$("#header").append(formattedEmployer);

$("#header").append(formattedSchool);