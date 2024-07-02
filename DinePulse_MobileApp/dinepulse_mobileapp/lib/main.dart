import 'package:flutter/material.dart';
import 'splash_page.dart';
import 'login_page.dart';
import 'home_page.dart';
import 'choose_table_page.dart';
import 'menu_page.dart';
import 'checkout_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'DINEPULSE',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => SplashPage(),
        '/login': (context) => LoginPage(),
        '/home': (context) => HomePage(),
        '/choose_table': (context) => ChooseTablePage(),
        '/menu': (context) => MenuPage(),
        '/checkout': (context) => CheckoutPage(),
      },
    );
  }
}
