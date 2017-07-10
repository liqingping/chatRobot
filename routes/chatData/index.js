/**
 * Created by liqp on 2017/7/10.
 */
const data = require('../../controller/data/chat');

exports.map = function (app) {
	app.post('/chat/robot', data.sendContentRobot)
};