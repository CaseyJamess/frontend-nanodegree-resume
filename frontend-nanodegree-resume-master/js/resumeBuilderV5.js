var bio = {
	"name": "Casey McArdle",
	"desiredRole": "Aspiring Junior Web Developer",
	"contact": {
		"email": "casey_jgm@hotmail.com",
		"mobile": "+447496072777",
		"github": "CaseyJamess",
		"location": "Manchester"
	},

	"welcomeMessage": "Thanks for checking out my work!",
	"skills": ["BlueJ", "Processing", "Android Studio", "JavaScript"],
	"bioPic": "images/BJJProf.jpg"
};
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.desiredRole);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var xEmail = HTMLemail.replace("%data%", bio.contact.email);
$("#topContacts").append(xEmail);

var xMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
$("#topContacts").append(xMobile);

var xGitHub = HTMLgithub.replace("%data%", bio.contact.github);
$("#topContacts").append(xGitHub);

var xLocation = HTMLlocation.replace("%data%", bio.contact.location);
$("#topContacts").append(xLocation);

var xBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(xBioPic);

var xWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(xWelcomeMessage);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (sk in bio.skills) {
		var cjm = HTMLskills.replace("%data%", bio.skills[sk]);
		$("#header").append(cjm);
	}
}


var work = {
	"jobs": [{
		"employer": "Tesco Stores LTD",
		"role": "Skilled Baker",
		"years": "2012-2016",
		"description": "Involved in the production from start to finish of the full range of white and wholemeal breads, French sticks and soft roll." + " This includes creating a great dough, knowing correct proofing conditions and oven work to ensure great quality of products." + " Also essential to this role is marinating high levels of cleaning of the work place and machinery to ensure no contamination and to meet audit targets." + " Furthermore in this role, it is imperative to be able to work quickly under pressure whilst still maintaining excellent quality, for example in summer when soft roll is in high demand, it makes for a challenging yet satisfying day of work every day." + "Finally this role has taught me to be flexible. I.E. I have worked a number of shift patterns ranging from 12am-9am all the way to 11am-8pm!",
		"city": "Padiham, Lancashire"
	}, {
		"employer": "First Bowl Bowling Alley Burnley ",
		"role": "Front Of House",
		"years": "2012",
		"description": "Working at reception handling money, administration & bookings, general lane duties." + " Meeting & greeting costumers, working in a team. Working behind the bar – general bar duties & cleaning." + " Working in the diner – serving and presenting food, making sure everything was hygienic and clean.",
		"city": "Burnley, Lancashire"
	}]
};

if (work.jobs.length > 0) {
	// similar to JAVA (int job = 0; job < work.jobs.length; jobs++)
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var xEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var xTitle = HTMLworkTitle.replace("%data%", work.jobs[job].role);
		$(".work-entry:last").append(xEmployer + xTitle);

		var xYears = HTMLworkDates.replace("%data%", work.jobs[job].years);
		var xCity = HTMLworkLocation.replace("%data%", work.jobs[job].city);
		var xDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(xYears);
		$(".work-entry:last").append(xCity);
		$(".work-entry:last").append(xDescription);

	}
}
var education = {
	"schools": [{
			"name": "Queen Elizabeth's Grammar School",
			"years": "2004-2009",
			"location": "Blackburn, Lancashire",
			"exams": ["GCSE A* Geography", " GCSE A Mathematics", " GCSE A Chemistry", " GCSE A Physics",
				" GCSE B English Language", " GCSE B History", " GCSE B Spanish", " GCSE B Religious Studies",
				" GCSE C Classics", " GCSE C English Literature", "Junior Maths Challenge Intermediate Bronze"
			]

		},

		{
			"name": "Clitheroe Royal Grammar School",
			"years": "2009-2011",
			"location": "Clitheroe, Lancashire",
			"exams": ["GCE A2 Level B Ethics & Philosophy", "GCE A2 Level D General Studies", "GCE A2 Level E Mathematics", "GCE A2 Level E Physics"]
		}
	],

	"onlineCourses": [{
		"name": "Intro Into Java Programming",
		"school": "University Of San Jose, California",
		"years": "2015-16 ",
		"url": "https://www.udacity.com/course/intro-to-java-programming--cs046"
	}, {
		"name": "JavaScript basics",
		"school": "Google & Udactiy",
		"years": "2016 ",
		"url": "https://www.udacity.com/course/javascript-basics--ud804",

	}, {
		"name": "Basic Programming – Building Mobile Applications",
		"school": "University of Reading",
		"years": "2015 ",
		"url": "https://www.futurelearn.com/courses/begin-programming"
	}, {
		"name": "Creative Coding",
		"school": "Monash University",
		"years": "2015 ",
		"url": "https://www.futurelearn.com/courses/creative-coding"
	}]
};

if (education.schools.length > 0) {

	// create a new "education-entry" div for each school
	$("#education").append(HTMLschoolStart);

	for (sch in education.schools) {

		var cjm = HTMLschoolName.replace("%data%", education.schools[sch].name);
		$(".education-entry:last").append(cjm);

		var cjm = HTMLschoolLocation.replace("%data%", education.schools[sch].location);
		$(".education-entry:last").append(cjm);

		var cjm = HTMLschoolDates.replace("%data%", education.schools[sch].years);
		$(".education-entry:last").append(cjm);

		for (eX in education.schools[sch].exams) {
			var cjm = HTMLschoolDegree.replace("%data%", education.schools[sch].exams[eX]);
			$(".education-entry:last").append(cjm);
		}


	}
}

if (education.onlineCourses.length > 0) {

	$("#education").append(HTMLonlineClasses);



	for (OC in education.onlineCourses) {

		$("#education").append(HTMLschoolStart);

		var cjm = HTMLonlineTitle.replace("%data%", education.onlineCourses[OC].name);
		$(".education-entry:last").append(cjm);

		var cjm = HTMLonlineSchool.replace("%data%", education.onlineCourses[OC].school);
		$(".education-entry:last").append(cjm);

		var cjm = HTMLonlineDates.replace("%data%", education.onlineCourses[OC].years);
		$(".education-entry:last").append(cjm);

		var cjm = HTMLonlineURL.replace("%data%", education.onlineCourses[OC].url);
		$(".education-entry:last").append(cjm);
	}
}

var projects = [{
	"name": "Balls",
	"years": "2015",
	"description": "Modelling particles (balls) under the effects of Gravity using Java",
	"images": ["images/bubbles.jpg"]
}, {
	"name": "Solar System",
	"years": "2015",
	"description": "Generating a representation of the Solar System using Java",
	"images": ["images/solar.jpg"]
}, {
	"name": "Mobile Video Game",
	"years": "2015",
	"description": "Creating a mobile game, using androidStudio. Using emulator and target hardware",
	"images": ["images/android.jpg"]
}];


if (projects.length > 0) {

	for (prj in projects) {


		/*var HTMLprojectDates = '<div class="date-text">%data%</div>';
		var HTMLprojectDescription = '<p><br>%data%</p>';
		var HTMLprojectImage = '<img src="%data%">';
		*/
		$("#projects").append(HTMLprojectStart);

		var cjm = HTMLprojectTitle.replace("%data%", projects[prj].name);
		$(".project-entry:last").append(cjm);

		var cjm = HTMLprojectDates.replace("%data%", projects[prj].years);
		$(".project-entry:last").append(cjm);

		var cjm = HTMLprojectDescription.replace("%data%", projects[prj].description);
		$(".project-entry:last").append(cjm);

		for (img in projects[prj].images) {
			var cjm = HTMLprojectImage.replace("%data%", projects[prj].images[img]);
			$(".project-entry:last").append(cjm);
		}
	}

}
