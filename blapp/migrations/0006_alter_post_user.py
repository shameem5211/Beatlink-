# Generated by Django 4.2.2 on 2023-07-25 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blapp', '0005_alter_post_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='user',
            field=models.CharField(max_length=100),
        ),
    ]
