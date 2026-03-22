import 'package:flutter/material.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Login / Signup')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: const [
            TextField(decoration: InputDecoration(labelText: 'Mobile Number')),
            SizedBox(height: 12),
            TextField(decoration: InputDecoration(labelText: 'Password')),
          ],
        ),
      ),
    );
  }
}
