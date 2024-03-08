
function noFound(req, res, next){
  const error = new Error(`Ulr not found ${req.originalUrl}`);
  res.status(404);
  return next(error);
}

function errorHandler(err, req,res){
  const statusCode = req.statusCode === 200? 500 : res.statusCode;
  res.status(statusCode);
  return res.json({success: false, message: err.message});
}

module.exports = {
  noFound,
  errorHandler
}