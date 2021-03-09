// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

module.exports = {
    // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
    //mode: 'development', //yarn webpack --mode=development　開発用
    mode: 'production', //yarn webpack --mode=production　本番用
    // エントリーポイントの設定
    entry: './src/index.jsx',
    // 出力の設定
    output: {
        // 出力先のパス（絶対パスを指定する必要がある）
        path: path.join(__dirname, 'dist'),
        // 出力するファイル名
        filename: 'bundle.js',
    },
    //webpack-dev-serverの設定は、webpack.config.jsのdevServerに書いていく。
    devServer:{
        contentBase:path.join(__dirname, 'dist'),
      },
    module: {
        rules: [
            {
                // Babel のローダーの設定
                //対象のファイルの拡張子
                test: /\.(js|mjs|jsx)$/,
                //対象外とするフォルダ
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/react"],
                        },
                    },
                ],
            },
        ],
    },
    //import文に拡張子を付けなくてよくなる設定
    resolve: {
        extensions: ['.js', '.jsx'],
      },
  };
