from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import Chat


class ChatSerializer(ModelSerializer):
    user = SerializerMethodField("get_name")
    class Meta:
        model = Chat
        fields = '__all__'
    def get_name(self, obj):
        return obj.user.username