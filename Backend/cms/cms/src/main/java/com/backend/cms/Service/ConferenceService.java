package com.backend.cms.Service;

import com.backend.cms.Repository.ConferenceSessionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ConferenceService {

    @Autowired
    public ConferenceSessionRepo conferenceSessionRepo;
}

