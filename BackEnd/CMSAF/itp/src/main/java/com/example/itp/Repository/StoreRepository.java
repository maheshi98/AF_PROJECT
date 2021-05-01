package com.example.itp.Repository;

import com.example.itp.Model.StoreData;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StoreRepository extends MongoRepository<StoreData,String> {

}
