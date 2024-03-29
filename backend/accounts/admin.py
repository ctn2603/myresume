# Third-party imports
from django import forms
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.core.exceptions import ValidationError
from django.http.request import HttpRequest

# Internal imports
from .models import User

class UserCreationForm(forms.ModelForm):
    """
    A form for creating new users. Includes all the required
    fields, plus a repeated password.
    Document: https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/
    """

    password1 = forms.CharField(label="Password", widget=forms.PasswordInput)
    password2 = forms.CharField(label="Password confirmation", widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ["email"]

    def clean(self):
        cleaned_data = super().clean()
        password1 = cleaned_data.get('password1')
        password2 = cleaned_data.get('password2')
        if password1 and password2 and password1 != password2:
            raise ValidationError("Passwords don't match")
        return cleaned_data

    def save(self, commit=True):
        # Save the provided password in hashed format
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user

class UserChangeForm(forms.ModelForm):
    """A form for updating users. Includes all the fields on
    the user, but replaces the password field with admin's
    disabled password hash display field.
    """

    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields = ["username", "email", "password", "is_staff", "is_admin"]

class UserAdmin(BaseUserAdmin):
    """
    Permission links: 
    https://docs.djangoproject.com/en/5.0/topics/auth/default/#how-to-log-a-user-in
    https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin
    """

    # The forms to add and change user instances
    form = UserChangeForm
    add_form = UserCreationForm

    list_display = ["username", "email", "first_name", "last_name", "is_staff", "is_admin", "is_superuser"]
    list_filter = ["is_staff", "is_admin", "is_superuser"]
    fieldsets = [
        ("Credentials", {"fields": ["email", "password", "username"]}),
        ("Personal info", {"fields": ['first_name', 'last_name', 'phone']}),
        ("Permissions", {"fields": ["is_staff", "is_admin", "is_superuser", "groups", "user_permissions",]}),
        ("Important dates", {"fields": ("last_login", "date_joined")}),
    ]

    add_fieldsets = [
        (
            None,
            {
                "classes": ["wide"],
                "fields": ["username", "email", "password1", "password2"],
            },
        ),
    ]
    search_fields = ["email"]
    ordering = ["email"]
    filter_horizontal = [
        "groups",
        "user_permissions",
    ]
    # readonly_fields = ['email']

    def has_add_permission(self, request: HttpRequest) -> bool:
        return request.user.has_perm('accounts.add_user')
    
    def has_delete_permission(self, request: HttpRequest, obj=...) -> bool:
        return request.user.has_perm('accounts.delete_user')
    
    def has_change_permission(self, request: HttpRequest, obj=...) -> bool:
        return request.user.has_perm('accounts.change_user')
    
    def has_view_permission(self, request: HttpRequest, obj=...) -> bool:
        return request.user.has_perm('accounts.view_user')


# Register your models here.
admin.site.register(User, UserAdmin)