import 'package:flutter/material.dart';

class CheckoutPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'CONFIRM ORDER DETAILS',
          style: TextStyle(
            color: Color.fromRGBO(203, 79, 41, 1),
            fontSize: 20,
            fontFamily: 'Calistoga',
          ),
        ),
        centerTitle: true,
      ),
      body: Column(
        children: [
          /*Expanded(
            child: ListView.builder(
              padding: EdgeInsets.all(16.0),
              itemCount: 4,
              itemBuilder: (context, index) {
                return Card(
                  margin: EdgeInsets.symmetric(vertical: 8.0),
                  child: ListTile(
                    title: Text('Beef Cheese Burger 3'),
                    subtitle: Text('Quantity: 1 \$12.99'),
                    trailing: TextButton(
                      onPressed: () {},
                      child: Text('REMOVE'),
                    ),
                  ),
                );
              },
            ),
          ),*/
          Expanded(
            child: ListView.builder(
              padding: EdgeInsets.all(16.0),
              itemCount: 3, // Number of menu items
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
                        "EDIT",
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
                          ),
                        );
                      },
                    ),
                  ),
                );
              },
            ),
          ),
          Padding(
            padding: EdgeInsets.all(16.0),
            child: Column(
              children: [
                const Text(
                  'TOTAL: \$52.01',
                  style: TextStyle(
                    color: Color.fromRGBO(203, 79, 41, 1),
                    fontSize: 18,
                    fontFamily: 'Calistoga',
                  ),
                ),
                SizedBox(height: 10),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    Container(
                      width: 150,
                      child: ElevatedButton(
                        onPressed: () {},
                        style: ElevatedButton.styleFrom(
                          foregroundColor: Colors.white,
                          elevation: 0,
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
                            constraints: const BoxConstraints(
                                minWidth: 60.0, minHeight: 36.0),
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
                    Container(
                      width: 120,
                      child: ElevatedButton(
                        onPressed: () {},
                        style: ElevatedButton.styleFrom(
                          foregroundColor: Colors.white,
                          elevation: 0,
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
                            constraints: const BoxConstraints(
                                minWidth: 60.0, minHeight: 36.0),
                            alignment: Alignment.center,
                            child: const Text(
                              'CONFIRM ORDER',
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
              ],
            ),
          ),
        ],
      ),
    );
  }
}
