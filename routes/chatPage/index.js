/**
 * Created by liqp on 2017/7/10.
 */
const chatPage = require('../../controller/page/chat');
exports.map = function (app) {
	app.get('/', chatPage.getHomePage)
};