# Generated by Django 4.0.3 on 2023-01-24 07:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0007_remove_appointment_cancelled_appointment_in_progress_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='technician',
            old_name='name',
            new_name='technician_name',
        ),
    ]