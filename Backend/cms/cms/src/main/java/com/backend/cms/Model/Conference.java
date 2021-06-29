
package com.backend.cms.Model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "conference")
public class Conference {
    @Id
    private String confId;
    private String confTopic;
    private String confDate;
    private String confDescription;
    private List researchPapers;
    private List workshops;
    private ConferenceSession conferenceSession;
    private String approveStatus;

    public Conference() {
    }

    public Conference(String confId, String confTopic, String confDate, String confDescription, List researchPapers, List workshops, ConferenceSession conferenceSession, String approveStatus) {
        this.confId = confId;
        this.confTopic = confTopic;
        this.confDate = confDate;
        this.confDescription = confDescription;
        this.researchPapers = researchPapers;
        this.workshops = workshops;
        this.conferenceSession = conferenceSession;
        this.approveStatus = approveStatus;
    }

    public String getConfId() {
        return confId;
    }

    public void setConfId(String confId) {
        this.confId = confId;
    }

    public String getConfTopic() {
        return confTopic;
    }

    public void setConfTopic(String confTopic) {
        this.confTopic = confTopic;
    }

    public String getConfDate() {
        return confDate;
    }

    public void setConfDate(String confDate) {
        this.confDate = confDate;
    }

    public String getConfDescription() {
        return confDescription;
    }

    public void setConfDescription(String confDescription) {
        this.confDescription = confDescription;
    }

    public List getResearchPapers() {
        return researchPapers;
    }

    public void setResearchPapers(List researchPapers) {
        this.researchPapers = researchPapers;
    }

    public List getWorkshops() {
        return workshops;
    }

    public void setWorkshops(List workshops) {
        this.workshops = workshops;
    }

    public ConferenceSession getConferenceSession() {
        return conferenceSession;
    }

    public void setConferenceSession(ConferenceSession conferenceSession) {
        this.conferenceSession = conferenceSession;
    }

    public String getApproveStatus() {
        return approveStatus;
    }

    public void setApproveStatus(String approveStatus) {
        this.approveStatus = approveStatus;
    }
}
