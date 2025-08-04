// Yêu cầu 1: Tạo một collection tên là products và chèn vào 3 sản phẩm với các  field: name, price, category sử dụng db.products.insertMany() 
db.products.insertMany([
  { name: "Laptop", price: 13000000, category: "Do dien tu" },
  { name: "Dien thoai Samsung", price: 3000000, category: "Do dien tu" },
  { name: "Quan kaki", price: 150000, category: "Quan ao" },
  { name: "Ao gucci", price: 500000, category: "Quan ao" },
  { name: "May pha ca phe", price: 1200000, category: "Do gia dung" },
  { name: "Tu lanh Toshiba", price: 2200000, category: "Do gia dung" }
]);

// Yêu cầu 2: Tạo một collection orders với dữ liệu chứa các trường: orderId, customerName, orderDate, totalAmount. Thêm ít nhất 2 đơn hàng. Sử dụng  insertOne() hoặc insertMany().. 
db.orders.insertMany([
  {
    orderId: "ORD001",
    customerName: "Thanh Trong",
    orderDate: new Date("2025-08-04"),
    totalAmount: 13150000.00
  },
  {
    orderId: "ORD002",
    customerName: "Trong Nguyen",
    orderDate: new Date("2025-08-02"),
    totalAmount: 2200000.00
  }
]);


// Yêu cầu 3: Insert 5 documents vào collection users với các field: name, email, age sử dụng insertMany() 
db.users.insertMany([
  { name: "Trong", email: "trong@example.com", age: 22 },
  { name: "Long", email: "long@example.com", age: 32 },
  { name: "Nam", email: "nam@example.com", age: 19 },
  { name: "Nhan", email: "nhan@example.com", age: 45 },
  { name: "Khoa", email: "khoa@example.com", age: 28 },
  { name: "Minh", email: "minh@example.com", age: 37 }
]);


// Yêu cầu 4: Tìm tất cả các user có độ tuổi lớn hơn 25 và chỉ hiển thị name, email với find() và projection. 
db.users.find(
  { age: { $gt: 25 } },
  { _id: 0, name: 1, email: 1 }
);


// Yêu cầu 5: Cập nhật tuổi của user tên “Alice” thành 31. 
db.users.insertOne({ name: "Alice", email: "alice@example.com", age: 22 });
db.users.updateOne(
  { name: "Alice" },
  { $set: { age: 31 } }
);


// Yêu cầu 6: Xóa tất cả user có tuổi nhỏ hơn 20. 
db.users.deleteMany({ age: { $lt: 20 } });

// Yêu cầu 7: Tìm 3 người lớn tuổi nhất trong bảng users. 
db.users.find()
		.sort({ age: -1 })
		.limit(3);


// Yêu cầu 8: Tìm 3 user có tuổi cao nhất và hiển thị name, age sử dụng sort() + limit() + projection. 
db.users.find({}, { _id: 0, name: 1, age: 1 })
		.sort({ age: -1 }).limit(3);

// Yêu cầu 9: Thực hiện truy vấn aggregation để đếm số lượng user theo từng độ tuổi với $group. 
db.users.aggregate([
  {
    $group: {
      _id: "$age",
      count: { $sum: 1 }
    }
  }
]);


// Yêu cầu 10: Tính tuổi trung bình của user có tuổi từ 25 trở lên bằng aggregation pipeline (kết hợp $match và $group)
db.users.aggregate([
  { $match: { age: { $gte: 25 } } },
  {
    $group: {
      _id: null,
      averageAge: { $avg: "$age" }
    }
  }
]);
