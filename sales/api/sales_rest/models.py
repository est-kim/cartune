from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=200, unique=True, blank=True, null=True)
    sold = models.BooleanField(default=False)

    def __str__(self):
        return str(self.vin)

    def get_api_url(self):
        return reverse("api_automobile", kwargs={"vin": self.vin})


class SalesPerson(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.PositiveIntegerField(unique=True)

    def __str__(self):
        return str(self.name)

    def get_api_url(self):
        return reverse("api_salesperson", kwargs={"id": self.id})


class Customer(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=25, unique=True)

    def __str__(self):
        return str(self.name)

    def get_api_url(self):
        return reverse("api_customer", kwargs={"id": self.id})


class SalesRecord(models.Model):
    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sales_records",
        on_delete=models.CASCADE,
    )
    customer = models.ForeignKey(
        Customer,
        related_name="sales_records",
        on_delete=models.CASCADE,
    )
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sales_records",
        on_delete=models.CASCADE,
    )
    sales_price = models.DecimalField(max_digits=25, decimal_places=2)

    def __str__(self):
        return f'{self.sales_person} - {self.automobile}'

    def get_api_url(self):
        return reverse("api_sales", kwargs={"id": self.id})
