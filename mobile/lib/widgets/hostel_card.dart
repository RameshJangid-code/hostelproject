import 'package:flutter/material.dart';

class HostelCard extends StatelessWidget {
  final String name;
  final String area;
  final String rent;
  final String rating;
  final VoidCallback onTap;

  const HostelCard({
    super.key,
    required this.name,
    required this.area,
    required this.rent,
    required this.rating,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.only(bottom: 16),
      child: ListTile(
        onTap: onTap,
        title: Text(name),
        subtitle: Text('$area • $rent'),
        trailing: Text('⭐ $rating'),
      ),
    );
  }
}
