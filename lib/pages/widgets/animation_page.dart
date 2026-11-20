import 'package:flartdart/flartdart.dart';
import '../../theme/docs_theme.dart';
import '../../components/docs_shell.dart';
import '../../components/interactive_preview.dart';

class AnimationPage extends StatefulWidget {
  const AnimationPage({super.key});

  @override
  State<AnimationPage> createState() => _AnimationPageState();
}

class _AnimationPageState extends State<AnimationPage> {
  bool _isExpanded = false;
  bool _isVisible = true;

  @override
  Widget build(BuildContext context) {
    return DocsShell(
      currentRoute: '/docs/widgets/animation',
      title: 'Category 7: Animation & Motion Widgets',
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildHeader(),
          const SizedBox(height: 32),
          _buildAnimatedContainerDemo(),
          const SizedBox(height: 32),
          _buildAnimatedOpacityDemo(),
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
            'CATEGORY 7 • WIDGET CATALOG',
            style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: DocsTheme.accentPurple),
          ),
        ),
        const SizedBox(height: 12),
        const Text(
          'Animation & Motion Widgets',
          style: TextStyle(
              fontSize: 36,
              fontWeight: FontWeight.w800,
              color: DocsTheme.textPrimary),
        ),
        const SizedBox(height: 8),
        const Text(
          'Smooth 60 FPS transitions and declarative motion: AnimatedContainer, AnimatedOpacity, FadeTransition, SlideTransition, and FDAnimate.',
          style: TextStyle(fontSize: 16, color: DocsTheme.textSecondary),
        ),
      ],
    );
  }

  Widget _buildAnimatedContainerDemo() {
    return InteractivePreview(
      title: 'AnimatedContainer',
      description:
          'Animates changes in width, height, color, and borderRadius smoothly over time.',
      preview: Column(
        children: [
          AnimatedContainer(
            duration: const Duration(milliseconds: 500),
            curve: Curves.easeInOut,
            width: _isExpanded ? 260 : 120,
            height: _isExpanded ? 140 : 80,
            decoration: BoxDecoration(
              color: _isExpanded ? DocsTheme.accentGreen : DocsTheme.primary,
              borderRadius: BorderRadius.circular(_isExpanded ? 24 : 12),
              boxShadow: [
                BoxShadow(
                  color:
                      (_isExpanded ? DocsTheme.accentGreen : DocsTheme.primary)
                          .withValues(alpha: 0.4),
                  blurRadius: 16,
                  offset: const Offset(0, 4),
                ),
              ],
            ),
            child: Center(
              child: Text(
                _isExpanded ? 'Expanded!' : 'Click Toggle',
                style: const TextStyle(
                    fontWeight: FontWeight.bold, color: Colors.white),
              ),
            ),
          ),
          const SizedBox(height: 20),
          ElevatedButton(
            onPressed: () => setState(() => _isExpanded = !_isExpanded),
            child: const Text('Toggle AnimatedContainer'),
          ),
        ],
      ),
      code: '''AnimatedContainer(
  duration: const Duration(milliseconds: 500),
  curve: Curves.easeInOut,
  width: _isExpanded ? 260 : 120,
  height: _isExpanded ? 140 : 80,
  decoration: BoxDecoration(
    color: _isExpanded ? Colors.green : Colors.blue,
    borderRadius: BorderRadius.circular(_isExpanded ? 24 : 12),
  ),
  child: Center(child: Text(_isExpanded ? 'Expanded!' : 'Contracted')),
)''',
    );
  }

  Widget _buildAnimatedOpacityDemo() {
    return InteractivePreview(
      title: 'AnimatedOpacity',
      description:
          'Gradually fades child widgets in and out with configurable duration and easing curves.',
      preview: Column(
        children: [
          AnimatedOpacity(
            opacity: _isVisible ? 1.0 : 0.0,
            duration: const Duration(milliseconds: 600),
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
              decoration: BoxDecoration(
                color: DocsTheme.surface,
                borderRadius: const BorderRadius.circular(12),
                border: Border.all(color: DocsTheme.accentPurple),
              ),
              child: const Text(
                'Fading Content Box',
                style: TextStyle(
                    fontWeight: FontWeight.bold, color: DocsTheme.accentPurple),
              ),
            ),
          ),
          const SizedBox(height: 20),
          ElevatedButton(
            onPressed: () => setState(() => _isVisible = !_isVisible),
            child: Text(_isVisible ? 'Fade Out' : 'Fade In'),
          ),
        ],
      ),
      code: '''AnimatedOpacity(
  opacity: _isVisible ? 1.0 : 0.0,
  duration: const Duration(milliseconds: 600),
  child: Container(
    padding: const EdgeInsets.all(16),
    child: const Text('Fading Content Box'),
  ),
)''',
    );
  }
}
