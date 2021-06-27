package com.backend.cms;

import com.backend.cms.Model.Conference;
import com.backend.cms.Repository.ConferenceRepo;
import org.junit.jupiter.api.Test;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.List;

import static org.hamcrest.Matchers.greaterThanOrEqualTo;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

@RunWith(SpringRunner.class)
@DataMongoTest
class CmsApplicationTests {

    @Autowired
    private ConferenceRepo conferenceRepo;

    @Test
    public void testGetConferenceAll() {
        List<Conference> conference = conferenceRepo.findAll();
        assertThat(conference.size(), is(greaterThanOrEqualTo(0)));
    }
}