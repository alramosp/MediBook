# MediBook_user_info
Para poder desplegar el microservicio y su base de datos, siga los siguientes pasos.

1. Crear la imagen Docker de la base de datos. Dentro del directorio llamado user_info_db, ejecutar el siguiente comando:

	docker build -t user_info_db .

2.  Desplegar la base de datos, mediante el siguiente comando:

	docker run -d -p 3307:3306 --name user_info_db user_info_db

3. Desplegar el cliente web de MySQL PhpMyAdmin, mediante el siguiente 
comando:

docker run --name db_client_user_info -d --link user_info_db:db -p 8082:80 phpmyadmin

4.  Iniciar sesión usando las credenciales definidas en el Dockerfile de la imagen de la base de datos:
 
FROM mysql:5.7
ENV MYSQL_ROOT_PASSWORD=123
ENV MYSQL_DATABASE=user_info_db
ENV MYSQL_USER=medibook
ENV MYSQL_PASSWORD=2023
EXPOSE 3307

5. Crear imagen del microservicio, dentro de la raíz del proyecto, en el directorio user_info _ms, ejecutar el siguiente comando:

docker build -t user_info_ms .   

6. Despliegue del contenedor del microservicio

docker run -p 4001:4001 -e DB_HOST=X -e DB_PORT=3306 -e DB_USER=medibook -e DB_PASSWORD=2023 -e DB_NAME=user_info_db -e URL=0.0.0.0:4001 user_info_ms
	
X = IP del contenedor (user_info_db). Para obtener la IP del contenedor, ejecutar el siguiente comando:

docker inspect CONTAINER_ID

La IP corresponde al atributo Networks > bridge > IPAddress.
