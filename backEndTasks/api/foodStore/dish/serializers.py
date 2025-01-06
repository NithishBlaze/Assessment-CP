from rest_framework import serializers
from .models import dishDetails
from chef.serializers import chefSerializer

class dishSerializer(serializers.ModelSerializer):
    chef_id = serializers.IntegerField(write_only = True)
    class Meta:
        model = dishDetails
        fields = ['dish_name','rating','chef_id']
        read_only_fields = ('id',)
     