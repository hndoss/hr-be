from django.db import models

class Department(models.Model):
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=120)
 
    def __str__(self):
        return self.name