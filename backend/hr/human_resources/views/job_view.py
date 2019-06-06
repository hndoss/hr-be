from django.shortcuts import render
from rest_framework import viewsets, permissions
from adm.serializers import JobSerializer
from adm.models import Job

class JobView(viewsets.ModelViewSet): 
    serializer_class = JobSerializer
    queryset = Job.objects.all()
    allowed_groups = ['hr',]