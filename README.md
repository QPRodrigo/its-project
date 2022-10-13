## itsApp

ITSystems aplicativo

#### License

MIT

### Para correr el proyecto .git

Clonar dentro de la carpeta app

.- bench get-app < https://url >

Instalar el aplicativo en el sitio o BD.

.- bench --site <site.test> install-app <nombre_app>

Para evitar errores

.- bench use <site.test>

Si sale un error es posible que el "bench start" se siga ejecutando.

.- sudo killall -u <username>

.- bench start
