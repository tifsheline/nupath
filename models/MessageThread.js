var mongoose = require('mongoose');

var messageThreadSchema = mongoose.Schema({
  users: [{type: [mongoose.Schema.Types.ObjectId], ref: 'User'}],
  messages: [{type: [mongoose.Schema.Types.ObjectId], ref: 'Message'}],
  active: {type: Boolean, default: true}
}, {timestamps: true});

var MessageThread = mongoose.model('MessageThread', messageThreadSchema);

module.exports = MessageThread;
