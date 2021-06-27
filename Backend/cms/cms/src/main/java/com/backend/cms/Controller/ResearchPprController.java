package com.backend.cms.Controller;

import com.backend.cms.Model.ResearchPpr;
import com.backend.cms.Model.Role;
import com.backend.cms.Service.ResearchPprService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/researchers")
public class ResearchPprController {

    @Autowired
    public ResearchPprService res;

    @RequestMapping(value = "/saveReseachppr", method = RequestMethod.POST)
    public ResearchPpr test(@RequestBody ResearchPpr researchPpr){
        return res.saveResearch(researchPpr);
    }

}
