# Generated by Django 4.0.3 on 2023-01-24 19:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0011_rename_technician_name_appointment_technician_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appointment',
            old_name='VIN',
            new_name='vin',
        ),
    ]