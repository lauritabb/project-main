from django.shortcuts import render, redirect, HttpResponse
from django.core import serializers
# from .models import User
from .models import Song
import json

def index(request):
    data = serializers.serialize("json", Song.objects.all(), indent=2)
    return HttpResponse(data, content_type="application/json")

def show(request,id):
    data = serializers.serialize("json", Song.objects.filter(id=id), indent=2)
    return HttpResponse(data, status=200,content_type="application/json")

def create(request):
    # decode post data
    data = json.loads(request.body.decode())
    valid, result = Song.objects.validate(data)
    print("*"*50)
    print("valid: ", valid)
    # if errors:
    #     return HttpResponse(json.dumps(errors), status=400, content_type="application/json")
    # # create a user, return user info as jason
    # user_info = User.objects.easy_create(data)
    # # json_users = serializers.serialize('json',[user]) 
    # user = {
    #     'first_name': user_info.first_name,
    #     'id': user_info.id
    # }
    # json_user = json.dumps(user)
    # return HttpResponse(json_user, status=200, content_type='application/json')
    return HttpResponse("we are in create of songs")
