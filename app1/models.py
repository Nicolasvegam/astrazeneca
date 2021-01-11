from django.db import models


class Collection(models.Model): #id by default
    location = models.CharField(max_length=200)    #location
    source = models.CharField(max_length=1000)    #source
    role = models.CharField(max_length=200)   #role
    pub_date = models.DateTimeField('date published') #time

    def __str__(self):
        return '|   Source:     {}  |   Location:    {}     |    Role:       {}  |'.format(self.source, self.location, self.role)


class Job(models.Model): #id by default
    collection = models.ForeignKey(Collection, on_delete=models.CASCADE)
    description = models.CharField(max_length=200000)    #text

    def __str__(self):
        return '|   id:     {}  |     description: {:25s}   |'.format(self.id,  self.description)
