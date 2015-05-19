var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new mongoose.Schema({
	created_by: { type: Schema.ObjectId, ref: 'User' },		//should be changed to ObjectId, ref "User"
	created_at: {type: Date, default: Date.now},
	text: String
});

var userSchema = new mongoose.Schema({
	username: String,
	password: String, //hash created from password
	created_at: {type: Date, default: Date.now}
})

//declare a model called User which has schema userSchema
mongoose.model('Post', postSchema);
mongoose.model('User', userSchema);