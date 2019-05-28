from django.contrib import admin
from .models import Management, Department, Role, Position

class ManagementAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')

class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('name','description')

class RoleAdmin(admin.ModelAdmin):
    list_display = ('name',)
    
class PositionAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    
admin.site.register(Management, ManagementAdmin)
admin.site.register(Department, DepartmentAdmin)
admin.site.register(Position, PositionAdmin)
admin.site.register(Role, RoleAdmin)