// index.js为webpack入口起点文件
// webpack可以处理js和json文件 但他不能处理img和css文件必须借助loader模块

// 运行指令分为开发环境指令和生产环境指令
// 起点文件路径 打包之后生成文件路径 所使用的环境为开发环境
// 开发环境  webpack ./src/index.js -o ./build/built.js --mode=development



function add(a,b){
    return a+b;
}
console.log(add(1,5));