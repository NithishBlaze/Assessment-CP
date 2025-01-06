from rest_framework import serializers
from .models import chefDetails

class chefSerializer(serializers.ModelSerializer):
    class Meta:
        model = chefDetails
        fields = '__all__'
        read_only_field = {'id'}