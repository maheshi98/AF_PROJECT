
package com.backend.cms.Model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "conference")
public class Conference {
    @Id
    private String confId;
    private String confTopic;
    private String confDate;
    private String confDescription;
    private ConferenceSession conferenceSession;
    private Boolean approveStatus;

    public Conference() {
    }

    public Conference(String confId, String confTopic, String confDate, String confDescription, Boolean approveStatus) {
        this.confId = confId;
        this.confTopic = confTopic;
        this.confDate = confDate;
        this.confDescription = confDescription;
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

    public ConferenceSession getConferenceSession() {
        return conferenceSession;
    }

    public void setConferenceSession(ConferenceSession conferenceSession) {
        this.conferenceSession = conferenceSession;
    }

    public Boolean getApproveStatus() {
        return approveStatus;
    }

    public void setApproveStatus(Boolean approveStatus) {
        this.approveStatus = approveStatus;
    }
}
