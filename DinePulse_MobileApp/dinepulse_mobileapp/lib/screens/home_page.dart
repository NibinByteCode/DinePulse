import 'package:dinepulse_mobileapp/widgets/list_tile.dart';
import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';
import '../widgets/custom_app_bar.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(
        title: 'DINEPULSE',
        showProfileIcon: true,
      ),
      drawer: Drawer(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const DrawerHeader(
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Expanded(
                    flex: 2,
                    child: Image(
                      image: AssetImage('assets/images/restaurant_logo.png'),
                      width: 150,
                      height: 150,
                    ),
                  ),
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
            MyListTile(
                text: "HOME",
                icon: Icons.home,
                onTap: () {
                  Navigator.pop(context);
                }),
            MyListTile(
                text: "TABLES",
                icon: Icons.table_chart_sharp,
                onTap: () {
                  Navigator.pop(context);
                  Navigator.pushNamed(context, '/choose_table');
                }),
            MyListTile(
                text: "MENU",
                icon: Icons.restaurant,
                onTap: () {
                  Navigator.pop(context);
                  Navigator.pushNamed(context, '/menu', arguments: {
                    'table': 1,
                    'count': 1
                  }); // Ensure arguments if required
                }),
            MyListTile(
                text: "CART",
                icon: Icons.shopping_cart,
                onTap: () {
                  Navigator.pop(context);
                  Navigator.pushNamed(context, '/cart');
                }),
            MyListTile(
                text: "EXIT",
                icon: Icons.logout_rounded,
                onTap: () {
                  Navigator.pop(context);
                  Navigator.pushNamed(context, '/login');
                }),
            Spacer(),
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
                      color: Colors.white70,
                      width: 1.0,
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
                      color: Colors.white70,
                      width: 1.0,
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
                      color: Colors.white70,
                      width: 1.0,
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
                  Navigator.pushNamed(context, '/menu', arguments: {
                    'table': 1,
                    'count': 1
                  }); // Ensure arguments if required
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
