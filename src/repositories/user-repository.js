const CrudRepository=require('./crud-repository');
const {User}=require('../models');

class UserRepository extends CrudRepository{
    constructor(){
        console.log("Inside Respository");
        super(User);
    }
    async getUserByEmail(email) {
        const user = await User.findOne({ where: { email: email } });
        return user;
    }
}

module.exports=UserRepository;