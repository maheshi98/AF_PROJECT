package com.example.ICAF.Services.impl;

import com.example.ICAF.Model.User;
import com.example.ICAF.Repository.UserRepository;
import com.example.ICAF.Services.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements userService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User create(User user) {
        return userRepository.save(user);
    }

    @Override
    public User update(User user) {
        return userRepository.save(user);
    }

    @Override
    public void delete(String id) {
        userRepository.deleteById(id);
    }

    @Override
    public Optional<User> getById(String id){
        return (Optional<User>) userRepository.findById(id);
    }

    @Override
    public List<User> getAll() {
        return  userRepository.findAll();
    }
}
