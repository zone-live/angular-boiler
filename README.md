##Angular boilerplate


**1 — Install [NodeJS](https://nodejs.org/)**

```javascript
npm install -g yo
```

**2 — Install yeoman [angular-generator](https://github.com/yeoman/generator-angular)** 

```javascript
npm install -g generator-angular
```

**3 — Make a new directory, and cd into it:**

```javascript
mkdir my-new-project && cd $_
```

Run yo angular, optionally passing an app name:
```javascript
yo angular [app-name]
```

- Check the yeoman options you want;

- Run grunt for building and grunt serve for preview;


**4 — Run 'npm install' and 'npm update'** to install all your node dependencies
run 'bower update' too. Or run 
```
python -m SimpleHTTPServer
```
for preview too.

####Pretty URLs

To remove /#/ urls and enable pretty urls, add this to your app.js file inside the config function:

```
//use the HTML5 History API
$locationProvider.html5Mode(true);
```
        
####Make Routes work in HTML5 mode:
Add this to the .htaccess to force the web app to run from the domain url when you are in a sub page and hit refresh or when you go directly to a subpage like /about section and angular doesnt know how to work that direct url to map it to HTML5 url mode.

```
Options +FollowSymLinks -MultiViews
RewriteEngine On

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*) index.html [NC]
```

####\<base> tag
Add **base tag** to specify the base URL to use for all relative URLs.
If you configure $location to use html5Mode (history.pushState), you need to specify the base URL for the application with a <base href=""> tag or configure ```$locationProvider``` to not require a base tag by passing a definition object with ```requireBase:false``` to ```$locationProvider.html5Mode();```

[Base Tag](https://docs.angularjs.org/error/$location/nobase)


####Optional:
Install a progress bar like [ngProgress](https://github.com/victorbjelkholm/ngprogress).
