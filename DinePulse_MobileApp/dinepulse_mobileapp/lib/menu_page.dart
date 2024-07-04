import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class MenuPage extends StatelessWidget {
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
      appBar: AppBar(
          title: const Text(
        'SELECT CATEGORY',
        style: TextStyle(
          color: Color.fromRGBO(203, 79, 41, 1),
          fontSize: 20,
          fontFamily: 'Calistoga',
        ),
      )),
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
              itemCount: 10, // Number of menu items
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
                      'Beef Cheese Burger $index',
                      style: const TextStyle(
                        color: Color.fromRGBO(203, 79, 41, 1),
                        fontSize: 15,
                        fontFamily: 'Calistoga',
                      ),
                    ),
                    subtitle: const Text(
                      'Price: \$12.99',
                      style: TextStyle(
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
                          builder: (context) => AlertDialog(
                            title: Text(
                              'Beef Cheese Burger $index',
                              textAlign: TextAlign.center,
                              style: const TextStyle(
                                color: Color.fromRGBO(203, 79, 41, 1),
                                fontSize: 16,
                                fontFamily: 'Calistoga',
                              ),
                            ),
                            content: Column(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceEvenly,
                                  children: [
                                    IconButton(
                                      icon: const Icon(
                                        Icons.remove,
                                        color: Color.fromRGBO(203, 79, 41, 1),
                                      ),
                                      onPressed: () {},
                                    ),
                                    const Text(
                                      '1',
                                      style: TextStyle(
                                        color: Color.fromRGBO(203, 79, 41, 1),
                                        fontSize: 14,
                                        fontFamily: 'Calistoga',
                                      ),
                                    ),
                                    IconButton(
                                      icon: const Icon(Icons.add,
                                          color:
                                              Color.fromRGBO(203, 79, 41, 1)),
                                      onPressed: () {},
                                    ),
                                  ],
                                ),
                                SizedBox(height: 15),
                                const Text(
                                  'TOTAL : \$12.99',
                                  style: TextStyle(
                                    color: Color.fromRGBO(203, 79, 41, 1),
                                    fontSize: 13,
                                    fontFamily: 'Calistoga',
                                  ),
                                ),
                                SizedBox(height: 10),
                                const Row(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Icon(Icons.delete_forever_rounded,
                                        color: Color.fromRGBO(203, 79, 41, 1)),
                                    SizedBox(width: 7),
                                    Text(
                                      'Remove item',
                                      style: TextStyle(
                                        color: Color.fromRGBO(203, 79, 41, 1),
                                        fontSize: 11,
                                        fontFamily: 'Calistoga',
                                      ),
                                    ),
                                  ],
                                ),
                              ],
                            ),
                            actions: [
                              TextButton(
                                onPressed: () {
                                  Navigator.pop(context);
                                  // Add item to cart
                                },
                                style: TextButton.styleFrom(
                                  alignment: Alignment.center,
                                ),
                                child: const Text(
                                  'ADD TO CART',
                                  style: TextStyle(
                                    color: Color.fromRGBO(203, 79, 41, 1),
                                    fontSize: 12,
                                    fontFamily: 'Calistoga',
                                  ),
                                ),
                              ),
                            ],
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

class CategoryButton extends StatelessWidget {
  final String label;
  final IconData icon;
  final double fontSize;
  final Color iconColor;
  final Color backgroundColor;
  final double borderRadius;

  const CategoryButton({
    required this.label,
    required this.icon,
    required this.iconColor,
    required this.fontSize,
    required this.backgroundColor,
    required this.borderRadius,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 8.0),
      child: ElevatedButton(
        onPressed: () {
          // Filter items by category
        },
        style: ElevatedButton.styleFrom(
          padding: EdgeInsets.symmetric(horizontal: 8.0, vertical: 4.0),
          backgroundColor: backgroundColor,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(borderRadius),
          ),
        ),
        child: Row(
          children: [
            Icon(
              icon,
              size: 20,
              color: iconColor,
            ),
            SizedBox(width: 4), //Space between icon and text
            Text(
              label,
              style: TextStyle(
                fontSize: fontSize,
                fontFamily: 'Calistoga',
                color: Colors.white,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
