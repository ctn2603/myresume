# Standard imports
from typing import Any, Union

# Third-party imports
from django.db.models.query import QuerySet
from rest_framework.serializers import ModelSerializer, CharField, EmailField, ValidationError

# Internal imports
from accounts.models import User
from .constants import PASSWORD_MIN_LENGTH

class UserRegSerializer(ModelSerializer):
    """
    Serializer for user registration
    """
    email = CharField(required=True)
    password = CharField(required=True)
    username = CharField(required=True)
    first_name = CharField(required=True)
    last_name = CharField(required=True)

    class Meta:
        model = User
        fields = ['email', 'password', 'username', 'first_name', 'last_name']
        # fields = ['username', 'email', 'password', 'first_name', 'last_name', 'is_staff', 'is_superuser']

    def validate_email(self, value: str) -> str:
        """
        Validate that email exist and match the existing record
        """
        if User.objects.filter(email=value).exists():
            raise ValidationError("Email already exists")
        return value

    def validate_password(self, value: str) -> str:
        """
        Validate that password match the existing record and
        should be at least a certain length
        """
        if len(value) < PASSWORD_MIN_LENGTH:
            raise ValidationError(f"Password length must be at least {PASSWORD_MIN_LENGTH} characters")
        return value

class UserLoginSerializer(ModelSerializer):
    """
    Serializer for user login
    """
    email = EmailField(required=True, allow_blank=False)
    password = CharField(required=True, allow_blank=False)

    class Meta:
        model = User
        fields = ['email', 'password']

    def validate(self, attrs: dict[str, str]) -> Union[Any, None]:
        """
        Validate if email and password exist or match the existing
        record
        """
        email: str = attrs.get('email')
        password: str = attrs.get('password')
        users: QuerySet = User.objects.filter(email=email, password=password)

        if users.exists() and users.count() == 1:
            user = users.first()
        else:
            raise ValidationError("Invalid user credentials.")
        return user
