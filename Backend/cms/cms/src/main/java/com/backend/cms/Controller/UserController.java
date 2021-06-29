package com.backend.cms.Controller;

import com.backend.cms.Model.User;
import com.backend.cms.Repository.UserRepository;
import com.backend.cms.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    public UserService userService;

    @Autowired
    private UserRepository userRepository;

    @RequestMapping(value = "/addUser", method = RequestMethod.POST)
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }

    @GetMapping("opUsers/{id}")
    public Optional<User> findUserDetails(@PathVariable String id){
        return (Optional<User>) userRepository.findById(id);
    }

    @PutMapping("/updateUser/{id}")
    public ResponseEntity <User> updateUser(@PathVariable(value = "id") String id, @RequestBody User userDetails)  {
        Optional<User> userData =  userRepository.findById(id);

        if(userData.isPresent()){
            User user = userData.get();

         user.setFirstname(userDetails.getFirstname());
         user.setLastname(userDetails.getLastname());
         user.setEmail(userDetails.getEmail());
         user.setRole(userDetails.getRole());
         return new ResponseEntity<>(userRepository.save(user), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

}
