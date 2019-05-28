from django.db import models

class Employee(models.Model):
    name = models.CharField(max_length=60)
    email = models.EmailField(blank=True, unique=True)
    salary = models.FloatField()
    
    department = models.ForeignKey('adm.Department', on_delete=models.CASCADE)
    role = models.ForeignKey('adm.Role', on_delete=models.CASCADE)
        
    def _str_(self):
        return self.name