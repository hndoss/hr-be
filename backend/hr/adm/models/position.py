from django.db import models

class Position(models.Model):
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=120)  
    department = models.ForeignKey('adm.Department', on_delete=models.CASCADE)
    
    def __str__(self):
            return self.name