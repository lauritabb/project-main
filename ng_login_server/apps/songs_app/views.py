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
    print('*'*50)
    print("is getting here")
    data = json.loads(request.body.decode())
    valid, result = Song.objects.validate(data)
    print("*"*50)
    print("valid: ", valid)
    if valid:
        song_info = Song.objects.easy_create(data)
        song = {
            'title': song_info.title,
            'id': song_info.id
        }
        json_songs = json.dumps(song)
        return HttpResponse(json_songs, status=200, content_type='application/json')
    else:
        json_errors = json.dumps(result)
        return HttpResponse(json_errors, status=400, content_type="application/json")