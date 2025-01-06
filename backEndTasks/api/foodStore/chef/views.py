from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import chefDetails
from .serializers import chefSerializer
from rest_framework import status,parsers
from rest_framework.exceptions import APIException
from rest_framework.response import Response

# Create your views here.
class ChefViewSet(ModelViewSet):
    queryset = chefDetails.objects.all()
    serializer_class = chefSerializer

    def get_serializer_class(self):
        if self.action == 'list':
            return chefSerializer
        if self.action == 'create':
            return chefSerializer
        return self.serializer_class
    
   
    #get all chefs

    def list(self,request):
        try:
            chef_objs = chefDetails.objects.all()
            serializer = self.get_serializer(chef_objs, many = True)

            return Response({
                'status':status.HTTP_200_OK,
                'data': serializer.data
            })

        except Exception as e:
            print(e)
            raise APIException({
                'message':APIException.default_detail,
                'status': APIException.status_code
            })

    #add chef
    def create(self,request):
        try:
            serializer =self.get_serializer(data=request.data)

            if not serializer.is_valid():
                print(serializer.errors)
                return Response({
                    'status':status.HTTP_400_BAD_REQUEST,
                    'data': serializer.errors,
                    'message':'Invalid data'
                })
            serializer.save()
            

            return Response({
                'status':status.HTTP_201_CREATED,
                'data': serializer.data,
                'messaage':'chef added successfully'
            })

        except Exception as e:
            print(e)
            raise APIException({
                'message':APIException.default_detail,
                'status': APIException.status_code
            })

    # get single chef
    def retrieve(self,request,pk=None):
        try:
            id = pk
            if id is not None:

                #chef_objs = chef.objects.all()
                chef_objs = self.get_object()
                serializer = self.get_serializer(chef_objs)

            return Response({
                'status':status.HTTP_200_OK,
                'data': serializer.data
            })

        except Exception as e:
            print(e)
            raise APIException({
                'message':APIException.default_detail,
                'status': APIException.status_code
            })

    #update all fields of chef
    def update(self,request, pk=None):
        try:
            #chef_objs = chef.objects.all()
            chef_objs = self.get_object()
            serializer = self.get_serializer(chef_objs,data=request.data, partial=False)

            if not serializer.is_valid():
                print(serializer.errors)
                return Response({
                    'status':status.HTTP_400_BAD_REQUEST,
                    'data': serializer.errors,
                    'message':'Invalid data'
                })
            serializer.save()

            return Response({
                'status':status.HTTP_200_OK,
                'data': serializer.data,
                'messaage':'chef updated successfully'
            })

        except Exception as e:
            print(e)
            raise APIException({
                'message':APIException.default_detail,
                'status': APIException.status_code
            })

    #update specific fields

    def partial_update(self,request, pk=None):
        try:
            #chef_objs = chef.objects.all()
            chef_objs = self.get_object()
            serializer = self.get_serializer(chef_objs,data=request.data,partial = True)

            if not serializer.is_valid():
                print(serializer.errors)
                return Response({
                    'status':status.HTTP_400_BAD_REQUEST,
                    'data': serializer.errors,
                    'message':'Invalid data'
                })
            serializer.save()

            return Response({
                'status':status.HTTP_200_OK,
                'data': serializer.data,
                'messaage':'chef updated successfully'
            })

        except Exception as e:
            print(e)
            raise APIException({
                'message':APIException.default_detail,
                'status': APIException.status_code
            })

    def destroy(self, request,pk):
        try:
            id=pk
            chef_obj = self.get_object()
            chef_obj.delete()
            return Response({
                'status':status.HTTP_200_OK,
                'messaage':'chef deleted successfully'
            })

        except Exception as e:
            print(e)
            raise APIException({
                'message':APIException.default_detail,
                'status': APIException.status_code
            })