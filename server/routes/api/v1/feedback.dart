import 'dart:convert';
import 'package:dart_frog/dart_frog.dart';

final List<Map<String, dynamic>> _feedbackStore = [
  {
    'id': 1,
    'rating': 5,
    'category': 'Virtual DOM',
    'message': 'Instant page loads compared to Flutter Web CanvasKit! Amazing work.',
    'author': 'Alex M., Senior Flutter Eng',
    'createdAt': DateTime.now().subtract(const Duration(hours: 4)).toIso8601String(),
  },
  {
    'id': 2,
    'rating': 5,
    'category': 'Styling & Parity',
    'message': '100% Flutter API parity means my team felt immediately at home.',
    'author': 'Sarah L., Full-Stack Dart Lead',
    'createdAt': DateTime.now().subtract(const Duration(hours: 2)).toIso8601String(),
  },
];

Future<Response> onRequest(RequestContext context) async {
  if (context.request.method == HttpMethod.get) {
    return Response.json(body: {
      'total': _feedbackStore.length,
      'averageRating': _feedbackStore.isEmpty
          ? 5.0
          : _feedbackStore.map((f) => f['rating'] as int).reduce((a, b) => a + b) /
              _feedbackStore.length,
      'items': _feedbackStore.reversed.take(6).toList(),
    });
  }

  if (context.request.method == HttpMethod.post) {
    try {
      final body = await context.request.body();
      final data = jsonDecode(body) as Map<String, dynamic>;

      final rating = (data['rating'] as num?)?.toInt() ?? 5;
      final category = (data['category'] as String?) ?? 'General';
      final message = (data['message'] as String?) ?? '';
      final author = (data['author'] as String?)?.isNotEmpty ?? false
          ? data['author'] as String
          : 'Anonymous Developer';

      if (message.trim().isEmpty) {
        return Response.json(
          statusCode: 400,
          body: {'error': 'Feedback message cannot be empty'},
        );
      }

      final entry = {
        'id': _feedbackStore.length + 1,
        'rating': rating.clamp(1, 5),
        'category': category,
        'message': message.trim(),
        'author': author,
        'createdAt': DateTime.now().toUtc().toIso8601String(),
      };

      _feedbackStore.add(entry);

      return Response.json(
        statusCode: 201,
        body: {
          'success': true,
          'message': 'Thank you for your feedback!',
          'entry': entry,
          'total': _feedbackStore.length,
        },
      );
    } catch (e) {
      return Response.json(
        statusCode: 400,
        body: {'error': 'Invalid JSON payload: $e'},
      );
    }
  }

  return Response(statusCode: 405);
}
