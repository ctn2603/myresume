# Standard imports
from typing import Any, Union

# Third-party imports
from django.contrib.auth.hashers import make_password, check_password
from rest_framework import serializers
from rest_framework.authtoken.models import Token

# Internal imports
from accounts.models import User
from .constants import PASSWORD_MIN_LENGTH

class UserRegSerializer(serializers.ModelSerializer):
    """
    Serializer for user registration
    """
    email = serializers.CharField(required=True)
    password = serializers.CharField(required=True, write_only=True)
    username = serializers.CharField(required=True)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'first_name', 'last_name']

    def create(self, validated_data: Any) -> Any:
        return User.objects.create_user(**validated_data)

    def validate_email(self, value: str) -> str:
        """
        Validate that email exist and match the existing record
        """
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email already exists")
        return value

    def validate_password(self, value: str) -> str:
        """
        Validate that password match the existing record and
        should be at least a certain length
        """
        if len(value) < PASSWORD_MIN_LENGTH:
            raise serializers.ValidationError(f"Password length must be at least {PASSWORD_MIN_LENGTH} characters")
        return value

class UserLoginSerializer(serializers.ModelSerializer):
    """
    Serializer for user login
    """
    email = serializers.EmailField(required=True, allow_blank=False)
    password = serializers.CharField(required=True, allow_blank=False)

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
        user: User = User.objects.filter(email=email).first()
        # TODO: process token later for sign in
        token, _ = Token.objects.get_or_create(user=user)
        if user and check_password(password=password, encoded=user.password):
            return attrs
        raise serializers.ValidationError("Invalid user credentials.")
