
class ConstructorTaskError extends Error {
   constructor(message, statusCode) {
      super(message);

      this.name = this.constructor.name
      this.userMessage = false
      
      if (this instanceof DatabaseError) {
         
      }
      else if (this instanceof EmptyFieldError) {
         this.userMessage = true
         this.statusCode = statusCode || 400
      }
   }
}

// extending to child error classes
class DatabaseError extends ConstructorTaskError { }
class EmptyFieldError extends ConstructorTaskError { }

module.exports = { DatabaseError, EmptyFieldError }