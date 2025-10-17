# AI Web Application - Template

Cấu trúc dự án web với frontend (HTML, CSS, JavaScript) và backend (Python) xử lý AI.

## 📁 Cấu trúc thư mục

```
myeditor/
│
├── backend/                    # Backend Python với Flask
│   ├── app.py                 # File chính chạy Flask server
│   ├── models/                # Thư mục chứa các AI models
│   │   └── __init__.py
│   ├── routes/                # Các route/endpoint API
│   │   ├── __init__.py
│   │   ├── ai_routes.py      # Routes xử lý AI
│   │   └── chat_routes.py    # Routes chat
│   ├── services/              # Logic xử lý business
│   │   ├── __init__.py
│   │   ├── ai_service.py     # Service xử lý AI
│   │   └── text_service.py   # Service xử lý text
│   └── utils/                 # Các hàm tiện ích
│       ├── __init__.py
│       └── helpers.py
│
├── frontend/                   # Frontend HTML/CSS/JS
│   ├── index.html             # Trang chính
│   ├── css/                   # Thư mục CSS
│   │   ├── styles.css        # CSS chính
│   │   ├── components.css    # CSS components
│   │   └── responsive.css    # CSS responsive
│   ├── js/                    # Thư mục JavaScript
│   │   ├── main.js           # JS chính
│   │   ├── api.js            # Xử lý API calls
│   │   ├── ui.js             # Xử lý UI/UX
│   │   └── utils.js          # Utilities JS
│   ├── assets/                # Tài nguyên tĩnh
│   │   ├── images/           # Hình ảnh
│   │   └── fonts/            # Fonts
│   └── pages/                 # Các trang khác (nếu có)
│
├── tests/                      # Unit tests
│   ├── test_backend.py
│   └── test_frontend.js
│
├── requirements.txt            # Python dependencies
├── .gitignore                 # Git ignore
└── README.md                  # File này
```

## 🚀 Cài đặt

### Backend (Python)

1. Tạo môi trường ảo:
```bash
python -m venv venv
```

2. Kích hoạt môi trường ảo:
- Windows: `venv\Scripts\activate`
- Linux/Mac: `source venv/bin/activate`

3. Cài đặt dependencies:
```bash
pip install -r requirements.txt
```

4. Chạy server:
```bash
cd backend
python app.py
```

Server sẽ chạy tại `http://localhost:5000`

### Frontend

Mở file `frontend/index.html` trực tiếp trong trình duyệt, hoặc sử dụng Live Server.

## 🔧 Công nghệ sử dụng

### Backend
- **Flask**: Web framework
- **Flask-CORS**: Xử lý CORS
- **Transformers**: Thư viện AI của HuggingFace
- **PyTorch**: Deep learning framework
- **NumPy**: Xử lý số học

### Frontend
- **HTML5**: Structure
- **CSS3**: Styling (với Flexbox/Grid)
- **Vanilla JavaScript**: Logic và tương tác
- **Fetch API**: Gọi API backend

## 📝 API Endpoints

### Health Check
- `GET /api/health` - Kiểm tra trạng thái server

### AI Processing
- `POST /api/ai/generate` - Tạo văn bản từ AI
- `POST /api/ai/analyze` - Phân tích cảm xúc văn bản
- `POST /api/ai/summarize` - Tóm tắt văn bản

### Chat
- `POST /api/chat` - Gửi tin nhắn chat

## 🎨 Tính năng gợi ý

1. **Text Generation**: Tạo văn bản từ prompt
2. **Sentiment Analysis**: Phân tích cảm xúc
3. **Text Summarization**: Tóm tắt văn bản
4. **AI Chat**: Chatbot thông minh
5. **Image Processing**: Xử lý ảnh (mở rộng)

## 📚 Hướng dẫn phát triển

### Backend

1. **Thêm route mới**: Tạo file trong `backend/routes/`
2. **Thêm service**: Tạo file trong `backend/services/`
3. **Load AI model**: Sử dụng `transformers` library trong `services/ai_service.py`

### Frontend

1. **Thêm trang mới**: Tạo HTML trong `frontend/pages/`
2. **Thêm style**: Cập nhật CSS trong `frontend/css/`
3. **Thêm logic**: Cập nhật JS trong `frontend/js/`

## 🔐 Bảo mật

- Thêm authentication nếu cần
- Validate input từ user
- Sử dụng HTTPS trong production
- Không expose API keys trong code

## 📦 Deploy

### Backend
- Heroku
- Railway
- PythonAnywhere
- AWS/GCP/Azure

### Frontend
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## 🤝 Đóng góp

1. Fork dự án
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

MIT License - Tự do sử dụng và chỉnh sửa

## 📞 Liên hệ

- Email: your-email@example.com
- GitHub: @yourusername

---

**Happy Coding! 🎉**

"# myeditor" 
