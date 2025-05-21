package com.collegeproject.hospitalfinderproj.controller;

import com.collegeproject.hospitalfinderproj.model.Users;
import com.collegeproject.hospitalfinderproj.repo.UserRepo;
import com.collegeproject.hospitalfinderproj.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
//@CrossOrigin(origins = "http://localhost:5500", allowCredentials = "true")
public class UserController {

    @Autowired
    private UserService service;

    @Autowired
    private UserRepo repo;

    @CrossOrigin
    @PostMapping("/register")
    public Users register(@RequestBody Users user){
        return service.register(user);
//        if(service.register(user)) {
//            return new ResponseEntity<>("Lead save" , HttpStatus.OK);
//        }else {
//            return new ResponseEntity<> ("Lead failed to save" ,HttpStatus.INTERNAL_SERVER_ERROR);
//        }
    }

    @CrossOrigin
    @PostMapping("/login")
    public String login(@RequestBody Users user){
        return service.verify(user);
    }

//    @PostMapping("/login")
//    public String login(HttpServletRequest request, @RequestBody Users user) {
//        request.getSession(true); // Create session
//        return service.verify(user);
//    }


//    @CrossOrigin
//    @GetMapping("/logout")
//    public String logout(HttpServletRequest request, HttpServletResponse response) {
//        HttpSession session = request.getSession(false);
//        if (session != null) {
//            session.invalidate();
//        }
//        return "redirect:/login";
//    }

    @CrossOrigin
    @GetMapping("/dashboard")
    public String dashboard(HttpServletResponse response) {
        response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        response.setHeader("Pragma", "no-cache");
        response.setDateHeader("Expires", 0);
        return "dashboard";
    }


    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request) {
        System.out.println("Session before invalidation: " + request.getSession(false));
        request.getSession().invalidate();
        System.out.println("Session invalidated");
        return ResponseEntity.ok("Logged out");
    }


//    @GetMapping("/count")
//    public long getUserCount() {
//        return repo.count();
//    }


//    ## profile section
    @GetMapping("/user/profile")
    public ResponseEntity<?> getProfile(HttpSession session) {
        try {
            Users user = service.getCurrentUser(session);
            return ResponseEntity.ok(user);
        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User is not logged in");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
        }
    }

    @PostMapping("/update-name")
    public ResponseEntity<?> updateName(@RequestBody Map<String, String> body, HttpSession session) {
        service.updateName(body.get("name"), session);
        return ResponseEntity.ok("Name updated successfully");
    }

    @PostMapping("/update-email")
    public ResponseEntity<?> updateEmail(@RequestBody Map<String, String> body, HttpSession session) {
        service.updateEmail(body.get("email"), session);
        return ResponseEntity.ok("Email updated successfully");
    }

    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody Map<String, String> body, HttpSession session) {
        boolean success = service.changePassword(body.get("oldPassword"), body.get("newPassword"), session);
        return success ? ResponseEntity.ok("Password changed") : ResponseEntity.status(400).body("Old password is incorrect");
    }

}
