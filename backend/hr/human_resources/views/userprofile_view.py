from django.shortcuts import render
from rest_framework import viewsets, permissions
from ..serializers import UserProfileSerializer
from ..models import UserProfile

class UserProfileView(viewsets.ModelViewSet): 
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()
    allowed_groups = ['hr']