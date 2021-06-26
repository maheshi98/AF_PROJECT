package com.backend.cms.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "workshopDetails")
public class Workshop {

        @Id
        private String userid;
        private String workshopTitle;
        private String date;
        private String time;
        private int mobileNo;
        private String email;

    public String getUserid() { return userid; }

    public void setUserid(String userid) { this.userid = userid; }

    public String getWorkshopTitle() { return workshopTitle; }

    public void setWorkshopTitle(String workshopTitle) { this.workshopTitle = workshopTitle; }

    public String getDate() { return date; }

    public void setDate(String date) { this.date = date; }

    public String getTime() { return time; }

    public void setTime(String time) { this.time = time; }

    public int getMobileNo() { return mobileNo; }

    public void setMobileNo(int mobileNo) { this.mobileNo = mobileNo; }

    public String getEmail() { return email; }

    public void setEmail(String email) { this.email = email; }
}