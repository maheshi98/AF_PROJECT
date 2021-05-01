package com.example.itp.Repository;

import com.example.itp.Model.RawModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RawRepository extends MongoRepository<RawModel,String> {
}
