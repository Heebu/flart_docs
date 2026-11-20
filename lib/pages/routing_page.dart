import 'package:flartdart/flartdart.dart';
import '../theme/docs_theme.dart';
import '../components/docs_shell.dart';
import '../components/code_block.dart';

class RoutingPage extends StatelessWidget {
  const RoutingPage({super.key});

  @override
  Widget build(BuildContext context) {
    return DocsShell(
      currentRoute: '/docs/routing',
      title: 'Declarative Routing & History',
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildHeader(),
          const SizedBox(height: 32),
          _buildOverview(),
          const SizedBox(height: 32),
          _buildRegistrationGuide(),
          const SizedBox(height: 32),
          _buildNavigationMethods(),
          const SizedBox(height: 32),
          _buildRouteGuards(),
        ],
      ),
    );
  }

  Widget _buildHeader() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
          decoration: BoxDecoration(
            color: DocsTheme.accentAmber.withValues(alpha: 0.15),
            borderRadius: const BorderRadius.circular(6),
          ),
          child: const Text(
            'NAVIGATION',
            style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: DocsTheme.accentAmber),
          ),
        ),
        const SizedBox(height: 12),
        const Text(
          'Declarative Routing & History',
          style: TextStyle(
              fontSize: 36,
              fontWeight: FontWeight.w800,
              color: DocsTheme.textPrimary),
        ),
        const SizedBox(height: 8),
        const Text(
          'Deep-linking, browser history synchronization, route guards, and transitions with PageNavigator.',
          style: TextStyle(fontSize: 16, color: DocsTheme.textSecondary),
        ),
      ],
    );
  }

  Widget _buildOverview() {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Overview',
          style: TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.bold,
              color: DocsTheme.textPrimary),
        ),
        SizedBox(height: 12),
        Text(
          'Flart\'s PageNavigator provides a declarative routing stack designed specifically for browser single-page applications (SPAs). It integrates seamlessly with the browser\'s window.history API, supporting hash-based deep linking, forward and back buttons, and query parameters without requiring server-side fallback rules.',
          style: TextStyle(
              fontSize: 14, color: DocsTheme.textSecondary, height: 1.5),
        ),
      ],
    );
  }

  Widget _buildRegistrationGuide() {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Registering Routes in main()',
          style: TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.bold,
              color: DocsTheme.textPrimary),
        ),
        SizedBox(height: 12),
        Text(
          'Register routes before running runApp:',
          style: TextStyle(fontSize: 14, color: DocsTheme.textSecondary),
        ),
        SizedBox(height: 12),
        CodeBlock(
          code: '''void main() {
  PageNavigator.registerRoutes({
    '/': const HomePage(),
    '/docs/installation': const InstallationPage(),
    '/docs/architecture': const ArchitecturePage(),
    '/docs/widgets': const WidgetsCatalogPage(),
  });

  PageNavigator.init();

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return FDMaterialApp(
      title: 'My Flart App',
      home: PageNavigator.current,
    );
  }
}''',
          language: 'dart',
          title: 'Route Registration',
        ),
      ],
    );
  }

  Widget _buildNavigationMethods() {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Navigating Between Pages',
          style: TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.bold,
              color: DocsTheme.textPrimary),
        ),
        SizedBox(height: 12),
        Text(
          'Pushing, replacing, and popping routes with optional animated transitions:',
          style: TextStyle(fontSize: 14, color: DocsTheme.textSecondary),
        ),
        SizedBox(height: 12),
        CodeBlock(
          code: '''// Push a named route onto history
PageNavigator.pushNamed('/docs/widgets');

// Push with transition
PageNavigator.pushNamed(
  '/docs/architecture',
  transition: RouteTransition.fade,
);

// Replace current route (no back stack entry)
PageNavigator.replaceNamed('/dashboard');

// Pop top route (browser history back)
PageNavigator.pop();''',
          language: 'dart',
          title: 'Navigation Commands',
        ),
      ],
    );
  }

  Widget _buildRouteGuards() {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Route Guards & Authentication',
          style: TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.bold,
              color: DocsTheme.textPrimary),
        ),
        SizedBox(height: 12),
        Text(
          'Protect routes using PageNavigator\'s built-in guard function:',
          style: TextStyle(fontSize: 14, color: DocsTheme.textSecondary),
        ),
        SizedBox(height: 12),
        CodeBlock(
          code: '''PageNavigator.registerRoutes(
  routes,
  guard: (routeName) {
    if (routeName.startsWith('/admin')) {
      return authService.isAuthenticated;
    }
    return true;
  },
  unauthorizedRoute: '/login',
);''',
          language: 'dart',
          title: 'Route Guards',
        ),
      ],
    );
  }
}
