/**
 * Created by vincent on 2018/3/21.
 */
var log4js = require('log4js');
var config = require('../../config');

log4js.configure({
    replaceConsole: true,
    appenders: {
        stdout: {
            type: 'stdout'  // 控制台输出
        },
        default: {  // 普通日志
            type: 'dateFile',
            filename: config.basePath + '/logs/default/',
            pattern: 'yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },
        req: {    // 用户访问日志
            type: 'dateFile',
            filename: config.basePath + '/logs/request/',
            pattern: 'yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },
        routes: {    // 路由层日志
            type: 'dateFile',
            filename: config.basePath + '/logs/routes/',
            pattern: 'yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },
        models: {    // 模型层日志日志
            type: 'dateFile',
            filename: config.basePath + '/logs/models/',
            pattern: 'yyyy-MM-dd.log',
            alwaysIncludePattern: true
        }
    },
    /*log4js 的日志分为九个等级，各个级别的名字和权重如下：
    {
        ALL: new Level(Number.MIN_VALUE, "ALL"),
        RACE: new Level(5000, "TRACE"),
        DEBUG: new Level(10000, "DEBUG"),
        INFO: new Level(20000, "INFO"),
        WARN: new Level(30000, "WARN"),
        ERROR: new Level(40000, "ERROR"),
        FATAL: new Level(50000, "FATAL"),
        MARK: new Level(9007199254740992, "MARK"), // 2^53
        OFF: new Level(Number.MAX_VALUE, "OFF")
    }*/
    categories: {   // appenders:采用的appender,取appenders项,level:设置级别
        default: { appenders: ['stdout', 'default'], level: 'debug' },
        req: { appenders: ['stdout', 'req'], level: 'debug' },
        routes: { appenders: ['stdout', 'routes'], level: 'debug' },
        models: { appenders: ['stdout', 'models'], level: 'debug' }
    }
});

exports.getLogger = function (name) {   // name取categories项
    return log4js.getLogger(name || 'default');
};

exports.useLogger = function (app, logger) {    // 用来与express结合
    app.use(log4js.connectLogger(logger || log4js.getLogger('req'), {
        format: '[:remote-addr :method :url :status :response-timems][:referrer HTTP/:http-version :user-agent]'//自定义输出格式
    }));
};
