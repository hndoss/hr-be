from rest_framework import serializers
from ..models import Absence


class AbsenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Absence
        filter_fields = ('requester',)
        fields = ('id', 'requester', 'state', 'kind', 'start', 'ending')
        allowed_groups = ['public', ]

# ?requester=1 not working