import 'package:flutter/material.dart';

class ChooseTablePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('CHOOSE TABLES')),
      body: GridView.builder(
        padding: EdgeInsets.all(16.0),
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
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
                  title: Text('Select customer count'),
                  content: DropdownButton<int>(
                    value: 1,
                    items: List.generate(
                        15,
                        (i) => DropdownMenuItem(
                              value: i + 1,
                              child: Text('${i + 1}'),
                            )),
                    onChanged: (value) {
                      Navigator.pop(context);
                      Navigator.pushNamed(context, '/menu',
                          arguments: {'table': index + 1, 'count': value});
                    },
                  ),
                ),
              );
            },
            child: Card(
              child: Center(child: Text('TABLE ${index + 1}')),
            ),
          );
        },
      ),
    );
  }
}
