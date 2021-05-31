package com.backend.cms.Controller;

import com.backend.cms.Model.ConferenceSession;
import com.backend.cms.Repository.ConferenceSessionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/conferenceSession")
public class ConferenceSessionCon {

    @Autowired
    ConferenceSessionRepo conferenceSessionRepo;

    @PostMapping("/create")
    public ResponseEntity<ConferenceSession> createConferenceSession(@RequestBody ConferenceSession conferenceSession) {
        try{
            ConferenceSession conference_session = conferenceSessionRepo.save(conferenceSession);
            return new ResponseEntity<>(conference_session, HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/")
    public ResponseEntity<List<ConferenceSession>> getAllConferenceSession(){
        try{
            List<ConferenceSession> conference_session = new ArrayList<ConferenceSession>();
            conferenceSessionRepo.findAll().forEach(conference_session::add);
            if(conference_session.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(conference_session, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}




