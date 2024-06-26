from django.db import models

# Create your models here.
# Gender={
#     ('Male''Male'),
#     ('Female''Female')
#     ('Other''Other')
# }
class StudentregistrationModel(models.Model):
    Name=models.CharField(max_length=255, null=True)
    RollNo=models.IntegerField( null=True)
    Father_Name=models.CharField(max_length=255, null=True)
    Mother_Name=models.CharField(max_length=255, null=True)
    Class=models.CharField(max_length=255, null=True)
    Address=models.TextField(null=True)
    Fees=models.IntegerField(null=True)
    DOB=models.DateField(null=True)
    Gender=models.CharField(max_length=255, null=True)
    Semester_Year=models.DurationField(null=True)
    Profile=models.ImageField(upload_to=True, null=True)
    Pro_image=models.URLField(null=True)
    Branch=models.CharField(max_length=255, null=True)

    class Meta:
        verbose_name='StudentInfo'

    def __str__(self):
        return self.Name
    

class Registrationmodel(models.Model):
    Name=models.CharField(max_length=255, null=True)
    Email=models.EmailField()
    Address=models.TextField(null=True)
    Contact=models.IntegerField()
    Password=models.CharField(max_length=255, null=True)
    def __str__(self):
        return self.Name