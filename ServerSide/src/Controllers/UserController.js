const expressAsyncHandler = require('express-async-handler');
const User = require('./../model/UserSchema');
const validateMongodbID = require('./../ValidateID');
const generateToken = require('./../GernerateToken')

const userRegisterCtrl = expressAsyncHandler(async (req, res) => {
    const userExists = await User.findOne({ email: req?.body?.email});
    if(userExists) throw new Error('user already exists');
    try {

        const newUser = await User.create({
            Name: req?.body?.Name,
            email: req?.body?.email,
            password: req?.body?.password
         });

        res.status(201).json({
            status: 'success',
            data: {
                user: newUser
            }
        });
        console.log(newUser);
    }catch(err){
        res.json(err);
    }

})

const loginUserCtrl = expressAsyncHandler(async (req, res) => {
    const {email, password} = req.body;
    // check if user exists //
    const userFound = await User.findOne({email});
    if(userFound && (await userFound.isPasswordMatched(password))){
        res.status(200).json({
            _id:userFound?._id,
            Name: userFound?.Name,
            email: userFound?.email,
            token: generateToken(userFound?._id)
        })
    }
    else{
        res.status(404);
        throw new Error("Invalid login credentials");
    }
});


module.exports = {userRegisterCtrl,loginUserCtrl};