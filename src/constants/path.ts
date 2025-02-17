export const PATH = [{link: '/', text: 'главная'}, {link: '/personal', text: 'Персональные'},
    {link: '/blog', text: 'Блог'}, {link: '/vacancies', text: 'Вакансии'}, {link: '/adminpanel', text: 'Панель администратора'}]

export const SHOP_PATH = {link: '/shop', text: 'Магазин'}

export const PAGES_PATHS = {
    vacancies: '/vacancies',
    blog: '/blog',
    personal: '/personal',
    mainPage: '/',
    shop: '/shop',
    adminpanel: '/adminpanel'
}

export const IMG_PATHS = {
    navbarLogo: require('../assets/footerimage.svg').default,
    footerLogo: require('../assets/footerimage.svg').default,
    headerBigLogo: require('../assets/hero.png').default,
}

export const API = {
    user: {
        login: 'http://localhost:5000/api/user/login',
        registration: 'http://localhost:5000/api/user/registration'
    },
    blog: {
        getAll: 'http://localhost:5000/api/blog',
        createBlog: 'http://localhost:5000/api/blog'
    },
    vacancies: {
        getAll: 'http://localhost:5000/api/vacancies',
        createVacancie: 'http://localhost:5000/api/vacancies'
    },
    shop: {
        getAll: 'http://localhost:5000/api/shop',
        createShop: 'http://localhost:5000/api/shop'
    }
}