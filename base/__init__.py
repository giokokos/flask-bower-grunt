from flask import Flask, url_for


def create_app():
    app = Flask(__name__)

    # Function to easily find your assets
    # In your template use <link rel=stylesheet href="{{ static('filename')
    # }}">
    app.jinja_env.globals['static'] = (
        lambda filename: url_for('static', filename=filename)
    )

    # Config defines which packages are loaded.
    app.config['PACKAGES'] = [
        'base',
        'module1',
        'module2',
    ]

    if 'base' in app.config['PACKAGES']:
        from base.views import blueprint as bp
        app.register_blueprint(bp)
    if 'module1' in app.config['PACKAGES']:
        from module1.views import blueprint as bp1
        app.register_blueprint(bp1)
    if 'module2' in app.config['PACKAGES']:
        from module2.views import blueprint as bp2
        app.register_blueprint(bp2)

    return app
