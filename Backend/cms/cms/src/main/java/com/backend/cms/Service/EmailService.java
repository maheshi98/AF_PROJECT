package com.backend.cms.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import com.backend.cms.Model.ResearchPpr;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

//import com.bravo.store_managemt_system.model.Researchppr;

@Service
public class EmailService {
    private JavaMailSender javaMailSender ;

    @Autowired
    public EmailService(JavaMailSender javaMailSender){
        this.javaMailSender = javaMailSender;
    }

    public void sendEmail(ResearchPpr researchPpr) throws MailException{
        SimpleMailMessage smm = new SimpleMailMessage();
        smm.setTo(researchPpr.getEmail());
        smm.setFrom("shoe50048@gmail.com");
        smm.setSubject("Research Paper Status");

        String emailBody = "Congratulations! \n" +
                "\n" +
                "Your Research Paper is Approved\n" +
                "\n" +
                "\n" +
                "Email :- " +researchPpr.getEmail() + "\n" +
                "\n" +
                "Thank you. ";


        smm.setText(emailBody);

        javaMailSender.send(smm);
    }
}