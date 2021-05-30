package com.backend.cms.Service;

import com.backend.cms.Repository.ImportantDateRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImportantDateServ {
    @Autowired
    public ImportantDateRepo importantDateRepo;

}
