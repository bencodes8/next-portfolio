import { TechIcon } from "@/components/tech-icons";

interface Project {
    title: string;
    paragraphs: string[];
    imageFile?: string;
    techIcons: TechIcon[];
    repoLink?: string;
}

export const Projects: Project[] = [
    {
        title: 'Neural Network Pressure Analysis and Prediction',
        paragraphs: ['TODO'],
        techIcons: [
            {displayName: 'Python3', srcName: 'python3'},
            {displayName: 'TensorFlow', srcName: 'tensorflow'}
        ],
    },
    {
        title: 'Jobseeker Web-Application',
        paragraphs: [
        "Jobseeker is a comprehensive full-stack web application designed to facilitate meaningful connections between users, whether they're seeking job opportunities or looking to hire talent.", 
        "With Jobseeker, users have the option to register and log in as either a 'seeker' or an 'employer'.", 
        "This flexibility empowers users to expand their professional network and access many career opportunities."
        ],
        imageFile: 'jobseeker.png',
        techIcons: [
            {displayName: 'Nextjs', srcName: 'nextjs'},
            {displayName: 'MaterialUI', srcName: 'material-ui'},
            {displayName: 'Django', srcName: 'django'}
        ],
    },
    {
        title: 'Social Network Web-Application',
        paragraphs: ['TODO'],
        imageFile: 'network.png',
        techIcons: [
            {displayName: 'React', srcName: 'react'},
            {displayName: 'Bootstrap', srcName: 'bootstrap'},
            {displayName: 'Django', srcName: 'django'}
        ],
        repoLink: 'https://github.com/bencodes8/network'
    },
    {
        title: 'E-Commerce Game Auctions Web-Application',
        paragraphs: ['TODO'],
        imageFile: 'commerce.png',
        techIcons: [
            {displayName: 'HTML5', srcName: 'html5'},
            {displayName: 'CSS3', srcName: 'css3'},
            {displayName: 'Bootstrap', srcName: 'bootstrap'},
            {displayName: 'Django', srcName: 'django'}
        ],
        repoLink: 'https://github.com/bencodes8/commerce'
    }
];


