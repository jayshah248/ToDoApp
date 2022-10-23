const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  task: {type: String, required: true},
  email: {type: String, required: true},
  taskdesc: {type: String, default: null},
  status: {type: String, default: "unfinished" },
  createdat: {type: Date, default: Date.now},
  finishedat: {type: Date}
}, {collection: 'tasks'})

const model = mongoose.model('TaskSchema', TaskSchema)
module.exports = model
