package com.backend.cms.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "conference_session")
public class ConferenceSession {
    @Id
    private String sessionId;
    private String sessionTime;
    private String sessionTopic;
    private String sessionDescription;
    private Conference confDetails;
    private Boolean approveStatus;

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public String getSessionTime() {
        return sessionTime;
    }

    public void setSessionTime(String sessionTime) {
        this.sessionTime = sessionTime;
    }

    public String getSessionTopic() {
        return sessionTopic;
    }

    public void setSessionTopic(String sessionTopic) {
        this.sessionTopic = sessionTopic;
    }

    public String getSessionDescription() {
        return sessionDescription;
    }

    public void setSessionDescription(String sessionDescription) {
        this.sessionDescription = sessionDescription;
    }

    public Conference getConfDetails() {
        return confDetails;
    }

    public void setConfDetails(Conference confDetails) {
        this.confDetails = confDetails;
    }

    public Boolean getApproveStatus() {
        return approveStatus;
    }

    public void setApproveStatus(Boolean approveStatus) {
        this.approveStatus = approveStatus;
    }
}
