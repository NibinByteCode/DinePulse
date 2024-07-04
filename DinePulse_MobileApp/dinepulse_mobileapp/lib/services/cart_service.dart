import '../models/cart_item.dart';

class CartService {
  final List<CartItem> _items = [];

  List<CartItem> get items => List.unmodifiable(_items);

  void addItem(CartItem item) {
    _items.add(item);
  }

  void removeItem(CartItem item) {
    _items.remove(item);
  }

  void clearCart() {
    _items.clear();
  }
}

final cartService = CartService();
