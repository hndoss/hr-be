from rest_framework import serializers
from .models import Management

class ManagementSerializer(serializers.ModelSerializer):
    class Meta:
    model = Management
    fields = ('name', 'description')