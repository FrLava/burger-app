const path = require('path');

module.exports = {
    entry: "./app", //Point d'entrée du projet
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    devServer: {    //Serveur de développement
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        historyApiFallback: true
    },

	devtool: 'cheap-module-eval-source-map',    //permet de faire correspondre les source avec le bundle.js

    module: {
        loaders: [
            {
                test: /\.js$/,              //Quand on rencontre un fichier .js
                exclude: /(node_modules)/,  //Qui n'est pas dans node_module
                loader: 'babel-loader',     //on le passe à babel loader
                query: {
                    presets: [['env', { 
                        modules: false,
                        targets: { browsers: ["last 2 versions"] }  //On prend les deux dernière version des navigateur
                    }]]
                }
            }
        ]
    }

}