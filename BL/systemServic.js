let jwt = require("jsonwebtoken")


function createToken(objectData) {
   try {
      return jwt.sign(objectData, process.env.PrivateKey, { expiresIn: "3h" });;
   } catch (error) {
      throw error.message
   }
}

function checkToken(token) {
   try {
      return jwt.verify(token, process.env.PrivateKey)
   } catch (error) {
      throw error.message
   }
}


module.exports = { createToken, checkToken }