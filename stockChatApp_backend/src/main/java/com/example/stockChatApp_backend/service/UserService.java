package com.example.stockChatApp_backend.service;

import com.example.stockChatApp_backend.domain.Role;
import com.example.stockChatApp_backend.domain.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(String username, String roleName);
    User getUser(String username);
    List<User>getUsers();
}
