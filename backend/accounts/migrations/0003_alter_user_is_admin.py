# Generated by Django 5.0.1 on 2024-02-03 23:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_alter_user_is_admin'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='is_admin',
            field=models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site and has more privileges than staff.', verbose_name='admin status'),
        ),
    ]
