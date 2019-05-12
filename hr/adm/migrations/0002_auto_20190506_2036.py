# Generated by Django 2.2.1 on 2019-05-06 20:36

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('adm', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='management',
            name='description',
            field=models.CharField(default=django.utils.timezone.now, max_length=120),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='management',
            name='name',
            field=models.CharField(max_length=60),
        ),
    ]