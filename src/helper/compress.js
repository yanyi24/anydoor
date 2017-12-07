const {createGzip,createDeflate} = require('zlib');
module.exports = (rs,req) => {
	const acceptEncoding = req.headers['accept-encoding'];
	if(!acceptEncoding || !acceptEncoding.match(/\b(gzip | deflate)\b/)){
		return rs;
	}else if(acceptEncoding.match(/\bgzip\b/)){
		return rs.pipe(createGzip());
	}else if(acceptEncoding.match(/\bdeflate\b/)){
		return rs.pipe(createDeflate());
	}
};