package com.backend.cms.Repository;

import com.backend.cms.Model.Workshop;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkshopRepo extends MongoRepository<Workshop,String> {
    public Workshop save(Workshop workshop);
}
