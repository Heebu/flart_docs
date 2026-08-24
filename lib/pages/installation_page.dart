import 'package:flartdart/flartdart.dart';
import '../components/docs_layout.dart';

class InstallationPage extends StatelessWidget {
  const InstallationPage({super.key});

  @override
  Widget build(BuildContext context) {
    return DocsLayout(
      currentRoute: '/installation',
      title: 'Installation & CLI',
      child: FDColumn(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          FDText(
            'Installation & CLI',
            style: TextStyle(
              fontSize: 32.0,
              fontWeight: FontWeight.bold,
              color: FlartColors.blueGrey.shade900,
            ),
          ),
          const FDSizedBox(height: 16.0),
          FDText(
            'The FlartDart framework comes with a dedicated CLI to manage your projects effortlessly. Install the CLI, generate a new project, and run your dev server in seconds.',
            style: TextStyle(
              fontSize: 18.0,
              color: FlartColors.blueGrey.shade700,
              height: 1.5,
            ),
          ),
          const FDSizedBox(height: 48.0),
          
          FDText(
            '1. Install the CLI',
            style: TextStyle(
              fontSize: 24.0,
              fontWeight: FontWeight.bold,
              color: FlartColors.blueGrey.shade800,
            ),
          ),
          const FDSizedBox(height: 16.0),
          const _CodeSnippet(
            code: 'dart pub global activate flartdart',
          ),
          const FDSizedBox(height: 32.0),
          
          FDText(
            '2. Create a new project',
            style: TextStyle(
              fontSize: 24.0,
              fontWeight: FontWeight.bold,
              color: FlartColors.blueGrey.shade800,
            ),
          ),
          const FDSizedBox(height: 16.0),
          const _CodeSnippet(
            code: 'flartdart create my_app',
          ),
          const FDSizedBox(height: 32.0),
          
          FDText(
            '3. Run the development server',
            style: TextStyle(
              fontSize: 24.0,
              fontWeight: FontWeight.bold,
              color: FlartColors.blueGrey.shade800,
            ),
          ),
          const FDSizedBox(height: 16.0),
          const _CodeSnippet(
            code: '''cd my_app
flartdart run''',
          ),
          const FDSizedBox(height: 48.0),
          
          FDText(
            'CLI Commands',
            style: TextStyle(
              fontSize: 24.0,
              fontWeight: FontWeight.bold,
              color: FlartColors.blueGrey.shade800,
            ),
          ),
          const FDSizedBox(height: 16.0),
          _CommandTable(),
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

class _CommandTable extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return const FDContainer(
      width: double.infinity,
      rawCss: 'border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden;',
      child: FDColumn(
        children: [
          _TableRow(command: 'Command', description: 'Description', isHeader: true),
          _TableRow(command: 'flartdart create <name>', description: 'Create a new project (templates: --template default|counter|routing)'),
          _TableRow(command: 'flartdart run', description: 'Start a dev server with Hot Reload (on port 8080)'),
          _TableRow(command: 'flartdart run -r', description: 'Run in optimized Release/Production mode'),
          _TableRow(command: 'flartdart build', description: 'Build the project for deployment (output in web/build/)'),
          _TableRow(command: 'flartdart get', description: 'Install dependencies for the project'),
        ],
      ),
    );
  }
}

class _TableRow extends StatelessWidget {
  final String command;
  final String description;
  final bool isHeader;

  const _TableRow({
    required this.command,
    required this.description,
    this.isHeader = false,
  });

  @override
  Widget build(BuildContext context) {
    return FDContainer(
      padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 16.0),
      rawCss: isHeader ? '' : 'border-top: 1px solid #eaeaea;',
      decoration: BoxDecoration(
        color: isHeader ? FlartColors.blueGrey.shade50 : FlartColors.white,
      ),
      child: FDRow(
        children: [
          FDExpanded(
            flex: 2,
            child: FDText(
              command,
              style: TextStyle(
                fontWeight: isHeader ? FontWeight.bold : FontWeight.w500,
                color: isHeader ? FlartColors.blueGrey.shade900 : FlartColors.blue.shade700,
                fontFamily: isHeader ? 'inherit' : 'monospace',
              ),
            ),
          ),
          FDExpanded(
            flex: 3,
            child: FDText(
              description,
              style: TextStyle(
                fontWeight: isHeader ? FontWeight.bold : FontWeight.normal,
                color: isHeader ? FlartColors.blueGrey.shade900 : FlartColors.blueGrey.shade700,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
