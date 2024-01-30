from django.urls import path
from .views import UserRegView, LoginView

urlpatterns = [
    path('register', UserRegView.as_view()),
    path('login', LoginView.as_view()),
]