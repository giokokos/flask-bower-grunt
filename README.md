# Flask-Bower-Grunt

## Installation

You need to have nodeJS, npm, Grunt, Bower and Git installed on the system before you proceed:

  	`$ git clone <repo>`

  	`$ cd <repo>`

  	`$ virtualenv venv`

  	`$ source venv/bin/activate`

  	`$ pip install -r requirements.txt`

  	`$ npm install`

  	`$ bower install`

Enjoy!

## Documentation

  Make Grunt work, run `$ grunt` to execute the default tasks. 
  Grunt tasks: Copy the `jQuery.js` from `bower_components` to `static/dev/js` and create a `static/build/js/all.min.js` file with the minified version of JS files. 
  Flask needs a development server to run in order to serve the application. To do so, run `$ python server.py`. Your application will be available at `127.0.0.1:5000`.

  
