const {cache} = require('../config/defaultConfig');
function refreshRes(stats,res) {
	const {maxAge, expires, cacheControl, lastmodified, etag} = cache;
	if(expires){
		res.setHeader('Expires',( new Date( Date.now() + maxAge * 1000 ) ).toUTCString());
	}
	if(cacheControl){
		res.setHeader( 'Cache-Control', `pulic,max-age=${maxAge}` );
	}
	if(lastmodified){
		res.setHeader( 'Last-Modified', stats.mtime.toUTCString() );
	}
	if(etag){
		res.setHeader( 'ETag', `${stats.size}-${stats.mtime.toUTCString().split(',')[0]}` );
	}
}
module.exports = function cacheIsFresh(stats,req,res){
	refreshRes(stats,res);
	const lastModified = req.headers['if-modified-since'];
	const etag = req.headers['if-none-match'];
	if(!lastModified && !etag){
		return false;
	}
	if(lastModified && lastModified !==res.getHeader('Last-Modified')){
		return false;
	}
	if(etag && etag !== res.getHeader('ETag')){
		return false;
	}
	return true;
};