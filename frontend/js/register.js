(() => {
  const form = document.getElementById('register-form');
  const message = document.getElementById('message');
  const submitBtn = document.getElementById('submit');

  const API = (typeof window.API_BASE_URL === 'string' && window.API_BASE_URL)
    ? window.API_BASE_URL
    : 'http://localhost:5000/api';

  function show(msg, ok = true) {
    message.textContent = msg;
    message.className = ok ? 'note success' : 'note error';
  }

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    message.textContent = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm').value;

    if (!name) return show('Vui lòng nhập họ tên', false);
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return show('Email không hợp lệ', false);
    if (password.length < 6) return show('Mật khẩu phải từ 6 ký tự', false);
    if (password !== confirm) return show('Mật khẩu xác nhận không khớp', false);

    submitBtn.disabled = true;
    submitBtn.textContent = 'Đang xử lý…';
    try {
      const res = await fetch(`${API}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.success === false) {
        const msg = data?.error || `Đăng ký thất bại (mã ${res.status})`;
        return show(msg, false);
      }
      show('Đăng ký thành công! Bạn có thể quay lại trang chủ.', true);
      form.reset();
    } catch (err) {
      show('Không thể kết nối máy chủ. Vui lòng thử lại.', false);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Đăng ký';
    }
  });
})();

