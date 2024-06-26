from rest_framework import serializers
from .models import*


class Student_serializer(serializers.ModelSerializer):
    class Meta:
        model=StudentregistrationModel
        fields='__all__'

class Registrationserializer(serializers.ModelSerializer):
    class Meta:
        model=Registrationmodel
        fields='__all__'