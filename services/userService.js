const userModel = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserService{
    async getUsers(){
        return await userModel.findAll();
    }

    async createUser(userData) {
        console.log("createUser", userData);
        const { userName, firstName, lastName, email, mobile, password, roleId, companyId } = userData;
        
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const user = await userModel.create({
                userName,
                firstName,
                lastName,
                email,
                mobile,
                password: hashedPassword,
                roleId,
                companyId
            });
            console.log("createUser", user);
            user.token = generateToken(user);

            return {user, token: user.token}

          
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }

        function generateToken(user){
            const payload = {
                id: user.id,
                email: user.email
            };
            return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '4320h'});
          
        }
    }
    
    async getUserById(id){
        return await userModel.findByPk(id);
    } 
}


module.exports = new UserService();