# Flask-Bower-Grunt

## Installation

You need to have nodeJS, npm, Grunt, Bower and Git installed on the system before you proceed:

  	`$ git clone <repo>`

  	`$ cd <repo>`

  	`$ virtual venv`

  	`$ source venv/bin/activate`

  	`$ pip install -r requirements.txt`

  	`$ npm install`

  	`$ bower install`

Enjoy!

## Documentation

  Flask needs a development server to run in order to serve the application. To do so, run `$ python server.py`. And to make Grunt work, run (in a separate terminal tab) `$ grunt`. Your application will be available at `127.0.0.1:5000`.

  Grunt tasks: Copy the `jQuery.js` from `bower_components` to `static/dev/js` and create a `static/build/js/all.min.js` file with the minified version of JS files.
