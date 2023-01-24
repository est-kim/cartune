from common.json import ModelEncoder

from .models import Technician, Appointment, AutomobileVO

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id",
        "vin",
        "import_href",
    ]

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "name",
        "employee_number",
    ]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "vin",
        "customer_name",
        "date_time",
        "technician",
        "reason",
        "vip",
        "completed",
        "in_progress",
    ]

    encoders = {
        "technician": TechnicianEncoder(),
    }
