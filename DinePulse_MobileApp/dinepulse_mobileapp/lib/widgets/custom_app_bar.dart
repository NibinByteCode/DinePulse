import 'package:flutter/material.dart';

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
          IconButton(
            icon: Icon(Icons.shopping_cart),
            color: Color.fromRGBO(203, 79, 41, 1),
            onPressed: () {
              Navigator.pushNamed(context, '/cart');
            },
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
