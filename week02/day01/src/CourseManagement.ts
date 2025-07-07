import Course from "./Course";
class CourseManagement {
  private courses: Course[] = [];

  addCourse(course: Course): void {
    this.courses.push(course);
    console.log(`Đã tạo khóa học thành công`);
  }

  showCourses(): void {
    if (this.courses.length === 0) {
      console.log("Không có khóa học nào");
      return;
    }
    console.log("Stt \t Id \t Tên khóa học \t Tên giảng viên \t Thời lượng");
    this.courses.forEach((c, i) => {
      console.log(
        `${i + 1} \t ${c.id} \t ${c.name} \t ${c.teacher} \t ${c.duration}`
      );
    });
  }

  updateCourse(
    id: number,
    name?: string,
    teacher?: string,
    duration?: number
  ): void {
    const course = this.courses.find((c) => c.id === id);
    if (!course) {
      console.log(`Không tìm thấy khóa học có id = ${id}`);
      return;
    }

    const updated = { name, teacher, duration };

    Object.assign(course, {
      ...course,
      ...updated, // ghi đè nếu có dữ liệu mới
    });

    console.log("Khóa học đã được cập nhật thành công:");
  }

  deleteCourse(id: number): void {
    const originalLength = this.courses.length;
    this.courses = this.courses.filter((c) => c.id !== id); // lọc lại courses bỏ đi course có id = id

    if (this.courses.length < originalLength) {
      console.log("Đã xóa khóa học.");
    } else {
      console.log(`Không tìm thấy khóa học có id = ${id}`);
    }
  }
}
export default CourseManagement;
