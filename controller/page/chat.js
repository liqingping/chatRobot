/**
 * Created by liqp on 2017/7/10.
 */
exports.getHomePage = function (req, res, next) {
	res.render('index', { title: 'Express' });
};