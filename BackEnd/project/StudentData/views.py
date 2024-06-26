from django.shortcuts import render
from rest_framework import viewsets
from .models import*
from .serializers import Student_serializer,Registrationserializer
# Create your views here.
class StudentRegistration(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = Student_serializer
    queryset = StudentregistrationModel.objects.all()

class Registrationview(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = Registrationserializer
    queryset = Registrationmodel.objects.all()