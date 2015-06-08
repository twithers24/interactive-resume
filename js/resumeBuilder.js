



var bio = {
	"name" : "Thomas Withers",
	"role" : "Web Developer",
	"contacts": {
		"mobile" : "804-638-0133",
		"email" : "withers.thomas3@gmail.com",
		"github" : "Twithers24",
		"twitter" : "@notwitter",
		"location" : "Richmond, Va"
	},
	"WelcomeMessage" : "lorem ipsum dolor sit amet etc etc etc",
	"skills" : [ 
	"Awesomeness", "Delivering things", "Cryogenic sleep", "Saving the Universe"
	],
	"bioPic" : "images/fry.jpg",
	display: function(){
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);
		var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedPicture);
		var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio.WelcomeMessage);
		$("#header").append(formattedMsg);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#footerContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.githun);
		$("#footerContacts").append(formattedEmail);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#footerContacts").append(formattedTwitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#footerContacts").append(formattedLocation);

		if(bio.skills.length > 0){

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);

	}	
	}
}
bio.display();

var work = {
	"jobs" : [
	{
		"employer" : "Capital One",
		"title" : "Fraud Manager",
		"location" : "Richmond, Va",
		"dates" : "January/2009 - Future",
		"description" : "Helping stop fraud, one call at a time."
	},
	{
		"employer" : "Clearwire",
		"title" : "Salesman",
		"dates" : "June/2008 - January/2009",
		"description" : "Search for potential customers. Installing and maintaining Internet network."
	}
		],

		display: function (){
	 	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}
	}
	}
	
work.display();
var projects = {
	"projects" : [
	{
		"title" : "Sample Project 1",
		"dates" : "2014",
		"description" : "This is going to be my description",
		"images" : [
		"images/fry.jpg",
		"images/fry.jpg"
		]

	}
	],
	display: function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images.length> 0){
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
}

projects.display();

var education = {
	"schools": [
	{
		"name" : "Virginia Commonwealth University",
		"city" : "Richmond, VA",
		"degree" : "",
		"major" : "Business",
		"dates" : 2008,
		"url" : "http://www.vcu.edu"
	}
],
	"onlineCourses" : [
	{
		"title" : "Front-End Web Dev Nanodegree",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "www.Udacity.com"
			}
	],
	display: function(){
		for (edu in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
		$(".education-entry:last").append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedDate = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
		$(".education-entry:last").append(formattedDate);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].city);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
		$(".education-entry:last").append(formattedMajor);
	};
		$("#education").append(HTMLonlineClasses);
	for (eEdu in education.onlineCourses){
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[eEdu].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[eEdu].school);
		var TitleandSchool = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(TitleandSchool);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[eEdu].dates);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[eEdu].url);
		$(".education-entry:last").append(formattedOnlineUrl);
	}

	}
}
education.display();

$("#main").append(internationalizeButton);


$("#mapDiv").append(googleMap);