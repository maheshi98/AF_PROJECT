package com.backend.cms.Controller;

import com.backend.cms.Model.Conference;
import com.backend.cms.Service.ConferenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/conference")
public class ConferenceController {

    @Autowired
    private ConferenceService conferenceService;

    /**
     * @description Create new Conference
     * @param conference
     * @memberof ConferenceController
     */
    @PostMapping("/create")
    public ResponseEntity<Conference> createConference(@RequestBody Conference conference) {
        try{
//            Conference _conference = conferenceRepository.save(conference);
            conferenceService.createConference(conference);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @description Get Conference By Conference Id
     * @param id
     * @memberof ConferenceController
     */
    @GetMapping("/{id}")
    public ResponseEntity<Conference> getConferenceById(@PathVariable("id") String id) {
        Optional<Conference> conferenceData = conferenceService.getConferenceById(id);

        if(conferenceData.isPresent()){
            return new ResponseEntity<>(conferenceData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /**
     * @description Get all Conferences
     * @memberof ConferenceController
     */
    @GetMapping("/")
    public ResponseEntity<List<Conference>> getAllConference(){
        try{
            List<Conference> conference = new ArrayList<Conference>();
//            conferenceRepository.findAll().forEach(conference::add);
            conferenceService.getAllConference().forEach(conference::add);
            if(conference.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(conference, HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @description Get Approved Conferences
     * @memberof ConferenceController
     */
    @GetMapping("/approvedConference")
    public ResponseEntity<List<Conference>> getApprovedConference() {
        return ResponseEntity.ok(conferenceService.getConferenceByStatus("Approved"));
    }
}

