import 'package:flutter/material.dart';

class LoginPage extends StatelessWidget {
  final _formKey = GlobalKey<FormState>();
  final _userIdController = TextEditingController();
  final _passwordController = TextEditingController();

  OutlineInputBorder borderColor(Color input) {
    return OutlineInputBorder(
      borderRadius: BorderRadius.circular(9.0),
      borderSide: BorderSide(
        color: input,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage('assets/images/background-login.png'),
            fit: BoxFit.cover,
          ),
        ),
        child: Padding(
          padding: EdgeInsets.all(16.0),
          child: Form(
            key: _formKey,
            child: Center(
              child: SingleChildScrollView(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    SizedBox(height: 10),
                    // Logo
                    Image.asset(
                      'assets/images/restaurant_logo.png',
                      width: 200,
                      height: 200,
                    ),
                    const Text(
                      'DINEPULSE',
                      style: TextStyle(
                        fontSize: 24,
                        fontWeight: FontWeight.bold,
                        color: Color.fromRGBO(203, 79, 41, 1),
                        fontFamily: 'Calistoga',
                        letterSpacing: 1,
                      ),
                    ),
                    const SizedBox(height: 20),
                    Container(
                      width: 300,
                      child: TextFormField(
                        controller: _userIdController,
                        decoration: InputDecoration(
                          labelText: 'Staff user id',
                          labelStyle: const TextStyle(
                            color: Color.fromARGB(221, 33, 33, 33),
                            fontFamily: 'Calistoga',
                          ),
                          border: borderColor(Color.fromRGBO(203, 79, 41, 1)),
                          focusedBorder:
                              borderColor(Color.fromRGBO(113, 36, 12, 1)),
                          enabledBorder:
                              borderColor(Color.fromRGBO(203, 79, 41, 1)),
                          suffixIcon: const Icon(
                            Icons.person,
                            color: Color.fromRGBO(203, 79, 41, 1),
                          ),
                          contentPadding: EdgeInsets.symmetric(
                              vertical: 10, horizontal: 16),
                        ),
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return 'User ID Required';
                          }
                          return null;
                        },
                      ),
                    ),
                    SizedBox(height: 10),
                    Container(
                      width: 300,
                      child: TextFormField(
                        controller: _passwordController,
                        decoration: InputDecoration(
                          labelText: 'Password',
                          labelStyle: const TextStyle(
                            color: Color.fromARGB(221, 33, 33, 33),
                            fontFamily: 'Calistoga',
                          ),
                          border: borderColor(Color.fromRGBO(203, 79, 41, 1)),
                          focusedBorder:
                              borderColor(Color.fromRGBO(113, 36, 12, 1)),
                          enabledBorder:
                              borderColor(Color.fromRGBO(203, 79, 41, 1)),
                          suffixIcon: const Icon(
                            Icons.lock,
                            color: Color.fromRGBO(203, 79, 41, 1),
                          ),
                          contentPadding: EdgeInsets.symmetric(
                              vertical: 10, horizontal: 16),
                        ),
                        obscureText: true,
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return 'Password Required';
                          }
                          return null;
                        },
                      ),
                    ),
                    SizedBox(height: 20),
                    Center(
                      child: Container(
                        width: 200,
                        child: ElevatedButton(
                          onPressed: () {
                            if (_formKey.currentState!.validate()) {
                              Navigator.pushReplacementNamed(context, '/home');
                            }
                          },
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
                                  minWidth: 88.0, minHeight: 36.0),
                              alignment: Alignment.center,
                              child: const Text(
                                'LOGIN',
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
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
