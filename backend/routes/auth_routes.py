# Authentication Routes
from flask import Blueprint, request
from backend.utils.helpers import json_response

auth_bp = Blueprint('auth', __name__)


@auth_bp.post('/register')
def register():
    """User registration endpoint"""
    try:
        data = request.get_json()
        
        # TODO: Validate input
        first_name = data.get('firstName')
        last_name = data.get('lastName')
        email = data.get('email')
        password = data.get('password')
        
        if not all([first_name, last_name, email, password]):
            return json_response(False, error='Vui lòng điền đầy đủ thông tin', status=400)
        
        # TODO: Check if email exists
        # TODO: Hash password
        # TODO: Save to database
        # TODO: Generate token
        
        # Mock response
        return json_response(True, data={
            'message': 'Đăng ký thành công',
            'user': {
                'firstName': first_name,
                'lastName': last_name,
                'email': email
            }
        })
        
    except Exception as e:
        return json_response(False, error=str(e), status=500)


@auth_bp.post('/login')
def login():
    """User login endpoint"""
    try:
        data = request.get_json()
        
        email = data.get('email')
        password = data.get('password')
        
        if not all([email, password]):
            return json_response(False, error='Email và mật khẩu không được để trống', status=400)
        
        # TODO: Validate credentials
        # TODO: Generate token
        
        # Mock response
        return json_response(True, data={
            'message': 'Đăng nhập thành công',
            'token': 'mock_jwt_token_here',
            'user': {
                'email': email,
                'name': 'User Name'
            }
        })
        
    except Exception as e:
        return json_response(False, error=str(e), status=500)


@auth_bp.post('/logout')
def logout():
    """User logout endpoint"""
    # TODO: Invalidate token
    return json_response(True, data={'message': 'Đăng xuất thành công'})
