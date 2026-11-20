import 'package:dart_frog/dart_frog.dart';

Response onRequest(RequestContext context) {
  if (context.request.method != HttpMethod.get) {
    return Response(statusCode: 405);
  }

  return Response.json(body: {
    'framework': 'FlartDart',
    'version': '2.1.0',
    'releaseStatus': 'Stable',
    'license': 'MIT',
    'stats': {
      'categories': 9,
      'widgets': 100,
      'testsPassing': 100,
      'bundleSizeGzipped': '280 KB',
      'flutterWebCanvasKitSize': '18.4 MB',
      'sizeReductionPercent': 98.4,
      'firstContentfulPaint': '120ms',
      'timeToInteractive': '180ms',
      'fps': 60,
      'vdomReconcileTime': '0.3ms',
    },
    'features': [
      'Pure Dart Virtual DOM with real-time DOM diffing & patching',
      'Zero CanvasKit / WebAssembly overhead for rapid load times',
      'True semantic HTML output for modern SEO and search indexing',
      'Full Flutter API ergonomics (100% typedef parity)',
      'Responsive design with ScreenUtil, MediaQuery & LayoutBuilder',
      'Built-in declarative routing with PageNavigator & hash history',
      'Full-stack harmony with Dart Frog backend microservices',
    ],
    'server': {
      'backend': 'Dart Frog v1.2',
      'runtime': 'Dart SDK 3.x',
      'status': 'online',
    },
  });
}
