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

var xSkills = HTMLskills.replace("%data%", bio.skills);
$("#header").append(xSkills);

var work = {
	"jobs": [{
		"employer": "Tesco Stores LTD",
		"role": "Skilled Baker",
		"years": "2012-2016",
		"description": "Involved in the production from start to finish of the full range of white and wholemeal breads, French sticks and soft roll."
		 + " This includes creating a great dough, knowing correct proofing conditions and oven work to ensure great quality of products."
		 + " Also essential to this role is marinating high levels of cleaning of the work place and machinery to ensure no contamination and to meet audit targets."
		+ " Furthermore in this role, it is imperative to be able to work quickly under pressure whilst still maintaining excellent quality, for example in summer when soft roll is in high demand, it makes for a challenging yet satisfying day of work every day."
		 + "Finally this role has taught me to be flexible. I.E. I have worked a number of shift patterns ranging from 12am-9am all the way to 11am-8pm!",
		"city": "Padiham, Lancashire"
	}, {
		"employer": "First Bowl Bowling Alley Burnley ",
		"role": "Front Of House",
		"years": "2012",
		"description": "Working at reception handling money, administration & bookings, general lane duties." 
		+ " Meeting & greeting costumers, working in a team. Working behind the bar – general bar duties & cleaning." 
		+ " Working in the diner – serving and presenting food, making sure everything was hygienic and clean.",
		"city": "Burnley, Lancashire"
	}]
};

if (work.jobs.length > 0) {
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
			"name": "Q.E.G.S.",
			"years": "2004-2009",
			"city": "Blackburn, Lancashire",
			"exams": ["GCSE A* Geography", "GCSE A Mathematics", "GCSE A Chemistry", "GCSE A Physics", "GCSE B English Language", "GCSE B History", "GCSE B Spanish", "GCSE B Religious Studies", "GCSE C Classics", "GCSE B English Literature", ]
		},

		{
			"name": "C.R.G.S.",
			"years": "2009-2011",
			"city": "Clitheroe, Lancashire",
			"exams": ["GCE B Ethics & Philosophy", "GCE D General Studies", "GCE E Mathematics", "GCE E Physics"]
		}
	],

	"online studies": [{
		"name": "Intro Into Java Programming",
		"school": "University Of San Jose, California",
		"years": "2015-16",
		"url": "https://www.udacity.com/course/intro-to-java-programming--cs046"
	}, {
		"name": "JavaScript basics",
		"school": "Udactiy",
		"years": "2016",
		"url": "https://www.udacity.com/course/javascript-basics--ud804",

	}, {
		"name": "Basic Programming – Building Mobile Applications",
		"school": "University of Reading",
		"years": "2015",
		"url": "https://www.futurelearn.com/courses/begin-programming"
	}, {
		"name": "Creative Coding",
		"school": "Monash University",
		"years": "2015",
		"url": "https://www.futurelearn.com/courses/creative-coding"
	}]
};

var projects = {
	"projects": [{

		"name": "Bubbles",
		"years": "2015",
		"description": ""
		//"images": []
	}, {
		"name": "Solar System",
		"years": "2015",
		"description": ""
		//"images": []
	}, {
		"name": "Mobile Video Game",
		"years": "2015",
		"description": ""
		//"images": []
	}]
};
