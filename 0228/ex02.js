//common.js 백엔드(node.js) 함수에 export 붙이지 않고 module.exports해야함
//react.js 프론트 프로그래밍 각 함수에 export 시킴


/* export */ function doA(){
    console.log("doA");
}

module.exports = doA;