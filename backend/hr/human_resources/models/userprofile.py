from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class UserProfile(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.OneToOneField(
        User, related_name='profile', on_delete=models.CASCADE)
    salary = models.FloatField(null=True, blank=True)
    job = models.ForeignKey(
        'adm.Job', on_delete=models.CASCADE, null=True, blank=True)
    department = models.ForeignKey(
        'adm.Department', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.id


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
