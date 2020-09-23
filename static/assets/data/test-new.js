import moment from 'moment';

export default [
    {
        title: 'Politics Test',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Politics'],
        link: '#',
        image: 'bigdaddy.jpg'
    },
    {
        title: 'Gaming Test',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Gaming'],
        link: '#',
        image: 'crondose.jpg'
    },
    {
        title: 'Multiple Categories Test',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Politics', 'News'],
        link: '#',
        image: 'dashtrack.jpg'
    },
    {
        title: 'News Test',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['News'],
        link: '#',
        image: 'dailysmarty.jpg'
    },
    // {
    //     title: 'Programming Test',
    //     date: moment().format('MMMM DD, YYYY'),
    //     categories: ['Programming'],
    //     link: '#',
    //     image: 'devcamp.jpg'
    // },
    // {
    //     title: 'Three Categories Test',
    //     date: moment().format('MMMM DD, YYYY'),
    //     categories: ['Gaming', 'Programming', 'News'],
    //     link: '#',
    //     image: 'littlesister.jpg'
    // }
]