from django.shortcuts import render
from django.db.models import Count
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from adm.serializers import DepartmentSerializer
from adm.models import Department
from rest_framework.decorators import action


class DepartmentView(viewsets.ModelViewSet):
    serializer_class = DepartmentSerializer
    queryset = Department.objects.all()
    allowed_groups = ['hr', ]

    @action(detail=False)
    def count_employees(self, request):
        queryset = self.get_queryset()
        queryset = queryset.annotate(
            value=Count('userprofile')
        ).extra(select={'label': 'name'})

        return Response(data=queryset.values('label', 'value'))
