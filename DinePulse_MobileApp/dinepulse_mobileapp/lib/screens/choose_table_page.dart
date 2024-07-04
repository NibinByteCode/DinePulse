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
                showDialog(
                  context: context,
                  builder: (context) => AlertDialog(
                    title: const Text(
                      'Select customer count',
                      style: const TextStyle(
                        color: Color.fromRGBO(203, 79, 41, 1),
                        fontSize: 15,
                        fontFamily: 'Calistoga',
                      ),
                    ),
                    content: Container(
                      width: 200,
                      height: 40,
                      child: DropdownButtonFormField<int>(
                        decoration: InputDecoration(
                          enabledBorder: OutlineInputBorder(
                            borderSide: BorderSide(
                              color: Color.fromRGBO(203, 79, 41, 1),
                              width: 1.0,
                            ),
                            borderRadius: BorderRadius.circular(8.0),
                          ),
                          focusedBorder: OutlineInputBorder(
                            borderSide: BorderSide(
                              color: Color.fromRGBO(203, 79, 41, 1),
                              width: 1.0,
                            ),
                            borderRadius: BorderRadius.circular(8.0),
                          ),
                        ),
                        value: 1,
                        items: List.generate(
                            15,
                            (i) => DropdownMenuItem(
                                  value: i + 1,
                                  child: Text(
                                    '${i + 1}',
                                    style: TextStyle(
                                      fontSize: 16,
                                      color: Color.fromRGBO(203, 79, 41, 1),
                                      fontFamily: 'Calistoga',
                                    ),
                                  ),
                                )),
                        onChanged: (value) {
                          Navigator.pop(context);
                          Navigator.pushNamed(context, '/menu',
                              arguments: {'table': index + 1, 'count': value});
                        },
                      ),
                    ),
                  ),
                );
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
