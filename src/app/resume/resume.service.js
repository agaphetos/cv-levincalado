(function() {
  'use strict';

  angular
      .module('cvApp')
      .service('resumeService', resumeService);
      
  resumeService.$inject = [];

  /** @ngInject */
  function resumeService() {
    var details = {
      'name': 'James Levin Calado',
      'title': 'Software Developer',
      'description': 'A software developer that has extensive knowledge on both front and back-end development, I am a competitor, detailed-oriented person, and a team-player, able to deliver efficient and effective output. I like challenges and it makes me more focused on the task.',
      'image': 'assets/images/profile.jpg'
    };

    var contact = [
      {
        'style': 'lowercase',
        'icon': 'email',
        'description': 'levin.calado@live.com'
      },
      {
        'style': '',
        'icon': 'phone',
        'description': '(+63) 908-156-4985'
      },
      {
        'style': 'capitalize',
        'icon': 'location_on',
        'description': 'Cainta, Rizal'
      },
      {
        'style': 'lowercase',
        'icon': 'public',
        'description': 'levincalado.me'
      }
    ];

    var technicalSkills = [
      {
        'skill': 'Software/Web Development',
        'rate': 90
      },
      {
        'skill': 'Databases',
        'rate': 98
      },
      {
        'skill': 'Programming',
        'rate': 93
      },
      {
        'skill': 'Java EE',
        'rate': 75
      },
      {
        'skill': 'AngularJS',
        'rate': 85
      },
      {
        'skill': 'System Analysis and Design',
        'rate': 90
      }
    ];

    var personalSkills = [
      {
        'skill': 'Communcation',
        'rate': 90
      },
      {
        'skill': 'Team Work',
        'rate': 98
      },
      {
        'skill': 'Dedication',
        'rate': 95
      },
      {
        'skill': 'Creativity',
        'rate': 80
      }
    ];

    var workExperience = [
      {
        'title': 'Assistant System Specialist',
        'logo': 'assets/images/pccw-logo.png',
        'company': 'PCCW Solutions Ltd.',
        'link': 'http://www.pccwsolutions.com/',
        'when': 'January 2017 - Present'
      },
      {
        'title': 'Software Development Analyst',
        'logo': 'assets/images/smart-logo.png',
        'company': 'Smart Communications, Inc.',
        'when': 'May 2015 - January 2017',
        'link': 'http://smart.com.ph/'
      },
      {
        'title': 'System Admin Intern',
        'logo': 'assets/images/itg-logo.png',
        'company': 'IT Group, Inc.',
        'when': 'November 2014 - February 2015',
        'link': 'https://www.itgroupinc.asia/'
      }
    ];

    var education = [
      {
        'degree': 'Bachelor of Science in Information Technology',
        'logo': 'assets/images/pup-logo.png',
        'university': 'Polytechnic University of the Philippines',
        'link': 'https://www.pup.edu.ph/',
        'when': '2011 - 2015'
      },
      {
        'degree': 'Primary - Secondary Education',
        'logo': 'assets/images/rc-logo.png',
        'university': 'Roosevelt College Cainta',
        'when': '2002 - 2011',
        'link': 'http://rooseveltcollege.edu.ph/'
      }
    ];

    var techs = [
      {
        'category': 'Programming',
        'technology': [
          {
            'name': 'Java'
          },
          {
            'name': 'C/C++'
          },
          {
            'name': 'C#'
          },
          {
            'name': 'C/C++'
          },
          {
            'name': 'Ruby'
          },
          {
            'name': 'PHP'
          },
          {
            'name': 'JavaScript'
          },
          {
            'name': 'JQuery'
          },
          {
            'name': 'HTML/5'
          },
          {
            'name': 'CSS/3'
          },
          {
            'name': 'SQL'
          },
          {
            'name': 'Oracle PL/SQL'
          }
        ]
      },
      {
        'category': 'Frameworks',
        'technology': [
          {
            'name': 'MVC Framework'
          },
          {
            'name': 'AngularJS'
          },
          {
            'name': 'Spring'
          },
          {
            'name': 'Hibernate'
          },
          {
            'name': 'Rails'
          }
        ]
      },
      {
        'category': 'Databases',
        'technology': [
          {
            'name': 'Oracle'
          },
          {
            'name': 'PostgreSQL'
          },
          {
            'name': 'MySQL'
          },
          {
            'name': 'MariaDB'
          },
          {
            'name': 'SQL Server'
          }
        ]
      },
      {
        'category': 'Scripting',
        'technology': [
          {
            'name': 'Shell'
          },
          {
            'name': 'Bash'
          },
          {
            'name': 'Powershell'
          }
        ]
      }
    ];

    this.getDetails = getDetails;
    this.getContactItems = getContactItems;
    this.getTechnicalSkills = getTechnicalSkills;
    this.getPersonalSkills = getPersonalSkills;
    this.getWorkExperience = getWorkExperience;
    this.getEducation = getEducation;
    this.getTechs = getTechs;

    function getDetails() {
      return details;
    }

    function getContactItems() {
      return contact;
    }

    function getTechnicalSkills() {
      return technicalSkills;
    }

    function getPersonalSkills() {
      return personalSkills;
    }

    function getWorkExperience() {
      return workExperience;
    }

    function getEducation() {
      return education;
    }

    function getTechs() {
      return techs;
    }
  }
})();
