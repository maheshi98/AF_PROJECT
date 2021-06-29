import axios from 'axios';

 class RegisterUserService{
    addCustomer(user){
        return axios.post('http://localhost:8811/users/addUser',user)
    }

    getUserByIdOptional(cEmail){
        return axios.get('http://localhost:8811/users/opUsers'+ '/' +cEmail);
    }


}
export default new RegisterUserService();
