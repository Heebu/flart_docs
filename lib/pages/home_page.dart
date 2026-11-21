import 'package:flartdart/flartdart.dart';
import '../theme/docs_theme.dart';
import '../components/docs_shell.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  // Live Playground State
  int _counter = 0;
  bool _isSwitchOn = true;
  double _sliderValue = 50.0;

  // Feedback Submission State
  final TextEditingController _feedbackController = TextEditingController();
  final TextEditingController _authorController = TextEditingController();
  int _selectedRating = 5;
  bool _isSubmittingFeedback = false;
  String? _feedbackSuccessMsg;
  final List<Map<String, dynamic>> _localFeedback = [];

  void _submitFeedback() {
    final msg = _feedbackController.text.trim();
    if (msg.isEmpty) return;

    setState(() {
      _isSubmittingFeedback = true;
    });

    _localFeedback.add({
      'rating': _selectedRating,
      'message': msg,
      'author': _authorController.text.trim().isNotEmpty
          ? _authorController.text.trim()
          : 'Anonymous Developer',
    });

    setState(() {
      _isSubmittingFeedback = false;
      _feedbackSuccessMsg = 'Thank you! Your feedback has been recorded.';
      _feedbackController.text = '';
    });
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final width = constraints.maxWidth;
        final isMobile = DocsTheme.isMobile(width);
        final isTablet = DocsTheme.isTablet(width);

        return DocsShell(
          currentRoute: '/',
          title: 'Flart — Pure Dart Web Framework',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              _buildHeroSection(isMobile, isTablet),
              const SizedBox(height: 64),
              _buildBenchmarkComparison(isMobile),
              const SizedBox(height: 64),
              _buildInteractivePlayground(isMobile),
              const SizedBox(height: 64),
              _buildFrameworkStats(isMobile),
              const SizedBox(height: 64),
              _buildCategoriesGrid(isMobile),
              const SizedBox(height: 64),
              _buildFeedbackSection(isMobile),
            ],
          ),
        );
      },
    );
  }

  Widget _buildHeroSection(bool isMobile, bool isTablet) {
    return Column(
      children: [
        // Release Pill
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
          decoration: BoxDecoration(
            color: DocsTheme.accentGreen.withValues(alpha: 0.12),
            borderRadius: const BorderRadius.circular(24),
            border:
                Border.all(color: DocsTheme.accentGreen.withValues(alpha: 0.3)),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Image.asset(
                'assets/dart_logo.png',
                width: 16,
                height: 16,
                fit: BoxFit.contain,
                alt: 'Dart Logo',
              ),
              const SizedBox(width: 8),
              const Text(
                'Flart v2.1.0 • Pure Dart Web Framework',
                style: TextStyle(
                  fontSize: 13,
                  fontWeight: FontWeight.w600,
                  color: DocsTheme.accentGreen,
                ),
              ),
            ],
          ),
        ),
        const SizedBox(height: 28),

        // Hero Title
        Text(
          isMobile
              ? 'Fast, minimal web\nframework for Dart'
              : 'Fast, minimal, lightweight\nweb framework for Dart',
          textAlign: TextAlign.center,
          style: TextStyle(
            fontSize: isMobile ? 32 : (isTablet ? 40 : 48),
            fontWeight: FontWeight.w800,
            letterSpacing: isMobile ? -0.5 : -1.2,
            height: 1.15,
            color: DocsTheme.textPrimary,
          ),
        ),
        const SizedBox(height: 16),

        // Subtitle
        Center(
          child: Container(
            constraints: const BoxConstraints(maxWidth: 680),
            child: Text(
              'Build rich, responsive web apps in pure Dart with an ultra-lightweight Virtual DOM, 100% Flutter API parity, and zero CanvasKit overhead.',
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: isMobile ? 15 : 17,
                height: 1.6,
                color: DocsTheme.textSecondary,
              ),
            ),
          ),
        ),
        const SizedBox(height: 32),

        // CTA Buttons
        Wrap(
          spacing: 16,
          runSpacing: 12,
          alignment: WrapAlignment.center,
          children: [
            GestureDetector(
              onTap: () => PageNavigator.pushNamed('/docs/installation'),
              child: Container(
                padding: EdgeInsets.symmetric(
                    horizontal: isMobile ? 22 : 28, vertical: 14),
                decoration: const BoxDecoration(
                  color: DocsTheme.accentGreen,
                  borderRadius: BorderRadius.circular(10),
                  boxShadow: [
                    BoxShadow(
                      color: Color(0x4410B981),
                      blurRadius: 16,
                      offset: Offset(0, 4),
                    ),
                  ],
                ),
                child: const Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      'Get Started',
                      style: TextStyle(
                        fontSize: 15,
                        fontWeight: FontWeight.bold,
                        color: Color(0xFF042F1E),
                      ),
                    ),
                    SizedBox(width: 8),
                    Icon(Icons.arrow_forward,
                        size: 16, color: Color(0xFF042F1E)),
                  ],
                ),
              ),
            ),
            GestureDetector(
              onTap: () => PageNavigator.pushNamed('/docs/widgets/basic'),
              child: Container(
                padding: EdgeInsets.symmetric(
                    horizontal: isMobile ? 20 : 24, vertical: 14),
                decoration: BoxDecoration(
                  color: DocsTheme.surfaceAlt,
                  borderRadius: const BorderRadius.circular(10),
                  border: Border.all(color: DocsTheme.borderLight),
                ),
                child: const Text(
                  'Explore Widgets (100+)',
                  style: TextStyle(
                    fontSize: 15,
                    fontWeight: FontWeight.w600,
                    color: DocsTheme.textPrimary,
                  ),
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: 32),

        // Quick CLI Command Box (horizontally scrollable on mobile)
        Container(
          constraints: const BoxConstraints(maxWidth: 580),
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
          decoration: BoxDecoration(
            color: DocsTheme.codeBackground,
            borderRadius: const BorderRadius.circular(12),
            border: Border.all(color: DocsTheme.borderLight),
          ),
          child: SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: const Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text('\$ ',
                    style: TextStyle(
                        color: DocsTheme.accentGreen,
                        fontFamily: 'JetBrains Mono')),
                Text(
                  'dart pub global activate flart && flart create my_app',
                  style: TextStyle(
                    fontFamily: 'JetBrains Mono',
                    fontSize: 13,
                    color: Color(0xFFE2E8F0),
                  ),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildBenchmarkComparison(bool isMobile) {
    return Column(
      children: [
        const Text(
          'Engineered for Peak Web Performance',
          textAlign: TextAlign.center,
          style: TextStyle(
            fontSize: 28,
            fontWeight: FontWeight.bold,
            color: DocsTheme.textPrimary,
          ),
        ),
        const SizedBox(height: 12),
        const Text(
          'Flart compiles to pure semantic HTML DOM with zero CanvasKit or WebAssembly baggage.',
          textAlign: TextAlign.center,
          style: TextStyle(fontSize: 15, color: DocsTheme.textSecondary),
        ),
        const SizedBox(height: 32),

        // 4 Metric cards
        Wrap(
          spacing: 16,
          runSpacing: 16,
          alignment: WrapAlignment.center,
          children: [
            _buildMetricCard(
              title: 'Bundle Size (gzipped)',
              value: '~280 KB',
              subtext: 'vs 18.4 MB (CanvasKit)',
              badge: '98.4% Smaller',
              badgeColor: DocsTheme.accentGreen,
              icon: Icons.compress,
              isMobile: isMobile,
            ),
            _buildMetricCard(
              title: 'First Contentful Paint',
              value: '120 ms',
              subtext: 'vs 2,100 ms (CanvasKit)',
              badge: '17.5x Faster',
              badgeColor: DocsTheme.primary,
              icon: Icons.speed,
              isMobile: isMobile,
            ),
            _buildMetricCard(
              title: 'SEO & Search Indexing',
              value: '100% Native',
              subtext: 'Semantic HTML5 Elements',
              badge: 'Full Web Searchable',
              badgeColor: DocsTheme.accentPurple,
              icon: Icons.search,
              isMobile: isMobile,
            ),
            _buildMetricCard(
              title: 'Virtual DOM Diffing',
              value: '0.3 ms',
              subtext: 'Microsecond Reconciler',
              badge: '60+ FPS Smooth',
              badgeColor: DocsTheme.accentCyan,
              icon: Icons.memory,
              isMobile: isMobile,
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildMetricCard({
    required String title,
    required String value,
    required String subtext,
    required String badge,
    required Color badgeColor,
    required dynamic icon,
    required bool isMobile,
  }) {
    return Container(
      width: isMobile ? double.infinity : 220,
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: DocsTheme.surface,
        borderRadius: const BorderRadius.circular(16),
        border: Border.all(color: DocsTheme.borderLight),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Icon(icon, size: 22, color: badgeColor),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                decoration: BoxDecoration(
                  color: badgeColor.withValues(alpha: 0.15),
                  borderRadius: const BorderRadius.circular(6),
                ),
                child: Text(
                  badge,
                  style: TextStyle(
                      fontSize: 10,
                      fontWeight: FontWeight.bold,
                      color: badgeColor),
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          Text(
            value,
            style: const TextStyle(
              fontSize: 28,
              fontWeight: FontWeight.w800,
              color: DocsTheme.textPrimary,
            ),
          ),
          const SizedBox(height: 4),
          Text(
            title,
            style: const TextStyle(
                fontSize: 13,
                fontWeight: FontWeight.w600,
                color: DocsTheme.textSecondary),
          ),
          const SizedBox(height: 4),
          Text(
            subtext,
            style: const TextStyle(fontSize: 11, color: DocsTheme.textMuted),
          ),
        ],
      ),
    );
  }

  Widget _buildInteractivePlayground(bool isMobile) {
    return Container(
      decoration: BoxDecoration(
        color: DocsTheme.surface,
        borderRadius: const BorderRadius.circular(20),
        border: Border.all(color: DocsTheme.borderLight, width: 1.5),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // Header
          Container(
            padding: EdgeInsets.all(isMobile ? 18 : 24),
            decoration: const BoxDecoration(
              color: DocsTheme.surfaceAlt,
              borderRadius: BorderRadius.vertical(top: 19),
              border: Border(bottom: BorderSide(color: DocsTheme.border)),
            ),
            child: Wrap(
              spacing: 12,
              runSpacing: 8,
              alignment: WrapAlignment.spaceBetween,
              crossAxisAlignment: WrapCrossAlignment.center,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Live Interactive Flart Playground',
                      style: TextStyle(
                          fontSize: isMobile ? 18 : 20,
                          fontWeight: FontWeight.bold,
                          color: DocsTheme.textPrimary),
                    ),
                    const SizedBox(height: 4),
                    const Text(
                      'Interact with real Flart widgets rendered directly into the HTML DOM below.',
                      style: TextStyle(
                          fontSize: 13, color: DocsTheme.textSecondary),
                    ),
                  ],
                ),
                Container(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                  decoration: BoxDecoration(
                    color: DocsTheme.accentGreen.withValues(alpha: 0.15),
                    borderRadius: const BorderRadius.circular(6),
                  ),
                  child: const Text(
                    'LIVE RENDER',
                    style: TextStyle(
                        fontSize: 10,
                        fontWeight: FontWeight.bold,
                        color: DocsTheme.accentGreen),
                  ),
                ),
              ],
            ),
          ),

          // Content: Live Controls
          Padding(
            padding: EdgeInsets.all(isMobile ? 20 : 32),
            child: Wrap(
              spacing: 24,
              runSpacing: 20,
              alignment: WrapAlignment.spaceEvenly,
              children: [
                // Control 1: Counter
                Container(
                  width: isMobile ? double.infinity : 240,
                  padding: const EdgeInsets.all(20),
                  decoration: BoxDecoration(
                    color: DocsTheme.card,
                    borderRadius: const BorderRadius.circular(14),
                    border: Border.all(color: DocsTheme.borderLight),
                  ),
                  child: Column(
                    children: [
                      const Text(
                        'Counter State',
                        style: TextStyle(
                            fontSize: 14,
                            fontWeight: FontWeight.w600,
                            color: DocsTheme.textSecondary),
                      ),
                      const SizedBox(height: 12),
                      Text(
                        '$_counter',
                        style: const TextStyle(
                            fontSize: 36,
                            fontWeight: FontWeight.w800,
                            color: DocsTheme.accentGreen),
                      ),
                      const SizedBox(height: 16),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          ElevatedButton(
                            onPressed: () => setState(() => _counter--),
                            child: const Text('-1'),
                          ),
                          const SizedBox(width: 12),
                          ElevatedButton(
                            onPressed: () => setState(() => _counter++),
                            child: const Text('+1'),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),

                // Control 2: Switch & Toggle
                Container(
                  width: isMobile ? double.infinity : 240,
                  padding: const EdgeInsets.all(20),
                  decoration: BoxDecoration(
                    color: DocsTheme.card,
                    borderRadius: const BorderRadius.circular(14),
                    border: Border.all(color: DocsTheme.borderLight),
                  ),
                  child: Column(
                    children: [
                      const Text(
                        'Reactive Switch',
                        style: TextStyle(
                            fontSize: 14,
                            fontWeight: FontWeight.w600,
                            color: DocsTheme.textSecondary),
                      ),
                      const SizedBox(height: 16),
                      Switch(
                        value: _isSwitchOn,
                        onChanged: (val) => setState(() => _isSwitchOn = val),
                      ),
                      const SizedBox(height: 16),
                      Text(
                        _isSwitchOn
                            ? 'Status: Active (ON)'
                            : 'Status: Inactive (OFF)',
                        style: TextStyle(
                          fontSize: 12,
                          fontWeight: FontWeight.bold,
                          color: _isSwitchOn
                              ? DocsTheme.accentGreen
                              : DocsTheme.textMuted,
                        ),
                      ),
                    ],
                  ),
                ),

                // Control 3: Slider
                Container(
                  width: isMobile ? double.infinity : 260,
                  padding: const EdgeInsets.all(20),
                  decoration: BoxDecoration(
                    color: DocsTheme.card,
                    borderRadius: const BorderRadius.circular(14),
                    border: Border.all(color: DocsTheme.borderLight),
                  ),
                  child: Column(
                    children: [
                      const Text(
                        'Slider Control',
                        style: TextStyle(
                            fontSize: 14,
                            fontWeight: FontWeight.w600,
                            color: DocsTheme.textSecondary),
                      ),
                      const SizedBox(height: 12),
                      Text(
                        '${_sliderValue.toInt()}%',
                        style: const TextStyle(
                            fontSize: 28,
                            fontWeight: FontWeight.w800,
                            color: DocsTheme.primary),
                      ),
                      const SizedBox(height: 8),
                      Slider(
                        value: _sliderValue,
                        min: 0,
                        max: 100,
                        onChanged: (val) => setState(() => _sliderValue = val),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildFrameworkStats(bool isMobile) {
    return Container(
      padding: EdgeInsets.all(isMobile ? 20 : 28),
      decoration: BoxDecoration(
        color: DocsTheme.surfaceAlt,
        borderRadius: const BorderRadius.circular(18),
        border: Border.all(color: DocsTheme.accentGreen.withValues(alpha: 0.3)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Wrap(
            spacing: 12,
            runSpacing: 10,
            alignment: WrapAlignment.spaceBetween,
            crossAxisAlignment: WrapCrossAlignment.center,
            children: [
              Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Image.asset(
                    'assets/dart_logo.png',
                    width: 24,
                    height: 24,
                    fit: BoxFit.contain,
                    alt: 'Dart Logo',
                  ),
                  const SizedBox(width: 12),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'FlartDart Framework Stats',
                        style: TextStyle(
                            fontSize: isMobile ? 16 : 18,
                            fontWeight: FontWeight.bold,
                            color: DocsTheme.textPrimary),
                      ),
                      const SizedBox(height: 2),
                      const Text(
                        'Lightweight pure Dart web framework at a glance',
                        style: TextStyle(
                            fontSize: 12, color: DocsTheme.textSecondary),
                      ),
                    ],
                  ),
                ],
              ),
              Container(
                padding:
                    const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(
                  color: DocsTheme.accentGreen.withValues(alpha: 0.2),
                  borderRadius: const BorderRadius.circular(8),
                ),
                child: const Text(
                  'v2.1.0 STABLE',
                  style: TextStyle(
                      fontSize: 11,
                      fontWeight: FontWeight.bold,
                      color: DocsTheme.accentGreen),
                ),
              ),
            ],
          ),
          const SizedBox(height: 20),
          Wrap(
            spacing: 24,
            runSpacing: 16,
            children: [
              _buildTelemetryField('Runtime', 'Dart SDK 3.x'),
              _buildTelemetryField('Widgets Audited', '100+'),
              _buildTelemetryField('Categories', '9 Categories (100% Parity)'),
              _buildTelemetryField('Bundle Size', '~280 KB gzipped'),
              _buildTelemetryField('License', 'MIT'),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildTelemetryField(String label, String value) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(label,
            style: const TextStyle(fontSize: 11, color: DocsTheme.textMuted)),
        const SizedBox(height: 4),
        Text(value,
            style: const TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.bold,
                color: DocsTheme.textPrimary)),
      ],
    );
  }

  Widget _buildCategoriesGrid(bool isMobile) {
    return Column(
      children: [
        const Text(
          'Explore the 9 Widget Categories',
          style: TextStyle(
              fontSize: 28,
              fontWeight: FontWeight.bold,
              color: DocsTheme.textPrimary),
        ),
        const SizedBox(height: 12),
        const Text(
          '100+ production widgets with zero rawCss escape hatches and complete Flutter API parity.',
          style: TextStyle(fontSize: 15, color: DocsTheme.textSecondary),
        ),
        const SizedBox(height: 32),
        Wrap(
          spacing: 16,
          runSpacing: 16,
          alignment: WrapAlignment.center,
          children: [
            _buildCategoryCard(
                '1. Basic & Core',
                'Container, Text, Padding, Center, SizedBox, ColoredBox',
                '/docs/widgets/basic',
                Icons.widgets,
                isMobile),
            _buildCategoryCard(
                '2. Layout & Structure',
                'Column, Row, Flex, Expanded, Spacer, Wrap, Stack, Positioned',
                '/docs/widgets/layout',
                Icons.view_quilt,
                isMobile),
            _buildCategoryCard(
                '3. Decoration & Style',
                'BoxDecoration, Border, BorderRadius, BoxShadow, Gradient, ClipRRect',
                '/docs/widgets/decoration',
                Icons.palette,
                isMobile),
            _buildCategoryCard(
                '4. Scrollables & Lists',
                'ListView, ListView.builder, GridView, SingleChildScrollView',
                '/docs/widgets/scrollables',
                Icons.view_stream,
                isMobile),
            _buildCategoryCard(
                '5. Form & Inputs',
                'TextField, TextFormField, Checkbox, Radio, Switch, Slider, Dropdown',
                '/docs/widgets/inputs',
                Icons.edit,
                isMobile),
            _buildCategoryCard(
                '6. Buttons & Gestures',
                'ElevatedButton, TextButton, OutlinedButton, IconButton, GestureDetector',
                '/docs/widgets/buttons',
                Icons.touch_app,
                isMobile),
            _buildCategoryCard(
                '7. Animations',
                'AnimatedContainer, AnimatedOpacity, FadeTransition, SlideTransition',
                '/docs/widgets/animation',
                Icons.animation,
                isMobile),
            _buildCategoryCard(
                '8. Media & Feedback',
                'Image.network, Icon, ProgressIndicator, Tooltip, SnackBar',
                '/docs/widgets/media',
                Icons.image,
                isMobile),
            _buildCategoryCard(
                '9. Utility & Modals',
                'Dialog, AlertDialog, BottomSheet, Divider, Opacity, Visibility',
                '/docs/widgets/utility',
                Icons.layers,
                isMobile),
          ],
        ),
      ],
    );
  }

  Widget _buildCategoryCard(
      String title, String desc, String route, dynamic icon, bool isMobile) {
    return GestureDetector(
      onTap: () => PageNavigator.pushNamed(route),
      child: Container(
        width: isMobile ? double.infinity : 280,
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          color: DocsTheme.surface,
          borderRadius: const BorderRadius.circular(16),
          border: Border.all(color: DocsTheme.borderLight),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Icon(icon, size: 24, color: DocsTheme.accentGreen),
            const SizedBox(height: 12),
            Text(
              title,
              style: const TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                  color: DocsTheme.textPrimary),
            ),
            const SizedBox(height: 8),
            Text(
              desc,
              style: const TextStyle(
                  fontSize: 13, height: 1.4, color: DocsTheme.textSecondary),
            ),
            const SizedBox(height: 14),
            const Row(
              children: [
                Text('View Widgets',
                    style: TextStyle(
                        fontSize: 12,
                        fontWeight: FontWeight.bold,
                        color: DocsTheme.accentGreen)),
                SizedBox(width: 4),
                Icon(Icons.arrow_forward,
                    size: 14, color: DocsTheme.accentGreen),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildFeedbackSection(bool isMobile) {
    return Container(
      padding: EdgeInsets.all(isMobile ? 20 : 32),
      decoration: BoxDecoration(
        color: DocsTheme.surface,
        borderRadius: const BorderRadius.circular(20),
        border: Border.all(color: DocsTheme.borderLight),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            'Community Developer Feedback',
            style: TextStyle(
                fontSize: 22,
                fontWeight: FontWeight.bold,
                color: DocsTheme.textPrimary),
          ),
          const SizedBox(height: 6),
          const Text(
            'Share your thoughts on FlartDart 2.1.0 — we love hearing from the community.',
            style: TextStyle(fontSize: 14, color: DocsTheme.textSecondary),
          ),
          const SizedBox(height: 24),
          if (_feedbackSuccessMsg != null)
            Container(
              padding: const EdgeInsets.all(16),
              margin: const EdgeInsets.only(bottom: 20),
              decoration: BoxDecoration(
                color: DocsTheme.accentGreen.withValues(alpha: 0.15),
                borderRadius: const BorderRadius.circular(10),
                border: Border.all(color: DocsTheme.accentGreen),
              ),
              child: Text(
                _feedbackSuccessMsg!,
                style: const TextStyle(
                    fontWeight: FontWeight.bold, color: DocsTheme.accentGreen),
              ),
            ),
          if (isMobile) ...[
            TextField(
              controller: _authorController,
              placeholder: 'Your name or handle (e.g. @developer)',
              style: const TextStyle(color: DocsTheme.textPrimary),
            ),
            const SizedBox(height: 12),
            Row(
              children: [
                const Text('Rating: ',
                    style: TextStyle(
                        color: DocsTheme.textSecondary, fontSize: 13)),
                const SizedBox(width: 8),
                for (int r = 1; r <= 5; r++)
                  GestureDetector(
                    onTap: () => setState(() => _selectedRating = r),
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 4),
                      child: Icon(
                        Icons.star,
                        size: 24,
                        color: r <= _selectedRating
                            ? DocsTheme.accentAmber
                            : DocsTheme.textMuted,
                      ),
                    ),
                  ),
              ],
            ),
          ] else
            Row(
              children: [
                Container(
                  width: 500,
                  child: TextField(
                    controller: _authorController,
                    placeholder: 'Your name or handle (e.g. @developer)',
                    style: const TextStyle(color: DocsTheme.textPrimary),
                  ),
                ),
                const SizedBox(width: 10),
                // Rating picker
                Row(
                  children: [
                    for (int r = 1; r <= 5; r++)
                      GestureDetector(
                        onTap: () => setState(() => _selectedRating = r),
                        child: Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 4),
                          child: Icon(
                            Icons.star,
                            size: 22,
                            color: r <= _selectedRating
                                ? DocsTheme.accentAmber
                                : DocsTheme.textMuted,
                          ),
                        ),
                      ),
                  ],
                ),
              ],
            ),
          const SizedBox(height: 16),
          TextField(
            controller: _feedbackController,
            placeholder:
                'What do you think of FlartDart v2.1.0?',
            style: const TextStyle(color: DocsTheme.textPrimary),
          ),
          const SizedBox(height: 20),
          ElevatedButton(
            onPressed: _isSubmittingFeedback ? null : _submitFeedback,
            child: Text(_isSubmittingFeedback
                ? 'Submitting...'
                : 'Submit Feedback'),
          ),
        ],
      ),
    );
  }
}
