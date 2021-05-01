package com.example.ICAF.Repository;


import com.example.ICAF.Model.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepository extends MongoRepository<Role,String> {

}
