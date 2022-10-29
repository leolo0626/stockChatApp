package com.example.stockChatApp_backend;

import com.example.stockChatApp_backend.domain.Role;
import com.example.stockChatApp_backend.domain.User;
import com.example.stockChatApp_backend.service.UserService;
import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;
import com.ulisesbocchio.jasyptspringboot.annotation.EncryptablePropertySource;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
@Configuration
@EnableEncryptableProperties
public class StockChatAppBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(StockChatAppBackendApplication.class, args);
	}

	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	CommandLineRunner run(UserService userService) {
		return args -> {
			userService.saveRole(new Role(null, "ROLE_USER"));
			userService.saveRole(new Role(null, "ROLE_MANAGER"));
			userService.saveRole(new Role(null, "ROLE_ADMIN"));
			userService.saveRole(new Role(null, "ROLE_SUPER_ADMIN"));

			userService.saveUser(new User(null, "Leo Lo", "leolo0626", "1234", new ArrayList<>()));
			userService.saveUser(new User(null, "Meko Chung", "meko0307", "1234", new ArrayList<>()));

			userService.addRoleToUser("leolo0626", "ROLE_SUPER_ADMIN");
			userService.addRoleToUser("meko0307", "ROLE_USER");
		};
	}
}
