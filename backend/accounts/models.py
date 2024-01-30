from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=255, null=False)
    email = models.EmailField(max_length=255, null=False, unique=True)
    password = models.CharField(max_length=50)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    # is_staff = models.BooleanField(default=False)
    # is_superuser = models.BooleanField(default=False)
