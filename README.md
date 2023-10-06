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

## API-GraphQL 

1. Desplegar el microservicio y la base de datos,previamente realizados.

2. Desplegar API Gateway, ubicarse en la raiz del proyecto respectivo (user_info_ag) y ejecutar los siguientes comandos:

	docker build -t user_info_ag .

	docker run -p 5000:5000 user_info_agt

3. Abrir el editor gráfico GraphiQL: host:5000/graphiql

### Mutations - Create

1. Ejemplo crear un país y retornar su nombre:

```
mutation {
  createPais(pais:{
    nombre_pais:"Colombia"
    indicativo:"+57"
  }){
    nombre_pais
  }
}
```
2. Ejemplo crear un tipo de documento y retornar su categoria:

```
mutation {
  createTipoDocumento(tipoDocumento:{
    id_pais:3
    categoria:"Cedula Colombiana"
  }){
    categoria
  }
}
```
Nota: El ID debe ser de un pais existente en la tabla pais.

3. Ejemplo crear persona y retornar su nombre y numero de documento:

```
mutation {
  createPersona(persona:{
    id_tipo_documento:2
    numero_documento:"123456789"
    nombre:"Pepe"
    apellido:"Diaz"
    fecha_nacimiento:"2001-01-03"
    email:"corre@ejemplo.com"
    telefono:"2365489"
    rol:"Paciente"
  }){
    nombre
    numero_documento
  }
}
```
Nota: El id_tipo_documento tiene que ser de un tipo de documento que exista en la tabla tipo documento.

4. Ejemplo crear Doctor y retornar ID del doctor, ID persona y especialidad:

```
mutation {
  createDoctor(doctor:{
    id_persona:2
    especialidad:"Cardiologo"
    jornada:"Noche"
  }){
    id_doctor
    id_persona
    especialidad
  }
}
```
Nota: el id_persona debe ser de una persona existente en la tabla persona.

5. Ejemplo crear paciente y retornar ID del paciente, ID persona y historia clinica:

```
mutation {
  createPaciente(paciente:{
    id_persona:3
    historia_clinica:"Andamos melos"
  }){
    id_paciente
    id_persona
    historia_clinica
  }
}
```
Nota: el id_persona debe ser de una persona existente en la tabla persona.

### Mutations (i) - Update

1. Ejemplo actualizar la información de un país segun su ID y retornar su nombre e indicativo:

```
mutation {
  updatePais(id:1,pais:{
    nombre_pais:"Colombia PAPÁ ACTUALIZADO"
    indicativo:"+57"
  }){
    nombre_pais
    indicativo
  }
}
```

2. Ejemplo actualizar la información de un tipo de documento segun su ID y retornar su categoria e ID del país a al que se asocio el tipo de documento:

```
mutation {
  updateTipoDocumento(id:1,tipoDocumento:{
    id_pais:3
    categoria:"Cedula Colombiana PAPÁ"
  }){
    id_pais
    categoria
  }
}
```
3. Ejemplo actulizar la información de una persona segun su ID y retornar su nombre y apellido:

```
mutation {
  updatePersona(id:1,persona:{
    id_tipo_documento:2
    numero_documento:"123456789"
    nombre:"Pepe ACTUALZIADO "
    apellido:"Diaz"
    fecha_nacimiento:"2001-01-03"
    email:"corre@ejemplo.com"
    telefono:"2365489"
    rol:"Paciente"
  }){
    nombre
    apellido
  }
}
```

4. Ejemplo actualizar la información de un doctor y retornar especialidad y jornada:

```
mutation {
  updateDoctor(id:1,doctor:{
    id_persona:2
    especialidad:"Cardiologo Actualizado"
    jornada:"Noche"
  }){
    especialidad
    jornada
  }
}
```
5. Ejemplo actualizar la información de un paciente segun su ID y retornar ID del paciente, ID persona y historia clinica:

```
mutation {
  updatePaciente(id:1,paciente:{
    id_persona:3
    historia_clinica:"Andamos Melos ACTUALIZADO"
  }){
    id_paciente
    id_persona
    historia_clinica
  }
}
```

### Queries - Get

1. Ejemplo consulta todos los países en la base de datos:

```
query{
  getPaises{
    id_pais
    nombre_pais
    indicativo
  }
}
```
Ejemplo consulta país en especefico por medio de su ID:
```
query{
  getPais(id:1){
    id_pais
    nombre_pais
    indicativo
  }
}
```
2. Ejemplo consulta todos los tipos de documentos que se encuentran en la base de datos:

```
query{
  getTiposDocumentos{
    id_tipo_documento
    id_pais
    categoria
  }
}
```
Ejemplo consulta de un tipo de documento en especifico por medio de su ID:
```
query{
  getTipoDocumento(id:1){
    id_pais
    categoria
  }
}
```
3. Ejemplo consulta todas las personas que estan en la base de datos de la tabla persona:

```
query{
  getPersonas{
    id_persona
    numero_documento
    nombre
    apellido
    fecha_nacimiento
    email
    telefono
    rol
    id_tipo_documento
  }
}
```
Ejemplo consulta a una sola persona en especifico por medio de su ID:
```
query{
  getPersona(id:1){
    id_persona
    numero_documento
    nombre
    apellido
    fecha_nacimiento
    email
    telefono
    rol
    id_tipo_documento
  }
}
```
4. Ejemplo consulta de todos los doctores en la base de datos:

```
query{
  getDoctores{
    id_persona
    especialidad
    jornada
  }
}
```
Ejemplo consulta un doctor especifico por medio de su ID:
```
query{
  getDoctor(id:1){
    id_persona
	especialidad
    jornada
  }
}
```
5. Ejemplo consulta todo los pacientes en la base de datos:

```
query{
  getPacientes{
    id_paciente
    id_persona
    historia_clinica
  }
}

```
Ejemplo consulta a paciente especifico por medio de su ID:

```
query{
  getPaciente(id:1){
    id_paciente
    id_persona
    historia_clinica
  }
}
```
### Mutations (ii) - Delete

1. Ejemplo eliminar un país segun su ID:

```
mutation {
 deleteCategory(id: 1)
}
```

2. Ejemplo eliminar un tipo de documento segun su ID:

```
mutation {
 deleteTipoDocumento(id: 1)
}
```
3. Ejemplo eliminar una persona segun su ID:

```
mutation {
 deletePersona(id: 1)
}

```

4. Ejemplo eliminar un doctor segun su ID:

```
mutation {
 deleteDoctor(id: 1)
}

```
5. Ejemplo eliminar paciente segun su ID:

```
mutation {
 deletePaciente(id: 1)
}

```