package com.ktc.likelion.repository;

import com.ktc.likelion.entity.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface StudentRepository extends MongoRepository<Student, String> {
    List<Student> findByEmail(String email);

}
