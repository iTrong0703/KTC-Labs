class Course {
  id: number;
  name: string;
  teacher: string;
  duration: number;
  static nextId = 0;

  constructor(
    name: string = "Unknown",
    teacher: string = "Unknown",
    duration: number = 0
  ) {
    this.id = Course.nextId++;
    this.name = name;
    this.teacher = teacher;
    this.duration = duration;
  }
  getId(): number {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  getTeacher(): string {
    return this.teacher;
  }
  getDuration(): number {
    return this.duration;
  }
  //   setId(id: number) {
  //     this.id = id;
  //   }
  setName(name: string) {
    this.name = name;
  }
  setTeacher(teacher: string) {
    this.teacher = teacher;
  }
  setDuration(duration: number) {
    this.duration = duration;
  }
}
export default Course;
