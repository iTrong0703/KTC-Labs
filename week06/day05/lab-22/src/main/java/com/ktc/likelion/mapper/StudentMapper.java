package com.ktc.likelion.mapper;

import com.ktc.likelion.dto.StudentDto;
import com.ktc.likelion.entity.Student;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface StudentMapper {
    StudentDto toDto(Student student);

    Student toEntity(StudentDto dto);

    List<StudentDto> toDtoList(List<Student> students);

    void updateEntityFromDto(StudentDto dto, @MappingTarget Student entity);
}
