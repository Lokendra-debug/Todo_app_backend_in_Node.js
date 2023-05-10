const mongoose=require("mongoose")

const todoSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    dueDate: {
      type: Date,
      required: true
    },
    priority: {
      type: String,
      enum: ['high', 'medium', 'low'],
      default: 'medium'
    },
    completed: {
      type: Boolean,
      default: false
    }
  });

  const TodoModel=mongoose.model("Todo",todoSchema)

  module.exports={TodoModel}
