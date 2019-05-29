from django.db import models
from apps.log_reg.models import User

class SongManager(models.Manager):
    def validate(self, form):
        matching_title = Song.objects.filter(title= form['title'])
        print("*"*50)
        print("matching_title", matching_title.values())
        if matching_title:
            print("matching_title:", matching_title[0].artist)
            print("form['artist']: ", form['artist'])
            compareForm = form['artist']
            match = matching_title[0].artist
            print("compareForm: ", compareForm)
            print("match: ", match)
            if match == compareForm:
                print("gets here")
                return (False, ['there is one'])
            else:
                return (True, ['clear to go'])
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
    playlist = models.ManyToManyField(User,related_name="songs") #foreign key into users table
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    total_times_added = models.IntegerField() #increments total no. times a song is "liked"

    objects = SongManager()

    def natural_key(self):
        return(f'{self.title} {self.artist} {self.playlist}')

class Count(models.Model):
    usercount = models.ForeignKey(User, related_name="usercount", on_delete=models.CASCADE)
    songcount = modes.ForeignKey(Song, related_name="songcount", on_delete=models.CASCADE)
    count = models.IntegerField(default=0)
    def __repr__(self):
    return f'{self.usercount.first_name} {self.songcount.title} {self.count}'


