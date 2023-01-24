from common.json import ModelEncoder
from .models import AutomobileVO, SalesPerson, SalesRecord, Customer


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id",
        "vin",
        "sold",
        "import_href",
    ]


class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "name",
        "employee_number",
        "id",
    ]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone_number",
        "id",
    ]


class SalesRecordEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "id",
        "sales_price",
        # "sales_person",
        # "customer",
        # "automobile",
    ]

    def get_extra_data(self, o):
        return {
            "sales_person": o.sales_person.name,
            "customer": o.customer.name,
            "automobile": o.automobile.vin
            }

    encoders = {
        "sales_person": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
        "automobile": AutomobileVOEncoder()
    }
