# TOLE2 Li
Editor de Excel/CSV, Word (.docx) y texto + escáner a PDF. Offline y online, con autocorrector.
## APK sin instalar nada (desde el navegador)
1. GitHub: repo nuevo > "Upload files" > sube TODO este contenido.
2. Firebase (opcional, para la nube): console.firebase.google.com > nuevo proyecto > Authentication (activa Correo/contraseña) > Storage (crear) > pega las reglas de storage.rules > Configuración > app Web > copia la config en www/firebase-config.js (edítalo en GitHub).
3. codemagic.io > entra con GitHub > agrega el repo > "codemagic.yaml" > Start build > workflow "apk" > descarga el .apk.
4. Icono de la app: sube tu imagen cuadrada (1024x1024) como resources/icon.png y vuelve a compilar.
La portada, el logo y el fondo se cambian dentro de la app, en Ajustes.

## Escuchar (audiolibro)
Pestaña 🎧: abre EPUB, PDF, Word, Excel, CSV o texto y lo lee en voz alta, con velocidad, idioma, temporizador y marcador automático. Usa las voces de tu teléfono (sin internet si tienes voz en español instalada).
