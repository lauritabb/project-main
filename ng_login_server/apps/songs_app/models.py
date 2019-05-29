from django.db import models
from apps.log_reg.models import User

class SongManager(models.Manager):
    def validate(self, form):
        matching_title = Song.objects.filter(title= form['title'])
        print("*"*50)
        print("matching_title", matching_title)
        # if matching_title:
        #     title = matching_title[0]
        #     maching_artist = Song.objects.filter(artist=form['artist'])
        #     print("there is a title with that name")
        #     if
        if matching_title:
            return (False, ["there is a title with that name"])
        else:
            return (True, ['clear to go'])
    def easy_create(self, form):
        return Song.objects.create(
            title=form['title'],
            artist=form['artist'],
        )

class Song(models.Model):
    title = models.CharField(max_length=255)
    artist = models.CharField(max_length=255)
    playlist = models.ManyToManyField(User,related_name="songs")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = SongManager()
