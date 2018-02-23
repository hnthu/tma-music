package controllers;

import models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import services.UserService;

import java.util.Set;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public Set<User> user() {
        return userService.getAll();
    }

}
