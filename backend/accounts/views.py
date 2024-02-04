# Standard imports
from typing import Any

# Third-party imports
from rest_framework import generics
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST , HTTP_401_UNAUTHORIZED
from django.contrib.auth import authenticate, login, logout

# Internal imports
from accounts.models import User
from accounts.serializers import UserRegSerializer, UserLoginSerializer

# Create your views here.
class UserRegView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegSerializer

class LoginView(generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserLoginSerializer

    def post(self, request: Request, *args: Any, **kwargs: Any) -> Response:
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            login(request, serializer.validated_data['user'])
            return Response(serializer.data, status=HTTP_200_OK)
        else:
            return Response(serializer.errors, status=HTTP_401_UNAUTHORIZED)

class LogoutView(generics.GenericAPIView):
    def post(self, request: Request, *args: Any, **kwargs: Any) -> Response:
        logout()
        return Response({'message': 'Logged out successfully'}, status=HTTP_200_OK)
