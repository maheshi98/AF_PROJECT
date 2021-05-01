package com.example.ICAF.Repository;


import com.example.ICAF.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User,String> {

}
