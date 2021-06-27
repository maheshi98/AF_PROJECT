package com.backend.cms.Repository;

import com.backend.cms.Model.Conference;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ConferenceRepo extends MongoRepository<Conference,String> {
}
