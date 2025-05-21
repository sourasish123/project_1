package com.collegeproject.hospitalfinderproj.repo;
import com.collegeproject.hospitalfinderproj.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<Users,Integer> {
    Users findByEmail(String email);
    long count();
}
