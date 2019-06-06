from django.contrib import admin
from .models import Management, Department, Job

class ManagementAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')

class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('name','description')
    
class JobAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    
admin.site.register(Management, ManagementAdmin)
admin.site.register(Department, DepartmentAdmin)
admin.site.register(Job, JobAdmin)