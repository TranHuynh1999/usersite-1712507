// models/user.model.js
// load những thư viện chúng ta cần
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
// định nghĩ cấu trúc user model
var Schema = mongoose.Schema;
var schema = new Schema({

    email: {type: String, required: true},
    password: {type: String, required: true}
});
// ma hoa mk
schema.methods.encryptPassword= function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5),null);
};
//giai ma mk
schema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};
var user = mongoose.model('User', schema);
module.exports= user