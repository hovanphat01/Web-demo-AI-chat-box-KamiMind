# 🧠 KamiMind — Web Dashboard AI Chatbox Hỏi Đáp Học Phần Thực Tập (React Version)

> **Đề tài:** Triển khai hệ thống hỏi đáp về học phần thực tập trên nền tảng KamiMind

---

## 📌 Giới thiệu

Ứng dụng được xây dựng trên nền tảng **React**, đóng vai trò là giao diện Dashboard trung tâm hỗ trợ sinh viên tra cứu thông tin về học phần thực tập. 

Hệ thống được thiết kế tối ưu trải nghiệm người dùng với hai khu vực chính:
1. **Thanh Sidebar cố định (Cheat Sheet / FAQ Menu):** Đóng vai trò như một cẩm nang hướng dẫn trực quan, phân loại sẵn các câu hỏi thường gặp theo 3 giai đoạn thực tập để sinh viên dễ dàng theo dõi, tham chiếu và tự gõ hoặc copy-paste vào ô chat.
2. **Khu vực tích hợp AI Agent:** Nhúng trực tiếp Trợ lý AI được cấu hình trên nền tảng KamiMind thông qua thẻ `iframe`, đặt trên nền xám đá (`#f1f5f9`) dịu mắt giúp giảm độ chói và tăng tính thẩm mỹ hiện đại.

Các giai đoạn thực tập được phân loại trong Sidebar bao gồm:
- 📋 **Trước thực tập** — Điều kiện, chuẩn bị hồ sơ, thời gian, cách phân công GVHD...
- ⚙️ **Trong thực tập** — Cách ghi nhật ký, thủ tục nghỉ phép, đổi nơi thực tập, trang phục...
- 📝 **Sau thực tập** — Cấu trúc báo cáo, hạn nộp, cách tính điểm, quy trình bảo vệ...

---

## 🚀 Cách chạy Web Demo (React Project)

> Dự án hiện tại đã được nâng cấp lên cấu trúc component của React. Bạn cần cài đặt NodeJS trên máy trước khi chạy.

### **Bước 1:** Tải source code về máy và di chuyển vào thư mục dự án
```bash
git clone 
cd Web-demo-AI-chat-box-KamiMind
```

### **Bước 2:** Cài đặt các gói thư viện phụ thuộc (Dependencies)
```bash
npm install
```

### **Bước 3:** Khởi chạy ứng dụng ở môi trường Development
```bash
npm run dev
```
Hệ thống sẽ cung cấp một liên kết nội bộ (thường là http://localhost:5173). Hãy click vào link đó để mở giao diện trên trình duyệt.

## 📁 Cấu trúc thư mục dự án (React)
```
Web-demo-AI-chat-box-KamiMind/
│
├── 📁 src/
│   ├── 📁 components/
│   │   └── 📄 Sidebar.jsx        # Component Sidebar chứa danh sách câu hỏi FAQ tĩnh
│   │
│   ├── 📄 App.jsx                # Component chính quản lý Layout và nhúng Iframe KamiMind
│   ├── 📄 index.css              # File định hình giao diện (Slate Theme, bo góc Iframe, ẩn hover click)
│   └── 📄 main.jsx               # File khởi tạo React App
│
├── 📄 index.html                 # File HTML gốc của ứng dụng[cite: 1]
├── 📄 package.json               # Cấu hình dự án và quản lý thư viện
└── 📄 nhat-ky-de-tai.html        # Nhật ký làm đề tài (11/7 – 29/7)[cite: 1]
```


## 🛠️ Công nghệ sử dụng

| Thành phần | Công nghệ |
| :--- | :--- |
| **Framework chính** | React (JSX) |
| **Giao diện & Styling** | CSS3 (Modern Slate Theme / Giảm độ chói nền trắng) |
| **Cơ chế AI Chatbot** | Nhúng mã nguồn mở `iframe` trực tiếp từ nền tảng điện toán đám mây **KamiMind** |
| **Quản lý trạng thái** | React Hooks ( `useState` , `useEffect` ) quản lý đóng/mở Collapse danh mục |
| **Thiết kế Layout** | Split-Screen (Sidebar cố định bên trái + Chat Area bên phải) |