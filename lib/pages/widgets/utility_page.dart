import 'package:flartdart/flartdart.dart';
import '../../theme/docs_theme.dart';
import '../../components/docs_shell.dart';
import '../../components/interactive_preview.dart';

class UtilityPage extends StatefulWidget {
  const UtilityPage({super.key});

  @override
  State<UtilityPage> createState() => _UtilityPageState();
}

class _UtilityPageState extends State<UtilityPage> {
  bool _showModal = false;
  bool _isVisible = true;

  @override
  Widget build(BuildContext context) {
    return DocsShell(
      currentRoute: '/docs/widgets/utility',
      title: 'Category 9: Utility & Overlay Widgets',
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildHeader(),
          const SizedBox(height: 32),
          _buildModalDialogDemo(),
          const SizedBox(height: 32),
          _buildDividersDemo(),
          const SizedBox(height: 32),
          _buildVisibilityDemo(),
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
            'CATEGORY 9 • WIDGET CATALOG',
            style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: DocsTheme.accentAmber),
          ),
        ),
        const SizedBox(height: 12),
        const Text(
          'Utility & Overlay Widgets',
          style: TextStyle(
              fontSize: 36,
              fontWeight: FontWeight.w800,
              color: DocsTheme.textPrimary),
        ),
        const SizedBox(height: 8),
        const Text(
          'Modal layers and conditional rendering: Dialog, AlertDialog, BottomSheet, Divider, VerticalDivider, Opacity, and Visibility.',
          style: TextStyle(fontSize: 16, color: DocsTheme.textSecondary),
        ),
      ],
    );
  }

  Widget _buildModalDialogDemo() {
    return InteractivePreview(
      title: 'AlertDialog & Dialog Overlays',
      description:
          'Modal confirmation dialog rendered into Flart\'s top-level overlay layer.',
      preview: Column(
        children: [
          ElevatedButton(
            onPressed: () => setState(() => _showModal = true),
            child: const Text('Launch AlertDialog'),
          ),
          if (_showModal) ...[
            const SizedBox(height: 20),
            Container(
              width: 320,
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                color: DocsTheme.surface,
                borderRadius: const BorderRadius.circular(16),
                border: Border.all(color: DocsTheme.borderLight, width: 1.5),
                boxShadow: const [
                  BoxShadow(
                    color: Color(0x66000000),
                    blurRadius: 24,
                    offset: Offset(0, 8),
                  ),
                ],
              ),
              child: Column(
                children: [
                  const Text(
                    'Confirm Action',
                    style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: DocsTheme.textPrimary),
                  ),
                  const SizedBox(height: 10),
                  const Text(
                    'Are you sure you want to proceed with this operation?',
                    textAlign: TextAlign.center,
                    style:
                        TextStyle(fontSize: 13, color: DocsTheme.textSecondary),
                  ),
                  const SizedBox(height: 20),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      TextButton(
                        onPressed: () => setState(() => _showModal = false),
                        child: const Text('Cancel'),
                      ),
                      const SizedBox(width: 8),
                      ElevatedButton(
                        onPressed: () => setState(() => _showModal = false),
                        child: const Text('Confirm'),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ],
      ),
      code: '''AlertDialog(
  title: const Text('Confirm Action'),
  content: const Text('Are you sure you want to proceed?'),
  actions: [
    TextButton(onPressed: () => Navigator.pop(), child: const Text('Cancel')),
    ElevatedButton(onPressed: () => doAction(), child: const Text('Confirm')),
  ],
)''',
    );
  }

  Widget _buildDividersDemo() {
    return const InteractivePreview(
      title: 'Divider & VerticalDivider',
      description:
          'Visual thin lines separating content blocks horizontally and vertically.',
      preview: Container(
        width: 320,
        padding: EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: DocsTheme.card,
          borderRadius: BorderRadius.circular(12),
        ),
        child: Column(
          children: [
            Text('Section One', style: TextStyle(color: DocsTheme.textPrimary)),
            Divider(color: DocsTheme.borderLight),
            Text('Section Two', style: TextStyle(color: DocsTheme.textPrimary)),
            Divider(color: DocsTheme.borderLight),
            Text('Section Three',
                style: TextStyle(color: DocsTheme.textPrimary)),
          ],
        ),
      ),
      code: '''Column(
  children: [
    Text('Section One'),
    Divider(color: Colors.grey),
    Text('Section Two'),
  ],
)''',
    );
  }

  Widget _buildVisibilityDemo() {
    return InteractivePreview(
      title: 'Visibility & Opacity',
      description:
          'Conditionally mount/unmount or visually dim elements without DOM removal.',
      preview: Column(
        children: [
          Visibility(
            visible: _isVisible,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
              decoration: BoxDecoration(
                color: DocsTheme.accentGreen.withValues(alpha: 0.2),
                borderRadius: const BorderRadius.circular(8),
                border: Border.all(color: DocsTheme.accentGreen),
              ),
              child: const Text('Visible Element',
                  style: TextStyle(
                      fontWeight: FontWeight.bold,
                      color: DocsTheme.accentGreen)),
            ),
          ),
          const SizedBox(height: 16),
          ElevatedButton(
            onPressed: () => setState(() => _isVisible = !_isVisible),
            child: Text(_isVisible ? 'Hide Element' : 'Show Element'),
          ),
        ],
      ),
      code: '''Visibility(
  visible: _isVisible,
  child: Container(child: Text('Visible Element')),
)''',
    );
  }
}
