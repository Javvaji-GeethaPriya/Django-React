from django import forms
from .models import Department, Employee

class DepartmentForm(forms.ModelForm):
    class Meta:
        model = Department
        fields = ['name']

class EmployeeForm(forms.ModelForm):
    class Meta:
        model = Employee
        fields = ['name', 'email', 'position', 'salary', 'department', 'description']

    def clean_description(self):
        description = self.cleaned_data.get('description')
        forbidden_words = ['toxic', 'badEmployee', 'Harmful']  # Replace with actual words

        # Check for forbidden words
        for word in forbidden_words:
            if word in description.lower():
                raise forms.ValidationError(f"The word '{word}' is not allowed in the description.")
        
        return description
