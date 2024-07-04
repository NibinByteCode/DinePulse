class CartItem {
  final String name;
  final double price;
  int quantity;
  String cookingInstructions;

  CartItem({
    required this.name,
    required this.price,
    this.quantity = 1,
    this.cookingInstructions = '',
  });

  double get total => price * quantity;
}
