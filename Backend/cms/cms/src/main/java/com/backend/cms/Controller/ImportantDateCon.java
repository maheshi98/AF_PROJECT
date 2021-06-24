package com.backend.cms.Controller;

import com.backend.cms.Model.ImportantDate;
import com.backend.cms.Repository.ImportantDateRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/importantDate")
public class ImportantDateCon {

    @Autowired
    ImportantDateRepo importantDateRepo;

    @PostMapping("/create")
    public ResponseEntity<ImportantDate> createImportantDate(@RequestBody ImportantDate importantDate) {
        try{
            ImportantDate important_date = importantDateRepo.save(importantDate);
            return new ResponseEntity<>(important_date, HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/")
    public ResponseEntity<List<ImportantDate>> getAllImportantDates(){
        try{
            List<ImportantDate> important_date = new ArrayList<ImportantDate>();
            importantDateRepo.findAll().forEach(important_date::add);
            if(important_date.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(important_date, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
