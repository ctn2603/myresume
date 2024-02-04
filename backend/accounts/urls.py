# Standard imports
from typing import List

# Third-party imports
from django.urls import path

# Internal imports
from .views import UserRegView, LoginView

urlpatterns: List[path] = [
    path('register', UserRegView.as_view(), name='register'),
    path('login', LoginView.as_view(), name='login'),
]