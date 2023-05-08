let mongoose = require("mongoose")
let { Schema } = mongoose

let schema = Schema({
   name: String,
   email: String,
   phone: { type: Number },
})

let TempModel = mongoose.model("temps", schema)


function craeteOne(obj) {
   let newDate = new TempModel(obj);
   return newDate.save()
}


function findAll() {
   return TempModel.find({});
}


async function findById(id) {
   return await TempModel.findById({ _id: id });
}


module.exports = {
   craeteOne,
   findAll,
   findById,
}