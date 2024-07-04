import 'package:flutter/material.dart';
import 'list_tile.dart';
import 'package:carousel_slider/carousel_slider.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'DINEPULSE',
          style: TextStyle(
            color: Color.fromRGBO(203, 79, 41, 1),
            fontSize: 20,
            fontFamily: 'Calistoga',
          ),
        ),
        centerTitle: true,
        foregroundColor: Color.fromRGBO(203, 79, 41, 1),
        actions: [
          IconButton(
            icon: Icon(Icons.account_circle),
            iconSize: 35,
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
          const Text(
            "Staff 1",
            style: TextStyle(
              color: Color.fromRGBO(203, 79, 41, 1),
              fontSize: 15,
              fontFamily: 'Calistoga',
            ),
          ),
        ],
      ),
      drawer: Drawer(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Drawer header logo
            const DrawerHeader(
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  // Image widget
                  Expanded(
                    flex: 2,
                    child: Image(
                      image: AssetImage('assets/images/restaurant_logo.png'),
                      width: 150,
                      height: 150,
                    ),
                  ),
                  //SizedBox(width: 10),
                  // Text widget
                  Expanded(
                    flex: 3,
                    child: Text(
                      "DINEPULSE",
                      style: TextStyle(
                        fontSize: 23,
                        color: Color.fromRGBO(203, 79, 41, 1),
                        fontFamily: 'Calistoga',
                        letterSpacing: 1,
                      ),
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 10.0),
            //shop tile
            MyListTile(
                text: "HOME",
                icon: Icons.home,
                onTap: () {
                  Navigator.pop(context);
                  //Navigator.pushNamed(context, '/home_page');
                }),
            // products tile
            MyListTile(
                text: "TABLES",
                icon: Icons.table_chart_sharp,
                onTap: () {
                  Navigator.pop(context);
                  Navigator.pushNamed(context, '/choose_table');
                }),
            // MENU tile
            MyListTile(
                text: "MENU",
                icon: Icons.restaurant,
                onTap: () {
                  Navigator.pop(context);
                  Navigator.pushNamed(context, '/menu');
                }),
            // cart tile
            MyListTile(
                text: "CART",
                icon: Icons.shopping_cart,
                onTap: () {
                  Navigator.pop(context);
                  Navigator.pushNamed(context, '/checkout');
                }),
            // exit shop tile
            MyListTile(
                text: "EXIT",
                icon: Icons.logout_rounded,
                onTap: () {
                  Navigator.pop(context);
                  Navigator.pushNamed(context, '/login');
                }),
            Spacer(), //Pushes the Row below to the bottom
            const Padding(
              padding: const EdgeInsets.all(16.0),
              child: Row(
                children: [
                  Icon(
                    Icons.account_circle,
                    color: Color.fromRGBO(203, 79, 41, 1),
                  ),
                  SizedBox(width: 10),
                  Text(
                    'Staff 1',
                    style: TextStyle(
                      color: Color.fromRGBO(203, 79, 41, 1),
                      fontSize: 16,
                      fontFamily: 'Calistoga',
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
      body: Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage('assets/images/background-pages.png'),
            fit: BoxFit.cover,
          ),
        ),
        child: Column(
          //mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CarouselSlider(
              options: CarouselOptions(
                height: 300.0,
                enableInfiniteScroll: true,
                autoPlay: true,
                autoPlayInterval: Duration(seconds: 3),
                autoPlayAnimationDuration: Duration(milliseconds: 800),
                autoPlayCurve: Curves.fastOutSlowIn,
                enlargeCenterPage: true,
                scrollDirection: Axis.horizontal,
              ),
              items: [
                Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(8.0),
                    border: Border.all(
                      color: Colors.white70, // Border color
                      width: 1.0, // Border width
                    ),
                  ),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(8.0),
                    child: Image(
                      image: AssetImage('assets/images/carousal-image-1.jpg'),
                    ),
                  ),
                ),
                Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(8.0),
                    border: Border.all(
                      color: Colors.white70, // Border color
                      width: 1.0, // Border width
                    ),
                  ),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(8.0),
                    child: Image(
                      image: AssetImage('assets/images/carousal-image-2.jpg'),
                    ),
                  ),
                ),
                Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(8.0),
                    border: Border.all(
                      color: Colors.white70, // Border color
                      width: 1.0, // Border width
                    ),
                  ),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(8.0),
                    child: Image(
                      image: AssetImage('assets/images/carousal-image-3.jpg'),
                    ),
                  ),
                ),
              ],
            ),
            const Text(
              'Welcome to DINEPULSE! Please choose your dining preference.',
              textAlign: TextAlign.center,
              style: TextStyle(
                color: Color.fromRGBO(203, 79, 41, 1),
                fontSize: 14,
                fontFamily: 'Calistoga',
              ),
            ),
            SizedBox(height: 20.0),
            Container(
              width: 300,
              height: 100,
              child: ElevatedButton(
                onPressed: () {
                  Navigator.pushNamed(context, '/choose_table');
                },
                style: ElevatedButton.styleFrom(
                  foregroundColor: Colors.white,
                  elevation: 0,
                  padding: EdgeInsets.zero,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(14.0),
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
                        const BoxConstraints(minWidth: 88.0, minHeight: 36.0),
                    alignment: Alignment.center,
                    child: const Text(
                      'DINE-IN',
                      style: TextStyle(
                        fontSize: 16,
                        fontFamily: 'Calistoga',
                        color: Colors.white,
                      ),
                    ),
                  ),
                ),
              ),
            ),
            const SizedBox(height: 10.0),
            Container(
              width: 300,
              height: 100,
              child: ElevatedButton(
                onPressed: () {
                  Navigator.pushNamed(context, '/menu');
                },
                style: ElevatedButton.styleFrom(
                  foregroundColor: Colors.white,
                  elevation: 0,
                  padding: EdgeInsets.zero,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(14.0),
                  ),
                ),
                child: Ink(
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(
                      colors: [
                        Color(0xFF0097B2),
                        Color(0xFF7ED957),
                      ],
                      begin: Alignment.centerLeft,
                      end: Alignment.centerRight,
                    ),
                    borderRadius: BorderRadius.circular(4.0),
                  ),
                  child: Container(
                    constraints:
                        const BoxConstraints(minWidth: 88.0, minHeight: 36.0),
                    alignment: Alignment.center,
                    child: const Text(
                      'TAKE-AWAY',
                      style: TextStyle(
                        fontSize: 16,
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
