# Standard imports

# Third-party imports
from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend
from rest_framework.request import Request

# Internal imports
from .models import User

class EmailBackend(ModelBackend):
    """
    Backend Authentication Docs:
    https://docs.djangoproject.com/en/5.0/topics/auth/customizing/
    https://docs.djangoproject.com/en/5.0/topics/auth/customizing/#authentication-backends
    """

    def authenticate(self, request: Request, username:str=None, password:str=None) -> User:
        UserModel = get_user_model()
        try:
            user: User = UserModel.objects.get(email=username)
        except UserModel.DoesNotExist:
            pass
        else:
            if user.check_password(password):
                return user
