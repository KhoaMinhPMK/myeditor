# Pages Directory

## 📖 Cấu trúc

Mỗi page có một folder riêng với đầy đủ `index.html`, `style.css`, và `script.js`.

```
pages/
├── register/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── login/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── your-new-page/
    ├── index.html
    ├── style.css
    └── script.js
```

## ✨ Ưu điểm

1. **Tách biệt code**: Mỗi page có CSS/JS riêng, không conflict
2. **Dễ maintain**: Tìm và sửa code dễ dàng
3. **Performance**: Chỉ load CSS/JS cần thiết cho từng page
4. **Scalable**: Dễ dàng thêm pages mới

## 🎨 Thiết kế có sẵn

### Register Page (`/pages/register/`)
- Thiết kế sang trọng, tinh tế
- Form đăng ký với validation đầy đủ
- Social login (Google, GitHub)
- Password strength meter
- Responsive design
- Hero section với features

### Login Page (`/pages/login/`)
- Thiết kế hiện đại, chuyên nghiệp
- Form đăng nhập đơn giản
- Social login options
- Remember me & forgot password
- Stats và testimonials
- Responsive design

## 🚀 Tạo page mới

1. Tạo folder mới trong `pages/`:
```bash
mkdir pages/your-page-name
```

2. Tạo 3 files bắt buộc:
```bash
touch pages/your-page-name/index.html
touch pages/your-page-name/style.css
touch pages/your-page-name/script.js
```

3. Template cơ bản cho `index.html`:
```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page - AI Web Application</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <!-- Your content here -->
    </div>
    <script src="script.js"></script>
</body>
</html>
```

4. Link từ trang chính:
```html
<a href="pages/your-page-name/">Link Text</a>
```

## 🔗 Navigation

Để link giữa các pages:
- Từ page → home: `../../index.html`
- Từ page → page khác: `../other-page/`
- Từ home → page: `pages/page-name/`

## 💡 Tips

- Copy từ register/login để có base code tốt
- Giữ cùng design system (colors, fonts)
- Sử dụng lại components khi có thể
- Test responsive trên mobile/tablet

## 📦 Shared Resources

Nếu cần share CSS/JS giữa các pages:
1. Tạo file trong `frontend/css/` hoặc `frontend/js/`
2. Link từ page: `../../css/shared.css`

Tuy nhiên, nên giữ mỗi page độc lập để dễ maintain.
