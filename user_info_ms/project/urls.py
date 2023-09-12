"""
URL configuration for project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import path
from user_info_ms.views import (
    pais_list,
    tipo_documento_list,
    persona_list,
    doctor_list,
    paciente_list,
)
from user_info_ms.views import (
    pais_detail,
    tipo_documento_detail,
    persona_detail,
    doctor_detail,
    paciente_detail,
)

urlpatterns = [
    # Rutas para el modelo Pais
    path('pais/', pais_list, name='pais-list'),
    path('pais/<int:pk>/', pais_detail, name='pais-detail'),

    # Rutas para el modelo TipoDocumento
    path('tipo-documento/', tipo_documento_list, name='tipo-documento-list'),
    path('tipo-documento/<int:pk>/', tipo_documento_detail, name='tipo-documento-detail'),

    # Rutas para el modelo Persona
    path('persona/', persona_list, name='persona-list'),
    path('persona/<int:pk>/', persona_detail, name='persona-detail'),

    # Rutas para el modelo Doctor
    path('doctor/', doctor_list, name='doctor-list'),
    path('doctor/<int:pk>/', doctor_detail, name='doctor-detail'),

    # Rutas para el modelo Paciente
    path('paciente/', paciente_list, name='paciente-list'),
    path('paciente/<int:pk>/', paciente_detail, name='paciente-detail'),
]