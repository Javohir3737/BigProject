const expess = require('express');

const router = expess.Router();
const {getloginPage, getPostpage } = require('../controllers/logincontroller');

router.get('/', getloginPage);
router.post('/', getPostpage);

exports.router = {
    path: '/login',
    router
}