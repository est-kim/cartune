from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=200, unique=True, blank=True)

    def __str__(self):
        return str(self.vin)

    # def get_api_url(self):
    #     return reverse("api_automobile", kwargs={"pk": self.id})

class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.PositiveIntegerField(unique=True)

    def __str__(self):
        return f"{self.name}, {self.employee_number}"

    def get_api_url(self):
        return reverse("api_technician", kwargs={"pk": self.id})

class Appointment(models.Model):
    vin = models.CharField(max_length=17, null=True)
    customer_name = models.CharField(max_length=100)
    date_time = models.DateTimeField(auto_now=False, auto_now_add=False, null=True, blank = True)

    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE
    )

    reason = models.CharField(max_length=100)
    completed = models.BooleanField(default=False, null=True)
    in_progress = models.BooleanField(default=True, null=True)
    vip = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.customer_name} on {self.date_time}"

    def get_api_url(self):
        return reverse("api_appointment", kwargs={"pk": self.id})
