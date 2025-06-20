const webpush = require('web-push')

const vapidKeys = webpush.generateVAPIDKeys()
console.log(vapidKeys)
/*

{
    publicKey: 'BN3RBQuvSX2hPCzy_BPJJ9fDtp0kMVGz5QSVFiTzC4Fm3IyHWUCpbzV6dfLOVYzXTwqJEi4gZc0oE02Y1lJ8iVo',
        privateKey: 'rJ9GupKpi3ZUcauY11BckXPZ_9hWz4HpQYcCmoLrwI4'
}
*/
