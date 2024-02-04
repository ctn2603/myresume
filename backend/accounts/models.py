# Standard imports
from typing import Dict, Any

# Third-party imports
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.hashers import make_password

# Create your models here.
class UserManager(BaseUserManager):
    def _create_user(self, username:str, email:str, password:str, **extra_fields: Dict[str, Any]) -> models.Model:
        """
        Create and save a user with the given username, email, and password.
        """
        if not username:
            raise ValueError("Username must be set")
        
        if not email:
            raise ValueError("Email must be set")

        if not password:
            raise ValueError("Password must be set")

        email: str = self.normalize_email(email)
        user: User = self.model(username=username, email=email, **extra_fields)
        user.password: str = make_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username:str, email:str, password:str, **extra_fields: Dict[str, Any]):
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_admin", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(username, email, password, **extra_fields)

    def create_superuser(self, username:str, email:str, password:str, **extra_fields: Dict[str, Any]):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_admin", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Admin must have is_staff=True.")
        
        if extra_fields.get("is_admin") is not True:
            raise ValueError("Admin must have is_admin=True.")
        
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Admin must have is_superuser=True.")

        return self._create_user(username, email, password, **extra_fields)

class User(AbstractUser):
    """
    Model representing the user in the system
    Link: https://docs.djangoproject.com/en/5.0/topics/auth/customizing/
    """
    class Meta:
        permissions = [
            # TODO: define what the user can do with this User model
            # For example: staff can mark the user as fake account or so, and do not need the admin to do so
            # Link: https://docs.djangoproject.com/en/5.0/topics/auth/customizing/#extending-user
            ("can_do_something", "Can do something custom"),
        ]

    # Admin and superuser are different roles in this project (preference)
    is_admin = models.BooleanField(
        verbose_name='admin status',
        default=False,
        help_text="Designates whether the user can log into this admin site and has more privileges than staff.") 
    email = models.EmailField(verbose_name='email', max_length=150, blank=False, unique=True)
    username = models.CharField(verbose_name='username', max_length=150, blank=False)
    password = models.CharField(verbose_name='password', max_length=150, blank=False)
    phone = models.CharField(max_length=15, 
                             default='', 
                             validators=[RegexValidator(regex=r'^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$',
                                                        message="Please enter a valid phone number")])
    objects = UserManager()

    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = ['username'] # Shouldn't include 'password' here as it'll show the password characters when typing

    def has_perm(self, perm: str, obj=None) -> bool:
        if self.is_superuser:
            return True
        else:
            if perm in self.get_all_permissions():
                return True
            return False
    
    def has_module_perms(self, app_label: str) -> bool:
        return True

    def __str__(self) -> str:
        return (f'Username: {self.username}, ' 
                f'Email: {self.email}, ' 
                f'First name: {self.first_name}, ' 
                f'Last name: {self.last_name}, '
                f'Phone: {self.phone}')