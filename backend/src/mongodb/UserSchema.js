const UserSchema = new mongoose.Schema({
  username : String,
  password : String,
  email : String
})

export default mongoose.model('User',UserSchema)
