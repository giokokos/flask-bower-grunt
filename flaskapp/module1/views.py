from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound

blueprint = Blueprint('module1', __name__, template_folder='templates')


@blueprint.route('/module1')
def index():
    try:
        return render_template('module1/index.html')
    except TemplateNotFound:
        abort(404)
