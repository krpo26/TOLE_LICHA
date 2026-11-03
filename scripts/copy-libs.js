// Copia las librerías a www/lib para que la app funcione SIN internet.
const fs = require('fs'); fs.mkdirSync('www/lib', { recursive: true });
['xlsx/dist/xlsx.full.min.js','mammoth/mammoth.browser.min.js','jspdf/dist/jspdf.umd.min.js',
 'jszip/dist/jszip.min.js','pdfjs-dist/build/pdf.min.js','pdfjs-dist/build/pdf.worker.min.js','firebase/firebase-app-compat.js','firebase/firebase-auth-compat.js','firebase/firebase-storage-compat.js']
 .forEach(p => fs.copyFileSync('node_modules/' + p, 'www/lib/' + p.split('/').pop()));
