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

            switch (choice) {
                case "1":
                    hienThiDSachLLac();
                    pause(sc);
                    break;
                case "2":
                    timKiemLienLac(sc);
                    pause(sc);
                    break;
                case "3":
                    timKiemLienLacTheoPhone(sc);
                    pause(sc);
                    break;
                case "4":
                    themLienLac(sc);
                    pause(sc);
                    break;
                case "5":
                    suaLienLac(sc);
                    pause(sc);
                    break;
                case "6":
                    xoaLienLac(sc);
                    pause(sc);
                    break;
                default:
                    System.out.println("Cảm ơn! Bye");
                    sc.close();
                    return;
            }
        }
    }

    public static void hienThiMenu() {
        System.out.println("\n===== Quản lý danh bạ =====");
        System.out.println("1. Hiển thị danh sách liên lạc");
        System.out.println("2. Tìm kiếm liên lạc theo mã liên lạc (ID)");
        System.out.println("3. Tìm kiếm liên lạc theo số liên lạc (Phone number)");
        System.out.println("4. Thêm mới liên lạc ");
        System.out.println("5. Sửa thông tin liên lạc");
        System.out.println("6. Xóa thông tin liên lạc ");
        System.out.print("Mời bạn chọn chức năng [1->5] hoặc nhấn phím khác để thoát: ");
    }

    public static void pause(Scanner sc) {
        System.out.print("Nhấn Enter để tiếp tục...");
        sc.nextLine();
    }


    public void hienThiDSachLLac() {
        if (contacts.isEmpty()) {
            System.out.println("Danh sách liên lạc trống.");
        } else {
            System.out.println("Danh sách liên lạc:");
            for (Contact c : contacts.values()) {
                System.out.println(c);
            }
        }

    }

    public void timKiemLienLac(Scanner sc) {
        System.out.print("Nhập ID liên lạc cần tìm: ");
        String id = sc.nextLine();
        Contact c = contacts.get(id);
        if (c != null) {
            System.out.println("Thông tin liên lạc: " + c);
        } else {
            System.out.println("Không tìm thấy liên lạc với ID: " + id);
        }
    }

    public void timKiemLienLacTheoPhone(Scanner sc) {
        System.out.print("Nhập số điện thoại cần tìm: ");
        String phone = sc.nextLine();
        boolean flag = false;
        for (Contact c : contacts.values()) {
            if (c.getPhone().equals(phone)) {
                System.out.println("Thông tin liên lạc: " + c);
                flag = true;
                break;
            }
        }
        if (!flag) {
            System.out.println("Không tìm thấy số điện thoại: " + phone);
        }
    }

    public void themLienLac(Scanner sc) {
        String id;
        while (true) {
            System.out.print("Nhập ID: ");
            id = sc.nextLine();
            if (contacts.containsKey(id)) {
                System.out.println("Liên lạc với ID này đã tồn tại! Vui lòng nhập ID khác: ");
            } else {
                break;
            }
        }
        Contact newContact = themContact(id, sc);
        contacts.put(id, newContact);
        System.out.println("Thêm liên lạc thành công.");
    }

    public void xoaLienLac(Scanner sc) {
        System.out.print("Nhập ID liên lạc cần xóa: ");
        String id = sc.nextLine();
        if (contacts.remove(id) != null) {
            System.out.println("Xóa liên lạc thành công.");
        } else {
            System.out.println("Không tìm thấy ID liên lạc để xóa.");
        }
    }

    public void suaLienLac(Scanner sc) {
        System.out.print("Nhập ID liên lạc cần sửa: ");
        String id = sc.nextLine();
        if (!contacts.containsKey(id)) {
            System.out.println("Không tìm thấy liên lạc để sửa.");
            return;
        }
        Contact updated = themContact(id, sc);
        contacts.put(id, updated);
        System.out.println("Cập nhật liên lạc thành công.");
    }

    private boolean isPhoneExists(String phone) {
        for (Contact c : contacts.values()) {
            if (c.getPhone().equals(phone)) {
                return true;
            }
        }
        return false;
    }


    public Contact themContact(String id, Scanner sc) {
        System.out.print("Nhập tên: ");
        String name = sc.nextLine();
        String phone;
        while (true) {
            System.out.print("Nhập số điện thoại: ");
            phone = sc.nextLine();

            if (isPhoneExists(phone)) {
                System.out.println("Số điện thoại này đã tồn tại! Vui lòng nhập số khác: ");
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
