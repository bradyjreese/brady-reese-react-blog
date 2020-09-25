import moment from 'moment';

export default [
    {
        title: 'Politics Test',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Politics'],
        link: '#',
        image: 'politics-one.jpg'
    },
    {
        title: 'Gaming Test',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Gaming'],
        link: '#',
        image: 'ps5.jpg'
    },
    {
        title: 'Multiple Categories Test',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Politics', 'News'],
        link: '#',
        image: 'usa.jpg'
    },
    {
        title: 'Programming Test',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Programming'],
        link: '#',
        image: 'programming-one.jpg'
    },
]