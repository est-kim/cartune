from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .encoders import (
    AutomobileVOEncoder,
    SalesPersonEncoder,
    CustomerEncoder,
    SalesRecordEncoder,
)
from .models import AutomobileVO, SalesPerson, Customer, SalesRecord


@require_http_methods(["GET", "POST"])
def api_sales_persons(request):
    if request.method == "GET":
        sales_persons = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_persons": sales_persons},
            encoder = SalesPersonEncoder,
            safe=False,
        )
    else:
        try:
            content = json.loads(request.body)
            sales_person = SalesPerson.objects.create(**content)
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"message": "Could not create a sales person"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET", "PUT"])
def api_sales_person(request, id):
    if request.method == "GET":
        try:
            sales_person = SalesPerson.objects.get(id=id)
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False
            )
        except SalesPerson.DoesNotExist:
            return JsonResponse({"message": "Sales person does not exist"})
    elif request.method == "DELETE":
        try:
            sales_person = SalesPerson.objects.get(id=id)
            sales_person.delete()
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except SalesPerson.DoesNotExist:
            return JsonResponse({"message": "Sales person does not exist"})
    else:
        try:
            content = json.loads(request.body)
            sales_person = SalesPerson.objects.get(id=id)

            props = ["name"]
            for prop in props:
                if prop in content:
                    setattr(sales_person, prop, content[prop])
            sales_person.save()
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except SalesPerson.DoesNotExist:
            response = JsonResponse({"message": "Sales person does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET", "POST"])
def api_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder = CustomerEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"message": "Could not create a customer"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET"])
def api_customer(request, id):
    if request.method == "GET":
        try:
            customer = Customer.objects.get(id=id)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Customer does not exist"})
    elif request.method == "DELETE":
        try:
            customer = Customer.objects.get(id=id)
            customer.delete()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Customer does not exist"})


@require_http_methods(["GET", "POST"])
def api_sales(request):
    if request.method == "GET":
        sales_records = SalesRecord.objects.all()
        for sales_record in sales_records:
            sales_record.sales_price = float(sales_record.sales_price)
        return JsonResponse(
            {"sales_records": sales_records},
            encoder = SalesRecordEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        automobile = AutomobileVO.objects.get(import_href=content["automobile"])
        
        if automobile.sold is False:
            try:
                content["automobile"] = AutomobileVO.objects.get(import_href=content["automobile"])
                # content["automobile"] = AutomobileVO.objects.get(vin=content["automobile"])
            except AutomobileVO.DoesNotExist:
                return JsonResponse(
                    {"message": "Automobile does not exist"},
                    status=400
                )
            try:
                content["customer"] = Customer.objects.get(name=content["customer"])
            except Customer.DoesNotExist:
                return JsonResponse(
                    {"message": "Customer does not exist"},
                    status=400
                )
            try:
                content["sales_person"] = SalesPerson.objects.get(name=content["sales_person"])
            except SalesPerson.DoesNotExist:
                return JsonResponse(
                    {"message": "Sales person does not exist"},
                    status=400
                )
            automobile.sold = True
            automobile.save()
            sales_record = SalesRecord.objects.create(**content)
            return JsonResponse(
                sales_record,
                encoder=SalesRecordEncoder,
                safe=False
            )
        else:
            return JsonResponse(
                {"message": "This car is no longer available."},
                status=400,
            )



@require_http_methods(["DELETE", "GET", "PUT"])
def api_sale(request, id):
    if request.method == "GET":
        try:
            sales_record = SalesRecord.objects.get(id=id)
            sales_record.sales_price = float(sales_record.sales_price)
            return JsonResponse(
                sales_record,
                encoder=SalesRecordEncoder,
                safe=False,
            )
        except SalesRecord.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid sales record"},
                status=400,
            )
    elif request.method == "DELETE":
        count, _ = SalesRecord.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        try:
            content["sales_person"] = SalesPerson.objects.get(name=content["sales_person"])
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Sales person does not exist"},
                status=400
            )
        try:
            content["customer"] = Customer.objects.get(name=content["customer"])
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer does not exist"},
                status=400
            )

        SalesRecord.objects.filter(id=id).update(**content)
        sales_record = SalesRecord.objects.get(id=id)
        return JsonResponse(
            sales_record,
            encoder=SalesRecordEncoder,
            safe=False
        )


@require_http_methods(["GET"])
def api_automobiles(request):
    if request.method == "GET":
        automobiles = AutomobileVO.objects.all()
        return JsonResponse(
            automobiles,
            encoder = AutomobileVOEncoder,
            safe=False,
        )
