const { AppError } = require("./customErrorTypes")


function logErrors(err, req, res, next) {
   let { name, message, stack } = err

   console.error('\x1b[31m', 'Error: ', { name, message, route: req.url, stack })
   next(err)
}


function errorHandler(err, req, res, next) {

   if (err instanceof AppError) {
      return res.status(err.statusCode).json({ 'error': { message: err.message } })
   }

   res.status(500).json("Something went worng")
}


module.exports = { logErrors, errorHandler }