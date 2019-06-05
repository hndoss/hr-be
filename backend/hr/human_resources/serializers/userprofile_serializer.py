from rest_framework import serializers
from .user_serializer import UserSerializer
from ..models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = UserProfile
        fields = ('id', 'user', 'salary', 'position', 'department',)