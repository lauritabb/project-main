# Generated by Django 2.2.1 on 2019-05-29 18:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('log_reg', '0002_auto_20190524_1534'),
        ('songs_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='song',
            name='total_times_added',
            field=models.IntegerField(default=0),
        ),
        migrations.CreateModel(
            name='Count',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('count', models.IntegerField(default=0)),
                ('songcount', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='songcount', to='songs_app.Song')),
                ('usercount', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='usercount', to='log_reg.User')),
            ],
        ),
    ]
