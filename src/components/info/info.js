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
    bio: 'Hello! I am Franklin Abonero, I am a Computer Engineering graduate in Surigao del Norte State University. I am a Frontend Developer with 4 months of experience in developing websites and web applications. I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. All of my work is produced locally from the Philippines. I am currently available for freelance projects.',
    skills:
    {
        proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3'],
        exposedTo: ['nodejs', 'php', 'codeigniter', 'express', 'socket', 'MySQL', 'arduino', 'RaspberryPie']
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
            live: 'https://vite-react-portfolio-three.vercel.app/',
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