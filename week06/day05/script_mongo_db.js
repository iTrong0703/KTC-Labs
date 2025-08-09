use lab_22

db.student.insertMany([
  {
    name: "Nguyen Van A",
    phone: "0123456789",
    email: "vana@example.com",
    address: "Hanoi, Vietnam"
  },
  {
    name: "Tran Thi B",
    phone: "0987654321",
    email: "thib@example.com",
    address: "Ho Chi Minh City, Vietnam"
  },
  {
    name: "Le Van C",
    phone: "0912345678",
    email: "vanc@example.com",
    address: "Da Nang, Vietnam"
  }
])