#Node React Starter

A simple starter repo for compiling React JSX, Less, and SASS files and serving
them through a Node server.

This is a fully functioning template, that has been tested on a remote AWS EC2 Server Instance. JSX, SASS, and Less files are compiled.

NOTE: To include SASS or Less files in React Components include the following with your other imports at the top of the file.
```javascript
if(typeof window === 'object'){
  require('[filename].[type]');
}
```

NOTE: If you plan to use this, I advise you to delete the files for actions and reducers. Also make sure to remove any imports from these folders. This template revolved around setting up a template for authenticating users in addition to Server Side Rendering. I am working on a bare bones template which only involves React, React Router, Redux, and React Redux.

Server-Side Rendering

Advantages
- Faster Load Times
- SEO
- Reach users who disable JavaScript on the browser
