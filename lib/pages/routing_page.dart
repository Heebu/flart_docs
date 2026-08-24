import 'package:flartdart/flartdart.dart';
import '../components/docs_layout.dart';
import '../components/widget_showcase.dart';

class RoutingPage extends StatelessWidget {
  const RoutingPage({super.key});

  @override
  Widget build(BuildContext context) {
    return DocsLayout(
      currentRoute: '/routing',
      title: 'Advanced Routing',
      child: FDColumn(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          FDText(
            'Advanced Routing',
            style: TextStyle(
              fontSize: 32.0,
              fontWeight: FontWeight.bold,
              color: FlartColors.blueGrey.shade900,
            ),
          ),
          const FDSizedBox(height: 16.0),
          FDText(
            'FlartDart features a modern routing system with built-in support for path parameters, named routes, and browser history management.',
            style: TextStyle(
              fontSize: 18.0,
              color: FlartColors.blueGrey.shade700,
              height: 1.5,
            ),
          ),
          const FDSizedBox(height: 48.0),
          
          FDText(
            '1. Registering Routes',
            style: TextStyle(
              fontSize: 24.0,
              fontWeight: FontWeight.bold,
              color: FlartColors.blueGrey.shade800,
            ),
          ),
          const FDSizedBox(height: 16.0),
          FDText(
            'Define your application routes in `main.dart` using `PageNavigator.registerRoutes`. You can easily extract path parameters!',
            style: TextStyle(
              fontSize: 16.0,
              color: FlartColors.blueGrey.shade700,
              height: 1.5,
            ),
          ),
          const FDSizedBox(height: 16.0),
          const _CodeSnippet(
            code: '''void main() {
  PageNavigator.registerRoutes({
    '/': (params) => const HomePage(),
    '/details/:id': (params) => DetailPage(id: params['id']!),
  });
  
  runApp(const MyApp());
}''',
          ),
          const FDSizedBox(height: 48.0),
          
          FDText(
            '2. Navigating',
            style: TextStyle(
              fontSize: 24.0,
              fontWeight: FontWeight.bold,
              color: FlartColors.blueGrey.shade800,
            ),
          ),
          const FDSizedBox(height: 16.0),
          FDText(
            'Use `PageNavigator.pushNamed()` to switch routes programmatically.',
            style: TextStyle(
              fontSize: 16.0,
              color: FlartColors.blueGrey.shade700,
              height: 1.5,
            ),
          ),
          const FDSizedBox(height: 16.0),
          
          WidgetShowcase(
            title: 'Navigation Example',
            description: 'Note: This example simulates navigation. In a real app, it updates the browser URL.',
            child: FDElevatedButton(
              onPressed: () {
                // PageNavigator.pushNamed('/details/42');
                print('Navigating to /details/42');
              },
              child: const FDText('Go to Details (ID: 42)'),
            ),
            code: '''FDElevatedButton(
  onPressed: () {
    PageNavigator.pushNamed('/details/42');
  },
  child: FDText('Go to Details (ID: 42)'),
)''',
          ),
        ],
      ),
    );
  }
}

class _CodeSnippet extends StatelessWidget {
  final String code;

  const _CodeSnippet({required this.code});

  @override
  Widget build(BuildContext context) {
    return FDContainer(
      width: double.infinity,
      padding: const EdgeInsets.all(24.0),
      decoration: BoxDecoration(
        color: FlartColors.blueGrey.shade900,
        borderRadius: const BorderRadius.circular(12.0),
      ),
      child: const FDRawHTML('''
        <pre style="margin: 0; overflow-x: auto; font-family: 'JetBrains Mono', 'Fira Code', monospace; color: #e2e8f0; font-size: 14px; line-height: 1.5;">
          <code>\${code.replaceAll('<', '&lt;').replaceAll('>', '&gt;')}</code>
        </pre>
      '''),
    );
  }
}
