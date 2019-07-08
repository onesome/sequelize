
/*操作数据库 start*/
const Sequelize = require('sequelize');
const config = require("./config");

//创建sequelize对象
var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
})

//定义模型Pet，告诉Sequelize如何映射数据库表
var Pet = sequelize.define('pet', {//第一个参数 默认表名 pet，  第二个参数{} 指定列名和数据类型，如果是主键需要详细指定， 第三个参数 {} 额外的配置
    id: {
        type: Sequelize.STRING(50),
        primaryKey:true
    },
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
    version:Sequelize.BIGINT
}, {
    timestamps:false//关闭Sequelize的自动添加timestamps的功能
    });

    //添加数据
    var now = Date.now();

    // Pet.create({
    //     id: 'g-' + now,
    //     name: 'Gaffey',
    //     gender: false,
    //     birth: '2007-07-07',
    //     createdAt: now,
    //     updatedAt: now,
    //     version: 0
    // }).then(function (p) {
    //     console.log('created.' + JSON.stringify(p));
    // }).catch(function (err) {
    //     console.log('failed: ' + err);
    // });

    (async () => {
        var dog = await Pet.create({
            id: 'd-' + now,
            name: 'Odie',
            gender: false,
            birth: '2008-08-08',
            createdAt: now,
            updatedAt: now,
            version: 0
        });
        console.log('created: ' + JSON.stringify(dog));
    })();

/* 操作数据库 end */ 


