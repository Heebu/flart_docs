import 'package:flartdart/flartdart.dart';
import '../theme/docs_theme.dart';
import '../components/docs_shell.dart';
import '../components/code_block.dart';
import '../components/interactive_preview.dart';

class ResponsiveSizingPage extends StatefulWidget {
  const ResponsiveSizingPage({super.key});

  @override
  State<ResponsiveSizingPage> createState() => _ResponsiveSizingPageState();
}

class _ResponsiveSizingPageState extends State<ResponsiveSizingPage> {
  double _testWidth = 320;

  @override
  Widget build(BuildContext context) {
    return DocsShell(
      currentRoute: '/docs/responsive',
      title: 'Responsive Design & ScreenUtil',
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildHeader(),
          const SizedBox(height: 32),
          _buildInteractiveDemo(),
          const SizedBox(height: 32),
          _buildScreenUtilGuide(),
          const SizedBox(height: 32),
          _buildLayoutBuilderGuide(),
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
            'CORE CONCEPTS',
            style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: DocsTheme.primary),
          ),
        ),
        const SizedBox(height: 12),
        const Text(
          'Responsive Design & ScreenUtil',
          style: TextStyle(
              fontSize: 36,
              fontWeight: FontWeight.w800,
              color: DocsTheme.textPrimary),
        ),
        const SizedBox(height: 8),
        const Text(
          'Build fluid, pixel-perfect UIs that automatically scale across mobile, tablet, desktop, and ultra-wide displays.',
          style: TextStyle(fontSize: 16, color: DocsTheme.textSecondary),
        ),
      ],
    );
  }

  Widget _buildInteractiveDemo() {
    return InteractivePreview(
      title: 'Adaptive Responsive Container',
      description:
          'Drag the slider below to simulate different container widths and watch the layout adapt.',
      preview: Column(
        children: [
          Container(
            width: _testWidth,
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              color: _testWidth < 380
                  ? DocsTheme.accentAmber.withValues(alpha: 0.15)
                  : DocsTheme.accentGreen.withValues(alpha: 0.15),
              borderRadius: const BorderRadius.circular(16),
              border: Border.all(
                color: _testWidth < 380
                    ? DocsTheme.accentAmber
                    : DocsTheme.accentGreen,
                width: 1.5,
              ),
            ),
            child: Column(
              children: [
                Icon(
                  _testWidth < 380 ? Icons.phone_android : Icons.laptop,
                  size: 32,
                  color: _testWidth < 380
                      ? DocsTheme.accentAmber
                      : DocsTheme.accentGreen,
                ),
                const SizedBox(height: 10),
                Text(
                  _testWidth < 380
                      ? 'Mobile Viewport'
                      : 'Desktop / Tablet Viewport',
                  style: const TextStyle(
                      fontWeight: FontWeight.bold,
                      color: DocsTheme.textPrimary),
                ),
                const SizedBox(height: 4),
                Text(
                  'Width: ${_testWidth.toInt()}px',
                  style: const TextStyle(
                      fontSize: 12, color: DocsTheme.textSecondary),
                ),
              ],
            ),
          ),
          const SizedBox(height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text('Width: ',
                  style: TextStyle(color: DocsTheme.textSecondary)),
              ElevatedButton(
                onPressed: () => setState(() => _testWidth = 260),
                child: const Text('Mobile (260px)'),
              ),
              const SizedBox(width: 8),
              ElevatedButton(
                onPressed: () => setState(() => _testWidth = 440),
                child: const Text('Tablet (440px)'),
              ),
              const SizedBox(width: 8),
              ElevatedButton(
                onPressed: () => setState(() => _testWidth = 620),
                child: const Text('Desktop (620px)'),
              ),
            ],
          ),
        ],
      ),
      code: '''Widget build(BuildContext context) {
  return LayoutBuilder(
    builder: (context, constraints) {
      final isCompact = constraints.maxWidth < 380;
      return Container(
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          color: isCompact ? Color(0x22F59E0B) : Color(0x2210B981),
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: isCompact ? Colors.amber : Colors.green),
        ),
        child: Column(
          children: [
            Icon(isCompact ? Icons.phone_android : Icons.laptop),
            Text(isCompact ? 'Mobile Viewport' : 'Desktop Viewport'),
          ],
        ),
      );
    },
  );
}''',
    );
  }

  Widget _buildScreenUtilGuide() {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'ScreenUtil Extensions (.w, .h, .sp)',
          style: TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.bold,
              color: DocsTheme.textPrimary),
        ),
        SizedBox(height: 12),
        Text(
          'Initialize ScreenUtil once in main() to enable dynamic proportional scaling:',
          style: TextStyle(fontSize: 14, color: DocsTheme.textSecondary),
        ),
        SizedBox(height: 12),
        CodeBlock(
          code: '''void main() {
  ScreenUtil.init(
    designSize: const Size(1920, 1080),
    minTextAdapt: true,
  );
  runApp(const MyApp());
}

// In your widgets:
Container(
  width: 200.w,   // Proportional width
  height: 50.h,   // Proportional height
  child: Text('Scaled Text', style: TextStyle(fontSize: 16.sp)),
)''',
          language: 'dart',
          title: 'ScreenUtil Usage',
        ),
      ],
    );
  }

  Widget _buildLayoutBuilderGuide() {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'LayoutBuilder & Breakpoints',
          style: TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.bold,
              color: DocsTheme.textPrimary),
        ),
        SizedBox(height: 12),
        Text(
          'Use LayoutBuilder to switch widget trees based on parent container constraints:',
          style: TextStyle(fontSize: 14, color: DocsTheme.textSecondary),
        ),
        SizedBox(height: 12),
        CodeBlock(
          code: '''LayoutBuilder(
  builder: (context, constraints) {
    if (constraints.maxWidth >= 1024) {
      return DesktopThreeColumnLayout();
    } else if (constraints.maxWidth >= 768) {
      return TabletTwoColumnLayout();
    } else {
      return MobileSingleColumnLayout();
    }
  },
)''',
          language: 'dart',
          title: 'LayoutBuilder Pattern',
        ),
      ],
    );
  }
}
