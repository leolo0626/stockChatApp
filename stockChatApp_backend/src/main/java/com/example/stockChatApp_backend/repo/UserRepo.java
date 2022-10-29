package com.example.stockChatApp_backend.repo;

import com.example.stockChatApp_backend.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
