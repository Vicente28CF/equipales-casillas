from flask import Flask
from dotenv import load_dotenv  # Importa la función para cargar variables de entorno desde dotenv
import os

# Carga las variables de entorno desde el archivo .env
load_dotenv()

def create_app():
    app = Flask(__name__)

    # Configura el servidor SMTP utilizando las variables de entorno
    app.config['SMTP_SERVER'] = os.getenv('SMTP_SERVER')
    app.config['SMTP_PORT'] = os.getenv('SMTP_PORT')
    app.config['SMTP_USERNAME'] = os.getenv('SMTP_USERNAME')
    app.config['SMTP_PASSWORD'] = os.getenv('SMTP_PASSWORD')

    from . import equipales

    app.register_blueprint(equipales.bp)
    return app


