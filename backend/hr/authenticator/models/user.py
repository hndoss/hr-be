from django.db import models

class User(models.Model):
    user = models.CharField(max_length=60)
    password = models.CharField(max_length=120)

    def _str_(self):
        return self.name