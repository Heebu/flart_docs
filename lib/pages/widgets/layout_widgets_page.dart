import 'package:flartdart/flartdart.dart';
import '../../theme/docs_theme.dart';
import '../../components/docs_shell.dart';
import '../../components/interactive_preview.dart';

class LayoutWidgetsPage extends StatelessWidget {
  const LayoutWidgetsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return DocsShell(
      currentRoute: '/docs/widgets/layout',
      title: 'Category 2: Layout & Structure Widgets',
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildHeader(),
          const SizedBox(height: 32),
          _buildRowColumnDemo(),
          const SizedBox(height: 32),
          _buildStackPositionedDemo(),
          const SizedBox(height: 32),
          _buildWrapDemo(),
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
            'CATEGORY 2 • WIDGET CATALOG',
            style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: DocsTheme.primary),
          ),
        ),
        const SizedBox(height: 12),
        const Text(
          'Layout & Structure Widgets',
          style: TextStyle(
              fontSize: 36,
              fontWeight: FontWeight.w800,
              color: DocsTheme.textPrimary),
        ),
        const SizedBox(height: 8),
        const Text(
          'Flexbox and multi-child layout widgets: Column, Row, Flex, Expanded, Spacer, Wrap, Stack, Positioned, and Align.',
          style: TextStyle(fontSize: 16, color: DocsTheme.textSecondary),
        ),
      ],
    );
  }

  Widget _buildRowColumnDemo() {
    return InteractivePreview(
      title: 'Row, Column & Expanded',
      description:
          'Flex-based layout distributing children proportionally across the main axis.',
      preview: Container(
        width: 380,
        padding: const EdgeInsets.all(16),
        decoration: const BoxDecoration(
          color: DocsTheme.card,
          borderRadius: BorderRadius.circular(12),
        ),
        child: Row(
          children: [
            Expanded(
              flex: 1,
              child: Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: DocsTheme.primary.withValues(alpha: 0.2),
                  borderRadius: const BorderRadius.circular(8),
                  border: Border.all(color: DocsTheme.primary),
                ),
                child: const Center(
                  child: Text('flex: 1',
                      style: TextStyle(
                          fontWeight: FontWeight.bold,
                          color: DocsTheme.primary)),
                ),
              ),
            ),
            const SizedBox(width: 12),
            Expanded(
              flex: 2,
              child: Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: DocsTheme.accentGreen.withValues(alpha: 0.2),
                  borderRadius: const BorderRadius.circular(8),
                  border: Border.all(color: DocsTheme.accentGreen),
                ),
                child: const Center(
                  child: Text('flex: 2',
                      style: TextStyle(
                          fontWeight: FontWeight.bold,
                          color: DocsTheme.accentGreen)),
                ),
              ),
            ),
          ],
        ),
      ),
      code: '''Row(
  children: [
    Expanded(
      flex: 1,
      child: Container(child: Center(child: Text('flex: 1'))),
    ),
    const SizedBox(width: 12),
    Expanded(
      flex: 2,
      child: Container(child: Center(child: Text('flex: 2'))),
    ),
  ],
)''',
    );
  }

  Widget _buildStackPositionedDemo() {
    return InteractivePreview(
      title: 'Stack & Positioned',
      description:
          'Overlay widgets on top of each other with precise coordinate offsets.',
      preview: Container(
        width: 280,
        height: 180,
        decoration: BoxDecoration(
          color: DocsTheme.card,
          borderRadius: const BorderRadius.circular(16),
          border: Border.all(color: DocsTheme.borderLight),
        ),
        child: const Stack(
          children: [
            Positioned(
              top: 16,
              left: 16,
              child: Container(
                padding: EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(
                  color: DocsTheme.accentGreen,
                  borderRadius: BorderRadius.circular(6),
                ),
                child: Text('Top-Left Badge',
                    style: TextStyle(
                        fontSize: 11,
                        fontWeight: FontWeight.bold,
                        color: Colors.white)),
              ),
            ),
            Center(
              child: Text('Stack Base Layer',
                  style: TextStyle(
                      fontWeight: FontWeight.bold,
                      color: DocsTheme.textSecondary)),
            ),
            Positioned(
              bottom: 16,
              right: 16,
              child: Container(
                padding: EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(
                  color: DocsTheme.primary,
                  borderRadius: BorderRadius.circular(6),
                ),
                child: Text('Bottom-Right',
                    style: TextStyle(
                        fontSize: 11,
                        fontWeight: FontWeight.bold,
                        color: Colors.white)),
              ),
            ),
          ],
        ),
      ),
      code: '''Stack(
  children: [
    Positioned(
      top: 16,
      left: 16,
      child: Container(child: Text('Top-Left Badge')),
    ),
    Center(child: Text('Stack Base Layer')),
    Positioned(
      bottom: 16,
      right: 16,
      child: Container(child: Text('Bottom-Right')),
    ),
  ],
)''',
    );
  }

  Widget _buildWrapDemo() {
    return InteractivePreview(
      title: 'Wrap (Flow Layout)',
      description:
          'Automatically flows children to the next line when horizontal bounds are reached.',
      preview: Container(
        width: 320,
        padding: const EdgeInsets.all(16),
        decoration: const BoxDecoration(
          color: DocsTheme.card,
          borderRadius: BorderRadius.circular(12),
        ),
        child: Wrap(
          spacing: 8,
          runSpacing: 8,
          children: [
            for (final tag in [
              'Dart',
              'Virtual DOM',
              'Flutter API',
              'Full-Stack',
              'Dart Frog',
              'Zero CanvasKit',
              'Web 60 FPS'
            ])
              Container(
                padding:
                    const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                decoration: BoxDecoration(
                  color: DocsTheme.surface,
                  borderRadius: const BorderRadius.circular(8),
                  border: Border.all(color: DocsTheme.borderLight),
                ),
                child: Text(tag,
                    style: const TextStyle(
                        fontSize: 12, color: DocsTheme.textPrimary)),
              ),
          ],
        ),
      ),
      code: '''Wrap(
  spacing: 8,
  runSpacing: 8,
  children: [
    Chip(label: Text('Dart')),
    Chip(label: Text('Virtual DOM')),
    Chip(label: Text('Flutter API')),
    Chip(label: Text('Dart Frog')),
  ],
)''',
    );
  }
}
