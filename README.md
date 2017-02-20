# Demoplate

A pico setup for simple demos for which you don't need to go to an online service.
Currently it supports only HTML, CSS & JS.

## Installation
```
npm install
```

## Run 
```
npm start #for simple css and js
```

### With SCSS
If you plan to use SCSS, try putting your CSS into **src/style.scss**. If you need to use multiple files, import all of them in **src/style.scss**.

```
npm run scss -- -w & npm start
```

Make changes to any file and it'll reflect on every single browser you go to [`localhost:3000`](http://localhost:3000)