from datetime import datetime
from calendar import timegm

from rest_framework_jwt.settings import api_settings

def jwt_payload_handler(user):
    payload = {
        'id': user.pk,
        'username': user.username,
        'exp': datetime.utcnow() + api_settings.JWT_EXPIRATION_DELTA,
        'isActive': user.is_active,
        'roles': list(user.groups.values_list('name', flat=True)),
        'owner': user.get_full_name()
    }

    if user.is_superuser:
        payload['isSuperuser'] = user.is_superuser

    return payload