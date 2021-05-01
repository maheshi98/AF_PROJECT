package com.example.itp.Controllers;

import com.example.itp.Model.StoreData;
import com.example.itp.Repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TestController {

@Autowired
private StoreRepository repo;

    @RequestMapping(value = "/eventSave", method = RequestMethod.POST)
    public boolean addNewEvent(@RequestBody StoreData event){
        StoreData st = repo.save(event);

        return true;
    }

    @RequestMapping(value = "/showData", method = RequestMethod.GET)
    public ArrayList<StoreData> showData() {
        return (ArrayList<StoreData>) repo.findAll();
    }

}
