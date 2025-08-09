package com.ktc.likelion.service.impl;

import com.ktc.likelion.dto.StudentDto;
import com.ktc.likelion.entity.Student;
import com.ktc.likelion.mapper.StudentMapper;
import com.ktc.likelion.repository.StudentRepository;
import com.ktc.likelion.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {
    private final StudentRepository studentRepository;
    private final StudentMapper studentMapper;

    @Override
    public List<StudentDto> getAllStudents() {
        return studentMapper.toDtoList(studentRepository.findAll());
    }

    @Override
    public StudentDto getStudentById(String id) {
        return studentRepository.findById(id)
                .map(studentMapper::toDto)
                .orElseThrow(() -> new RuntimeException("Student not found"));
    }

    @Override
    @Transactional
    public StudentDto createStudent(StudentDto studentDto) {
        if (!studentRepository.findByEmail(studentDto.getEmail()).isEmpty()) {
            throw new IllegalArgumentException(
                    "Student already exists with email: " + studentDto.getEmail()
            );
        }

        Student newStudent = studentMapper.toEntity(studentDto);
        Student savedStudent = studentRepository.save(newStudent);
        return studentMapper.toDto(savedStudent);
    }

    @Override
    @Transactional
    public StudentDto updateStudent(String id, StudentDto studentDto) {
        return studentRepository.findById(id)
                .map(existing -> {
                    studentMapper.updateEntityFromDto(studentDto, existing);
                    return studentMapper.toDto(studentRepository.save(existing));
                })
                .orElseThrow(() -> new RuntimeException("Student not found"));
    }

    @Override
    @Transactional
    public void deleteStudent(String id) {
        if (!studentRepository.existsById(id)) {
            throw new RuntimeException("Student not found");
        }
        studentRepository.deleteById(id);
    }
}
