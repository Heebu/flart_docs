import 'package:flartdart/flartdart.dart';
import '../../theme/docs_theme.dart';
import '../../components/docs_shell.dart';
import '../../components/interactive_preview.dart';

class ButtonsPage extends StatefulWidget {
  const ButtonsPage({super.key});

  @override
  State<ButtonsPage> createState() => _ButtonsPageState();
}

class _ButtonsPageState extends State<ButtonsPage> {
  String _lastClicked = 'None';

  @override
  Widget build(BuildContext context) {
    return DocsShell(
      currentRoute: '/docs/widgets/buttons',
      title: 'Category 6: Buttons & Gestures',
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildHeader(),
          const SizedBox(height: 32),
          _buildButtonsDemo(),
          const SizedBox(height: 32),
          _buildGesturesDemo(),
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
            'CATEGORY 6 • WIDGET CATALOG',
            style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: DocsTheme.primary),
          ),
        ),
        const SizedBox(height: 12),
        const Text(
          'Buttons & Gesture Widgets',
          style: TextStyle(
              fontSize: 36,
              fontWeight: FontWeight.w800,
              color: DocsTheme.textPrimary),
        ),
        const SizedBox(height: 8),
        const Text(
          'Interactive buttons and touch handlers: ElevatedButton, TextButton, OutlinedButton, IconButton, GestureDetector, and InkWell.',
          style: TextStyle(fontSize: 16, color: DocsTheme.textSecondary),
        ),
      ],
    );
  }

  Widget _buildButtonsDemo() {
    return InteractivePreview(
      title: 'Button Variants',
      description:
          'Standard Material button types with custom styling and click handlers.',
      preview: Column(
        children: [
          Wrap(
            spacing: 12,
            runSpacing: 12,
            alignment: WrapAlignment.center,
            children: [
              ElevatedButton(
                onPressed: () =>
                    setState(() => _lastClicked = 'ElevatedButton'),
                child: const Text('ElevatedButton'),
              ),
              OutlinedButton(
                onPressed: () =>
                    setState(() => _lastClicked = 'OutlinedButton'),
                child: const Text('OutlinedButton'),
              ),
              TextButton(
                onPressed: () => setState(() => _lastClicked = 'TextButton'),
                child: const Text('TextButton'),
              ),
              IconButton(
                icon: const Icon(Icons.thumb_up, color: DocsTheme.accentGreen),
                onPressed: () =>
                    setState(() => _lastClicked = 'IconButton (Thumb Up)'),
              ),
            ],
          ),
          const SizedBox(height: 16),
          Text(
            'Last Clicked: $_lastClicked',
            style: const TextStyle(
                fontSize: 13,
                fontWeight: FontWeight.bold,
                color: DocsTheme.accentGreen),
          ),
        ],
      ),
      code: '''ElevatedButton(
  onPressed: () => print('Elevated clicked'),
  child: const Text('ElevatedButton'),
)

OutlinedButton(
  onPressed: () => print('Outlined clicked'),
  child: const Text('OutlinedButton'),
)

TextButton(
  onPressed: () => print('Text clicked'),
  child: const Text('TextButton'),
)''',
    );
  }

  Widget _buildGesturesDemo() {
    return InteractivePreview(
      title: 'GestureDetector & InkWell',
      description:
          'Wrap any custom UI element with tap, double-tap, or hover handlers.',
      preview: GestureDetector(
        onTap: () =>
            setState(() => _lastClicked = 'Custom GestureDetector Card'),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
          decoration: BoxDecoration(
            color: DocsTheme.surface,
            borderRadius: const BorderRadius.circular(12),
            border: Border.all(color: DocsTheme.accentGreen),
          ),
          child: const Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(Icons.touch_app, color: DocsTheme.accentGreen, size: 20),
              SizedBox(width: 10),
              Text('Tap me (GestureDetector)',
                  style: TextStyle(
                      fontWeight: FontWeight.bold,
                      color: DocsTheme.textPrimary)),
            ],
          ),
        ),
      ),
      code: '''GestureDetector(
  onTap: () => print('Custom card tapped'),
  child: Container(
    padding: const EdgeInsets.all(16),
    decoration: BoxDecoration(
      color: Colors.slate,
      borderRadius: BorderRadius.circular(12),
    ),
    child: Text('Tap me'),
  ),
)''',
    );
  }
}
