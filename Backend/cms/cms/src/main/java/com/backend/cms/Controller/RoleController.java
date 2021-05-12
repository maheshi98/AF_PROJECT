package com.backend.cms.Controller;

import com.backend.cms.Model.Role;
import com.backend.cms.Model.RoleType;
import com.backend.cms.Model.User;
import com.backend.cms.Repository.Rolerepo;
import com.backend.cms.Repository.TypeRepo;
import com.backend.cms.Repository.UserRepository;
import com.backend.cms.Service.sampleServ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class RoleController {

    @Autowired
    public Rolerepo irolerepo;
    public UserRepository iuser;

    @Autowired
    public TypeRepo itype;

    @Autowired
    public sampleServ sampleServ;

    @RequestMapping(value = "/addRole", method = RequestMethod.POST)
    public Role test(@RequestBody Role role){
        return irolerepo.save(role);
    }

    @RequestMapping(value = "/addUser", method = RequestMethod.POST)
    public User saveUser(@RequestBody User user){
        return sampleServ.saveUser(user);
    }

    @RequestMapping(value = "/addtype", method = RequestMethod.POST)
    public RoleType test(@RequestBody RoleType type){
        return itype.save(type);
    }
}