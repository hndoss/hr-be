from django.db import models

class Position(models.Model):
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=120)

    def _str_(self):
        return self.name