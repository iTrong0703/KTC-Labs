"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var CourseManagement = /** @class */ (function () {
    function CourseManagement() {
        this.courses = [];
    }
    CourseManagement.prototype.addCourse = function (course) {
        this.courses.push(course);
        console.log("\u0110\u00E3 t\u1EA1o kh\u00F3a h\u1ECDc th\u00E0nh c\u00F4ng");
    };
    CourseManagement.prototype.showCourses = function () {
        if (this.courses.length === 0) {
            console.log("Không có khóa học nào");
            return;
        }
        console.log("Stt \t Id \t Tên khóa học \t Tên giảng viên \t Thời lượng");
        this.courses.forEach(function (c, i) {
            console.log("".concat(i + 1, " \t ").concat(c.id, " \t ").concat(c.name, " \t ").concat(c.teacher, " \t ").concat(c.duration));
        });
    };
    CourseManagement.prototype.updateCourse = function (id, name, teacher, duration) {
        var course = this.courses.find(function (c) { return c.id === id; });
        if (!course) {
            console.log("Kh\u00F4ng t\u00ECm th\u1EA5y kh\u00F3a h\u1ECDc c\u00F3 id = ".concat(id));
            return;
        }
        var updated = { name: name, teacher: teacher, duration: duration };
        Object.assign(course, __assign(__assign({}, course), updated));
        console.log("Khóa học đã được cập nhật thành công:");
    };
    CourseManagement.prototype.deleteCourse = function (id) {
        var originalLength = this.courses.length;
        this.courses = this.courses.filter(function (c) { return c.id !== id; }); // lọc lại courses bỏ đi course có id = id
        if (this.courses.length < originalLength) {
            console.log("Đã xóa khóa học.");
        }
        else {
            console.log("Kh\u00F4ng t\u00ECm th\u1EA5y kh\u00F3a h\u1ECDc c\u00F3 id = ".concat(id));
        }
    };
    return CourseManagement;
}());
exports.default = CourseManagement;
