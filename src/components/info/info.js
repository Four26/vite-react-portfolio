import self from '../../assets/images/profile.png';
import mock1 from '../../assets/images/mock1.png';
import mock2 from '../../assets/images/mock2.png';
import mock3 from '../../assets/images/mock3.png';
import mock4 from '../../assets/images/mock4.png';
import mock5 from '../../assets/images/mock5.png';

export const info = {
    firstName: 'Franklin',
    lastName: 'Abonero',
    position: 'Web Developer',
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
        },
        {
            link: "https://drive.google.com/file/d/1yRf3gds5au-59R98crzyr25-C4KDKnCI/view?usp=sharing",
            icon: "fa fa-file-text",
            label: 'resume'
        }
    ],
    bio: "I'm Franklin Abonero, a Computer Engineering graduate specializing in web development. I have expertise in HTML, CSS, JavaScript, and React, with a focus on creating visually appealing and responsive websites. Additionally, I'm proficient in backend technologies like PHP, WordPress, Express, and Node.js, enabling me to develop dynamic web applications. I'm actively seeking opportunities to contribute my skills and collaborate on high-quality web projects. If you have any questions or suitable opportunities, please feel free to reach out. I'm eager to apply my abilities and make a valuable impact in a company.",
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
            title: 'Video Search App',
            live: 'https://video-search-one.vercel.app/',
            source: 'https://github.com/Four26',
            image: mock1
        },
        {
            title: 'Personal Portfolio',
            live: 'https://frank-tech.vercel.app/',
            source: 'https://github.com/Four26',
            image: mock2
        },
        {
            title: 'Role CSV Website',
            live: 'https://csv-website.vercel.app/',
            source: 'https://github.com/Four26',
            image: mock3
        },
        {
            title: 'Drawing App',
            live: 'https://drawing-app-five-delta.vercel.app/',
            image: mock4
        },
        {
            title: 'Image Search App',
            live: 'https://image-api-ve6r.vercel.app/',
            image: mock5
        }
    ]
}