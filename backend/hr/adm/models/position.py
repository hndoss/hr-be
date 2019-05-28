from django.db import models

class Position(models.Model):
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=120)
    
    department = models.ForeignKey('adm.Department', on_delete=models.CASCADE)

    class Meta:
        ordering = ('name',)
        
        def _str_(self):
            return self.name