public record Contact(String id, String name, String phone, String email, String address) {
    @Override
    public String toString() {
        return """
            Contact{
            name='%s',
            email='%s',
            phone='%s',
            address='%s'}"""
                .formatted(name, email, phone, address);
    }
}
