module.exports = (totalSize,req,res) => {
	const range = req.headers['range'];
	if(!range){
		return {code: 200};
	}
	const sizes = range.match(/bytes=(\d*)-(\d*)/);
	const end = sizes[2] || totalSize-1;
	const start = sizes[1] || totalSize - end;

	if(end>totalSize || end>start || start<0){
		return {
			code: 200
		};
	}

	res.setHeader({
		'Accept-Ranges': 'bytes',
		'Content-Range': `bytes ${start}-${end}/${totalSize}`,
		'Content-Length': end-start
	});

	return {
		code: 206,
		start: parseInt(start),
		end: parseInt(end)
	};
};