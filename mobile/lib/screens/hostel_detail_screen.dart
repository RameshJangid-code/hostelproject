import 'package:flutter/material.dart';

class HostelDetailScreen extends StatelessWidget {
  final String name;

  const HostelDetailScreen({super.key, required this.name});

  @override
  Widget build(BuildContext context) {
    final amenities = ['Wi-Fi', 'Laundry', 'RO Water', 'Geyser', 'Study Room', 'AC'];

    return Scaffold(
      appBar: AppBar(title: Text(name)),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: ListView(
          children: [
            Container(
              height: 180,
              decoration: BoxDecoration(
                color: Colors.blue.shade50,
                borderRadius: BorderRadius.circular(16),
              ),
              child: const Center(child: Text('Hostel Photos')),
            ),
            const SizedBox(height: 16),
            const Text('Single: ₹9500 | Double: ₹7500'),
            const Text('Seat Status: 🟡 Few beds left'),
            const SizedBox(height: 16),
            const Text('Amenities', style: TextStyle(fontWeight: FontWeight.bold)),
            Wrap(
              spacing: 8,
              runSpacing: 8,
              children: amenities
                  .map((item) => Chip(label: Text(item)))
                  .toList(),
            ),
            const SizedBox(height: 16),
            const Text('Rules & Timings', style: TextStyle(fontWeight: FontWeight.bold)),
            const Text('Gate closing 9:30 PM, visitor entry limited, ID required.'),
            const SizedBox(height: 16),
            const Text('Reviews', style: TextStyle(fontWeight: FontWeight.bold)),
            const ListTile(
              title: Text('Aditi'),
              subtitle: Text('Safe hostel and good food quality.'),
              trailing: Text('5/5'),
            )
          ],
        ),
      ),
    );
  }
}
