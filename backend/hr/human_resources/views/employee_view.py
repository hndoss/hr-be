from django.shortcuts import render
from rest_framework import viewsets, permissions
from ..serializers import EmployeeSerializer
from ..models import Employee

class EmployeeView(viewsets.ModelViewSet): 
    serializer_class = EmployeeSerializer
    queryset = Employee.objects.all()
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        content = {'message': 'Hello, World!'}
        return Response(content)