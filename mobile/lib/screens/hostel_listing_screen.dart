import 'package:flutter/material.dart';
import '../widgets/hostel_card.dart';
import 'hostel_detail_screen.dart';

class HostelListingScreen extends StatelessWidget {
  const HostelListingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final hostels = const [
      {
        'name': 'BlueNest Girls Hostel',
        'area': 'Malviya Nagar',
        'rent': '₹8500',
        'rating': '4.5'
      },
      {
        'name': 'StudyHub Boys Residency',
        'area': 'Mansarovar',
        'rent': '₹6500',
        'rating': '4.2'
      }
    ];

    return Scaffold(
      appBar: AppBar(title: const Text('Hostels in Jaipur')),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: hostels.length,
        itemBuilder: (context, index) {
          final hostel = hostels[index];
          return HostelCard(
            name: hostel['name']!,
            area: hostel['area']!,
            rent: hostel['rent']!,
            rating: hostel['rating']!,
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (_) => HostelDetailScreen(name: hostel['name']!),
                ),
              );
            },
          );
        },
      ),
    );
  }
}
