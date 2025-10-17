# Cấu trúc thư mục chi tiết

```
myeditor/
│
├── 📂 backend/                         # Backend Python
│   ├── 📄 app.py                      # File chính Flask server
│   │
│   ├── 📂 models/                     # AI Models
│   │   └── 📄 __init__.py
│   │
│   ├── 📂 routes/                     # API Routes/Endpoints
│   │   ├── 📄 __init__.py
│   │   ├── 📄 ai_routes.py           # Routes cho AI (generate, analyze, summarize)
│   │   └── 📄 chat_routes.py         # Routes cho chat
│   │
│   ├── 📂 services/                   # Business Logic
│   │   ├── 📄 __init__.py
│   │   ├── 📄 ai_service.py          # Xử lý AI (load models, inference)
│   │   └── 📄 text_service.py        # Xử lý text (validate, clean, format)
│   │
│   └── 📂 utils/                      # Utilities
│       ├── 📄 __init__.py
│       └── 📄 helpers.py              # Helper functions
│
├── 📂 frontend/                        # Frontend
│   ├── 📄 index.html                  # Trang chính
│   │
│   ├── 📂 css/                        # Stylesheets
│   │   ├── 📄 styles.css             # CSS chính
│   │   ├── 📄 components.css         # CSS components (button, card, etc.)
│   │   └── 📄 responsive.css         # CSS responsive (mobile, tablet)
│   │
│   ├── 📂 js/                         # JavaScript
│   │   ├── 📄 main.js                # JS chính (initialization, event handlers)
│   │   ├── 📄 api.js                 # API calls (fetch backend)
│   │   ├── 📄 ui.js                  # UI handlers (show/hide, render)
│   │   └── 📄 utils.js               # Utilities (validate, format, etc.)
│   │
│   ├── 📂 assets/                     # Tài nguyên tĩnh
│   │   ├── 📂 images/                # Hình ảnh
│   │   └── 📂 fonts/                 # Fonts (nếu dùng custom fonts)
│   │
│   └── 📂 pages/                      # Các trang khác
│       ├── 📂 register/              # Trang đăng ký
│       │   ├── index.html           # HTML
│       │   ├── style.css            # CSS riêng
│       │   └── script.js            # JS riêng
│       └── 📂 login/                 # Trang đăng nhập
│           ├── index.html           # HTML
│           ├── style.css            # CSS riêng
│           └── script.js            # JS riêng
│
├── 📂 tests/                          # Tests
│   ├── 📄 test_backend.py            # Test backend (unittest/pytest)
│   └── 📄 test_frontend.js           # Test frontend (Jest/Mocha)
│
├── 📄 requirements.txt                # Python dependencies
├── 📄 .gitignore                     # Git ignore file
├── 📄 README.md                      # Documentation chính
└── 📄 STRUCTURE.md                   # File này
```

## 📝 Mô tả chi tiết các file

### Backend

#### `app.py`
- File chính để chạy Flask server
- Import và register các routes
- Cấu hình CORS
- Load environment variables
- Run server

#### `routes/ai_routes.py`
- `/api/ai/generate` - Tạo văn bản từ prompt
- `/api/ai/analyze` - Phân tích cảm xúc
- `/api/ai/summarize` - Tóm tắt văn bản

#### `routes/chat_routes.py`
- `/api/chat` - Gửi và nhận tin nhắn chat
- `/api/chat/history` - Lấy lịch sử chat (optional)

#### `services/ai_service.py`
- Load AI models (GPT, BERT, etc.)
- Text generation
- Sentiment analysis
- Summarization
- Model management

#### `services/text_service.py`
- Validate input text
- Clean và preprocess text
- Format output
- Handle text errors

### Frontend

#### `index.html`
- Structure HTML
- Import CSS và JS files
- Các sections: hero, generate, analyze, chat
- Navigation và footer

#### `pages/` - Cấu trúc theo folder
Mỗi page có folder riêng với đầy đủ `index.html`, `style.css`, `script.js`

**Ví dụ: `pages/register/`**
- `index.html` - Structure trang đăng ký
- `style.css` - Styles riêng cho trang này
- `script.js` - Logic và validation riêng

**Ví dụ: `pages/login/`**
- `index.html` - Structure trang đăng nhập
- `style.css` - Styles riêng cho trang này
- `script.js` - Logic authentication riêng

**Ưu điểm cấu trúc này:**
- Code tách biệt, dễ maintain
- Không conflict giữa các trang
- Dễ scale khi thêm pages mới
- Performance tốt hơn (chỉ load CSS/JS cần thiết)

#### `css/styles.css`
- Reset CSS
- Variables (colors, fonts)
- Base styles (body, typography)
- Layout (navbar, main, footer)

#### `css/components.css`
- Button styles
- Card styles
- Form styles
- Modal styles
- Toast notifications

#### `css/responsive.css`
- Tablet breakpoint (1024px)
- Mobile breakpoint (768px)
- Small mobile (480px)

#### `js/main.js`
- DOM initialization
- Event listeners setup
- Navigation handling
- Main app logic

#### `js/api.js`
- API configuration
- Fetch wrappers
- API calls (generate, analyze, chat, etc.)
- Error handling

#### `js/ui.js`
- Show/hide loading
- Toast notifications
- Render chat messages
- Update UI elements
- Display results

#### `js/utils.js`
- Validation functions
- Format functions
- Debounce/throttle
- LocalStorage helpers
- Sanitize HTML

## 🔄 Flow hoạt động

1. **User tương tác** → Frontend (HTML/CSS/JS)
2. **Frontend** gọi API → `js/api.js` → Backend
3. **Backend** nhận request → `routes/` → `services/`
4. **Services** xử lý logic → Load AI model → Return result
5. **Backend** trả response → Frontend
6. **Frontend** render kết quả → `js/ui.js` → Display to user

## 🎯 Bắt đầu code

### 1. Backend trước
```bash
# Cài dependencies
pip install -r requirements.txt

# Code theo thứ tự:
1. backend/utils/helpers.py          # Utilities trước
2. backend/services/text_service.py  # Text processing
3. backend/services/ai_service.py    # AI logic
4. backend/routes/auth_routes.py     # Authentication routes (đã có mẫu)
5. backend/routes/ai_routes.py       # API routes
6. backend/app.py                    # Main app (đã có mẫu)
```

### 2. Frontend sau
```bash
# Code theo thứ tự:
1. frontend/css/styles.css           # Base styles
2. frontend/css/components.css       # Components
3. frontend/index.html               # Structure
4. frontend/js/utils.js              # Utilities
5. frontend/js/api.js                # API calls
6. frontend/js/ui.js                 # UI handlers
7. frontend/js/main.js               # Main logic
8. frontend/css/responsive.css       # Responsive cuối
```

### 3. Tạo thêm pages (theo cấu trúc mới)
```bash
# Mỗi page một folder:
frontend/pages/
├── your-page-name/
│   ├── index.html      # HTML riêng
│   ├── style.css       # CSS riêng
│   └── script.js       # JS riêng

# Đã có sẵn mẫu:
- pages/register/       # Trang đăng ký (thiết kế sang trọng)
- pages/login/          # Trang đăng nhập (thiết kế hiện đại)
```

## 💡 Tips

- Luôn test backend trước khi làm frontend
- Dùng Postman/Thunder Client để test API
- Console.log trong JS để debug
- Dùng browser DevTools Network tab để check API calls
- Commit code thường xuyên với Git

---

**Chúc bạn code vui vẻ! 🚀**

noteId: "c6c91880ab7011f09b284b6898c5b1f1"
tags: []

---

