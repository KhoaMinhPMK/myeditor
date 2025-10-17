// Login Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initializeForm();
    initializePasswordToggle();
});

// Form initialization
function initializeForm() {
    const form = document.getElementById('loginForm');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        await handleSubmit();
    });
    
    // Real-time validation
    const inputs = form.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            const formGroup = input.closest('.form-group');
            if (formGroup.classList.contains('error')) {
                validateField(input);
            }
        });
    });
}

// Password toggle
function initializePasswordToggle() {
    const toggleButton = document.querySelector('.toggle-password');
    
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const input = toggleButton.parentElement.querySelector('input');
            const eyeOpen = toggleButton.querySelector('.eye-open');
            const eyeClose = toggleButton.querySelector('.eye-close');
            
            if (input.type === 'password') {
                input.type = 'text';
                eyeOpen.style.display = 'none';
                eyeClose.style.display = 'block';
            } else {
                input.type = 'password';
                eyeOpen.style.display = 'block';
                eyeClose.style.display = 'none';
            }
        });
    }
}

// Validate entire form
function validateForm() {
    const form = document.getElementById('loginForm');
    const inputs = form.querySelectorAll('.form-input');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

// Validate individual field
function validateField(input) {
    const formGroup = input.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    const value = input.value.trim();
    
    // Clear previous error
    formGroup.classList.remove('error');
    errorMessage.textContent = '';
    
    // Required check
    if (value === '') {
        showError(formGroup, errorMessage, 'Trường này không được để trống');
        return false;
    }
    
    // Email validation
    if (input.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showError(formGroup, errorMessage, 'Email không hợp lệ');
            return false;
        }
    }
    
    // Password validation
    if (input.type === 'password') {
        if (value.length < 6) {
            showError(formGroup, errorMessage, 'Mật khẩu quá ngắn');
            return false;
        }
    }
    
    return true;
}

// Show error
function showError(formGroup, errorElement, message) {
    formGroup.classList.add('error');
    errorElement.textContent = message;
}

// Handle form submission
async function handleSubmit() {
    const form = document.getElementById('loginForm');
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnArrow = submitBtn.querySelector('.btn-arrow');
    const btnLoader = submitBtn.querySelector('.btn-loader');
    
    // Disable button and show loader
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnArrow.style.display = 'none';
    btnLoader.style.display = 'block';
    
    // Get form data
    const formData = {
        email: document.getElementById('email').value.trim(),
        password: document.getElementById('password').value,
        remember: document.querySelector('input[name="remember"]').checked
    };
    
    try {
        // TODO: Replace with actual API endpoint
        const API_URL = 'http://localhost:5000/api/auth/login';
        
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        
        const data = await response.json();
        
        if (response.ok && data.success) {
            // Save token if remember is checked
            if (formData.remember && data.token) {
                localStorage.setItem('auth_token', data.token);
            }
            
            showToast('Đăng nhập thành công!', 'success');
            
            // Redirect after 1 second
            setTimeout(() => {
                window.location.href = '../../index.html';
            }, 1000);
        } else {
            throw new Error(data.error || 'Đăng nhập thất bại');
        }
    } catch (error) {
        console.error('Login error:', error);
        showToast(error.message || 'Có lỗi xảy ra. Vui lòng thử lại!', 'error');
        
        // Re-enable button
        submitBtn.disabled = false;
        btnText.style.display = 'block';
        btnArrow.style.display = 'block';
        btnLoader.style.display = 'none';
    }
}

// Toast notification
function showToast(message, type = 'info') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create toast
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <div class="toast-icon">
                ${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}
            </div>
            <p>${message}</p>
        </div>
    `;
    
    // Add styles
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? 'rgba(16, 185, 129, 0.9)' : type === 'error' ? 'rgba(239, 68, 68, 0.9)' : 'rgba(99, 102, 241, 0.9)'};
        color: white;
        border-radius: 0.75rem;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;
    
    const toastContent = toast.querySelector('.toast-content');
    toastContent.style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.75rem;
    `;
    
    const icon = toast.querySelector('.toast-icon');
    icon.style.cssText = `
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.25rem;
    `;
    
    // Add to DOM
    document.body.appendChild(toast);
    
    // Remove after 4 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Add keyframe animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Social login handlers (placeholder)
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const provider = btn.classList.contains('google') ? 'Google' : 'GitHub';
        showToast(`Đăng nhập với ${provider} sẽ được triển khai sớm!`, 'info');
    });
});

// Forgot password handler (placeholder)
const forgotPasswordLink = document.querySelector('.forgot-password');
if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Tính năng quên mật khẩu sẽ được triển khai sớm!', 'info');
    });
}

