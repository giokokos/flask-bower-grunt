from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound

blueprint = Blueprint('module2', __name__, template_folder='templates')


@blueprint.route('/module2')
def index():
    try:
        return render_template('module2/index.html')
    except TemplateNotFound:
        abort(404)
