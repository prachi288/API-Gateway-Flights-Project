const CrudRepository=require('./crud-repository');
const {User}=require('../models');

class UserRepository extends CrudRepository{
    constructor(){
        console.log("Inside Respository");
        super(User);
    }
}

module.exports=UserRepository;