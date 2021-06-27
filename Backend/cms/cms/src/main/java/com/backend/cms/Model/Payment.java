package com.backend.cms.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Payment")

public class Payment {
    @Id
    private String username;
    private String nameOnTheCard;
    private int cardNumber;
    private int cvc;

    public String getUsername() { return username; }

    public void setUsername(String username) { this.username = username; }

    public String getNameOnTheCard() { return nameOnTheCard; }

    public void setNameOnTheCard(String nameOnTheCard) { this.nameOnTheCard = nameOnTheCard; }

    public int getCardNumber() { return cardNumber; }

    public void setCardNumber(int cardNumber) { this.cardNumber = cardNumber; }

    public int getCvc() { return cvc; }

    public void setCvc(int cvc) { this.cvc = cvc; }
}
