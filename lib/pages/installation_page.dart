import 'package:flartdart/flartdart.dart';
import '../theme/docs_theme.dart';
import '../components/docs_shell.dart';
import '../components/code_block.dart';

class InstallationPage extends StatelessWidget {
  const InstallationPage({super.key});

  @override
  Widget build(BuildContext context) {
    return DocsShell(
      currentRoute: '/docs/installation',
      title: 'Installation & Quick Start',
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildHeader(),
          const SizedBox(height: 32),
          _buildPrerequisites(),
          const SizedBox(height: 32),
          _buildCliInstallation(),
          const SizedBox(height: 32),
          _buildCreatingApp(),
          const SizedBox(height: 32),
          _buildRunningDevServer(),
          const SizedBox(height: 32),
          _buildProductionBuild(),
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
            color: DocsTheme.primary.withValues(alpha: 0.15),
            borderRadius: const BorderRadius.circular(6),
          ),
          child: const Text(
            'GETTING STARTED',
            style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: DocsTheme.primary),
          ),
        ),
        const SizedBox(height: 12),
        const Text(
          'Installation & Setup',
          style: TextStyle(
              fontSize: 36,
              fontWeight: FontWeight.w800,
              color: DocsTheme.textPrimary),
        ),
        const SizedBox(height: 8),
        const Text(
          'Get your Flart application up and running in less than 60 seconds with the Flart CLI.',
          style: TextStyle(fontSize: 16, color: DocsTheme.textSecondary),
        ),
      ],
    );
  }

  Widget _buildPrerequisites() {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Prerequisites',
          style: TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.bold,
              color: DocsTheme.textPrimary),
        ),
        SizedBox(height: 8),
        Text(
          'Flart requires Dart SDK 3.0.0 or higher. You do not need the full Flutter SDK or Android/iOS toolchains, making it ultra-lightweight for web and CI/CD pipelines.',
          style: TextStyle(
              fontSize: 14, color: DocsTheme.textSecondary, height: 1.5),
        ),
        SizedBox(height: 16),
        CodeBlock(
          code: 'dart --version\n# Dart SDK version: 3.5.0 (or higher)',
          language: 'bash',
          title: 'Verify Dart SDK',
        ),
      ],
    );
  }

  Widget _buildCliInstallation() {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          '1. Install the Flart CLI',
          style: TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.bold,
              color: DocsTheme.textPrimary),
        ),
        SizedBox(height: 8),
        Text(
          'Activate the flart command-line tool globally via pub.dev:',
          style: TextStyle(fontSize: 14, color: DocsTheme.textSecondary),
        ),
        SizedBox(height: 12),
        CodeBlock(
          code: 'dart pub global activate flart',
          language: 'bash',
          title: 'Install CLI',
        ),
      ],
    );
  }

  Widget _buildCreatingApp() {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          '2. Scaffold a New Project',
          style: TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.bold,
              color: DocsTheme.textPrimary),
        ),
        SizedBox(height: 8),
        Text(
          'Use the flart create command to generate a preconfigured web application with Virtual DOM reconciler and build_runner:',
          style: TextStyle(fontSize: 14, color: DocsTheme.textSecondary),
        ),
        SizedBox(height: 12),
        CodeBlock(
          code: 'flart create my_first_flart_app\ncd my_first_flart_app',
          language: 'bash',
          title: 'Create Project',
        ),
        SizedBox(height: 12),
        Text(
          'Or add flartdart directly to an existing Dart project:\'s pubspec.yaml:',
          style: TextStyle(fontSize: 14, color: DocsTheme.textSecondary),
        ),
        SizedBox(height: 12),
        CodeBlock(
          code: '''dependencies:
  flartdart: ^2.1.0

dev_dependencies:
  build_runner: ^2.4.9
  build_web_compilers: ^4.0.10''',
          language: 'yaml',
          title: 'pubspec.yaml',
        ),
      ],
    );
  }

  Widget _buildRunningDevServer() {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          '3. Start the Development Server',
          style: TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.bold,
              color: DocsTheme.textPrimary),
        ),
        SizedBox(height: 8),
        Text(
          'Run the local development server with instant incremental compilation and source maps:',
          style: TextStyle(fontSize: 14, color: DocsTheme.textSecondary),
        ),
        SizedBox(height: 12),
        CodeBlock(
          code: 'dart run build_runner serve web:8080',
          language: 'bash',
          title: 'Development Server',
        ),
        SizedBox(height: 12),
        Text(
          'Open http://localhost:8080 in your browser to view your live Flart application.',
          style: TextStyle(fontSize: 14, color: DocsTheme.accentGreen),
        ),
      ],
    );
  }

  Widget _buildProductionBuild() {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          '4. Compile for Production',
          style: TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.bold,
              color: DocsTheme.textPrimary),
        ),
        SizedBox(height: 8),
        Text(
          'Compile an optimized, minified production build with tree shaking:',
          style: TextStyle(fontSize: 14, color: DocsTheme.textSecondary),
        ),
        SizedBox(height: 12),
        CodeBlock(
          code: 'dart run build_runner build --release --output web:build',
          language: 'bash',
          title: 'Production Build',
        ),
        SizedBox(height: 12),
        Text(
          'The resulting build/ folder contains static HTML, CSS, and minified JS (~280 KB gzipped) ready to deploy to GitHub Pages, Cloudflare Pages, Firebase Hosting, Netlify, or Vercel.',
          style: TextStyle(
              fontSize: 14, color: DocsTheme.textSecondary, height: 1.5),
        ),
      ],
    );
  }
}
