from django.db import models
from django.core.exceptions import ValidationError

#Department Model
class Department(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

# Employee Model
class Employee(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField()
    position = models.CharField(max_length=50,null = True)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    department = models.ForeignKey(Department, on_delete=models.CASCADE, null=True)
    description = models.TextField(null = True)  # Add this field

    # List of forbidden words
    forbidden_words = ['toxic', 'badEmployee', 'Harmful']  # Example toxic words

    def clean(self):
        # Validation logic for description
        if self.description:
            for word in self.forbidden_words:
                if word in self.description.lower():
                    raise ValidationError(f"The word '{word}' is not allowed in the description.")
                
    def __str__(self):
        return self.name
