package com.collegeproject.hospitalfinderproj.service;

import com.collegeproject.hospitalfinderproj.model.UserPrinciple;
import com.collegeproject.hospitalfinderproj.model.Users;
import com.collegeproject.hospitalfinderproj.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailService implements UserDetailsService {
    @Autowired
    private UserRepo repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user=repo.findByEmail(username);
        if(user == null){
            System.out.println("User Not Found !!");
            throw new UsernameNotFoundException("user not found !!");
        }
        return new UserPrinciple(user);
    }
}
