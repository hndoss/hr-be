from django.contrib import admin
from .models import Management, Department

class ManagementAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')

class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')

admin.site.register(Management, ManagementAdmin)
admin.site.register(Department, DepartmentAdmin)