/**
 * Created by vincent on 2018/3/23.
 */

var config = [
    {
        name: '首页',
        type: 'page',
        url: '/',
        route: require('./index')
    },
    {
        name: '用户列表',
        type: 'page',
        url: '/users',
        route: require('./users')
    },
    {
        name: '检测文档目录',
        type: 'tools',
        url: '/tools/chkdybfiles',
        route: require('./tools/checkdybfiles')
    }
];

exports.load = function (app) {
    config.forEach(function (itemobj) {
        app.use(itemobj.url, itemobj.route);
    });
};