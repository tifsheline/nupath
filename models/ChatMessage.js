var mongoose = require('mongoose');

var chatMessageSchema = mongoose.Schema({
  // Start add properties here
  _by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  content: {type: String, required: true},
  active: {type: Boolean, default: true}
}, {timestamps: true});

var ChatMessage = mongoose.model('Obj', chatMessageSchema);

module.exports = ChatMessage;
