# api/views.py
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Product, Category

# 1. Список всех продуктов
def products_list(request):
    products = Product.objects.all()
    data = []
    for product in products:
        data.append({
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category_id': product.category.id,
            'category_name': product.category.name
        })
    # ВОТ ЗДЕСЬ ДОБАВЬ safe=False
    return JsonResponse(data, safe=False)

# 2. Один продукт по ID (эта функция уже правильная, возвращает словарь)
def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    data = {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category_id': product.category.id,
        'category_name': product.category.name
    }
    return JsonResponse(data)  # Здесь safe не нужен, так как data - словарь

# 3. Список всех категорий
def categories_list(request):
    categories = Category.objects.all()
    data = []
    for category in categories:
        data.append({
            'id': category.id,
            'name': category.name
        })
    # ВОТ ЗДЕСЬ ДОБАВЬ safe=False
    return JsonResponse(data, safe=False)

# 4. Одна категория по ID (эта функция уже правильная, возвращает словарь)
def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    data = {
        'id': category.id,
        'name': category.name
    }
    return JsonResponse(data)

# 5. Список продуктов по категории
def products_by_category(request, id):
    category = get_object_or_404(Category, id=id)
    products = category.products.all()
    data = []
    for product in products:
        data.append({
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category_id': category.id,
            'category_name': category.name
        })
    # ВОТ ЗДЕСЬ ДОБАВЬ safe=False
    return JsonResponse(data, safe=False)