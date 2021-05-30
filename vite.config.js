const {resolve} = require('path');

module.exports = {
    build:{
        rollupOptions:{
            input:{
                main:resolve(__dirname,'index.html'),
                entry: resolve(__dirname,'main.js'),
            }
        }
    }
}