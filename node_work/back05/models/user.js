const Sequelize = require('sequelize');
// const sequelize = require('sequelize');
// console.log("s : ",sequelize);
// console.log("S : ", Sequelize);

class User extends Sequelize.Model {
    // 컬럼 정의 하는 함수
    static initiate(sequelize) {
        User.init({
            // id:{
            //     type: Sequelize.INTEGER.UNSIGNED,
            //     primaryKey: true, // 기본키 설정
            //     autoIncrement: true, // 자동 증가 설정
            // },
            name: {
                type: Sequelize.STRING(20), // 문자열 타입, 최대 길이 20(varchar(20))
                allowNull: false, // 필수 입력 즉, Not Null
                unique: true,
            },
            age: {
                type: Sequelize.INTEGER.UNSIGNED, // 정수 타입
                allowNull: false, // 필수 입력 즉, Not Null
            },
            married: {
                type: Sequelize.BOOLEAN, // 불리언 타입
                allowNull: false, // 필수 입력 즉, Not Null
                defaultValue: false, // 기본값은 false
            },
            comment: {
                type: Sequelize.TEXT, // 긴 문자열 타입
                allowNull: true, // 선택 입력 즉, Null 허용
            },
            created_at: {
                type: Sequelize.DATE, // 날짜 타입
                allowNull: false, // 필수 입력 즉, Not Null
                defaultValue: Sequelize.NOW, // 기본값은 현재 시간
            },
        },{
            sequelize,
            timestamps: false, // createdAt, updatedAt 컬럼을 사용하지 않음
            underscored: false, // 컬럼 이름에 밑줄(_)을 사용하지 않음
            modelName: 'User', // 모델 이름, node.js에서 사용 즉, javascript에서 사용
            tableName: 'users', // 실제 테이블 이름
            paranoid: false,//deleteAt 컬럼을 사용하지 않음
            charset: 'utf8',
            collate: 'utf8_general_ci', // 한글 저장을 위한 설정
        })
    }
    //User 모델의 관계를 정의하는 함수
    // associate 함수는 다른 모델과의 관계를 정의합니다.(즉 지금은 comment와 user의 관계를 정의하는 함수입니다.)
    static associate(db) {
        db.User.hasMany(db.Comment, {foreignKey: 'commenter', sourceKey: 'id'});
        // hasMany 관계를 정의합니다. 즉, User 모델은 여러 개의 Comment 모델을 가질 수 있습니다.
    }
}

module.exports = User;