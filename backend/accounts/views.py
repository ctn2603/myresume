from django.shortcuts import render
from rest_framework import generics, views
from rest_framework import mixins
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST 

# Internal import
from accounts.models import User
from accounts.serializers import UserRegSerializer, UserLoginSerializer

# Create your views here.
class UserRegView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegSerializer

class LoginView(generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserLoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            return Response(serializer.data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
