const Sequelize = require('sequelize');

class Comment extends Sequelize.Model {
    static initiate(sequelize) {
        Comment.init({
            /*id:{
              type: Sequelize.INTEGER.UNSIGNED,
                primaryKey: true, // 기본키 설정
                autoIncrement: true, // 자동 증가 설정
            },*/
            /*commenter: {
                type: Sequelize.INTEGER.UNSIGNED, // 정수 타입
                allowNull: false, // 필수 입력 즉, Not Null
                references: {
                    model: 'users', // 참조할 모델 이름
                    key: 'id', // 참조할 컬럼 이름
                },
            },*/
            comment:{
                type: Sequelize.STRING(100), // 문자열 타입, 최대 길이 100(varchar(100))
                allowNull: false, // 필수 입력 즉, Not Null
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
            modelName: 'Comment', // 모델 이름, node.js에서 사용 즉, javascript에서 사용
            // className: 'Comment', // 클래스 이름, sequelize에서 사용 즉, ORM에서 사용
            tableName: 'comments', // 실제 테이블 이름
            paranoid: false,//deleteAt 컬럼을 사용하지 않음
            charset: 'utf8',
            collate: 'utf8_general_ci', // 한글 저장을 위한 설정
        })
    }
    static associate(db) {
        db.Comment.belongsTo(db.User, {
            foreignKey: 'commenter', // 외래 키 설정
            targetKey: 'id', // 참조할
        })
    }
}

module.exports = Comment;