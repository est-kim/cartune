# Generated by Django 4.0.3 on 2023-01-24 06:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0004_remove_appointment_vin_appointment_vin'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='date_time',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
