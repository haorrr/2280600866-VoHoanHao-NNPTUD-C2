// --- Khởi tạo dữ liệu dùng chung ---
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

const products = [
    new Product(1, "iPhone 15", 15000000, 10, "Điện thoại", true),
    new Product(2, "Logitech Mouse", 250000, 0, "Phụ kiện", true),
    new Product(3, "Samsung S24", 9000000, 5, "Điện tử", true),
    new Product(4, "AirPods Pro", 250000, 15, "Phụ kiện", false),
    new Product(5, "Mechanical Keyboard", 500000, 8, "Phụ kiện", true)
];

// Hàm bổ trợ để hiển thị kết quả lên giao diện
function render(title, data) {
    const display = document.getElementById('console-screen');
    const content = typeof data === 'object' ? JSON.stringify(data, null, 2) : data;
    display.innerHTML = `<span class="text-yellow-400">// ${title}</span>\n${content}`;
}

// --- Các hàm thực thi từng câu ---
function handleCau3() {
    const res = products.map(p => ({ name: p.name, price: p.price }));
    render("Câu 3: Mảng Name & Price", res);
}

function handleCau4() {
    const res = products.filter(p => p.quantity > 0);
    render("Câu 4: Sản phẩm còn hàng", res);
}

function handleCau5() {
    const res = products.some(p => p.price > 30);
    render("Câu 5: Có SP nào giá > 30?", res ? "Kết quả: CÓ" : "Kết quả: KHÔNG");
}

function handleCau6() {
    const res = products.filter(p => p.category === "Accessories").every(p => p.isAvailable);
    render("Câu 6: Tất cả Accessories đang bán?", res ? "Kết quả: ĐÚNG" : "Kết quả: SAI");
}

function handleCau7() {
    const res = products.reduce((total, p) => total + (p.price * p.quantity), 0);
    render("Câu 7: Tổng giá trị kho", res.toLocaleString() + " VND");
}

function handleCau8() {
    let output = "";
    for (const p of products) {
        output += `${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}\n`;
    }
    render("Câu 8: Duyệt For...of", output);
}

function handleCau9() {
    let output = "";
    for (const key in products[0]) {
        output += `${key}: ${products[0][key]}\n`;
    }
    render("Câu 9: Duyệt For...in (SP đầu tiên)", output);
}

function handleCau10() {
    const res = products.filter(p => p.isAvailable && p.quantity > 0).map(p => p.name);
    render("Câu 10: Tên SP đang bán & còn hàng", res);
}

function clearLog() {
    document.getElementById('console-screen').innerHTML = '<span class="text-gray-500">// Chờ lệnh...</span>';
}