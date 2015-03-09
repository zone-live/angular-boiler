#Angular boiler 

install nodejs https://nodejs.org/
npm install -g yo
isntall yeoman angular generator https://github.com/yeoman/generator-angular
npm install -g generator-angular

Make a new directory, and cd into it:

mkdir my-new-project && cd $_
Run yo angular, optionally passing an app name:

yo angular [app-name]
Run grunt for building and grunt serve for preview

check the yeoman options you want
run npm install and npm update to install all your node dependencies
run bower update too

or run 
python -m SimpleHTTPServer for preview too.

to remove /#/ urls and enable pretty urls, add this to your app.js file inside the config function:
//use the HTML5 History API
$locationProvider.html5Mode(true);
        
Make Routes work in HTML5 mode:
add this to the .htaccess to force the web app to run from the domain url when you are in a sub page and hit refresh or when you go directly to a subpage like /about section and angular doesnt know how to work that direct url to map it to HTML5 url mode.
Options +FollowSymLinks -MultiViews
RewriteEngine On

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*) index.html [NC]

add base tag to specify the base URL to use for all relative URLs.
If you configure $location to use html5Mode (history.pushState), you need to specify the base URL for the application with a <base href=""> tag or configure $locationProvider to not require a base tag by passing a definition object with requireBase:false to $locationProvider.html5Mode():
<base href="/app/">
https://docs.angularjs.org/error/$location/nobase

optional:
install a progress bar
https://github.com/victorbjelkholm/ngprogress
