from django.contrib import admin
from .models import Chat, Room

# Register your models here.
admin.site.register(Room)
admin.site.register(Chat)