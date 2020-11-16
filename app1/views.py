from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Job, Collection


def index(request):
    collections = Collection.objects.all()
    context = {'collections': collections}
    return render(request, 'app1/index.html', context)

def index2(request):
    return render(request, 'app1/index 2.html')

def detail(request, collection_id):

    #try:
    #    collection = Collection.objects.get(pk=collection_id)

    #except Collection.DoesNotExist:
    #    raise Http404("Collection does not exist")

    collection = get_object_or_404(Collection, pk=collection_id)

    return render(request, 'app1/detail.html', {'collection': collection})

def results(request, job_id):
    response = "You're looking at the results of Job %s."
    return HttpResponse(response % job_id)
