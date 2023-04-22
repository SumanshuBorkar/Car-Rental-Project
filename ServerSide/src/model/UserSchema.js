const mongoose = require('mongoose');
const bcrypt = require('bcrypt');  // for hashing password

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, 'you have to register email']
    },
    password: {
        type: String,
        required: [true, 'you have to register password']
    },
    isAccountVerified: {
        type: Boolean,
        default: false
    },
    accountVerificationToken : String,
    accountVerificationExpires : Date,
    accountVerificationTokenExpires : Date,
    passwordChangedAt: Date,
    passwordRestToken: String,
    passwordResetExpires: Date,
},
{
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    },
    timestamps: true
}
);

// Hash Password

userSchema.pre("save", async function(next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Match Password
userSchema.methods.isPasswordMatched = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;

