import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    static double tienDien = 0;
    static double tienTaxi = 0;
    static double luongSauThue = 0;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while(true){
            hienThiMenu();
            String choice = sc.nextLine();

            switch (choice){
                case "1":
                    tienDien = tinhTienDien(sc);
                    pause(sc);
                    break;
                case "2":
                    tienTaxi = tinhTienTaxi(sc);
                    pause(sc);
                    break;
                case "3":
                    luongSauThue = tinhLuongSauThue(sc);
                    pause(sc);
                    break;
                case "4":
                    tinhThuNhapConLai();
                    pause(sc);
                    break;
                default:
                    System.out.println("Bye");
                    sc.close();
                    return;
            }
        }
    }
    public static void hienThiMenu() {
        System.out.println("\n===== Quản lý chi tiêu cá nhân =====");
        System.out.println("1. Tính tiền điện cuối tháng");
        System.out.println("2. Tính tiền taxi cuối tháng (giả sử: đi 1 lần/tháng)");
        System.out.println("3. Tính tiền lương cuối tháng (giả sử: thuế = 15%)");
        System.out.println("4. Tính tổng thu nhập sau khi chi tiêu cuối tháng");
        System.out.print("Mời bạn chọn chức năng [1->4] hoặc nhấn phím khác để thoát: ");
    }

    public static double tinhTienDien(Scanner sc) {
        System.out.print("Nhập số điện tiêu thụ (kWh): ");
        double soDien = Double.parseDouble(sc.nextLine());
        double tien = soDien * 3000; // 3k / 1 kí
        System.out.println("=> Tiền điện cuối tháng: " + tien + " VND");
        return tien;
    }

    public static double tinhTienTaxi(Scanner sc) {
        System.out.print("Nhập số km đi taxi: ");
        double soKm = Double.parseDouble(sc.nextLine());
        double tien = soKm * 14000; // 14k / 1 km
        System.out.println("=> Tiền taxi cuối tháng: " + tien + " VND");
        return tien;
    }

    public static double tinhLuongSauThue(Scanner sc) {
        System.out.print("Nhập tổng lương trước thuế: ");
        double luongTruocThue = Double.parseDouble(sc.nextLine());
        double luong = luongTruocThue * 0.85; // trừ 15% thuế
        System.out.println("=> Lương sau thuế: " + luong + " VND");
        return luong;
    }

    public static void tinhThuNhapConLai() {
        double tongChiTieu = tienDien + tienTaxi;
        double thuNhapConLai = luongSauThue - tongChiTieu;
        System.out.println("=> Tổng chi tiêu: " + tongChiTieu + " VND");
        System.out.println("=> Thu nhập còn lại sau chi tiêu: " + String.format("%,d", thuNhapConLai) + " VND");

    }
    public static void pause(Scanner sc) {
        System.out.print("Nhấn Enter để tiếp tục...");
        sc.nextLine();
    }
}