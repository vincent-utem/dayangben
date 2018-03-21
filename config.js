/**
 * Created by vincent on 2018/3/20.
 */
var config = {
        debug: true    // 是否开发调试模式
    ,   name: 'dayangben'  // 站点名称，即：head->title
    ,   description: 'dayangben'   // 站点描述，即：head->description
    ,   keywords: 'dayangben'  // 站点关键词，即：head->keyword
    ,   port: '3000'     // 站点端口
    ,   dybFilesPath: '/Users/vincent/github/vincent-utem/dybfiles'    // 文档存放目录
    ,   log4jsConfig: {   // 日志配置
            'appenders': [
                // 下面一行应该是用于跟express配合输出web请求url日志的  
                {
                    'type': 'console',
                    'category': 'console'
                },
                // 定义一个日志记录器  
                {
                    'type': 'dateFile',                 // 日志文件类型，可以使用日期作为文件名的占位符  
                    'filename': 'e:/weblogs/logs/',     // 日志文件名，可以设置相对路径或绝对路径  
                    'pattern': 'debug/yyyyMMddhh.txt',  // 占位符，紧跟在filename后面  
                    'absolute': true,                   // filename是否绝对路径  
                    'alwaysIncludePattern': true,       // 文件名是否始终包含占位符  
                    'category': 'logInfo'               // 记录器名  
                }
            ],
            'levels':{
                'logInfo': 'DEBUG'  // 设置记录器的默认显示级别，低于这个级别的日志，不会输出
            }
        }
};

module.exports = config;