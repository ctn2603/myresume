from rest_framework import serializers
from accounts.models import User

# Internal import
from .constants import PASSWORD_MIN_LENGTH

class UserRegSerializer(serializers.ModelSerializer):
    email = serializers.CharField(required=True)
    password = serializers.CharField(required=True)
    username = serializers.CharField(required=True)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)

    class Meta:
        model = User
        # fields = ['username', 'email', 'password', 'first_name', 'last_name', 'is_staff', 'is_superuser']
        fields = ['email', 'password', 'username', 'first_name', 'last_name']

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email already exists")
        return value

    def validate_password(self, value):
        if len(value) < PASSWORD_MIN_LENGTH:
            raise serializers.ValidationError(f"Password length must be at least {PASSWORD_MIN_LENGTH} characters")
        return value

class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True, allow_blank=False)
    password = serializers.CharField(required=True, allow_blank=False)

    class Meta:
        model = User
        fields = ['email', 'password']

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        users = User.objects.filter(email=email, password=password)
        if users.exists() and users.count() == 1:
            user = users.first()
        else:
            raise serializers.ValidationError("Invalid user credentials.")
        return user