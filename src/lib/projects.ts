import { TechIcon } from "@/components/tech-icons";

interface Project {
    title: string;
    description: string;
    imageHref?: string;
    techIcons: TechIcon[];
    repoLink?: string;
}

export const Projects: Project[] = [
    {
        title: 'Neural Network Pressure Analysis and Prediction',
        description: 'TODO',
        techIcons: [
            {displayName: 'Python3', srcName: ''},
            {displayName: 'TensorFlow', srcName: ''}
        ],
    },
    {
        title: 'Jobseeker Web-Application',
        description: 'TODO',
        techIcons: [
            {displayName: 'Nextjs', srcName: 'nextjs'},
            {displayName: 'MaterialUI', srcName: 'material-ui'},
            {displayName: 'Django', srcName: 'django'}
        ],
    },
    {
        title: 'Social Network Web-Application',
        description: 'TODO',
        techIcons: [
            {displayName: 'React', srcName: 'reactjs'},
            {displayName: 'Bootstrap', srcName: 'bootstrap'},
            {displayName: 'Django', srcName: 'django'}
        ],
        repoLink: 'https://github.com/bencodes8/network'
    },
    {
        title: 'E-Commerce Game Auctions Web-Application',
        description: 'TODO',
        techIcons: [
            {displayName: 'HTML5', srcName: 'html5'},
            {displayName: 'CSS3', srcName: 'css3'},
            {displayName: 'Bootstrap', srcName: 'bootstrap'},
            {displayName: 'Django', srcName: 'django'}
        ],
        repoLink: 'https://github.com/bencodes8/commerce'
    }
];