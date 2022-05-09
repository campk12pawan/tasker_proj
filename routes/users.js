let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/task');


//mongoose.connect('mongodb+srv://MyTaskerUser:MyTaskerPassword@mytasker.jnjbn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

let schema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    }
  }
)
module.exports = mongoose.model('tasks', schema);