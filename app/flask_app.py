from flask import Flask, Blueprint, render_template, request, jsonify, send_file, send_from_directory
from dotenv import load_dotenv
import smtplib
import os
from email.message import EmailMessage

# Carga las variables de entorno desde el archivo .env
load_dotenv()

app = Flask(__name__)

# Configura el servidor SMTP utilizando las variables de entorno
app.config['SMTP_SERVER'] = os.getenv('SMTP_SERVER')
app.config['SMTP_PORT'] = os.getenv('SMTP_PORT')
app.config['SMTP_USERNAME'] = os.getenv('SMTP_USERNAME')
app.config['SMTP_PASSWORD'] = os.getenv('SMTP_PASSWORD')

bp = Blueprint('equipales',__name__,url_prefix='/')
@bp.route('/',methods=['GET'])
def index():
    return render_template('equipales/index.html')

@bp.route('/ubicacion',methods=['GET'])
def ubicacion():
    return render_template('equipales/ubicacion.html')

@bp.route('/blog',methods=['GET'])
def blog():
    return render_template('equipales/blog.html')

@bp.route('/servicios',methods=['GET'])
def servicios():
    return render_template('equipales/servicios.html')

@bp.route('/promociones',methods=['GET'])
def promociones():
    return render_template('equipales/promociones.html')

@bp.route('/contacto', methods=['GET', 'POST'])
def contacto():
    if request.method == 'POST':
        nombre = request.form.get("nombre")
        apellidos = request.form.get("apellidos")
        email = request.form.get("email")
        telefono = request.form.get("telefono")
        mensaje = request.form.get("mensaje")

        try:
            # Configurar el servidor SMTP y enviar el correo
            smtp_server = os.getenv("SMTP_SERVER")
            smtp_port = int(os.getenv("SMTP_PORT"))
            smtp_username = os.getenv("SMTP_USERNAME")
            smtp_password = os.getenv("SMTP_PASSWORD")
            empresa_email = "casillasequipales@gmail.com"  # Reemplaza con la dirección de correo de tu empresa

            msg = EmailMessage()
            msg.set_content(f"Nombre: {nombre}\nApellidos: {apellidos}\nEmail: {email}\nTeléfono: {telefono}\nMensaje: {mensaje}")
            msg["Subject"] = "Nuevo mensaje de formulario"
            msg["From"] = email  # Utilizar el correo proporcionado por el usuario como remitente
            msg["To"] = empresa_email  # Usar la dirección de correo de tu empresa como destinataria

            with smtplib.SMTP(smtp_server, smtp_port) as server:
                server.starttls()
                server.login(smtp_username, smtp_password)
                server.send_message(msg)

            return jsonify({"success": True})
        except Exception as e:
            print(str(e))
            return jsonify({"success": False})

    return render_template('equipales/contacto.html')



@bp.route('/terminosCondiciones',methods=['GET'])
def terminosCondiciones():
    return render_template('equipales/terminosCondiciones.html')
#blueprints del blog
@bp.route('/creacionEquipal',methods=['GET'])
def creacionEquipal():
    return render_template('equipales/creacionEquipal.html')


@bp.route('/cuidadosEquipal',methods=['GET'])
def cuidadosEquipal():
    return render_template('equipales/cuidadosEquipal.html')

@bp.route('/significadoEquipal',methods=['GET'])
def significadoEquipal():
    return render_template('equipales/significadoEquipal.html')

@bp.route('/comedores', methods = ['GET'])
def comedores():
    return render_template('equipales/comedores.html')

@bp.route('/mesas', methods = ['GET'])
def mesas():
    return render_template('equipales/mesas.html')


@bp.route('/salas', methods = ['GET'])
def salas():
    return render_template('equipales/salas.html')

@bp.route('/barrasPeriqueras', methods = ['GET'])
def barrasPeriqueras():
    return render_template('equipales/barrasPeriqueras.html')

@bp.route('/especiales', methods = ['GET'])
def especiales():
    return render_template('equipales/especiales.html')

@bp.route('/asientos', methods = ['GET'])
def asientos():
    return render_template('equipales/asientos.html')

@bp.route('/descargar_pdf')
def descargar_pdf():
    # Ruta al archivo PDF en tu servidor
    pdf_file_path = 'static/Equipales_Casillas.pdf'  # Asegúrate de que la ruta sea correcta

    # Configura el nombre del archivo que se enviará al usuario
    nombre_archivo = 'Equipales_Casillas.pdf'

    # Utiliza Flask's send_file para enviar el archivo al navegador del usuario
    return send_file(pdf_file_path, as_attachment=True, download_name=nombre_archivo)
#*Revisar esta ruta "IMPORTANTE"
# @bp.route('/productoDetalles', methods = ['GET'])
# def productoDetalles():
#     return render_template('equipales/producto-detalles.html')

@bp.route('/products', methods = ['GET'])
def products():
    return render_template('equipales/products.html')

#!Ruta para presentar los detalles de mis productos COMEDORES
@bp.route('/product-detail', methods=['GET'])
def product_detail():
    return render_template('equipales/product-detail.html')

#!Ruta para presentar los detalles de mis productos Equipales
@bp.route('/equipal-detail', methods=['GET'])
def equipal_detail():
    return render_template('equipales/equipal-detail.html')

#!Ruta para presentar los detalles de mis productos Salas
@bp.route('/sala-detail', methods=['GET'])
def sala_detail():
    return render_template('equipales/sala-detail.html')

#!Ruta para presentar los detalles de mis productos Equipales
@bp.route('/promocion-detail', methods=['GET'])
def promocion_detail():
    return render_template('equipales/promocion-detail.html')

#!Ruta para presentar los detalles de mis productos Equipales
@bp.route('/barras-detail', methods=['GET'])
def barras_detail():
    return render_template('equipales/barras-detail.html')

#!Ruta para mi carrito
@bp.route('/cart', methods=['GET'])
def cart():
    return render_template('equipales/cart.html')

@bp.route('/resultados_busqueda')
def resultados_busqueda():
    return render_template('equipales/resultados_busqueda.html')

#!ruta para indexar mis paginas en un navegador
@bp.route('/sitemap.xml')
def sitemap():
    return send_from_directory('static', 'sitemap.xml')

#!ruta para que los navegadores encuentren mis paginas
@bp.route('/robots.txt')
def robots():
    return send_from_directory('static', 'robots.txt')


app.register_blueprint(bp)





