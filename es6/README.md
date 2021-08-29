# Using Jest and ES6 modules

Sample how to use a snippet of JS code in an HTML file with its JS code being tested via Jest.
Code to be tested is in ./src/logic.mjs

## End user test

```
❯ http-server .
Starting up http-server, serving .

http-server settings: 
CORS: disabled
Cache: 3600 seconds
Connection Timeout: 120 seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: false
Serve Brotli Files: false
Default File Extension: none

Available on:
  http://127.0.0.1:8080
  http://192.168.21.124:8080
Hit CTRL-C to stop the server
```

then use your browser to connect to `http://localhost:8080/` and you should see a number counting up (and some unrelated stuff).

