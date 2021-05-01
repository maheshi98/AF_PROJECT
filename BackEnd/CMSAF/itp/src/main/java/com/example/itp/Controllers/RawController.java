package com.example.itp.Controllers;


import com.example.itp.Model.RawModel;
import com.example.itp.Model.StoreData;
import com.example.itp.Repository.RawRepository;
import com.example.itp.Repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RawController {


    @Autowired
    private RawRepository repo;

    @RequestMapping(value = "/rowSave", method = RequestMethod.POST)
    public boolean addNewMaterial(@RequestBody RawModel row){
        RawModel st = repo.save(row);

        return true;
    }

    @RequestMapping(value = "/showRowData", method = RequestMethod.GET)
    public ArrayList<RawModel> showData() {
        return (ArrayList<RawModel>) repo.findAll();
    }
}
