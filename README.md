# Node+React+Redux+React-Router Starter

A simple starter repo for compiling React JSX, Less, and SASS files and serving them through a Node Express server.

This is a fully functioning template, that has been tested on a remote AWS EC2 Server Instance. JSX, SASS, and Less files are compiled.

To get started:

Clone the Repo
```bash
git clone https://github.com/tmantock/NodeReactStarter.git
```
Install the application and all of its dependencies and start the application
```bash
npm install && npm start
```
Have fun!

NOTE: To include SASS or Less files in React Components include the following with your other imports at the top of the file.
```javascript
if(typeof window === 'object'){
  require('[filename].[type]');
}
```
Server-Side Rendering JavaScript applications can be a difficult task, and my hope was to make a streamlined starter repo to help others get started with Server Side Renderimg their React applications. Please feel free to use this repo as a starter for your applications.

If you can thik of any improvements, then please feel free to share them with me.

Advantages of Server Side Rendered JavaScript applications:
- Faster Load Times
- SEO
- Reach users who disable JavaScript on the browser
