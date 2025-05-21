package com.collegeproject.hospitalfinderproj.service;
import com.collegeproject.hospitalfinderproj.model.Users;
import com.collegeproject.hospitalfinderproj.repo.UserRepo;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepo repo;

//    @Autowired
//    private PasswordEncoder passwordEncoder;

    @Autowired
    AuthenticationManager authManager;

    private BCryptPasswordEncoder encoder=new BCryptPasswordEncoder(12);

    public Users register(Users user){
        user.setPassword(encoder.encode(user.getPassword()));
        return repo.save(user);
    }

    public String verify(Users user) {
        Authentication authentication=
                authManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(),user.getPassword()));
        if(authentication.isAuthenticated()){
            return "Success";
        }else{
            return "Fail";
        }
    }


//    ##profile section
    public Users getCurrentUser(HttpSession session) {
        Integer userId = (Integer) session.getAttribute("userId");

        if (userId == null) {
            throw new IllegalStateException("User is not logged in. Session does not contain userId.");
        }
        return repo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));
    }

    public void updateName(String newName, HttpSession session) {
        Users user = getCurrentUser(session);
        user.setUsername(newName);
        repo.save(user);
    }

    public void updateEmail(String newEmail, HttpSession session) {
        Users user = getCurrentUser(session);
        user.setEmail(newEmail);
        repo.save(user);
    }

    public boolean changePassword(String oldPass, String newPass, HttpSession session) {
        Users user = getCurrentUser(session);
        if (encoder.matches(oldPass, user.getPassword())) {
            user.setPassword(encoder.encode(newPass));
            repo.save(user);
            return true;
        }
        return false;
    }
}
