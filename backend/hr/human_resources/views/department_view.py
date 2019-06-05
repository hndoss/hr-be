from django.shortcuts import render
from rest_framework import viewsets, permissions
from adm.serializers import DepartmentSerializer
from adm.models import Department

class DepartmentView(viewsets.ModelViewSet): 
    serializer_class = DepartmentSerializer
    queryset = Department.objects.all()
    allowed_groups = ['hr',]