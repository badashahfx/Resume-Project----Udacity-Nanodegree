var bio = {
    "name": "MOHAMMED ALI",
    "role": "WEB DEVELOPER & ENGINEER",
    "contacts": {
        "mobile": "312-566-7223",
        "email": "saadali7@gmail.com",
        "github": "www.github.com/badashahfx",
        "twitter": "@badashahfx",
        "location": "Chicago, IL"
    },
    "welcomeMessage": "A big Hello from the midwest!!!",
    "skills": ["HTML & CSS", "JavaScript", "WordPress", "Photoshop"],
    "biopic": "images/fry.jpg"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBiopic);

    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);

    var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formatedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);

    var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGit);

    var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLoc);

    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }

    // footer links
    $("#footerContacts").append(formatedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedGit);
    $("#footerContacts").append(formattedLoc);

};

bio.display();




// ------- WORK ---------- //

var work = {
    "jobs": [{
            "employer": "Freelancer",
            "title": "WordPress Web designer",
            "location": "Chicago, IL",
            "dates": "June 2012 - Present",
            "description": "Build & maintain websites for companies and organization around the globe using WordPress Templates."
        },
        {
            "employer": "Belcan Engineering",
            "title": "Design Engineer",
            "location": "Peoria, IL",
            "dates": "March 2016 - Present",
            "description": "Converted full heavy equipment truck from CATIA models and drawings to CREO (PRO/E)"
        }
    ]
};

work.display = function() {

    $("#workExperience").append(HTMLworkStart);

    for (var i = 0; i < work.jobs.length; i++) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $(".work-entry").append(formattedEmployer);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry").append(formattedLocation);

        var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDesc);

    }
};

work.display();



// ------- PROJECTS ---------- //

var projects = {
    "projects": [{
            "title": "Responsive Portfolio Website",
            "dates": "2017",
            "description": "Using HTML and CSS develop a responsive website that will display images, descriptions and links to each of the portfolio projects",
            "images": ["images/fry.jpg",]
        },
        {
            "title": "Industrial Engineer",
            "dates": "August 2015 - December 2015",
            "description": "Performed process improvment on one of the chemicals production process for automation.",
            "images": ["images/fry.jpg"]
        }
    ]
};

projects.display = function() {

    $("#projects").append(HTMLprojectStart);

    for (var i = 0; i < projects.projects.length; i++) {
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title)
        $(".project-entry").append(formattedprojectTitle);

        var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry").append(formattedprojectDates);

        var formattedProjectDesc = HTMLworkDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry").append(formattedProjectDesc);

        for (var j = 0; j < projects.projects[i].images.length; j++) {
            var formattedProjectImg = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
            $(".project-entry:last").append(formattedProjectImg);
        }

    }

};

projects.display();



// ------- EDUCATION ---------- //

var education = {

    "schools": [{
        "name": "Northern Illinois Univeristy",
        "location": "Dekalb, IL",
        "degree": "Bachelors Degree",
        "majors": ["Industrial and Systems Engineering"],
        "dates": "2013 - 2015",
        "url": "www.niu.edu"
    }],

    "onlineCourses": [{
        "title": "Front-End Web Developer",
        "school": "Udacity",
        "date": "2016 - 2017 ",
        "url": "www.udacity.com"
    }]
};

education.display = function() {

   

    for (var i = 0; i < education.schools.length; i++) {
         $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLworkEmployer.replace("%data%", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedSchoolName);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedSchoolMajor);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedSchoolLocation);
    }

        $("#education").append(HTMLonlineClasses);

    for (var j = 0; j < education.onlineCourses.length; j++) {
            $("#education").append(HTMLschoolStart);
        var formattedOnlineSchoolName = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
        $(".education-entry:last").append(formattedOnlineSchoolName);

        var formattedOnlineSchoolDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].date);
        $(".education-entry:last").append(formattedOnlineSchoolDates);

        var formattedOnlineSchoolurl = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
        $(".education-entry:last").append(formattedOnlineSchoolurl);

    }
};


education.display();



// ------- MAP ---------- //

$("#mapDiv").append(googleMap);
