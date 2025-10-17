from flask import jsonify


def json_response(success: bool, data=None, error: str | None = None, status: int = 200):
    payload = {
        'success': success,
        'data': data if success else None,
        'error': None if success else (error or 'Đã xảy ra lỗi'),
    }
    return jsonify(payload), status

