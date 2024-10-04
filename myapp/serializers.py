from rest_framework import serializers
from .models import Employee, Department

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'

class EmployeeSerializer(serializers.ModelSerializer):
    # Add the department field that uses DepartmentSerializer
    department = DepartmentSerializer(read_only=True)  # Set read_only if you don't want to allow updates

    class Meta:
        model = Employee
        fields = '__all__'
