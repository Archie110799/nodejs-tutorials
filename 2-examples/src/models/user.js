import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    username: {type : String, require:true},
    password: {type : String, require:true}
})

var User = mongoose.model('User', postSchema);

export default User;