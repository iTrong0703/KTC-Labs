import Course from "./Course";
import CourseManagement from "./CourseManagement";
import * as readline from "readline";

// npm i --save-dev @types/node

// đọc input bàn phím
function ask(question: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) =>
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    })
  );
}

async function main() {
  const manager = new CourseManagement();
  let running = true;
  while (running) {
    console.log("===============Menu================");
    console.log("1. Tạo khóa học mới");
    console.log("2. Hiển thị danh sách khóa học");
    console.log("3. Cập nhật khóa học dựa vào Id");
    console.log("4. Xóa khóa học dựa vào Id");
    console.log("5. Thoát");
    console.log("=================================");
    const choice = await ask("Lựa chọn của bạn: ");

    // gọi logic
    switch (choice) {
      case "1": {
        const nameInput = await ask("Tên khóa học: ");
        const name = nameInput === "" ? undefined : nameInput;
        const teacherInput = await ask("Giảng viên: ");
        const teacher = teacherInput === "" ? undefined : nameInput;
        const durationInput = await ask("Thời lượng: ");
        const duration =
          durationInput === "" ? undefined : Number(durationInput);

        const course = new Course(name, teacher, Number(duration));

        manager.addCourse(course);
        break;
      }

      case "2":
        manager.showCourses();
        break;

      case "3": {
        const idStr = await ask("Nhập ID cần cập nhật: ");
        const name = await ask("Tên mới (bỏ trống nếu giữ nguyên): ");
        const teacher = await ask("Giảng viên mới (bỏ trống nếu giữ nguyên): ");
        const durationStr = await ask(
          "Thời lượng mới(bỏ trống nếu giữ nguyên): "
        );
        manager.updateCourse(
          Number(idStr),
          name || undefined,
          teacher || undefined,
          Number(durationStr) || undefined
        );
        break;
      }

      case "4": {
        const idStr = await ask("Nhập ID cần xóa: ");
        manager.deleteCourse(Number(idStr));
        break;
      }

      case "5":
        running = false;
        console.log("Thoát chương trình...");
        break;

      default:
        console.log("Lựa chọn không hợp lệ.");
    }
  }
}

main();
// tsc --outDir public .\src\index.ts
