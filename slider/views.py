from django.shortcuts import render
from .models import SliderItem


def index(request):
    slides = SliderItem.objects.filter(is_active=True).select_related('image')
    return render(request, 'slider/index.html', {'slides': slides})
