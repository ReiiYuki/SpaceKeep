const UserSchema = new mongoose.Schema({
  username : {
    type : String,
    required : true,
    unique : true
  },
  password : {
    type : String,
    required : true
  },
  email : {
    type : String,
    lowercase : true,
    required : true,
    unique : true
  }
})

export default mongoose.model('User',UserSchema)
