import 'package:flutter/material.dart';
import '../widgets/custom_app_bar.dart';
import '../models/cart_item.dart';
import '../services/cart_service.dart';
import '../widgets/category_button.dart'; // Import the CategoryButton

class MenuPage extends StatefulWidget {
  @override
  _MenuPageState createState() => _MenuPageState();
}

class _MenuPageState extends State<MenuPage> {
  final List<CartItem> menuItems = List.generate(
    10,
    (index) => CartItem(name: 'Beef Cheese Burger $index', price: 12.99),
  );

  void _addToCart(CartItem item) {
    setState(() {
      cartService.addItem(item);
    });
  }

  @override
  Widget build(BuildContext context) {
    final Map<String, dynamic> args =
        ModalRoute.of(context)!.settings.arguments as Map<String, dynamic>;
    final int tableNumber = args['table'];
    final int customerCount = args['count'];

    OutlineInputBorder borderColor(Color input) {
      return OutlineInputBorder(
        borderRadius: BorderRadius.circular(9.0),
        borderSide: BorderSide(
          color: input,
        ),
      );
    }

    return Scaffold(
      appBar: CustomAppBar(
        title: 'SELECT CATEGORY',
        showCartIcon: true,
        showProfileIcon: true,
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  'Table: $tableNumber',
                  style: const TextStyle(
                    color: Color.fromRGBO(203, 79, 41, 1),
                    fontSize: 15,
                    fontFamily: 'Calistoga',
                  ),
                ),
                Text(
                  'Customers: $customerCount',
                  style: const TextStyle(
                    color: Color.fromRGBO(203, 79, 41, 1),
                    fontSize: 15,
                    fontFamily: 'Calistoga',
                  ),
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16.0),
            child: TextField(
              decoration: InputDecoration(
                hintText: 'Search...',
                border: borderColor(Color.fromRGBO(203, 79, 41, 1)),
                focusedBorder: borderColor(Color.fromRGBO(113, 36, 12, 1)),
                enabledBorder: borderColor(Color.fromRGBO(203, 79, 41, 1)),
              ),
            ),
          ),
          SizedBox(height: 10),
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 16.0),
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                children: [
                  CategoryButton(
                    label: 'All',
                    icon: Icons.category,
                    iconColor: Colors.white,
                    fontSize: 12,
                    backgroundColor: Color.fromRGBO(203, 79, 41, 1),
                    borderRadius: 8.0,
                  ),
                  CategoryButton(
                    label: 'Starters',
                    icon: Icons.restaurant_menu,
                    iconColor: Colors.white,
                    fontSize: 12,
                    backgroundColor: Color.fromRGBO(203, 79, 41, 1),
                    borderRadius: 8.0,
                  ),
                  CategoryButton(
                    label: 'Main Course',
                    icon: Icons.fastfood,
                    iconColor: Colors.white,
                    fontSize: 12,
                    backgroundColor: Color.fromRGBO(203, 79, 41, 1),
                    borderRadius: 8.0,
                  ),
                  CategoryButton(
                    label: 'Cold Drinks',
                    icon: Icons.local_drink,
                    iconColor: Colors.white,
                    fontSize: 12,
                    backgroundColor: Color.fromRGBO(203, 79, 41, 1),
                    borderRadius: 8.0,
                  ),
                  CategoryButton(
                    label: 'Hot Drinks',
                    icon: Icons.local_cafe,
                    iconColor: Colors.white,
                    fontSize: 12,
                    backgroundColor: Color.fromRGBO(203, 79, 41, 1),
                    borderRadius: 8.0,
                  ),
                  CategoryButton(
                    label: 'Desserts',
                    icon: Icons.cake,
                    iconColor: Colors.white,
                    fontSize: 12,
                    backgroundColor: Color.fromRGBO(203, 79, 41, 1),
                    borderRadius: 8.0,
                  ),
                ],
              ),
            ),
          ),
          Expanded(
            child: ListView.builder(
              padding: EdgeInsets.all(16.0),
              itemCount: menuItems.length,
              itemBuilder: (context, index) {
                return Card(
                  color: Color.fromRGBO(255, 244, 226, 1),
                  margin: EdgeInsets.symmetric(vertical: 8.0),
                  child: ListTile(
                    leading: Image.asset(
                      'assets/images/no-image-image.png',
                      width: 50,
                      height: 50,
                      fit: BoxFit.cover,
                    ),
                    title: Text(
                      menuItems[index].name,
                      style: const TextStyle(
                        color: Color.fromRGBO(203, 79, 41, 1),
                        fontSize: 15,
                        fontFamily: 'Calistoga',
                      ),
                    ),
                    subtitle: Text(
                      'Price: \$${menuItems[index].price.toStringAsFixed(2)}',
                      style: const TextStyle(
                        color: Color.fromRGBO(203, 79, 41, 1),
                        fontSize: 12,
                        fontFamily: 'Calistoga',
                      ),
                    ),
                    trailing: ElevatedButton(
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Color.fromRGBO(203, 79, 41, 1),
                        elevation: 0,
                        padding: EdgeInsets.zero,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(4.0),
                        ),
                      ),
                      child: const Text(
                        "ADD",
                        style: TextStyle(
                          fontSize: 11,
                          fontFamily: 'Calistoga',
                          color: Colors.white,
                        ),
                      ),
                      onPressed: () {
                        showDialog(
                          context: context,
                          builder: (context) => StatefulBuilder(
                            builder: (context, setState) {
                              return Dialog(
                                backgroundColor: Colors.transparent,
                                child: Container(
                                  decoration: BoxDecoration(
                                    color: Colors.white,
                                    borderRadius: BorderRadius.circular(10),
                                  ),
                                  padding: EdgeInsets.all(16.0),
                                  child: Column(
                                    mainAxisSize: MainAxisSize.min,
                                    children: [
                                      Text(
                                        menuItems[index].name,
                                        textAlign: TextAlign.center,
                                        style: const TextStyle(
                                          color: Color.fromRGBO(203, 79, 41, 1),
                                          fontSize: 16,
                                          fontFamily: 'Calistoga',
                                        ),
                                      ),
                                      SizedBox(height: 15),
                                      Row(
                                        mainAxisAlignment:
                                            MainAxisAlignment.spaceEvenly,
                                        children: [
                                          IconButton(
                                            icon: const Icon(
                                              Icons.remove,
                                              color: Color.fromRGBO(
                                                  203, 79, 41, 1),
                                            ),
                                            onPressed: () {
                                              setState(() {
                                                if (menuItems[index].quantity >
                                                    1) {
                                                  menuItems[index].quantity--;
                                                }
                                              });
                                            },
                                          ),
                                          Text(
                                            menuItems[index]
                                                .quantity
                                                .toString(),
                                            style: const TextStyle(
                                              color: Color.fromRGBO(
                                                  203, 79, 41, 1),
                                              fontSize: 14,
                                              fontFamily: 'Calistoga',
                                            ),
                                          ),
                                          IconButton(
                                            icon: const Icon(
                                              Icons.add,
                                              color: Color.fromRGBO(
                                                  203, 79, 41, 1),
                                            ),
                                            onPressed: () {
                                              setState(() {
                                                menuItems[index].quantity++;
                                              });
                                            },
                                          ),
                                        ],
                                      ),
                                      SizedBox(height: 15),
                                      Text(
                                        'TOTAL : \$${(menuItems[index].price * menuItems[index].quantity).toStringAsFixed(2)}',
                                        style: const TextStyle(
                                          color: Color.fromRGBO(203, 79, 41, 1),
                                          fontSize: 13,
                                          fontFamily: 'Calistoga',
                                        ),
                                      ),
                                      SizedBox(height: 10),
                                      Row(
                                        mainAxisAlignment:
                                            MainAxisAlignment.spaceEvenly,
                                        children: [
                                          TextButton(
                                            onPressed: () {
                                              Navigator.pop(context);
                                            },
                                            child: const Text(
                                              'CANCEL',
                                              style: TextStyle(
                                                color: Color.fromRGBO(
                                                    203, 79, 41, 1),
                                                fontSize: 12,
                                                fontFamily: 'Calistoga',
                                              ),
                                            ),
                                          ),
                                          TextButton(
                                            onPressed: () {
                                              Navigator.pop(context);
                                              _addToCart(menuItems[index]);
                                            },
                                            child: const Text(
                                              'ADD TO CART',
                                              style: TextStyle(
                                                color: Color.fromRGBO(
                                                    203, 79, 41, 1),
                                                fontSize: 12,
                                                fontFamily: 'Calistoga',
                                              ),
                                            ),
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                                ),
                              );
                            },
                          ),
                        );
                      },
                    ),
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
