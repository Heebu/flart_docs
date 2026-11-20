import 'package:dart_frog/dart_frog.dart';

Response onRequest(RequestContext context) {
  return Response.json(
    body: {
      'name': 'FlartDart Documentation & API Backend',
      'version': '2.1.0',
      'poweredBy': 'Dart Frog v1.2',
      'status': 'healthy',
      'endpoints': {
        'GET /api/v1/search?q=': 'Full-text search across documentation topics',
        'GET /api/v1/stats': 'Framework telemetry, metrics, and architecture specs',
        'GET /api/v1/snippets': 'Interactive code snippets for live playground',
        'POST /api/v1/feedback': 'Submit developer feedback and ratings',
      },
      'timestamp': DateTime.now().toUtc().toIso8601String(),
    },
  );
}
