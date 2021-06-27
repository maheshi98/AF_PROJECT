package com.backend.cms.Service;

import com.backend.cms.Repository.ConferenceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ConferenceSessionServ {

    @Autowired
    public ConferenceRepo conferenceRepo;

}

