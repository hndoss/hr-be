from django.contrib import admin
from .models import Management, Department, Position

class ManagementAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')

class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('name','description')
    
class PositionAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'department')
    
admin.site.register(Management, ManagementAdmin)
admin.site.register(Department, DepartmentAdmin)
admin.site.register(Position, PositionAdmin)