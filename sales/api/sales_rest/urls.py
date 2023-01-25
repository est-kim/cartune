from django.urls import path
from .views import (
    api_sale,
    api_sales,
    api_sales_person,
    api_sales_persons,
    api_customer,
    api_customers,
    api_automobiles,
)

urlpatterns = [
    path("sales/<int:id>/", api_sale, name="api_sale"),
    path("sales/", api_sales, name="api_sales"),
    path("salespersons/<int:id>/", api_sales_person, name="api_sales_person"),
    path("salespersons/", api_sales_persons, name="api_sales_persons"),
    path("customers/<int:id>/", api_customer, name="api_customer"),
    path("customers/", api_customers, name="api_customers"),
    path("automobiles/", api_automobiles, name="api_automobiles"),
]
