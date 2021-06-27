package com.backend.cms.Repository;

import com.backend.cms.Model.ImportantDate;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ImportantDateRepo extends MongoRepository<ImportantDate,String> {
}
