import 'package:flartdart/flartdart.dart';
import '../../theme/docs_theme.dart';
import '../../components/docs_shell.dart';
import '../../components/interactive_preview.dart';

class MediaPage extends StatefulWidget {
  const MediaPage({super.key});

  @override
  State<MediaPage> createState() => _MediaPageState();
}

class _MediaPageState extends State<MediaPage> {
  bool _showToast = false;

  void _triggerToast() {
    setState(() => _showToast = true);
    Future.delayed(const Duration(seconds: 3), () {
      if (mounted) setState(() => _showToast = false);
    });
  }

  @override
  Widget build(BuildContext context) {
    return DocsShell(
      currentRoute: '/docs/widgets/media',
      title: 'Category 8: Media & Feedback Widgets',
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildHeader(),
          const SizedBox(height: 32),
          _buildIndicatorsDemo(),
          const SizedBox(height: 32),
          _buildTooltipToastDemo(),
          const SizedBox(height: 32),
          _buildIconsDemo(),
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
            color: DocsTheme.accentCyan.withValues(alpha: 0.15),
            borderRadius: const BorderRadius.circular(6),
          ),
          child: const Text(
            'CATEGORY 8 • WIDGET CATALOG',
            style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: DocsTheme.accentCyan),
          ),
        ),
        const SizedBox(height: 12),
        const Text(
          'Media & Feedback Widgets',
          style: TextStyle(
              fontSize: 36,
              fontWeight: FontWeight.w800,
              color: DocsTheme.textPrimary),
        ),
        const SizedBox(height: 8),
        const Text(
          'Visual assets and user feedback: Image, Icon, CircularProgressIndicator, LinearProgressIndicator, Tooltip, and SnackBar.',
          style: TextStyle(fontSize: 16, color: DocsTheme.textSecondary),
        ),
      ],
    );
  }

  Widget _buildIndicatorsDemo() {
    return const InteractivePreview(
      title: 'Progress Indicators',
      description: 'Circular and linear loading feedback indicators.',
      preview: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              CircularProgressIndicator(color: DocsTheme.accentGreen),
              SizedBox(width: 32),
              CircularProgressIndicator(color: DocsTheme.primary),
              SizedBox(width: 32),
              CircularProgressIndicator(color: DocsTheme.accentPurple),
            ],
          ),
          SizedBox(height: 24),
          Container(
            width: 260,
            child: LinearProgressIndicator(color: DocsTheme.accentGreen),
          ),
        ],
      ),
      code: '''// Circular loading spinner
CircularProgressIndicator(color: Colors.green)

// Linear indeterminate loading bar
LinearProgressIndicator(color: Colors.green)''',
    );
  }

  Widget _buildTooltipToastDemo() {
    return InteractivePreview(
      title: 'Tooltip & Feedback Toast',
      description:
          'Contextual hover tooltips and interactive toast feedback triggers.',
      preview: Column(
        children: [
          Tooltip(
            message: 'This is a Flart hover tooltip!',
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
              decoration: BoxDecoration(
                color: DocsTheme.card,
                borderRadius: const BorderRadius.circular(8),
                border: Border.all(color: DocsTheme.borderLight),
              ),
              child: const Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(Icons.info_outline,
                      size: 16, color: DocsTheme.accentCyan),
                  SizedBox(width: 8),
                  Text('Hover over me for Tooltip',
                      style: TextStyle(color: DocsTheme.textPrimary)),
                ],
              ),
            ),
          ),
          const SizedBox(height: 20),
          ElevatedButton(
            onPressed: _triggerToast,
            child: const Text('Show Feedback Toast'),
          ),
          if (_showToast) ...[
            const SizedBox(height: 16),
            const Container(
              padding: EdgeInsets.symmetric(horizontal: 16, vertical: 10),
              decoration: BoxDecoration(
                color: DocsTheme.accentGreen,
                borderRadius: BorderRadius.circular(8),
              ),
              child: Text('Action completed successfully!',
                  style: TextStyle(
                      fontWeight: FontWeight.bold, color: Colors.white)),
            ),
          ],
        ],
      ),
      code: '''Tooltip(
  message: 'This is a Flart hover tooltip!',
  child: Text('Hover over me'),
)''',
    );
  }

  Widget _buildIconsDemo() {
    return const InteractivePreview(
      title: 'Material Icons',
      description:
          'Comprehensive icon glyphs rendered cleanly in vector SVG/web format.',
      preview: Wrap(
        spacing: 24,
        runSpacing: 16,
        children: [
          Icon(Icons.favorite, size: 28, color: Color(0xFFEF4444)),
          Icon(Icons.star, size: 28, color: DocsTheme.accentAmber),
          Icon(Icons.bolt, size: 28, color: DocsTheme.primary),
          Icon(Icons.check_circle, size: 28, color: DocsTheme.accentGreen),
          Icon(Icons.settings, size: 28, color: DocsTheme.textSecondary),
        ],
      ),
      code: '''Icon(Icons.favorite, color: Colors.red)
Icon(Icons.star, color: Colors.amber)
Icon(Icons.bolt, color: Colors.blue)''',
    );
  }
}
