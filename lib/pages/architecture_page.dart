import 'package:flartdart/flartdart.dart';
import '../theme/docs_theme.dart';
import '../components/docs_shell.dart';
import '../components/code_block.dart';

class ArchitecturePage extends StatelessWidget {
  const ArchitecturePage({super.key});

  @override
  Widget build(BuildContext context) {
    return DocsShell(
      currentRoute: '/docs/architecture',
      title: 'Virtual DOM & Architecture',
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildHeader(),
          const SizedBox(height: 32),
          _buildCorePhilosophy(),
          const SizedBox(height: 32),
          _buildComparisonTable(),
          const SizedBox(height: 32),
          _buildVdomLifecycle(),
          const SizedBox(height: 32),
          _buildZeroEscapeHatchRule(),
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
            'ARCHITECTURE',
            style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: DocsTheme.accentCyan),
          ),
        ),
        const SizedBox(height: 12),
        const Text(
          'Virtual DOM & Core Architecture',
          style: TextStyle(
              fontSize: 36,
              fontWeight: FontWeight.w800,
              color: DocsTheme.textPrimary),
        ),
        const SizedBox(height: 8),
        const Text(
          'How Flart brings Flutter\'s component model to the open web with microsecond DOM updates and zero canvas overhead.',
          style: TextStyle(fontSize: 16, color: DocsTheme.textSecondary),
        ),
      ],
    );
  }

  Widget _buildCorePhilosophy() {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'The Philosophy: Semantic HTML DOM vs CanvasKit',
          style: TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.bold,
              color: DocsTheme.textPrimary),
        ),
        SizedBox(height: 12),
        Text(
          'Standard Flutter Web uses CanvasKit (Skia compiled to WebAssembly) to draw pixels directly onto an HTML <canvas> element. While this guarantees pixel-identical mobile fidelity, it incurs huge trade-offs on the web:\n\n'
          '• Large Initial Download: 15–20 MB of WASM and font assets before the first pixel appears.\n'
          '• Non-Semantic DOM: Search engine crawlers (Google, Bing) see an empty canvas.\n'
          '• Degraded Text Selection: Native browser text selection, spell-checking, and browser extensions do not work out of the box.\n'
          '• High Memory Usage: 300+ MB baseline memory per tab.\n\n'
          'Flart solves this by bringing Flutter\'s declarative widget tree to a lightweight, pure Dart Virtual DOM that compiles directly to semantic HTML5 elements (<div>, <input>, <button>, <p>, <span>).',
          style: TextStyle(
              fontSize: 14, color: DocsTheme.textSecondary, height: 1.6),
        ),
      ],
    );
  }

  Widget _buildComparisonTable() {
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        color: DocsTheme.surface,
        borderRadius: const BorderRadius.circular(16),
        border: Border.all(color: DocsTheme.borderLight),
      ),
      child: Column(
        children: [
          const Container(
            padding: EdgeInsets.symmetric(horizontal: 20, vertical: 14),
            decoration: BoxDecoration(
              color: DocsTheme.surfaceAlt,
              borderRadius: BorderRadius.vertical(top: 15),
              border: Border(bottom: BorderSide(color: DocsTheme.border)),
            ),
            child: Row(
              children: [
                Expanded(
                    flex: 3,
                    child: Text('Feature / Metric',
                        style: TextStyle(
                            fontWeight: FontWeight.bold,
                            color: DocsTheme.textPrimary))),
                Expanded(
                    flex: 3,
                    child: Text('FlartDart 2.1.0',
                        style: TextStyle(
                            fontWeight: FontWeight.bold,
                            color: DocsTheme.accentGreen))),
                Expanded(
                    flex: 3,
                    child: Text('Flutter Web (CanvasKit)',
                        style: TextStyle(
                            fontWeight: FontWeight.bold,
                            color: DocsTheme.textMuted))),
              ],
            ),
          ),
          _buildTableRow('Rendering Engine', 'Pure Dart Virtual DOM (HTML5)',
              'Skia / WASM (<canvas>)'),
          _buildTableRow('Gzipped Bundle Size', '~280 KB', '18.4 MB'),
          _buildTableRow(
              'Time to Interactive (TTI)', '< 180 ms', '2,100 – 3,500 ms'),
          _buildTableRow('SEO / Crawlability', '100% Native Semantic DOM',
              'Invisible to crawlers'),
          _buildTableRow('RAM Consumption', '~40 MB', '320 MB+'),
          _buildTableRow(
              'API Parity', '100% Flutter API Parity', 'Native Flutter'),
        ],
      ),
    );
  }

  Widget _buildTableRow(String feature, String flart, String canvaskit) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
      decoration: const BoxDecoration(
        border: Border(bottom: BorderSide(color: DocsTheme.border)),
      ),
      child: Row(
        children: [
          Expanded(
              flex: 3,
              child: Text(feature,
                  style: const TextStyle(
                      fontSize: 13, color: DocsTheme.textSecondary))),
          Expanded(
              flex: 3,
              child: Text(flart,
                  style: const TextStyle(
                      fontSize: 13,
                      fontWeight: FontWeight.w600,
                      color: DocsTheme.accentGreen))),
          Expanded(
              flex: 3,
              child: Text(canvaskit,
                  style: const TextStyle(
                      fontSize: 13, color: DocsTheme.textMuted))),
        ],
      ),
    );
  }

  Widget _buildVdomLifecycle() {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Reconciliation Lifecycle',
          style: TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.bold,
              color: DocsTheme.textPrimary),
        ),
        SizedBox(height: 12),
        Text(
          'When setState() or ValueNotifier triggers a rebuild in Flart:\n'
          '1. Build Phase: Flart calls the build(context) method to construct a fresh Virtual DOM tree.\n'
          '2. Diffing Phase: The VDomReconciler compares the new tree against the previously rendered tree.\n'
          '3. Patching Phase: Only the changed attributes, styles, or children nodes are mutated in the browser DOM.\n'
          '4. Microsecond Efficiency: Pure Dart diffing executes in ~0.3ms without dropping frames.',
          style: TextStyle(
              fontSize: 14, color: DocsTheme.textSecondary, height: 1.6),
        ),
        SizedBox(height: 16),
        CodeBlock(
          code: '''// Virtual DOM reconciler execution
void reRenderApp() {
  if (_rootWidget == null || _appContainer == null) return;
  final newVNode = _rootWidget!.toVNode(BuildContext());
  final patches = VDomReconciler.diff(_currentVNode, newVNode);
  VDomReconciler.patch(_appContainer!, patches);
  _currentVNode = newVNode;
}''',
          language: 'dart',
          title: 'vdom_reconciler.dart',
        ),
      ],
    );
  }

  Widget _buildZeroEscapeHatchRule() {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: DocsTheme.surfaceAlt,
        borderRadius: const BorderRadius.circular(16),
        border: Border.all(color: DocsTheme.primary.withValues(alpha: 0.3)),
      ),
      child: const Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(Icons.verified, size: 22, color: DocsTheme.primary),
              SizedBox(width: 10),
              Text(
                'Zero-Escape-Hatch Guarantee',
                style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                    color: DocsTheme.textPrimary),
              ),
            ],
          ),
          SizedBox(height: 10),
          Text(
            'In Flart v2.1.0, all widgets adhere strictly to Flutter styling principles. There are NO rawCss or raw inline HTML string escape hatches. Styling is accomplished cleanly using BoxDecoration, Border, BorderRadius, BoxShadow, Gradient, TextStyle, and EdgeInsets.',
            style: TextStyle(
                fontSize: 14, color: DocsTheme.textSecondary, height: 1.5),
          ),
        ],
      ),
    );
  }
}
