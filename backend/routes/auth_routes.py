from flask import Blueprint, request, jsonify
from pathlib import Path
import json
import re
from werkzeug.security import generate_password_hash

try:
    from utils.helpers import json_response
except Exception:  # pragma: no cover
    from backend.utils.helpers import json_response


auth_bp = Blueprint('auth', __name__)

DATA_DIR = Path(__file__).resolve().parent.parent / 'data'
USERS_FILE = DATA_DIR / 'users.json'


def _load_users():
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    if not USERS_FILE.exists():
        USERS_FILE.write_text('[]', encoding='utf-8')
    try:
        return json.loads(USERS_FILE.read_text(encoding='utf-8'))
    except Exception:
        return []


def _save_users(users):
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    USERS_FILE.write_text(json.dumps(users, ensure_ascii=False, indent=2), encoding='utf-8')


def _valid_email(email: str) -> bool:
    return re.match(r"^[^@\s]+@[^@\s]+\.[^@\s]+$", email or "") is not None


@auth_bp.post('/register')
def register():
    try:
        payload = request.get_json(force=True, silent=False) or {}
    except Exception:
        return json_response(False, error='Invalid JSON body', status=400)

    name = (payload.get('name') or '').strip()
    email = (payload.get('email') or '').strip().lower()
    password = payload.get('password') or ''

    if not name:
        return json_response(False, error='Tên không được để trống', status=400)
    if not _valid_email(email):
        return json_response(False, error='Email không hợp lệ', status=400)
    if len(password) < 6:
        return json_response(False, error='Mật khẩu phải từ 6 ký tự', status=400)

    users = _load_users()
    if any(u.get('email') == email for u in users):
        return json_response(False, error='Email đã được đăng ký', status=409)

    user = {
        'name': name,
        'email': email,
        'password_hash': generate_password_hash(password),
    }
    users.append(user)
    _save_users(users)

    # Do not return password hash
    public_user = {k: v for k, v in user.items() if k != 'password_hash'}
    return json_response(True, data={'user': public_user}, status=201)

