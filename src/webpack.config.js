/**
 * webpack --env.SHARE_TYPE=list --env.SHARE=unusual-list --env.SHARE_VENDOR=comms
 */
const {merge} = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = (env) => {

    let capitalize = function (str) {
        if (str.indexOf('-') > 0) {
            return str.split('-').map(capitalize).join('');
        }
        return str.charAt(0).toUpperCase() + str.slice(1)
    };

    let param = function (name) {
        if (typeof env[name] !== 'undefined') {
            return env[name];
        }

        throw name + " must be defined ";
    }

    let shareName = param('THEME');
    let shareVendor = param('VENDOR');

    /**
     * Prefix jsonpFunction with unique name.
     */
    let library = capitalize(['hub', 'theme', shareVendor, shareName].join('-'));
    let entry = {
        theme: './js/theme.js'
    };

    return merge(base, {
        entry: entry,
        output: {
            path: process.cwd() + '/build',
            library: library
        }
    })
};