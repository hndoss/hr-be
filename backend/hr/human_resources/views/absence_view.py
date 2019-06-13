from django.shortcuts import render
from rest_framework import viewsets, permissions
from ..serializers import AbsenceSerializer
from rest_framework.response import Response
from rest_framework import status
from ..models import Absence


class AbsenceView(viewsets.ModelViewSet):
    serializer_class = AbsenceSerializer
    queryset = Absence.objects.all()
    filter_fields = ('requester',)
    allowed_groups = ['public']

    def post(self, request, format=None):
        serializer = AbsenceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
