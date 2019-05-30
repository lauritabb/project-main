from django.shortcuts import render, redirect, HttpResponse
from django.core import serializers
from .models import User
from .models import Song
from .models import Count
import json

def index(request):
    data = serializers.serialize("json", Song.objects.all().order_by('-created_at'), indent=2, use_natural_foreign_keys=True)
    print("data on show", data)
    return HttpResponse(data, content_type="application/json")

def show(request,id):
    #show count playlist and song for show-song
    song = Song.objects.get(id=id)
    # print("*"*50)
    # print("test", test)
    result ={
        'song1' : serializers.serialize("json",[song], use_natural_foreign_keys=True),
        'playlist': serializers.serialize("json", song.playlist.all(), use_natural_foreign_keys=True),
        'count': serializers.serialize("json", Count.objects.filter(songcount=id),use_natural_foreign_keys=True)
    }
    # data = serializers.serialize("json", Song.objects.filter(id=id), indent=2, use_natural_foreign_keys=True)
    # data2 = serializers.serialize("json", Song.objects)
    # print("data:", data)
    return HttpResponse(json.dumps(result), status=200,content_type="application/json")

def showUser(request,id):
    #this is what we are doing 
    print("we are in showUser")
    users = User.objects.get(id=id)
    songs = users.songs.all()
    result ={
        'This_user_songs': serializers.serialize("json",[users], use_natural_foreign_keys=True),
        'playlist': serializers.serialize("json", songs, use_natural_foreign_keys=True),
        'count': serializers.serialize("json", Count.objects.filter(usercount=id),use_natural_foreign_keys=True)
    }
    return HttpResponse(json.dumps(result), status=200,content_type="application/json")

def create(request):
    # decode post data
    # print('*'*50)
    # print("is getting here")
    data = json.loads(request.body.decode())
    valid, result = Song.objects.validate(data)
    # print("*"*50)
    # print("valid: ", valid)
    if valid:
        song_info = Song.objects.easy_create(data)
        data = serializers.serialize("json", [song_info], indent=2, use_natural_foreign_keys=True)
        return HttpResponse(data, status=200, content_type='application/json')
    else:
        json_errors = json.dumps(result)
        return HttpResponse(json_errors, status=400, content_type="application/json")

def addPlaylist(request):
    buttonData = json.loads(request.body.decode())
    # buttonData = song_id,person_id
    songToAdd= Song.objects.get(id=buttonData['song_id'])
    userToPlaylist= User.objects.get(id=int(buttonData['person_id']))
    songToAdd.playlist.add(userToPlaylist)
    print("buttonData:", buttonData)

    if Count.objects.filter(songcount=songToAdd, usercount=userToPlaylist):
        countMany= Count.objects.filter(songcount=songToAdd, usercount=userToPlaylist)[0]
        countMany.count+=1
        countMany.save()
    else:
        Count.objects.create(songcount=songToAdd, usercount=userToPlaylist, count=1)
    songToAdd.total_times_added +=1
    songToAdd.save()
    # print("songToAdd", songToAdd)
    return HttpResponse("hello")