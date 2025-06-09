'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
// [env]는 config.json 파일에서 현재 환경에 맞는 설정을 가져옵니다.
// const config = require(__dirname + '/../config/config.js')[env];에서 env 는
// process.env.NODE_ENV로 설정된 환경 변수를 사용하여 현재 환경을 결정합니다.
// const aa = require(__dirname + '/../config/aa')['aa'];
// console.log(config);
// console.log('aa',aa);
// console.log('config : ', config.use_env_variable);
const db = {};

let sequelize;//시퀄라이즈 객체 생성
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  //시퀄라이즈 객체 생성은 DB연결 => orm 객체 생성을 위해
  // insert into values select * from
  // 함수로
  // crud 함수로 호출할 준비
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
// console.log('sequelize : ', sequelize);


db.sequelize = sequelize;
// db.Sequelize = Sequelize;
const User = require('./user');
const Comment = require('./comment');
db.User = User;
db.Comment = Comment;

// User와 Comment 모델을 sequelize 인스턴스에 연결합니다.
// initiate 함수는 모델을 정의하고 sequelize 인스턴스에 연결하는 역할을 합니다.
User.initiate(sequelize);
Comment.initiate(sequelize);

// associate 함수는 모델 간의 관계를 정의합니다.
User.associate(db);
Comment.associate(db);

module.exports = db;

//
// fs
//   .readdirSync(__dirname) // 현재 디렉토리(__dirname)에서 파일 목록을 읽어옵니다.
//   .filter(file => { // 파일 목록에서 특정 조건을 만족하는 파일만 필터링합니다.
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file));
//     console.log("model : ",model);
//     db[model] = model;
//     model.initiate && model.initiate(sequelize);
//   });
//
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

