(function() {
    'use strict';
  
    angular
        .module('cvApp')
        .service('portfolioService', portfolioService);
        
    portfolioService.$inject = [];
  
    /** @ngInject */
    function portfolioService() {
        var categories = [
            {
                'id': 'web',
                'name': 'Web Pages/App'
            },
            {
                'id': 'project',
                'name': 'Projects'
            },
            {
                'id': 'others',
                'name': 'Others'
            }
        ];

        var webPages = [            
            {
                'title': 'yoAngularGulpHeroku',
                'description': 'An AngularJS + Gulp boilerplate generated using Yeoman generator. Ready to deploy on Heroku. Created for personal used. Fork if you like.',
                'image': 'assets/images/yo-angular-gulp-heroku.png',
                'link': 'https://github.com/agaphetos/yo-angular-gulp-heroku'
            },
            {
                'title': 'Vices PH',
                'description': 'A band web site page I created for my Vices band. Features responsive design. Built with HTML/5, CSS/3, Bootstrap.',
                'image': 'assets/images/vicesph.jpg',
                'link': 'http://vicesph.herokuapp.com'
            },
            {
                'title': 'Greetings - Christmas Season',
                'description': 'A greetings page I created for Christmas season. Features responsive design. Built with HTML/5, CSS/3, JavaScript, Bootstrap.',
                'image': 'assets/images/greetings-christmas.jpg',
                'link': 'http://agaphetos.github.io/greetings/christmas'
            },
            {
                'title': 'Greetings - New Year Season',
                'description': 'A greetings page I created for New Year season. Features responsive design. Built with HTML/5, CSS/3, JavaScript, Bootstrap.',
                'image': 'assets/images/greetings-newyear.jpg',
                'link': 'http://agaphetos.github.io/greetings/newyear'
            }
        ];

        var projects = [
            {
                'title': 'COLOSIS',
                'description': 'A credit cooperative management system developed during our thesis in college. Built with .NET C#, SQL Server 2012, SAP Crystal Reports',
                'image': 'assets/images/colosis.jpg',
                'link': 'http://team-gameface.github.io'
            }
        ];

        var others = [
            {
                'title': 'Cody Kernel - Sprout (Android One)',
                'description': 'A Custom Kernel for Android One devices. Notable features: wakemods(doubletap2wake, sweep2wake) and pocket_mod(proximity hax)',
                'image': 'assets/images/android-one.png',
                'link': 'https://forum.xda-developers.com/crossdevice-dev/android-one-crossdevice-development-original-android-development/kernel-cody-kernel-07062015-t3128888'
            },
            {
                'title': 'Cody Kernel - Cancro (Xiaomi Mi 3)',
                'description': 'A Custom Kernel for Xiaomi Mi 3. Personal use and unpublished.',
                'image': 'assets/images/mi3.jpg',
                'link': 'https://github.com/agaphetos/cody_kernel_cancro'
            },
            {
                'title': 'Team Cody - Member',
                'description': 'A late member of Team Cody from XDA Developers Forum. A team of young and aspiring developers building custom ROMs and custom Kernels for HTC Explorer devices.',
                'image': 'assets/images/team-cody.png',
                'link': 'http://team-cody.github.io/'
            },
            {
                'title': 'XDA Works',
                'description': 'Custom Kernels, MODs, Boot Logo, Boot Animations.',
                'image': 'assets/images/xda.jpg',
                'link': 'https://forum.xda-developers.com/showpost.php?p=53927552&postcount=42'
            }
        ];

        this.getCategories = getCategories;
        this.getWebPages = getWebPages;
        this.getProjects = getProjects;
        this.getOthers = getOthers;

        function getCategories() {
            return categories;
        }

        function getWebPages() {
            return webPages;
        }

        function getProjects() {
            return projects;
        }

        function getOthers() {
            return others;
        }
    }
})();