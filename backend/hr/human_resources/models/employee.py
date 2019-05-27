from django.db import models

class Employee(models.Model):
    name = models.CharField(max_length=60)
    email = models.EmailField(blank=True, unique=True)
    salary = models.FloatField()
        
    def _str_(self):
        return self.name