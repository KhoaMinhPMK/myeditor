from flask import Flask, jsonify
from flask_cors import CORS

try:
    # When running from backend/ directory
    from routes.auth_routes import auth_bp
except Exception:  # pragma: no cover
    # Fallback if executed differently
    from backend.routes.auth_routes import auth_bp


def create_app():
    app = Flask(__name__)
    CORS(app)

    @app.get('/api/health')
    def health():
        return jsonify({"status": "ok"}), 200

    # Register blueprints
    app.register_blueprint(auth_bp, url_prefix='/api/auth')

    return app


if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=5000, debug=True)

