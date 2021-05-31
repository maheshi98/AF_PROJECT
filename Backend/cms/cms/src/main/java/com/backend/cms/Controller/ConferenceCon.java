package com.backend.cms.Controller;

import com.backend.cms.Model.Conference;
import com.backend.cms.Repository.ConferenceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/conference")
public class ConferenceCon {

    @Autowired
    ConferenceRepo conferenceRepo;

    @PostMapping("/create")
    public ResponseEntity<Conference> createConference(@RequestBody Conference conference) {
        try{
            Conference _conference = conferenceRepo.save(conference);
            return new ResponseEntity<>(_conference, HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/")
    public ResponseEntity<List<Conference>> getAllConference(){
        try{
            List<Conference> conference = new ArrayList<Conference>();
            conferenceRepo.findAll().forEach(conference::add);
            if(conference.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(conference, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

