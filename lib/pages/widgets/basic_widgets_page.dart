import 'package:flartdart/flartdart.dart';
import '../../theme/docs_theme.dart';
import '../../components/docs_shell.dart';
import '../../components/interactive_preview.dart';

class BasicWidgetsPage extends StatelessWidget {
  const BasicWidgetsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return DocsShell(
      currentRoute: '/docs/widgets/basic',
      title: 'Category 1: Basic & Core Widgets',
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildHeader(),
          const SizedBox(height: 32),
          _buildContainerDemo(),
          const SizedBox(height: 32),
          _buildTextRichTextDemo(),
          const SizedBox(height: 32),
          _buildSizedBoxColoredBoxDemo(),
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
            color: DocsTheme.accentGreen.withValues(alpha: 0.15),
            borderRadius: const BorderRadius.circular(6),
          ),
          child: const Text(
            'CATEGORY 1 • WIDGET CATALOG',
            style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: DocsTheme.accentGreen),
          ),
        ),
        const SizedBox(height: 12),
        const Text(
          'Basic & Core Widgets',
          style: TextStyle(
              fontSize: 36,
              fontWeight: FontWeight.w800,
              color: DocsTheme.textPrimary),
        ),
        const SizedBox(height: 8),
        const Text(
          'Fundamental building blocks for assembling web UIs: Container, Text, RichText, Padding, Center, SizedBox, and ColoredBox.',
          style: TextStyle(fontSize: 16, color: DocsTheme.textSecondary),
        ),
      ],
    );
  }

  Widget _buildContainerDemo() {
    return InteractivePreview(
      title: 'Container & Padding',
      description:
          'A versatile convenience widget combining sizing, padding, and box decoration.',
      preview: Container(
        width: 320,
        padding: const EdgeInsets.all(24),
        decoration: BoxDecoration(
          color: DocsTheme.surface,
          borderRadius: const BorderRadius.circular(16),
          border: Border.all(color: DocsTheme.borderLight, width: 1.5),
          boxShadow: const [
            BoxShadow(
              color: Color(0x33000000),
              blurRadius: 12,
              offset: Offset(0, 6),
            ),
          ],
        ),
        child: const Column(
          children: [
            Text(
              'Container with Padding',
              style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                  color: DocsTheme.textPrimary),
            ),
            SizedBox(height: 8),
            Text(
              'Combines width, height, padding, margin, and decoration into a single clean element.',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 13, color: DocsTheme.textSecondary),
            ),
          ],
        ),
      ),
      code: '''Container(
  width: 320,
  padding: const EdgeInsets.all(24),
  decoration: BoxDecoration(
    color: const Color(0xFF111827),
    borderRadius: BorderRadius.circular(16),
    border: Border.all(color: const Color(0xFF334155), width: 1.5),
    boxShadow: const [
      BoxShadow(
        color: Color(0x33000000),
        blurRadius: 12,
        offset: Offset(0, 6),
      ),
    ],
  ),
  child: Column(
    children: [
      Text('Container with Padding', style: TextStyle(fontWeight: FontWeight.bold)),
      SizedBox(height: 8),
      Text('Clean declarative styling.'),
    ],
  ),
)''',
    );
  }

  Widget _buildTextRichTextDemo() {
    return InteractivePreview(
      title: 'Text & RichText Spans',
      description:
          'Display styled text spans with individual font weights, colors, and line heights.',
      preview: Container(
        padding: const EdgeInsets.all(20),
        decoration: const BoxDecoration(
          color: DocsTheme.card,
          borderRadius: BorderRadius.circular(12),
        ),
        child: RichText(
          text: const TextSpan(
            text: 'Flart provides ',
            style: TextStyle(fontSize: 16, color: DocsTheme.textSecondary),
            children: [
              TextSpan(
                text: '100% Flutter API parity ',
                style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                    color: DocsTheme.accentGreen),
              ),
              TextSpan(
                text: 'with zero canvas baggage.',
                style: TextStyle(fontSize: 16, color: DocsTheme.textSecondary),
              ),
            ],
          ),
        ),
      ),
      code: '''RichText(
  text: const TextSpan(
    text: 'Flart provides ',
    style: TextStyle(fontSize: 16, color: Colors.grey),
    children: [
      TextSpan(
        text: '100% Flutter API parity ',
        style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.green),
      ),
      TextSpan(
        text: 'with zero canvas baggage.',
        style: TextStyle(fontSize: 16, color: Colors.grey),
      ),
    ],
  ),
)''',
    );
  }

  Widget _buildSizedBoxColoredBoxDemo() {
    return const InteractivePreview(
      title: 'SizedBox & ColoredBox',
      description:
          'High performance structural spacing and background tinting.',
      preview: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          ColoredBox(
            color: DocsTheme.primary,
            child: SizedBox(
              width: 80,
              height: 60,
              child: Center(
                child: Text('Box 1',
                    style: TextStyle(
                        fontWeight: FontWeight.bold, color: Colors.white)),
              ),
            ),
          ),
          SizedBox(width: 16),
          ColoredBox(
            color: DocsTheme.accentPurple,
            child: SizedBox(
              width: 80,
              height: 60,
              child: Center(
                child: Text('Box 2',
                    style: TextStyle(
                        fontWeight: FontWeight.bold, color: Colors.white)),
              ),
            ),
          ),
          SizedBox(width: 16),
          ColoredBox(
            color: DocsTheme.accentGreen,
            child: SizedBox(
              width: 80,
              height: 60,
              child: Center(
                child: Text('Box 3',
                    style: TextStyle(
                        fontWeight: FontWeight.bold, color: Colors.white)),
              ),
            ),
          ),
        ],
      ),
      code: '''Row(
  children: [
    ColoredBox(
      color: Colors.blue,
      child: SizedBox(width: 80, height: 60, child: Center(child: Text('Box 1'))),
    ),
    const SizedBox(width: 16),
    ColoredBox(
      color: Colors.purple,
      child: SizedBox(width: 80, height: 60, child: Center(child: Text('Box 2'))),
    ),
  ],
)''',
    );
  }
}
