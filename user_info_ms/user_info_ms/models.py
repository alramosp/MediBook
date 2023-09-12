from django.db import models

# Create your models here.
class Pais(models.Model):
    id_pais = models.AutoField(primary_key=True)
    nombre_pais = models.CharField(max_length=100)
    indicativo = models.CharField(max_length=10)

class TipoDocumento(models.Model):
    id_tipo_documento = models.AutoField(primary_key=True)
    id_pais = models.ForeignKey(Pais, on_delete=models.CASCADE)
    categoria = models.CharField(max_length=100)

class Persona(models.Model):
    id_persona = models.AutoField(primary_key=True)
    id_tipo_documento = models.ForeignKey(TipoDocumento, on_delete=models.CASCADE)
    numero_documento = models.CharField(max_length=20)
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField()
    email = models.EmailField()
    telefono = models.CharField(max_length=20)
    rol = models.CharField(max_length=50)

class Doctor(models.Model):
    id_doctor = models.AutoField(primary_key=True)
    id_persona = models.ForeignKey(Persona, on_delete=models.CASCADE)
    especialidad = models.CharField(max_length=100)
    jornada = models.CharField(max_length=50)

class Paciente(models.Model):
    id_paciente = models.AutoField(primary_key=True)
    id_persona = models.ForeignKey(Persona, on_delete=models.CASCADE)
    historia_clinica = models.TextField()