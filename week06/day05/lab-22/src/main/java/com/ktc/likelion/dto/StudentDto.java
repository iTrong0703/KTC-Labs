package com.ktc.likelion.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StudentDto {
    private String name;
    private String phone;
    private String email;
    private String address;
}
