# Generated by Django 4.0.3 on 2023-01-24 18:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0003_automobilevo_import_href'),
    ]

    operations = [
        migrations.AddField(
            model_name='automobilevo',
            name='sold',
            field=models.BooleanField(null=True),
        ),
    ]