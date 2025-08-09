package com.ktc.likelion.service;

import com.ktc.likelion.dto.StudentDto;

import java.util.List;

public interface StudentService {
    List<StudentDto> getAllStudents();
    StudentDto getStudentById(String id);
    StudentDto createStudent(StudentDto studentDto);
    StudentDto updateStudent(String id, StudentDto studentDto);
    void deleteStudent(String id);
}
