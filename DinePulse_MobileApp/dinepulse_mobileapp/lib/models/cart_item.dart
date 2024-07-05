class CartItem {
  final String name;
  final double price;
  final String imagePath;
  int quantity;
  String cookingInstructions;

  CartItem({
    required this.name,
    required this.price,
    required this.imagePath,
    this.quantity = 1,
    this.cookingInstructions = '',
  });

  double get total => price * quantity;
}
