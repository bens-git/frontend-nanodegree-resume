var bio = {
    "name": "Benjamin Small",
    "role": "Web Developer",
    "contacts": {
        "mobile": "226-388-4595",
        "email": "bensmall.developer@gmail.com",
        "github": "bens-git",
        "location": "Brantford, Ontario"
    },
    "skills": [
        "PHP",
        "HTML",
        "CSS",
        "JavaScript",
        "JQuery",
        "Databases (MySQL, MSSQL)",
        "MVC frameworks",
        "Documentation"
    ],
    "welcomeMsg": "Welcome",
    "bioPic": "images/Ben.jpg"

};

var work = {
    "jobs": [
        {
            "employer": "Activation Laboratories",
            "title": "Senior Lead Programmer",
            "location": "Ancaster, Ontario",
            "dates": "2009 - Present (7.5 years)",
            "description": [
                "Planning and maintaining the underlying architecture of the software",

                "Overseeing the work being done by any other software engineers working on the project",

                "Mentoring new or lower-level software developers or programmers, as well as all the members on the development team",

                "Interfacing between the programmers and management",

                "Supervisorial responsibilities in delegating work and ensuring that software projects come in on time and under budget",

                "Providing technical advice and programming perspectives to management on requirements"]
        },
        {
            "employer": "Andrews Lab, McMaster University",
            "title": "Research Assistant",
            "location": "Hamilton, Ontario",
            "dates": "2007- 2008 (1 year)",
            "description": [
                "Designing and Maintaining the lab's website",

                "Designing flash applications to visualize pathways leading to apoptosis in cancer treatments"

            ]
        }
    ]

};

var projects = {
    "projects": [
        {
            "title": "LIMS",
            "dates": "2010 - Present (6 years)",
            "description": "Intranet Based Laboratory Information Management System. A system for managing laboratory data. The system receives samples, allows for results to be input/imported, organizes instrument processes and lab jobs, and outputs reports and invoices.",
            "images": ["images/2017-02-08_14-32-13.png", "images/2017-02-08_14-37-20.png"]
        },
        {
            "title": "Scheduling Program",
            "dates": "2016",
            "description": "Database and PHP based program. Queries a database for all samples, statuses and processes in the system. Schedules all work based on algorithm that optimizes use of laboratory resources.",
            "images": ["images/2017-02-08_14-33-42.png", "images/2017-02-08_14-35-08.png"]
        },
        {
            "title": "Data automation",
            "dates": "2012",
            "description": "Automation of data manipulation processes that users previously did using excel. Data imported to a database. Operations and calculations done using php. Results displayed in browser.",
            "images": ["images/2017-02-08_14-40-28.png", "images/2017-02-08_14-43-20.png"]
        }

    ]


};

var education = {
    "schools": [
        {
            "school": "McMaster University",
            "location": "Hamiltion, Ontario",
            "degree": "Bachelors",
            "major": "Science",
            "dates": "2003-2008"
        }
    ],
    "onlineCourses": [
        {
            "title": "Learn to Program: The Fundamentals",
            "dates": "Oct 2016",
            "author": "University of Toronto",
            "school": "Coursera",
            "url": "Coursera"
        },
        {
            "title": "Algorithms, Part I",
            "dates": "Dec 2016",
            "author": "Princeton University",
            "school": "Coursera",
            "url": "Coursera"
        },
        {
            "title": "Front-End Web Developer Nanodegree",
            "dates": "In Progress",
            "author": "Udacity",
            "school": "Udacity",
            "url": "Udacity"
        }
    ]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);


$("#header").prepend(formattedRole)
    .prepend(formattedName);

$("#main").append(work.position)
    .append(education.name);

bio.display = function () {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts").append(formattedMobile)
        .append(formattedemail)
        .append(formattedgithub)
        .append(formattedlocation);


    var formattedbioPic = HTMLbioPic.replace("%data%", "images/Ben.jpg");
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

    $("#header").append(formattedbioPic)
        .append(formattedwelcomeMsg)
        .append(HTMLskillsStart);


    for (var i = 1; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);

    }
};

work.display = function () {

    for (var job = 0; job <  work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

        $(".work-entry:last")
            .append(formattedEmployerTitle)
            .append(formattedDates)
            .append(formattedWorkLocation)
            .append("<br><div class='work-list'><ol>")
            .append("</ol></div>");

        for (var i = 0; i < work.jobs[job].description.length; i++) {
            $(".work-list ol:last").append("<li>" + "<p>" + work.jobs[job].description[i] + "</p></li>");
        }

    }
};

projects.display = function () {
    for (var project =0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last")
            .append(formattedTitle)
            .append(formattedDates)
            .append(formattedDescription)
            .append("<div class='img-container'>");


        if (projects.projects[project].images.length > 0) {
            for (var image = 0; image < projects.projects[project].images.length; image++) {

                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".img-container:last").append("<div class='img-item'><a  class = 'thumbnail'>" + formattedImage + "</a></div>");
            }
        }
    }
    $(".project-entry:last")
        .append("</div>");
};


$(document).ready(function () {
    $('.thumbnail').on('click', function () {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');
        return false;
    });
});

education.display = function () {
    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);
        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].school);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last")
            .append(formattedSchool)
            .append(formattedDegree)
            .append(formattedDates)
            .append(formattedLocation)
            .append(formattedMajor);

    }

    $(".education-entry:last").append(HTMLonlineClasses);
    for (var course = 0; course < education.onlineCourses.length; course++) {

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedOSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedAuthor = HTMLonlineAuthor.replace("%data%", education.onlineCourses[course].author);
        var formattedODates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

        $(".education-entry:last")
            .append(formattedTitle)
            .append(formattedOSchool)
            .append(formattedAuthor)
            .append(formattedODates)
            .append(formattedURL);

    }
};

bio.display();
education.display();
work.display();
projects.display();

//$('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);
