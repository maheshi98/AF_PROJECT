package com.backend.cms.Service;

import com.backend.cms.Model.ResearchPpr;
import com.backend.cms.Repository.ResearchPprRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResearchPprService {
    @Autowired
    public ResearchPprRepository research;

    public ResearchPpr saveResearch(ResearchPpr researchPpr) {
        return  research.save(researchPpr);
    }

}
