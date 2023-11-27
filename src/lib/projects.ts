import { TechIcon } from '@/components/tech-icons';

interface Project {
    title: string;
    paragraphs: string[];
    imageFile?: string;
    techIcons: TechIcon[];
    repoLink?: string;
    completion_status: boolean;
}

export const Projects: Project[] = [
    {
        title: 'Neural Net. Pressure Analysis and Prediction',
        paragraphs: ['TODO'],
        techIcons: [
            {displayName: 'Python3', srcName: 'python3'},
            {displayName: 'TensorFlow', srcName: 'tensorflow'}
        ],
        completion_status: false
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
        repoLink: 'https://github.com/bencodes8/jobseeker',
        completion_status: true
    },
    {
        title: 'Social Network Web-Application',
        paragraphs: [
            "This social network web-application was built to have some functionality similar to those found on popular social media platforms.",
            "All users, no matter if authenticated, can view all posts the platform has stored in its database and will be fetched via HTTP request. Users who are authenticated has access to more features.",
            "This includes: creating/editing posts of their own, follow/unfollow particular users, view user's profiles, and liking/unliking posts."
        ],
        imageFile: 'network.png',
        techIcons: [
            {displayName: 'React', srcName: 'react'},
            {displayName: 'Bootstrap', srcName: 'bootstrap'},
            {displayName: 'Django', srcName: 'django'}
        ],
        repoLink: 'https://github.com/bencodes8/network',
        completion_status: true
    },
    {
        title: 'Game Auctions Web-Application',
        paragraphs: [
            "This e-commerce web-application allows users to participate in an auction to bid for their most wanted video game.",
            "All users, no matter if authentiacted, can view all listings and listing status' posted by registered users. Django is able to dynamically retrieve these models and render them on the page.",
            "Registered users have the extensive features including: creating a listing, adding a listing to a watchlist, bid for a listing, comment, and close a listing.",
            "When a listing is closed, the listing becomes invalid and can no longer be bidded for. The listing can still be viewed and the winner will be notified upon visiting the page."
        ],
        imageFile: 'commerce.png',
        techIcons: [
            {displayName: 'HTML5', srcName: 'html5'},
            {displayName: 'CSS3', srcName: 'css3'},
            {displayName: 'Bootstrap', srcName: 'bootstrap'},
            {displayName: 'Django', srcName: 'django'}
        ],
        repoLink: 'https://github.com/bencodes8/commerce',
        completion_status: true
    }
];


