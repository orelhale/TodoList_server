
function logErrors(err, req, res, next) {
   let { name, message, stack } = err

   console.error('\x1b[31m', 'Error: ', {
      name,
      message,
      route: req.url,
      // stack
   })
   next(err)
}


function clientErrorHandler(err, req, res, next) {
   if (err.userMessage) {
      res.status(err.statusCode).json({ error: err.message })
   }
   next(err)
}


function errorHandler(err, req, res, next) {
   if (res.headersSent) {
      return next(err)
   }
   res.status(500)
   res.render('error', { error: err })
}


module.exports = { logErrors, clientErrorHandler, errorHandler }