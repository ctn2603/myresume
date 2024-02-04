# Standard imports

# Third-party imports
from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model
from rest_framework.request import Request

# Internal imports
from .models import User

class EmailBackend(ModelBackend):
    def authenticate(self, request: Request, username:str=None, password:str=None) -> User:
        UserModel = get_user_model()

        try:
            user: User = UserModel.objects.get(email=username)
        except UserModel.DoesNotExist:
            pass
        else:
            if user.check_password(password):
                return user
