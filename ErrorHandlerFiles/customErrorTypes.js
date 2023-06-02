
class BaseConstructorError extends Error {
   
   constructor(message, statusCode) {
      super(message);
      this.name = this.constructor.name
      this.statusCode = statusCode || 400
   }
}

class AppError extends BaseConstructorError { }


module.exports = { AppError }