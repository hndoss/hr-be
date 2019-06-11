from django.db import models


class Absence(models.Model):
    id = models.AutoField(primary_key=True)
    requester = models.ForeignKey(
        'human_resources.userprofile', related_name='absences', on_delete=models.CASCADE)
    state = models.CharField(max_length=60)
    kind = models.CharField(max_length=60)
    start = models.CharField(max_length=60)
    ending = models.CharField(max_length=60)

    def __str__(self):
        return self.id
