angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('agendaCtrl', function($scope) {
$scope.sessions = [
    {
        id : 1,
        timeSlot : '08:15 AM - 09:00 AM',
        generalSlot : true,
        devTrack : 'Breakfast, Registration & Networking',
        devSpeaker : 'n/a',
        mobileTrack : 'n/a',
        mobileSpeaker: 'n/a'
    },
    {
        id : 2,
        timeSlot : '09:00 AM - 09:45 AM',
        generalSlot : false,
        devTrack : 'Building next generation Web Apps with ASP.NET 5',
        devSpeaker : 'Brij Mishra',
        mobileTrack : 'Creating Web API for Mobile Apps',
        mobileSpeaker: 'Nitin Pandit'
    },    
 {
        id : 3,
        timeSlot : '09:45 AM - 10:30 AM',
        generalSlot : false,
        devTrack : 'TBD',
        devSpeaker : 'Microsoft Speaker',
        mobileTrack : 'Internet of Your Things - With Azure',
        mobileSpeaker: 'Prabhjot Singh'
    },
  {
        id : 4,
        timeSlot : '10:30 AM - 10:45 AM',
        generalSlot : true,
        devTrack : 'Welcome speech',
        devSpeaker : 'Dhananjay Kumar',
        mobileTrack : 'n/a',
        mobileSpeaker: 'n/a'
    }, 
      {
        id : 5,
        timeSlot : '10:45 AM - 11:30 AM',
        generalSlot : true,
        devTrack : 'Keynote',
        devSpeaker : 'Mahesh Chand',
        mobileTrack : 'n/a',
        mobileSpeaker: 'n/a'
    },                 
      {
        id : 6,
        timeSlot : '11:40 AM - 12:30 PM',
        generalSlot : false,
        devTrack : 'Ignite UI + jQuery',
        devSpeaker : 'Jason Beres',
        mobileTrack : 'Design thinking and innovation',
        mobileSpeaker: 'Kjell Hegstad'
    },      
      {
        id : 7,
        timeSlot : '12:40 PM - 01:30 PM',
        generalSlot : false,
        devTrack : 'Deploy Web APIs on Core CLR to Docker',
        devSpeaker : 'Glenn Block',
        mobileTrack : 'Creating Android App using JavaScript',
        mobileSpeaker: 'Abhishek Kant'
    }, 
          {
        id : 8,
        timeSlot : '01:30 PM - 02:30 PM',
        generalSlot : true,
        devTrack : 'Lunch',
        devSpeaker : 'n/a',
        mobileTrack : 'n/a',
        mobileSpeaker: 'n/a'
    }, 
          {
        id : 9,
        timeSlot : '02:30 PM - 03:20 PM',
        generalSlot : false,
        devTrack : 'Performance Tips and Tricks working with SQL Server',
        devSpeaker : 'Vinod Kumar',
        mobileTrack : 'Getting started with Xamarin Forms',
        mobileSpeaker: 'Sekhar Srinivasan'
    }, 
          {
        id : 10,
        timeSlot : '03:30 PM - 04:20 PM',
        generalSlot : false,
        devTrack : '7 Secrets of AngularJS, every developer must know',
        devSpeaker : 'Dhananjay Kumar',
        mobileTrack : 'Advanced Hybrid mobile dev with VS Taco and the Ionic Framework',
        mobileSpeaker: "Allen O'Neil"
    }, 
          {
        id : 11,
        timeSlot : '04:30 PM - 05:20 PM',
        generalSlot : false,
        devTrack : 'C#-The easy way with ScriptCS',
        devSpeaker : 'Glenn Block',
        mobileTrack : 'Azure is a Swiss Army Knife',
        mobileSpeaker: 'Gaurav Mantri'
    }, 
          {
        id : 12,
        timeSlot : '05:20 PM - 05:45 PM',
        generalSlot : false,
        devTrack : 'Tea Break',
        devSpeaker : 'n/a',
        mobileTrack : 'n/a',
        mobileSpeaker: 'n/a'
    }, 
              {
        id : 13,
        timeSlot : '05:45 PM - 06:30 PM',
        generalSlot : false,
        devTrack : 'Prize distribution and Final call',
        devSpeaker : 'n/a',
        mobileTrack : 'n/a',
        mobileSpeaker: 'n/a'
    }
]

})
   
.controller('speakersCtrl', function($scope,  $http, $window) {
   
$scope.speakers = [
   { id: 1,
    name: 'Jason Beres',
    img : 'img/speakers/Jason_color.jpg',
    twitter: '@jasonberes',
    title: 'Sr. VP, Developer Tools Division, Infragistics, Board of Directors INETA',
    notes: 'Jason is a Sr. VP responsible for the Developer Tools Division at Infragistics. He has been a Microsoft MVP since 2003 and written 7 books till date, covering topics like, .NET development, SQL Server, C#, Visual Basic .NET, the latest being the Silverlight 4 published for Wrox Press. Passionate about technical education, delivering dozens of technical user group, conference and webinar talks consistently for the last decade.' 
    },
   { id: 2,
    name: 'Glenn Block',
    img : 'img/speakers/Glenn_color.jpg',
    twitter: '@gblock',
    title: 'Principal Product Manager, Splunk',
    notes: 'Glenn is a product manager for Splunk’s developer experience. In his spare time he is also the author and a maintainer of scriptcs, an OSS tool for C# scripting. A hardcore coder professionally for almost 20 years, he cares deeply about making developers’ lives easier. Glenn is an active contributor to Node.js and .NET OSS projects, a supporter of the community, and a frequent speaker internationally on software development.' 
    },
       { id: 3,
    name: 'Vinod Kumar',
    img : 'img/speakers/vinodKumar.png',
    twitter: '@vinodk_sql',
    title: 'Author, Speaker, Blogger, Technical Architect Microsoft Technology Center - Microsoft',
    notes: 'Vinod Kumar has worked with SQL Server extensively since joining the industry over a decade ago. Before joining Microsoft, he was a Microsoft MVP for SQL Server for more than 3 years. He now works with MTC as a Technology Architect. He is a well-known speaker at all major Microsoft and third party technical conferences.' 
    },
       { id: 4,
    name: 'Kjell Hegstad',
    img : 'img/speakers/KJELL HEGSTAD_color.jpg',
    twitter: '@mobilethor',
    title: 'Chief Innovation Viking',
    notes: 'Kjell was most recently Managing Director of Mobile and Emerging Technologies at ING DIRECT/Capital One where he was responsible for design and feature roadmaps for the digital platforms – desktop and mobile servicing 8 million digital customers for ING DIRECT. Kjell has a patent pending for mobile technology and while at ING DIRECT, he launched BUMP money transfer as the first bank in the World. Due to the mobile success at ING DIRECT, Kjell got to co-ring the opening bell at the New York Stock Exchange. Kjell also conceptualized, designed and launched Planet Orange, a financial literacy edutainment site for kids aged 6-12 that won “Best in Class” by FORBES magazine and “Best Financial Education SIte” by USA TODAY. Kjell enjoys playing soccer and loves riding his custom chopper.' 
    },
       { id: 5,
    name: "Allen O'Neill",
    img : 'img/speakers/allen.png',
    twitter: '@ajsondev',
    title: 'Chief Technical Officer / Engineer',
    notes: 'Allen’s background is in medical health software, he is currently CTO of a data company in the UK, dealing with performant mobile apps on one end of the scale, and big data on the other. He is a chartered engineer, a Fellow of the British Computing Society, a Microsoft Insider and a CodeProject MVP. Allen is a proponent of lifelong learning and his core technology interests are Mobile, Security, IoT and Machine Learning.' 
    },
       { id: 6,
    name: "Gaurav Mantri",
    img : 'img/speakers/Gaurav.jpg',
    twitter: '@gmantri',
    title: 'Founder & Head of Technology at Cerebrata Software, Microsoft MVP, Technical Expert',
    notes: 'Gaurav Mantri is Founder of Cerebrata Software, an ISV based out of India focuses exclusively on building developer tools for the Windows Azure platform. He single handedly built a product development company from the ground up, with no outside funding. Developed products for Microsofts Windows Azure platform and successfully sold the company to Red Gate Software in September 2011.' 
    },
        { id: 7,
    name: "Prabhjot Singh",
    img : 'img/speakers/Prabhjot_color.jpg',
    twitter: '@prabhjotbakshi',
    title: 'Director - Getwings Technologies Pvt. Ltd, Executive Director - E-Consultancy-FZC Dubai – UAE, Consultant and Corporate Trainer',
    notes: 'Entrepreneur, Investor, Trainer, Mentor, Lead of Various Start up and Azure Communities across India. Director Getwings Technologies Pvt. Ltd- India, and Executive Director of Econsultancy Dubai - UAE. Did MBA from NMIMS-Mumbai worked with an Ad Agency and then drifted into the Technology world as a popular trainer. He is currently mentoring various startups and also offering training to industry giants as a renowned trainer. And area of of Focus is Cloud Computing Technology.' 
    }, 
            { id: 8,
    name: "Abhishek Kant",
    img : 'img/speakers/Abhishek.png',
    twitter: '@abhishekkant',
    title: 'Country Manager Telerik, Speaker, Pluralsight Author',
    notes: 'Abhishek Kant is passionate about solving real world problems with technology. With over 12 years of experience in IT software industry, he started his career in offshore services delivery with Satyam Computers. From 2004 - 2011, he served at Microsoft in various marketing and business positions. He is certified as a Scrum Master & Microsoft Certified Application Developer. He has worked with diverse technology communities in India including developers, IT Professionals, Information Workers and Consumers. Abhishek holds a BE degree and MBA from NMIMS, Mumbai. Currently, he is helping Indian IT organizations realize improved profitability with the help of Telerik ' 
    }, 
            { id: 9,
    name: "Brij Misha",
    img : 'img/speakers/Brij_Mishra.png',
    twitter: '@code_wala',
    title: '5 Times Microsoft MVP, Software Developer, Speaker',
    notes: 'Brij is Microsoft MVP in ASP.NET/IIS which he got awarded in Five times in a row. He is passionate about learning and sharing knowledge in Microsoft Technologies. He speaks on different Microsoft technologies on various conferences and user groups. He blogs at http://codewala.net' 
    }, 
            { id: 10,
    name: "Sekhar Srinivasan",
    img : 'img/speakers/sekhar_color.jpg',
    twitter: '@sekharonline4u',
    title: 'Microsoft Certified Trainer, PluralSight Author',
    notes: 'Sekhar Srinivasan is a Microsoft Certified Trainer & PluralSight Author, Well known for his good track record as one of the best IT faculty in imparting his unique techniques in training for students and corporate from past 18 years and trained more than 1 Lakh students on various Microsoft Technologies Platforms.' 
    }, 
              { id: 11,
    name: "Arvind Mishra",
    img : 'img/speakers/Arvind.png',
    twitter: '@ArvindMishra72',
    title: 'Assistant Professor of Mechanical Engineering, Speaker, Educationist, Climate Activist',
    notes: 'Arvind Mishra is an Assistant Professor of Mechanical Engineering, A motivational speaker, educationist, adventurer and a climate activist. He is currently associated with Graphic Era University, India. He is recipient of Uttarakhand Gaurav-2014, Distinguished Faculty award, Lions Club, Uttarakhand Youth Ambassador, Patanjali and many more awards.' 
    }, 
                { id: 12,
    name: "Nitan Pandit",
    img : 'img/speakers/Nitin_Pandit.png',
    twitter: '@thinkaboutnitin',
    title: 'Senior Technical Trainer',
    notes: 'Nitin is a Sr. Programmer and Microsoft.Net Consultant Noida (Uttar Pradesh) Microsoft Professional having more than 5 years of vast experience in software industry with rich skill set of designing, integrating, implementing , ORM with LINQ,WCF,MVC & managing IT/Web applications. Technologies Technology Level C#.Net Expert ADO.net Expert LINQ to SQL Expert LINQ to EF Expert Asp.net 2.0/3x/4.0 Expert WCF Expert MVC 4.0 (Razor) Expert WPF and Silverlight Expert.' 
    }, 
        { id: 13,
    name: "Mahesh Chand",
    img : 'img/speakers/mahesh_color.jpg',
    twitter: '@mcbeniwal',
    title: 'Founder of C# Corner, 11 Times Microsoft MVP, Software Architect',
    notes: 'Mahesh Chand is a founder of C# Corner, 11-times Microsoft MVP, technical author, and software architect. Mahesh has written half a dozen books with publishers including Addison-Wesley and Apress. Mahesh has 18 years of experience, and has worked with several globally renowned companies such as Microsoft, Johnson & Johnson, Adidas, McGraw-Hill and many more.' 
    }, 
        { id: 14,
    name: "Dhananjay Kumar",
    img : 'img/speakers/dj_color.jpg',
    twitter: '@debug_mode',
    title: 'Developer Evangelist of Infragistics and a Microsoft MVP.',
    notes: 'Dhananjay Kumar(DJ) is an avid developer blogger and speaker. He is six times Microsoft MVP and Developer Evangelist of Infragistics in India. Currently he is focusing on MEAN stack, MVC and Azure. You can read his blog at debugmode.net' 
    }, 

 ];
})
   
.controller('sponsorsCtrl', function($scope) {

$scope.sponsors = [
    {id: 1,
     name: 'dsquare',
     img : 'img/dsquare_color.png',
    type: 'sponsor'}, // Vs technical sponsor / media sponsor etc.
     
      {id: 1,
     name: 'MCN Solutions',
     img : 'img/mcn_color.png'},
      {id: 1,
     name: 'Infragistics',
     img : 'img/infragisticMarch09_color.png'},
      {id: 1,
     name: 'Mindcracker',
     img : 'img/MindCracker_color.png'},
      {id: 1,
     name: 'Digital Vikings',
     img : 'img/digitalwikins_color.png'},
      {id: 1,
     name: 'Symbie',
     img : 'img/symbie.png'},
      {id: 1,
     name: 'Roamlife',
     img : 'img/roamlife.png'}
     
]

})
  
.controller('prizesCtrl', function($scope) {

$scope.prizes = [
   { id: 1,
       title: 'Tablet',
    img : 'img/prizes/Tablets.jpg' },
   { id: 2,
       title: 'Windows phone',
    img : 'img/prizes/Phone.jpg' },
   { id: 3,
     title:  'C# Corner Bag',
    img : 'img/prizes/Bag.jpg' },
   { id: 4,
       title: 'C# Corner Watch',
    img : 'img/prizes/watch.png' },
   { id: 5,
       title: 'C# Corner T-Shirt',
    img : 'img/prizes/tshirt.png' },
   { id: 6, 
       title: 'Infragistics licenses',
    img : 'img/prizes/infragistics.png' },
   { id: 7 ,
       title: 'Glenn Block book',
    img : 'img/prizes/Books.png'}
 ];

})
   
.controller('venueCtrl', function($scope) {

})
   
.controller('aboutCtrl', function($scope) {

})
    