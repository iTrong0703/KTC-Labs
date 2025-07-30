import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class ContactManager {
    Map<String, Contact> contacts = new HashMap<>();
    Scanner sc = new Scanner(System.in);

    public void run() {
        while (true) {
            hienThiMenu();
            String choice = sc.nextLine();

            // k dùng yield vì switch k phải gán kết quả cho một biến.
            switch (choice) {
                case "1" -> {
                    hienThiDanhSachLienLac();
                    pause();
                }
                case "2" -> {
                    timKiemLienLacTheoID();
                    pause();
                }
                case "3" -> {
                    timKiemLienLacTheoPhone();
                    pause();
                }
                case "4" -> {
                    themLienLac();
                    pause();
                }
                case "5" -> {
                    suaLienLac();
                    pause();
                }
                case "6" -> {
                    xoaLienLac();
                    pause();
                }
                default -> {
                    System.out.println("Cảm ơn! Bye");
                    sc.close();
                    return;
                }
            }
        }
    }

    private void hienThiMenu() {
        String menu = """
        \n===== Quản lý danh bạ =====
        1. Hiển thị danh sách liên lạc
        2. Tìm kiếm liên lạc theo ID
        3. Tìm kiếm liên lạc theo số điện thoại
        4. Thêm mới liên lạc
        5. Sửa thông tin liên lạc
        6. Xóa liên lạc
        Chọn chức năng [1-6], nhấn phím khác để thoát: """;
        System.out.print(menu);
    }

    private void pause() {
        System.out.print("Nhấn Enter để tiếp tục...");
        sc.nextLine();
    }

    private void hienThiDanhSachLienLac() {
        if (contacts.isEmpty()) {
            System.out.println("Danh sách liên lạc trống.");
        } else {
            System.out.println("Danh sách liên lạc:");
            // contacts.values().forEach(contact -> System.out.println(contact));
            contacts.values().forEach(System.out::println);
        }
    }

    private void timKiemLienLacTheoID() {
        System.out.print("Nhập ID liên lạc: ");
        String id = sc.nextLine();
        Contact contact = contacts.get(id);
        if (contact != null) {
            System.out.println("Thông tin liên lạc: " + contact);
        } else {
            System.out.println("Không tìm thấy liên lạc với ID: " + id);
        }
    }

    private void timKiemLienLacTheoPhone() {
        System.out.print("Nhập số điện thoại: ");
        String phone = sc.nextLine();
        contacts.values().stream()
                .filter(c -> c.phone().equals(phone))
                .findFirst()
                .ifPresentOrElse(
                        c -> System.out.println("Thông tin liên lạc: " + c), // xử lý khi có gtri
                        () -> System.out.println("Không tìm thấy số điện thoại: " + phone) // xử lý khi ko có gtri
                );
    }

    private void themLienLac() {
        String id;
        while (true) {
            System.out.print("Nhập ID: ");
            id = sc.nextLine();
            if (contacts.containsKey(id)) {
                System.out.println("ID đã tồn tại! Vui lòng nhập ID khác.");
            } else {
                break;
            }
        }

        Contact newContact = nhapThongTinLienLac(id);
        contacts.put(id, newContact);
        System.out.println("Thêm liên lạc thành công.");
    }

    private void suaLienLac() {
        System.out.print("Nhập ID liên lạc cần sửa: ");
        String id = sc.nextLine();
        if (!contacts.containsKey(id)) {
            System.out.println("Không tìm thấy liên lạc.");
            return;
        }

        Contact updatedContact = nhapThongTinLienLac(id);
        contacts.put(id, updatedContact);
        System.out.println("Cập nhật liên lạc thành công.");
    }

    private void xoaLienLac() {
        System.out.print("Nhập ID liên lạc cần xóa: ");
        String id = sc.nextLine();
        if (contacts.remove(id) != null) {
            System.out.println("Xóa liên lạc thành công.");
        } else {
            System.out.println("Không tìm thấy liên lạc để xóa.");
        }
    }

    private boolean isPhoneExists(String phone) {
        return contacts.values().stream()
                .anyMatch(c -> c.phone().equals(phone));
    }

    private Contact nhapThongTinLienLac(String id) {
        System.out.print("Nhập tên: ");
        String name = sc.nextLine();

        String phone;
        while (true) {
            System.out.print("Nhập số điện thoại: ");
            phone = sc.nextLine();
            // đk 2 để khi update nếu nhập lại số của mình thì k bị báo lỗi
            if (isPhoneExists(phone) && contacts.values().stream().noneMatch(c -> c.id().equals(id))) { // noneMatch return true nếu k có ptu nào thỏa dk
                System.out.println("Số điện thoại đã tồn tại! Vui lòng nhập số khác.");
            } else {
                break;
            }
        }

        System.out.print("Nhập email: ");
        String email = sc.nextLine();

        System.out.print("Nhập địa chỉ: ");
        String address = sc.nextLine();

        return new Contact(id, name, phone, email, address);
    }
}