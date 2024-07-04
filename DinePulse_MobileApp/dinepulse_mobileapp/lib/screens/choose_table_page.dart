import 'package:dinepulse_mobileapp/screens/popups/customer_count_popup.dart';
import 'package:flutter/material.dart';
import '../widgets/custom_app_bar.dart';

class ChooseTablePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(
        title: 'CHOOSE TABLES',
        showProfileIcon: true,
      ),
      body: Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage('assets/images/background-pages.png'),
            fit: BoxFit.cover,
          ),
        ),
        child: GridView.builder(
          padding: EdgeInsets.all(16.0),
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 3,
            crossAxisSpacing: 16.0,
            mainAxisSpacing: 16.0,
          ),
          itemCount: 12,
          itemBuilder: (context, index) {
            return GestureDetector(
              onTap: () {
                showCustomerCountPopup(context, index);
              },
              child: Card(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8.0),
                ),
                color: Color.fromRGBO(248, 143, 143, 1.0),
                child: Center(
                    child: Text(
                  'TABLE ${index + 1}',
                  style: TextStyle(
                    color: Colors.black87,
                    fontSize: 14,
                    fontFamily: 'Calistoga',
                  ),
                )),
              ),
            );
          },
        ),
      ),
    );
  }
}
