import 'package:flutter/material.dart';
import 'screens/splash_page.dart';
import 'screens/login_page.dart';
import 'screens/home_page.dart';
import 'screens/choose_table_page.dart';
import 'screens/menu_page.dart';
import 'screens/checkout_page.dart';
import 'screens/onboarding_screens.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'DINEPULSE',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => SplashPage(),
        '/onboardingscreens': (context) => OnBoardingView(),
        '/login': (context) => LoginPage(),
        '/home': (context) => HomePage(),
        '/choose_table': (context) => ChooseTablePage(),
        '/menu': (context) => MenuPage(),
        '/checkout': (context) => CheckoutPage(),
      },
    );
  }
}
