// Register Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initializeForm();
    initializePasswordToggle();
    initializePasswordStrength();
});

// Form initialization
function initializeForm() {
    const form = document.getElementById('registerForm');
    
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
    const toggleButtons = document.querySelectorAll('.toggle-password');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const input = button.parentElement.querySelector('input');
            const eyeOpen = button.querySelector('.eye-open');
            const eyeClose = button.querySelector('.eye-close');
            
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
    });
}

// Password strength meter
function initializePasswordStrength() {
    const passwordInput = document.getElementById('password');
    const strengthFill = document.querySelector('.strength-fill');
    const strengthText = document.querySelector('.strength-text');
    
    passwordInput.addEventListener('input', (e) => {
        const password = e.target.value;
        const strength = calculatePasswordStrength(password);
        
        // Reset classes
        strengthFill.className = 'strength-fill';
        strengthText.className = 'strength-text';
        
        if (password.length === 0) {
            strengthText.textContent = '';
            return;
        }
        
        if (strength < 40) {
            strengthFill.classList.add('weak');
            strengthText.classList.add('weak');
            strengthText.textContent = 'Yếu';
        } else if (strength < 70) {
            strengthFill.classList.add('medium');
            strengthText.classList.add('medium');
            strengthText.textContent = 'Trung bình';
        } else {
            strengthFill.classList.add('strong');
            strengthText.classList.add('strong');
            strengthText.textContent = 'Mạnh';
        }
    });
}

// Calculate password strength
function calculatePasswordStrength(password) {
    let strength = 0;
    
    if (password.length >= 8) strength += 25;
    if (password.length >= 12) strength += 15;
    if (/[a-z]/.test(password)) strength += 15;
    if (/[A-Z]/.test(password)) strength += 15;
    if (/[0-9]/.test(password)) strength += 15;
    if (/[^A-Za-z0-9]/.test(password)) strength += 15;
    
    return Math.min(strength, 100);
}

// Validate entire form
function validateForm() {
    const form = document.getElementById('registerForm');
    const inputs = form.querySelectorAll('.form-input');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    // Check terms checkbox
    const termsCheckbox = form.querySelector('input[name="terms"]');
    if (!termsCheckbox.checked) {
        showToast('Vui lòng đồng ý với điều khoản dịch vụ', 'error');
        isValid = false;
    }
    
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
    if (input.id === 'password') {
        if (value.length < 8) {
            showError(formGroup, errorMessage, 'Mật khẩu phải có ít nhất 8 ký tự');
            return false;
        }
        
        const strength = calculatePasswordStrength(value);
        if (strength < 40) {
            showError(formGroup, errorMessage, 'Mật khẩu quá yếu. Vui lòng tạo mật khẩu mạnh hơn');
            return false;
        }
    }
    
    // Confirm password validation
    if (input.id === 'confirmPassword') {
        const password = document.getElementById('password').value;
        if (value !== password) {
            showError(formGroup, errorMessage, 'Mật khẩu xác nhận không khớp');
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
    const form = document.getElementById('registerForm');
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
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        email: document.getElementById('email').value.trim(),
        password: document.getElementById('password').value,
    };
    
    try {
        // TODO: Replace with actual API endpoint
        const API_URL = 'http://localhost:5000/api/auth/register';
        
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        
        const data = await response.json();
        
        if (response.ok && data.success) {
            showToast('Đăng ký thành công! Đang chuyển hướng...', 'success');
            
            // Redirect after 2 seconds
            setTimeout(() => {
                window.location.href = '../login/';
            }, 2000);
        } else {
            throw new Error(data.error || 'Đăng ký thất bại');
        }
    } catch (error) {
        console.error('Registration error:', error);
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
    
    // Remove after 5 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 5000);
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

