var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
  // Start add properties here
  _by: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  content: {type: String, required: true},
  content_type: {type: String, required: true, default: "text"},
  public: {type: Boolean, required: true},
  active: {type: Boolean, default: true}
}, {timestamps: true});

var Message = mongoose.model('Message', messageSchema);

module.exports = Message;
