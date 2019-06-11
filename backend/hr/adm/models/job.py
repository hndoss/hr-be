from django.db import models

class Job(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=120)  
        
    def __str__(self):
        return self.name