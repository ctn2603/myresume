# Standard imports
from typing import List

# Third-party imports
from django.urls import path

# Internal imports
from .views import UserRegView, LoginView

urlpatterns: List[path] = [
    path('register', UserRegView.as_view()),
    path('login', LoginView.as_view()),
]