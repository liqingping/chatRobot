/**
 * Created by liqp on 2017/7/10.
 */

const request = require('request');
const fs = require('fs');

const key = '3d20401fb67c48828ad755e865ff7cb6';
const api = 'http://www.tuling123.com/openapi/api';

exports.getContent = function (content, callback) {
	request.post({url:api, form: {
		key: key,
		info: content,
	}},function (error, res, body) {
		if (res.statusCode === 200) {
		    callback(null, body)
		}
	});
};
