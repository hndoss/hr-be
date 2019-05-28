from rest_framework import permissions

class BasePermission(permissions.BasePermission):

    def has_permission(self, request, view):
        user = request.user
        
        if not hasattr(view, 'allowed_groups'):
            return True
            
        return user.is_staff or user.groups.filter(
            name__in=view.allowed_groups).exists()