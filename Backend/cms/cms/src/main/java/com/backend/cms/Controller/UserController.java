package com.backend.cms.Controller;

import com.backend.cms.Model.User;
import com.backend.cms.Repository.UserRepository;
import com.backend.cms.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
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

}
