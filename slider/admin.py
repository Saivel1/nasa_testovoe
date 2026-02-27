from django.contrib import admin
from django.utils.html import format_html
from adminsortable2.admin import SortableAdminMixin

from .models import SliderItem

admin.site.site_header = 'Управление сайтом'
admin.site.site_title = 'Администрирование'
admin.site.index_title = 'Панель управления'


@admin.register(SliderItem)
class SliderItemAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ('order', 'image_preview', 'title', 'is_active')
    list_display_links = ('title',)
    list_editable = ('is_active',)
    list_per_page = 20
    search_fields = ('title', 'description')
    fieldsets = (
        ('Основная информация', {
            'fields': ('title', 'description', 'image'),
        }),
        ('Настройки', {
            'fields': ('is_active', 'order'),
        }),
    )

    @admin.display(description='Превью')
    def image_preview(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" style="width:80px; height:50px; '
                'object-fit:cover; border-radius:4px;" />',
                obj.image.url,
            )
        return '—'
