from django.db import models

class Management(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=120)

    def _str_(self):
        return self.name