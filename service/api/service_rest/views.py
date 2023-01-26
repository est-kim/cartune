from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json

from .models import Technician, Appointment, AutomobileVO
from.encoders import (
    TechnicianEncoder,
    AppointmentEncoder,
    )

@require_http_methods(["GET", "POST"])
def api_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
                )
    else: #POST
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Technician could not be created. The employee number you are trying to use is already in use."},
                status=400
            )

@require_http_methods(["GET", "DELETE", "PUT"])
def api_technician(request, pk):
    if request.method == "GET":
        try:
            technician = Technician.objects.get(id=pk)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid request. The technician you are looking for does not exist."},
                status=404
            )
    elif request.method == "DELETE":
        try:
            count, _ = Technician.objects.filter(id=pk).delete()
            return JsonResponse(
                {"deleted": count > 0}
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Delete could not be performed. The technician you are trying to delete does not exist."}
                status=404
            )
    else: #PUT
        try:
            content = json.loads(request.body)
            Technician.objects.filter(id=pk).update(**content)
            technician = Technician.objects.get(id=pk)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message":"Update could not be performed. The technician you are trying to update does not exist."},
                status=404
            )

@require_http_methods(["GET", "POST"])
def api_appointments(request, vin=None):
    if request.method == "GET":
        if vin == None:
            appointments = Appointment.objects.all()
            return JsonResponse(
                {"appointments": appointments},
                encoder=AppointmentEncoder,
            )
    else: #POST
        content = json.loads(request.body)
        try:
            name = content["technician"]
            technician = Technician.objects.get(name=name)
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "The appointment could not be created. The technician that you are using does not exist."},
                status=400
            )
        if AutomobileVO.objects.filter(vin=content["vin"]).exists():
            content["vip"] = True
        else:
            content["vip"] = False

        appointment = Appointment.objects.create(**content)

        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )

@require_http_methods(["GET", "DELETE", "PUT"])
def api_appointment(request, pk):
    if request.method == "GET":
        try:
            appointment = Appointment.objects.get(id=pk)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid request. The appointment you are looking for does not exist."},
                status=404
            )
    elif request.method == "DELETE":
        try:
            count, _ = Appointment.objects.filter(id=pk).delete()
            return JsonResponse(
                {"deleted": count > 0}
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Delete could not be performed. The appointment you are trying to delete does not exist."},
                status=404
            )
    else: #PUT
        try:
            content = json.loads(request.body)
            Appointment.objects.filter(id=pk).update(**content)
            appointment = Appointment.objects.get(id=pk)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message":"Update could not be performed. The appointment you are trying to update does not exist."},
                status=404
            )

@require_http_methods(["GET"])
def api_appointments_by_vin(request, vin):
    if request.method == "GET":
        try:
            appointments_by_vin = Appointment.objects.filter(vin=vin)
            return JsonResponse(
                appointments_by_vin,
                encoder=AppointmentEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid request. The appointment you are trying to looking for by VIN number does not exist."},
                status=404
            )
