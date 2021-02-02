
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    entry:{
        bubbleSort:'./src/bubbleSort.js',
        selectionSort:'./src/selectionSort.js',
        insertionSort:'./src/insertionSort.js',
        shellSort:'./src/mergeSort.js'
    },
    output:{
        publicPath:'/',
        filename:"[name].js"
    },
    devServer:{
        port:'9999'
    },
    devtool:'source-map',
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ]
}