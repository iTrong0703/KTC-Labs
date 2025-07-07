"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Course = /** @class */ (function () {
    function Course(name, teacher, duration) {
        if (name === void 0) { name = "Unknown"; }
        if (teacher === void 0) { teacher = "Unknown"; }
        if (duration === void 0) { duration = 0; }
        this.id = Course.nextId++;
        this.name = name;
        this.teacher = teacher;
        this.duration = duration;
    }
    Course.prototype.getId = function () {
        return this.id;
    };
    Course.prototype.getName = function () {
        return this.name;
    };
    Course.prototype.getTeacher = function () {
        return this.teacher;
    };
    Course.prototype.getDuration = function () {
        return this.duration;
    };
    //   setId(id: number) {
    //     this.id = id;
    //   }
    Course.prototype.setName = function (name) {
        this.name = name;
    };
    Course.prototype.setTeacher = function (teacher) {
        this.teacher = teacher;
    };
    Course.prototype.setDuration = function (duration) {
        this.duration = duration;
    };
    Course.nextId = 0;
    return Course;
}());
exports.default = Course;
