class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity
    
    def get_total_value(self):
        return self.price * self.quantity
    
    def __str__(self):
        return f"Product: {self.name}, Price: {self.price}"

class DiscountedProduct(Product):
    def __init__(self, name, price, quantity, discount):
        super().__init__(name, price, quantity)
        self.discount = discount
    
    def get_total_value(self):
        total = super().get_total_value()
        return total * (1 - self.discount)

product = Product("Laptopp", 150000, 2)
discounted_product = DiscountedProduct("phone", 150000, 2, 0.2)

print(product, product.get_total_value())
print(discounted_product, discounted_product.get_total_value())

