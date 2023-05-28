import self from '../../assets/images/profile.png';
import mock1 from '../../assets/images/mock1.png';
import mock2 from '../../assets/images/mock2.png';
import mock3 from '../../assets/images/mock3.png';

export const info = {
    firstName: 'Franklin',
    lastName: 'Abonero',
    position: 'Frontend Developer',
    selfPortrait: self,
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Philippines'
        },
        {
            emoji: '📧',
            text: 'franklinabonero28@gmail.com'
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/frank.abonero20/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://github.com/Four26",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/franklinabonero/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.reddit.com/user/Square_Ad_6050",
            icon: "fa fa-reddit-alien",
            label: 'twitter'
        }
    ],
    bio: "I'm Franklin Abonero, a Computer Engineering graduate specializing in frontend development. I have expertise in HTML, CSS, JavaScript, and React, with a focus on creating visually appealing and responsive websites. Additionally, I'm proficient in backend technologies like PHP, WordPress, Express, and Node.js, enabling me to develop dynamic web applications. I'm actively seeking opportunities to contribute my skills and collaborate on high-quality web projects. If you have any questions or suitable opportunities, please feel free to reach out. I'm eager to apply my abilities and make a valuable impact in a company.",
    skills:
    {
        proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3'],
        exposedTo: ['nodejs', 'php', 'codeigniter', 'express', 'socket.io', 'MySQL', 'arduino', 'RaspberryPie']
    }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖',
        },
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'movies',
            emoji: '🎦'
        }
    ],
    portfolio: [
        {
            title: 'Project 1',
            live: 'https://video-search-one.vercel.app/',
            source: 'https://github.com/Four26',
            image: mock1
        },
        {
            title: 'Project 2',
            live: 'https://frankportfolio-four26.vercel.app/',
            source: 'https://github.com/Four26',
            image: mock2
        },
        {
            title: 'Project 3',
            live: 'https://csv-website.vercel.app/',
            source: 'https://github.com/Four26',
            image: mock3
        }
    ]
}