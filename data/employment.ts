export default {
  currentEmployment: {
    company: 'Clover Network, Inc.',
    logo: '/static/clover_primary_gray_rgb.png',
    logoAlt: 'Clover Network, Inc. Logo',
    website: 'https://www.clover.com/',
    dates: 'October 2018 - present',
    overview: 'Lead a highly efficient global team of cross-functional engineers throughout the software development lifecycle of multiple consumer facing web services and applications.',
    roles: [
      {
        title: 'Engineering Manager',
        dates: 'August 2021 - present',
        highlights: [
          'Crafted a recruitment and hiring process focused on candidate quality, efficiency of developer time and clear communication. This process was used to hire 80+ off-shore engineering resources, and is currently in use by 3 onshore teams.',
          'Communicated with other product, engineering, and design stakeholders to scope and plan projects to scale the company\'s consumer facing ordering, loyalty and eCommerce applications.',
          'Conducted performance reviews, goal setting and resource planning in order to manage, develop, and retain talent.'
        ]
      },
      {
        title: 'Senior Software Engineer, Tech Lead',
        dates: 'March 2020 - August 2022',
        highlights: [
          'Architected a performant, highly available, and multi-locale first-party online ordering product for SMBs that integrates directly with the Clover POS via the Clover Developer API using Java, Spring Boot, Redis, MySQL and React/Typescript.',
          'Pioneered real-time application performance monitoring to create a proactive culture around bugs and issues using DataDog, PagerDuty and Wavefront to monitor errors and the performance of Spring Boot microservices.',
          'Championed service decompizition efforts with knowledge shares, technical documentation and contributions to a parent project providing Clover specific functionality for company developed Spring Boot microservices deployed to GCP using Java, Terraform, Puppet and Jenkins.',
          'Mentored other engineers to advance their skills and career using an experience and goal-based approach in order to evaluate consistent progress.',
        ]
      },
      {
        title: 'Web Engineer',
        dates: 'October 2018 - March 2020',
        highlights: [
          'Swiftly and precicely deliver feature enhancements to an in-house e-commerce platform built using React/Typescript, Java, and a Contentful CMS',
          'Built features cross-cutting multiple systems across multiple business units in order to improve volume and quality self-service applications for new merchants.',
          'Advanced service decomposition efforts by utilizing modern technologies, domain knowledge and API design skills to move lead generation and management out of a monolithic architecture to a microservice architecture using Java, Spring Boot, Hibernate/JPA, and Redis Pub/Sub.'
        ]
      }
    ],
  },
  previousEmployment: [
    {
      company: 'Constant Contact',
      logo: '/static/ctct-logo.svg',
      logoAlt: 'Constant Contact Logo',
      website: 'https://www.constantcontact.com/',
      dates: 'July 2016 - September 2018',
      overview: 'Build and maintain scalable full stack web applications using Java and JavaScript',
      roles: [
        {
          title: 'Software Engineer',
          dates: 'July 2016 - September 2018',
          highlights: [
            'Collaborate in an Agile (Scrum) environment to enhance and maintain the front-end of a customer-facing WYSIWYG email editor using Backbone/Marionette, Mustache, SASS, JavaScript, and CoffeeScript.',
            'Architect and develop a new company wide front-end project structure using a generator pattern to modernize technologies, correct dependency management issues, and alleviate technical debt concerns utilizing Yeoman, Grunt, Webpack, Babel, Karma, ESLint, and numerous other front-end technologies.',
            'Aided in the development and architecture of a feature involving multiple microservices, enabling customers to A/B test their email marketing campaigns. Key technologies were Backbone/Marionette, Java 8, Spring Boot, Quartz, and MySQL.',
            'Monitor live production data and errors from both frontend and backend applications to track down critical bugs and performance issues to reduce and control the volume of support calls. Use Splunk for log search and monitoring and NewRelic for live error and performance monitoring.',
            'Developed a service to validate Swagger API documentation against the company’s REST API standards using Java, Spring Boot, and Docker. This allowed teams to verify compliance so that internal services could be easily integrated into the company’s public API.',
            'Work alongside QEs to manually test features, write automated test suites using Protractor, and develop best practices for testing modular JavaScript libraries and applications.',
            'Mentor and train new graduate engineers and interns in programming methodologies, web application best practices, and Scrum processes'
          ]
        }
      ],
    },
    {
      company: 'RIT ITS',
      logo: '/static/its_logo.png',
      logoAlt: 'RIT ITS Logo',
      website: 'https://www.rit.edu/its/',
      dates: 'August 2015 - July 2016',
      overview: 'Develop and maintian internal tools to streamline workflows of an IT support organization',
      roles: [
        {
          title: 'Web Application Developer',
          dates: 'August 2015 - July 2016',
          highlights: [
            'Refactored an internal ticketing and asset tracking system, moving all backend code to a REST service in PHP and MySQL, and all frontend code into a SPA using Backbone.js. This allowed new features to be developed quicker and easier, using current web technologies and best practices.',
            'Designed and developed a full-stack web application using jQuery, PHP, and MySQL to track and audit the training of IT service technicians, provide crucial reporting to upper management, and identify deficiencies in the process. This system was also rolled out to additional departments to facilitate the training of their employees.',
            'Created a training program for additional developers to learn the languages and technologies behind the departments’ web applications to allow future development and to reduce technical debt over time.'
          ]
        }
      ],
    },
    {
      company: '1stdibs.com',
      logo: '/static/dibs-logo.svg',
      logoAlt: '1stdibs.com logo',
      website: 'https://www.1stdibs.com',
      dates: 'June 2015 - August 2015',
      overview: '',
      roles: [
        {
          title: 'Front-End Engineer Intern',
          dates: 'June 2015 - August 2015',
          highlights: [
            'Developed critical front-end elements and functionality of a large feature overhaul, providing updated UI and functionality around eCommerce item management using HTML, SASS, JavaScript, Backbone.js, and Express.js.',
            'Enhanced dynamic documentation of an internal frontend library to provide additional information and improved usability using React.',
            'Created Python scripts to dynamically control Jenkins jobs and plugins to ensure code coverage on development branches did not drop below the code coverage on release branches.',
            'Constructed specialized Node.js scripts to check for inconsistencies in data across Apache Solr nodes.'
          ]
        }
      ],
    }
  ]
}
