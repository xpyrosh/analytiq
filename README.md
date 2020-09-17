# AnalytIQ
> Analytic IQ

> Your success is our business

## First actual project

//How to set up Sass Environment

1. npm init (fill out fields)
2. npm install node-sass -D
3. create script in package.json
   - "sass": "node-sass -w scss/ -o dist/css --recursive"
   - above line means node sass is to watch (-w) our scss/ folder and output (-o) to dist/css
4. npm run sass