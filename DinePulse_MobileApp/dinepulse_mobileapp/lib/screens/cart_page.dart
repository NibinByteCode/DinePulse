import 'package:flutter/material.dart';
import '../services/cart_service.dart';
import '../widgets/custom_app_bar.dart';

class CartPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(
        title: 'CART',
        showProfileIcon: true, // Only show profile icon on CartPage
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
                    subtitle: Text(
                        'Quantity: ${item.quantity} \$${item.price.toStringAsFixed(2)}'),
                    trailing: Text('Total: \$${item.total.toStringAsFixed(2)}'),
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
                  'TOTAL: \$${cartService.items.fold(0.0, (total, current) => total + current.total).toStringAsFixed(2)}',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
                SizedBox(height: 10),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    ElevatedButton(
                      onPressed: () {
                        Navigator.pushNamed(context, '/menu');
                      },
                      child: Text('CONTINUE SHOPPING'),
                    ),
                    ElevatedButton(
                      onPressed: () {
                        Navigator.pushNamed(context, '/checkout');
                      },
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
