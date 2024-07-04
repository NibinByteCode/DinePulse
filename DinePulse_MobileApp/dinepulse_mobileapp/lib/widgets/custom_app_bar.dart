import 'package:flutter/material.dart';
import '../services/cart_service.dart';

class CustomAppBar extends StatelessWidget implements PreferredSizeWidget {
  final String title;
  final bool showCartIcon;
  final bool showProfileIcon;

  CustomAppBar({
    required this.title,
    this.showCartIcon = false,
    this.showProfileIcon = false,
  });

  @override
  Widget build(BuildContext context) {
    return AppBar(
      title: Text(
        title,
        style: TextStyle(
          color: Color.fromRGBO(203, 79, 41, 1),
          fontSize: 20,
          fontFamily: 'Calistoga',
        ),
      ),
      centerTitle: true,
      foregroundColor: Color.fromRGBO(203, 79, 41, 1),
      actions: [
        if (showCartIcon)
          InkWell(
            onTap: () {
              Navigator.pushNamed(context, '/cart');
            },
            child: Stack(
              children: [
                IconButton(
                  icon: Icon(Icons.shopping_cart),
                  color: Color.fromRGBO(203, 79, 41, 1),
                  onPressed: () {
                    Navigator.pushNamed(context, '/cart');
                  },
                ),
                if (cartService.itemCount > 0)
                  Positioned(
                    right: 4,
                    top: 4,
                    child: Container(
                      padding: EdgeInsets.all(2),
                      decoration: BoxDecoration(
                        color: Colors.red,
                        borderRadius: BorderRadius.circular(6),
                      ),
                      constraints: BoxConstraints(
                        minWidth: 18,
                        minHeight: 18,
                      ),
                      child: Text(
                        '${cartService.itemCount}',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 10,
                        ),
                        textAlign: TextAlign.center,
                      ),
                    ),
                  ),
              ],
            ),
          ),
        if (showProfileIcon)
          IconButton(
            icon: Icon(Icons.account_circle),
            color: Color.fromRGBO(203, 79, 41, 1),
            onPressed: () {
              showDialog(
                context: context,
                builder: (context) => AlertDialog(
                  title: const Text(
                    'Do you want to Logout?',
                    style: const TextStyle(
                      color: Color.fromRGBO(203, 79, 41, 1),
                      fontSize: 15,
                      fontFamily: 'Calistoga',
                    ),
                  ),
                  actions: [
                    TextButton(
                      onPressed: () {
                        Navigator.pop(context);
                        Navigator.pushReplacementNamed(context, '/login');
                      },
                      style: TextButton.styleFrom(
                        backgroundColor: Colors.transparent,
                        side: BorderSide(
                            color: Color.fromRGBO(203, 79, 41, 1), width: 1),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(10),
                        ),
                      ),
                      child: const Text(
                        'LOGOUT',
                        style: TextStyle(
                          color: Color.fromRGBO(203, 79, 41, 1),
                          fontSize: 13,
                          fontFamily: 'Calistoga',
                        ),
                      ),
                    ),
                  ],
                ),
              );
            },
          ),
      ],
    );
  }

  @override
  Size get preferredSize => Size.fromHeight(kToolbarHeight);
}
