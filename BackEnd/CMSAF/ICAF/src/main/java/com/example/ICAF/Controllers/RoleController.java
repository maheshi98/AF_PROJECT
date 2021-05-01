package com.example.ICAF.Controllers;

import com.example.ICAF.Model.Role;
import com.example.ICAF.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RoleController {

@Autowired
private UserRepository repo;

    @RequestMapping(value = "/eventSave", method = RequestMethod.POST)
    public boolean addNewEvent(@RequestBody Role event){
        Role st = repo.save(event);

        return true;
    }

    @RequestMapping(value = "/showData", method = RequestMethod.GET)
    public ArrayList<Role> showData() {
        return (ArrayList<Role>) repo.findAll();
    }

}
