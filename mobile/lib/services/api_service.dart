import 'dart:convert';
import 'package:http/http.dart' as http;

class ApiService {
  static const String baseUrl = 'http://localhost:5000/api';

  Future<List<dynamic>> fetchHostels() async {
    final response = await http.get(Uri.parse('$baseUrl/hostels'));
    return jsonDecode(response.body) as List<dynamic>;
  }
}
