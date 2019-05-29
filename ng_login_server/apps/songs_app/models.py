from django.db import models
from apps.log_reg.models import User

class SongManager(models.Manager):
    def validate(self, form):
        matching_title = Song.objects.filter(title= form['title'])
        # print("*"*50)
        # print("matching_title", matching_title.values())
        compareForm = form['artist']
        match = matching_title[0].artist
        # print("compareForm: ", compareForm)
        # print("match: ", match)
        if matching_title:
            # print("matching_title:", matching_title[0].artist)
            # print("form['artist']: ", form['artist'])
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
    playlist = models.ManyToManyField(User,related_name="songs")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = SongManager()

    def natural_key(self):
        return(f'{self.title} {self.artist} {self.playlist}')
