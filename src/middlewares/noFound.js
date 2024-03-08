function noFound(req, res, next){
  const error = new Error(`Ulr not found ${req.originalUrl}`);
  res.status(404);
  return next(error);
}


module.exports = {
  noFound,
  
}