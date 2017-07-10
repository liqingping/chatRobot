/**
 * Created by liqp on 2017/7/10.
 */
const robot = require('../../model/chat/robot')

exports.sendContentRobot = function (req, res, next) {
	let content = req.body.content;
	robot.getContent(content,function (err, result) {
		res.json({
			msg: '',
			text: JSON.parse(result).text
		})
	})
};