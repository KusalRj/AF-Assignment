const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const staffSchema = new Schema ({
    S_name: {
        type: String,
        required: true,
      },
    
    email: {
        type: String,
        required: true,
        unique: true,
      },
    position: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
      } 
})

staffSchema.methods.verifyCredentials = async function(inputPwd){
  
    return await bcrypt.compare(inputPwd, this.password)
  
  }
  
  //Before entering the password into the database, the middleware function encrypts it 
  
  staffSchema.pre('save', async function (next){
  
    if(!this.isModified('password')){
      next()
  
    }
  
    const Salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, Salt)
  
  })

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;