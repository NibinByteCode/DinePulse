import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('DINEPULSE'),
        actions: [
          IconButton(
            icon: Icon(Icons.person),
            onPressed: () {
              showDialog(
                context: context,
                builder: (context) => AlertDialog(
                  title: Text('Staff1'),
                  actions: [
                    TextButton(
                      onPressed: () {
                        Navigator.pop(context);
                        Navigator.pushReplacementNamed(context, '/login');
                      },
                      child: Text('Logout'),
                    ),
                  ],
                ),
              );
            },
          ),
        ],
      ),
      drawer: Drawer(
        child: ListView(
          children: [
            DrawerHeader(
              child: Text('Staff1'),
            ),
            ListTile(
              title: Text('HOME'),
              onTap: () {
                Navigator.pop(context);
              },
            ),
            ListTile(
              title: Text('TABLES'),
              onTap: () {
                Navigator.pushNamed(context, '/choose_table');
              },
            ),
            ListTile(
              title: Text('MENU'),
              onTap: () {
                Navigator.pushNamed(context, '/menu');
              },
            ),
            ListTile(
              title: Text('CART'),
              onTap: () {
                Navigator.pushNamed(context, '/checkout');
              },
            ),
            ListTile(
              title: Text('LOGOUT'),
              onTap: () {
                Navigator.pushReplacementNamed(context, '/login');
              },
            ),
          ],
        ),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: () {
                Navigator.pushNamed(context, '/choose_table');
              },
              child: Text('DINE-IN'),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.pushNamed(context, '/menu');
              },
              child: Text('TAKE-AWAY'),
            ),
          ],
        ),
      ),
    );
  }
}
