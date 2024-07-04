import 'package:flutter/material.dart';
import '../widgets/custom_app_bar.dart';

class CheckoutPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(
        title: 'CHECKOUT',
        showProfileIcon: true,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Your order is getting ready',
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
                color: Color.fromRGBO(203, 79, 41, 1),
              ),
            ),
            SizedBox(height: 20),
            SizedBox(
              width: 200,
              child: ElevatedButton(
                onPressed: () {
                  Navigator.pushNamed(context, '/menu',
                      arguments: {'table': 1, 'count': 1});
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.transparent,
                  shadowColor: Colors.transparent,
                  padding: EdgeInsets.zero,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(4.0),
                  ),
                ),
                child: Ink(
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(
                      colors: [
                        Color.fromRGBO(255, 49, 49, 1),
                        Color.fromRGBO(255, 145, 77, 1),
                      ],
                      begin: Alignment.centerLeft,
                      end: Alignment.centerRight,
                    ),
                    borderRadius: BorderRadius.circular(4.0),
                  ),
                  child: Container(
                    constraints:
                        const BoxConstraints(minWidth: 60.0, minHeight: 36.0),
                    alignment: Alignment.center,
                    child: const Text(
                      'CONTINUE SHOPPING',
                      style: TextStyle(
                        fontSize: 12,
                        fontFamily: 'Calistoga',
                        color: Colors.white,
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
