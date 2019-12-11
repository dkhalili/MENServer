const Broker = require('./broker.model.js');
const User = require('./user.model.js');
const mongoose = require('mongoose'), Schema = mongoose.Schema;

const messageObj = 
{
	message: String,
	messageStatus: String,
	time: Date
}


const MessageSchema = mongoose.Schema({
    senderName: String,
    senderId: String,
    receiverName: String,
    receiverId: String,
    message: [messageObj]
    // sender: { type: Schema.Types.ObjectId },
   	// receiver: { type: Schema.Types.ObjectId }
}, {
    timestamps: true
});

module.exports = mongoose.model('Message', MessageSchema);
