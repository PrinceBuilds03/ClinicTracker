// Tiny local web server used only to open Clinic Ledger on this computer.
const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.webmanifest':'application/manifest+json','.svg':'image/svg+xml'};
http.createServer((request,response) => {
  const requestPath = decodeURIComponent(request.url.split('?')[0]);
  const relative = requestPath === '/' ? 'index.html' : requestPath.replace(/^\/+/, '');
  const file = path.resolve(root, relative);
  if (!file.startsWith(root)) { response.writeHead(403); return response.end('Not allowed'); }
  fs.readFile(file, (error, content) => {
    if (error) { response.writeHead(404); return response.end('Not found'); }
    response.writeHead(200, {'Content-Type': types[path.extname(file)] || 'application/octet-stream'});
    response.end(content);
  });
}).listen(4173, () => console.log('\nClinic Ledger is ready. Open: http://localhost:4173\nKeep this window open while using the app. Press Ctrl+C when finished.\n'));
