# Third-party imports
from django.db.models import Model, CharField, EmailField

# Create your models here.
class User(Model):
    """
    Model representing the user in the system
    """
    username = CharField(max_length=255, null=False)
    email = EmailField(max_length=255, null=False, unique=True)
    password = CharField(max_length=50)
    first_name = CharField(max_length=100)
    last_name = CharField(max_length=100)
    # is_staff = models.BooleanField(default=False)
    # is_superuser = models.BooleanField(default=False)
