//package com.backend.cms.Controller;
//
//import com.backend.cms.Service.ReEmailService;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RestController;
//
//
//
////import javax.mail.MessagingException;
////import javax.mail.internet.AddressException;
//
//
//@RestController
//@CrossOrigin(origins = "*")
//public class ReEmailController {
//
//
//    @Autowired
//    ReEmailService reEmailService;
//
//    @RequestMapping(value = "/sendemail", method = RequestMethod.POST)
//    public String send()  {
//        //sendEmail();
//        reEmailService.sendEmail();
//        return "Email sent successfully";
//    }
//
//
//}
