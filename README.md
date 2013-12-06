# Flask-Bower-Grunt

## Installation

You need to have `nodeJS`, `npm`, `Grunt`, `Bower` and `Git` installed on the system before you proceed:

  	`$ git clone <repo>`

  	`$ cd <repo>`

  	`$ virtualenv venv`

  	`$ source venv/bin/activate`

  	`$ pip install -r requirements.txt`

  	`$ npm install`

  	`$ bower install`

Enjoy!

## Documentation

  Make Grunt work, run `$ grunt` to execute the default tasks (you should have already installed grunt with `$ npm install -g grunt-cli`). 
  
  
  Grunt tasks: Copy `jquery.js` and `bootstrap.js` from `bower_components` to `static/libs` (under the `flaskapp/base` folder) and along with the `assets/js/test.js` create the minified `static/build/js/all.min.js` file for production mode. 
  

  Flask needs a development server to run in order to serve the application. To do so, run `$ python server.py`. Your application will be available at `127.0.0.1:5000`.

  
