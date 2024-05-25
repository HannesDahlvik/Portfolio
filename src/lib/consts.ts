interface Project {
    name: string
    description: string
    image: string
    url: string
}

export const PROJECTS: Project[] = [
    {
        name: 'Sathene',
        description: 'A web and mobile app for managing your personal life.',
        image: '/images/sathene.jpg',
        url: 'https://sathene.com'
    },
    {
        name: 'Zodive',
        description: 'A web app for managing your finances.',
        image: '/images/zodive.jpg',
        url: 'https://zodive.vercel.app'
    }
]
