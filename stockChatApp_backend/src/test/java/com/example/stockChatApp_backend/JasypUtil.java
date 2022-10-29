package com.example.stockChatApp_backend;

import org.jasypt.util.text.BasicTextEncryptor;

public class JasypUtil {
    public static void main(String [] args) {
        BasicTextEncryptor textEncryptor = new BasicTextEncryptor();
        textEncryptor.setPassword("password");
        String user = textEncryptor.encrypt("postgres");
        String password = textEncryptor.encrypt("pwd");
        String url = textEncryptor.encrypt("jdbc:postgresql://localhost:5432/stock_chat_app");
        System.out.println("user:" + user);
        System.out.println("password:" + password);
        System.out.println("url" + url);
    }
}
