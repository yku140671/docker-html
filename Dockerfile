# Verwenden Sie ein Basisimage mit einem Webserver, z.B. nginx
FROM nginx:alpine

# Kopieren Sie den Inhalt Ihrer HTML-Dateien in das Verzeichnis des Webserver
COPY index.html /usr/share/nginx/html

# Kopieren Sie den CSS-Ordner in das Verzeichnis des Webserver
COPY css/ /usr/share/nginx/html/css/

# Kopieren Sie den Bilderordner in das Verzeichnis des Webserver
COPY img/ /usr/share/nginx/html/img/
