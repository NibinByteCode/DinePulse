import 'package:flutter/material.dart';
import '../models/cart_item.dart';
import '../services/cart_service.dart';
import '../widgets/custom_app_bar.dart';

class CartPage extends StatefulWidget {
  @override
  _CartPageState createState() => _CartPageState();
}

class _CartPageState extends State<CartPage> {
  void _removeItem(CartItem item) {
    setState(() {
      cartService.removeItem(item);
    });
  }

  void _showRemoveConfirmationDialog(CartItem item) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Remove Item'),
        content: const Text(
            'Are you sure you want to remove this item from the cart?'),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.pop(context);
            },
            child: const Text('No'),
          ),
          TextButton(
            onPressed: () {
              Navigator.pop(context);
              _removeItem(item);
            },
            child: const Text('Yes'),
          ),
        ],
      ),
    );
  }

  void _updateQuantity(CartItem item, int quantity) {
    setState(() {
      if (quantity > 0) {
        cartService.updateQuantity(item, quantity);
      }
    });
  }

  void _confirmOrder() {
    if (cartService.itemCount == 0) {
      _showEmptyCartDialog();
    } else {
      Navigator.pushNamed(context, '/checkout');
    }
  }

  void _showEmptyCartDialog() {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Empty Cart'),
        content: const Text('There are no items in the cart.'),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.pop(context);
            },
            child: const Text('OK'),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(
        title: 'CART',
        showProfileIcon: true,
      ),
      body: Column(
        children: [
          Expanded(
            child: ListView.builder(
              padding: EdgeInsets.all(16.0),
              itemCount: cartService.items.length,
              itemBuilder: (context, index) {
                final item = cartService.items[index];
                return Card(
                  margin: EdgeInsets.symmetric(vertical: 8.0),
                  child: ListTile(
                    title: Text(item.name),
                    subtitle: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            IconButton(
                              icon: Icon(Icons.remove),
                              onPressed: () {
                                _updateQuantity(item, item.quantity - 1);
                              },
                            ),
                            Text(
                                '${item.quantity} x \$${item.price.toStringAsFixed(2)}'),
                            IconButton(
                              icon: Icon(Icons.add),
                              onPressed: () {
                                _updateQuantity(item, item.quantity + 1);
                              },
                            ),
                          ],
                        ),
                        Text('Total: \$${item.total.toStringAsFixed(2)}'),
                        TextField(
                          decoration: InputDecoration(
                            labelText: 'Cooking Instructions',
                          ),
                          onChanged: (value) {
                            // Save cooking instructions if needed
                          },
                        ),
                      ],
                    ),
                    trailing: IconButton(
                      icon: Icon(Icons.delete, color: Colors.red),
                      onPressed: () {
                        _showRemoveConfirmationDialog(item);
                      },
                    ),
                  ),
                );
              },
            ),
          ),
          Padding(
            padding: EdgeInsets.all(16.0),
            child: Column(
              children: [
                Text(
                  'TOTAL: \$${cartService.totalPrice.toStringAsFixed(2)}',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
                SizedBox(height: 10),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    ElevatedButton(
                      onPressed: () {
                        Navigator.pushNamed(context, '/menu', arguments: {
                          'table': 1,
                          'count': 1
                        }); // Ensure arguments if required
                      },
                      child: Text('CONTINUE SHOPPING'),
                    ),
                    ElevatedButton(
                      onPressed: _confirmOrder,
                      child: Text('CONFIRM ORDER'),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
