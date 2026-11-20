import 'package:flartdart/flartdart.dart';
import '../../theme/docs_theme.dart';
import '../../components/docs_shell.dart';
import '../../components/interactive_preview.dart';

class DecorationWidgetsPage extends StatelessWidget {
  const DecorationWidgetsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return DocsShell(
      currentRoute: '/docs/widgets/decoration',
      title: 'Category 3: Decoration & Styling Widgets',
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildHeader(),
          const SizedBox(height: 32),
          _buildBoxDecorationDemo(),
          const SizedBox(height: 32),
          _buildGradientShadowDemo(),
          const SizedBox(height: 32),
          _buildClipDemo(),
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
            color: DocsTheme.accentPurple.withValues(alpha: 0.15),
            borderRadius: const BorderRadius.circular(6),
          ),
          child: const Text(
            'CATEGORY 3 • WIDGET CATALOG',
            style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: DocsTheme.accentPurple),
          ),
        ),
        const SizedBox(height: 12),
        const Text(
          'Decoration & Styling Widgets',
          style: TextStyle(
              fontSize: 36,
              fontWeight: FontWeight.w800,
              color: DocsTheme.textPrimary),
        ),
        const SizedBox(height: 8),
        const Text(
          'Modern visual aesthetics without raw CSS: BoxDecoration, Border, BorderRadius, BoxShadow, LinearGradient, ClipRRect, ClipOval, and DecoratedBox.',
          style: TextStyle(fontSize: 16, color: DocsTheme.textSecondary),
        ),
      ],
    );
  }

  Widget _buildBoxDecorationDemo() {
    return InteractivePreview(
      title: 'BoxDecoration & Rounded Borders',
      description: 'Border radii, solid borders, and background color mapping.',
      preview: Container(
        width: 260,
        padding: const EdgeInsets.all(24),
        decoration: BoxDecoration(
          color: DocsTheme.surface,
          borderRadius: const BorderRadius.circular(20),
          border: Border.all(color: DocsTheme.accentGreen, width: 2),
        ),
        child: const Center(
          child: Text(
            'Border.all & BorderRadius',
            textAlign: TextAlign.center,
            style: TextStyle(
                fontWeight: FontWeight.bold, color: DocsTheme.accentGreen),
          ),
        ),
      ),
      code: '''Container(
  width: 260,
  padding: const EdgeInsets.all(24),
  decoration: BoxDecoration(
    color: const Color(0xFF111827),
    borderRadius: BorderRadius.circular(20),
    border: Border.all(color: const Color(0xFF10B981), width: 2),
  ),
  child: const Text('Border.all & BorderRadius'),
)''',
    );
  }

  Widget _buildGradientShadowDemo() {
    return const InteractivePreview(
      title: 'LinearGradient & Multi BoxShadow',
      description: 'Rich color gradients and soft multi-layer drop shadows.',
      preview: Container(
        width: 280,
        padding: EdgeInsets.all(24),
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [Color(0xFF3B82F6), Color(0xFF8B5CF6)],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
          borderRadius: BorderRadius.circular(18),
          boxShadow: [
            BoxShadow(
              color: Color(0x663B82F6),
              blurRadius: 20,
              offset: Offset(0, 8),
            ),
          ],
        ),
        child: Center(
          child: Text(
            'Gradient with Glow Shadow',
            style: TextStyle(
                fontSize: 15, fontWeight: FontWeight.bold, color: Colors.white),
          ),
        ),
      ),
      code: '''Container(
  decoration: BoxDecoration(
    gradient: const LinearGradient(
      colors: [Color(0xFF3B82F6), Color(0xFF8B5CF6)],
      begin: Alignment.topLeft,
      end: Alignment.bottomRight,
    ),
    borderRadius: BorderRadius.circular(18),
    boxShadow: const [
      BoxShadow(
        color: Color(0x663B82F6),
        blurRadius: 20,
        offset: Offset(0, 8),
      ),
    ],
  ),
  child: const Text('Gradient with Glow Shadow'),
)''',
    );
  }

  Widget _buildClipDemo() {
    return const InteractivePreview(
      title: 'ClipRRect & ClipOval',
      description:
          'Smooth rounded and circular clipping for arbitrary child widgets.',
      preview: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(16),
            child: Container(
              width: 100,
              height: 100,
              color: DocsTheme.accentGreen,
              child: Center(
                  child: Text('ClipRRect',
                      style: TextStyle(
                          fontWeight: FontWeight.bold, color: Colors.white))),
            ),
          ),
          SizedBox(width: 24),
          ClipOval(
            child: Container(
              width: 100,
              height: 100,
              color: DocsTheme.primary,
              child: Center(
                  child: Text('ClipOval',
                      style: TextStyle(
                          fontWeight: FontWeight.bold, color: Colors.white))),
            ),
          ),
        ],
      ),
      code: '''Row(
  children: [
    ClipRRect(
      borderRadius: BorderRadius.circular(16),
      child: Container(width: 100, height: 100, color: Colors.green),
    ),
    ClipOval(
      child: Container(width: 100, height: 100, color: Colors.blue),
    ),
  ],
)''',
    );
  }
}
