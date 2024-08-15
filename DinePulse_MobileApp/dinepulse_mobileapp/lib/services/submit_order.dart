import 'dart:convert';
import 'package:dinepulse_mobileapp/services/cart_service.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:http/http.dart' as http;

Future<String> submitOrder(body) async {
  final url = Uri.parse('${dotenv.env['APP_API']}/MobileOrder/CreateOrder');
  final headers = {"Content-Type": "application/json"};

  // Prepare order details based on cart items

  try {
    final response = await http.post(url, headers: headers, body: body);

    if (response.statusCode == 200) {
      final responseMessage =
          response.body; // This is your plain string response
      if (responseMessage == "Order added successfully") {
        return responseMessage; // Return success message
      } else {
        return "Unexpected response: $responseMessage"; // Handle unexpected responses
      }
    } else {
      return "Failed to place order: ${response.statusCode}"; // Handle non-200 responses
    }
  } catch (e) {
    return "An error occurred: $e"; // Handle exceptions
  }
}
