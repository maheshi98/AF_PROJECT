package com.backend.cms.Repository;

import com.backend.cms.Model.ConferenceSession;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ConferenceSessionRepo extends MongoRepository<ConferenceSession,String> {
}

