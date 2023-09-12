from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Pais
from .serializers import PaisSerializer
from .models import TipoDocumento
from .serializers import TipoDocumentoSerializer
from .models import Persona
from .serializers import PersonaSerializer
from .models import Doctor
from .serializers import DoctorSerializer
from .models import Paciente
from .serializers import PacienteSerializer




@api_view(['GET', 'POST'])
def pais_list(request):
    if request.method == 'GET':
        paises = Pais.objects.all()
        serializer = PaisSerializer(paises, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PaisSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Vista de detalle para Pais

@api_view(['GET', 'PUT', 'DELETE'])
def pais_detail(request, pk):
    try:
        pais = Pais.objects.get(pk=pk)
    except Pais.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PaisSerializer(pais)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = PaisSerializer(pais, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        pais.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def tipo_documento_list(request):
    if request.method == 'GET':
        tipos_documento = TipoDocumento.objects.all()
        serializer = TipoDocumentoSerializer(tipos_documento, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TipoDocumentoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Vista de detalle para TipoDocumento

@api_view(['GET', 'PUT', 'DELETE'])
def tipo_documento_detail(request, pk):
    try:
        tipo_documento = TipoDocumento.objects.get(pk=pk)
    except TipoDocumento.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = TipoDocumentoSerializer(tipo_documento)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = TipoDocumentoSerializer(tipo_documento, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        tipo_documento.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def persona_list(request):
    if request.method == 'GET':
        personas = Persona.objects.all()
        serializer = PersonaSerializer(personas, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PersonaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Vista de detalle para Persona
@api_view(['GET', 'PUT', 'DELETE'])
def persona_detail(request, pk):
    try:
        persona = Persona.objects.get(pk=pk)
    except Persona.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PersonaSerializer(persona)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = PersonaSerializer(persona, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        persona.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def doctor_list(request):
    if request.method == 'GET':
        doctores = Doctor.objects.all()
        serializer = DoctorSerializer(doctores, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = DoctorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Vista de detalle para Doctor
@api_view(['GET', 'PUT', 'DELETE'])
def doctor_detail(request, pk):
    try:
        doctor = Doctor.objects.get(pk=pk)
    except Doctor.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = DoctorSerializer(doctor)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = DoctorSerializer(doctor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        doctor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



@api_view(['GET', 'POST'])
def paciente_list(request):
    if request.method == 'GET':
        pacientes = Paciente.objects.all()
        serializer = PacienteSerializer(pacientes, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PacienteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Vista de detalle para Paciente
@api_view(['GET', 'PUT', 'DELETE'])
def paciente_detail(request, pk):
    try:
        paciente = Paciente.objects.get(pk=pk)
    except Paciente.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PacienteSerializer(paciente)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = PacienteSerializer(paciente, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        paciente.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)