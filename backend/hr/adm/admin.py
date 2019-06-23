from django.contrib import admin
from .models import Management, Department, Job
from import_export import resources
from import_export.admin import ImportExportModelAdmin


class DepartmentResource(resources.ModelResource):

    class Meta:
        model = Department


class ManagementAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')


class DepartmentAdmin(ImportExportModelAdmin):
    list_display = ('name', 'description')
    resource_class = DepartmentResource


class JobAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')


admin.site.register(Management, ManagementAdmin)
admin.site.register(Department, DepartmentAdmin)
admin.site.register(Job, JobAdmin)