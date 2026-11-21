import 'package:flartdart/flartdart.dart';
import '../theme/docs_theme.dart';

const List<Map<String, dynamic>> _docIndex = [
  {
    'title': 'Getting Started & Installation',
    'path': '/docs/installation',
    'category': 'Guide',
    'description':
        'How to install the Flart CLI, create new projects, and configure pubspec.yaml.',
    'keywords': [
      'install',
      'cli',
      'setup',
      'pubspec',
      'getting started',
      'create',
      'new',
      'flart',
      'runapp'
    ],
  },
  {
    'title': 'Virtual DOM & Architecture',
    'path': '/docs/architecture',
    'category': 'Architecture',
    'description':
        'Deep dive into Flart\'s pure Dart Virtual DOM, reconciler, and zero-CanvasKit DOM rendering.',
    'keywords': [
      'vdom',
      'virtual dom',
      'reconciler',
      'diff',
      'patch',
      'performance',
      'dom',
      'architecture',
      'canvaskit',
      'lightweight'
    ],
  },
  {
    'title': 'Responsive Design & ScreenUtil',
    'path': '/docs/responsive',
    'category': 'Core',
    'description':
        'Master responsive layouts with ScreenUtil (.w, .h, .sp), LayoutBuilder, and MediaQuery breakpoints.',
    'keywords': [
      'responsive',
      'screenutil',
      'mobile',
      'tablet',
      'desktop',
      'breakpoints',
      'layoutbuilder',
      'mediaquery',
      'scaling'
    ],
  },
  {
    'title': 'State Management: Stateful & Reactive',
    'path': '/docs/state',
    'category': 'Core',
    'description':
        'StatefulWidget, setState, ValueNotifier, and lightweight reactive state without complex boilerplate.',
    'keywords': [
      'state',
      'setstate',
      'valuenotifier',
      'valuelistenablebuilder',
      'reactive',
      'lifecycle',
      'initstate',
      'dispose'
    ],
  },
  {
    'title': 'Declarative Routing & History',
    'path': '/docs/routing',
    'category': 'Navigation',
    'description':
        'PageNavigator, pushNamed, replaceNamed, hash-based URLs, route guards, and transitions.',
    'keywords': [
      'routing',
      'pagenavigator',
      'navigation',
      'history',
      'hash',
      'routes',
      'guards',
      'transitions',
      'push',
      'pop'
    ],
  },
  {
    'title': 'Basic & Core Widgets',
    'path': '/docs/widgets/basic',
    'category': 'Widgets',
    'description':
        'Text, Container, Icon, Image, SizedBox, Center, Opacity, and other fundamental building blocks.',
    'keywords': [
      'text',
      'container',
      'icon',
      'image',
      'sizedbox',
      'center',
      'opacity',
      'basic',
      'core'
    ],
  },
  {
    'title': 'Layout & Structure Widgets',
    'path': '/docs/widgets/layout',
    'category': 'Widgets',
    'description':
        'Row, Column, Stack, Wrap, Expanded, Flexible, Align, Padding, and advanced layout systems.',
    'keywords': [
      'row',
      'column',
      'stack',
      'wrap',
      'expanded',
      'flexible',
      'align',
      'padding',
      'layout'
    ],
  },
  {
    'title': 'Decoration & Style Widgets',
    'path': '/docs/widgets/decoration',
    'category': 'Widgets',
    'description':
        'BoxDecoration, gradients, borders, shadows, ClipRRect, and visual styling.',
    'keywords': [
      'decoration',
      'gradient',
      'border',
      'shadow',
      'cliprrect',
      'style',
      'radius',
      'color'
    ],
  },
  {
    'title': 'Scrollables & Lists',
    'path': '/docs/widgets/scrollables',
    'category': 'Widgets',
    'description':
        'ListView, SingleChildScrollView, GridView, and scrollable containers.',
    'keywords': [
      'listview',
      'scroll',
      'gridview',
      'singlechild',
      'scrollable',
      'list'
    ],
  },
  {
    'title': 'Form & Input Widgets',
    'path': '/docs/widgets/inputs',
    'category': 'Widgets',
    'description':
        'TextField, Checkbox, Radio, Switch, Slider, DropdownButton, and form controls.',
    'keywords': [
      'textfield',
      'checkbox',
      'radio',
      'switch',
      'slider',
      'dropdown',
      'form',
      'input'
    ],
  },
  {
    'title': 'Buttons & Gestures',
    'path': '/docs/widgets/buttons',
    'category': 'Widgets',
    'description':
        'ElevatedButton, TextButton, OutlinedButton, IconButton, GestureDetector, and InkWell.',
    'keywords': [
      'button',
      'elevated',
      'text',
      'outlined',
      'icon',
      'gesture',
      'inkwell',
      'tap'
    ],
  },
  {
    'title': 'Animations',
    'path': '/docs/widgets/animation',
    'category': 'Widgets',
    'description':
        'AnimatedContainer, AnimatedOpacity, implicit animations, and transition widgets.',
    'keywords': [
      'animation',
      'animated',
      'transition',
      'opacity',
      'implicit',
      'tween'
    ],
  },
  {
    'title': 'Media & Feedback',
    'path': '/docs/widgets/media',
    'category': 'Widgets',
    'description':
        'Image, CircularProgressIndicator, LinearProgressIndicator, Tooltip, and media widgets.',
    'keywords': [
      'image',
      'progress',
      'circular',
      'linear',
      'tooltip',
      'media',
      'feedback'
    ],
  },
  {
    'title': 'Utility & Modals',
    'path': '/docs/widgets/utility',
    'category': 'Widgets',
    'description':
        'Visibility, LayoutBuilder, MediaQuery, Builder, and utility widgets.',
    'keywords': [
      'visibility',
      'layoutbuilder',
      'mediaquery',
      'builder',
      'utility',
      'modal'
    ],
  },
];

List<Map<String, dynamic>> _localSearch(String query) {
  final q = query.toLowerCase();
  return _docIndex.where((entry) {
    final title = (entry['title'] as String).toLowerCase();
    final desc = (entry['description'] as String).toLowerCase();
    final keywords = (entry['keywords'] as List).cast<String>();
    return title.contains(q) ||
        desc.contains(q) ||
        keywords.any((k) => k.contains(q));
  }).toList();
}

class SearchDialog extends StatefulWidget {
  final VoidCallback onClose;

  const SearchDialog({
    required this.onClose,
    super.key,
  });

  @override
  State<SearchDialog> createState() => _SearchDialogState();
}

class _SearchDialogState extends State<SearchDialog> {
  final TextEditingController _controller = TextEditingController();
  List<Map<String, dynamic>> _results = [];
  String _currentQuery = '';

  void _performSearch(String query) {
    final trimmed = query.trim();
    if (trimmed.isEmpty) {
      setState(() {
        _currentQuery = '';
        _results = [];
      });
      return;
    }

    setState(() {
      _currentQuery = trimmed;
      _results = _localSearch(trimmed);
    });
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: widget.onClose,
      child: Container(
        width: double.infinity,
        decoration: const BoxDecoration(
          color: Color(0xCC000000),
        ),
        padding:
            const EdgeInsets.only(top: 80, bottom: 40, left: 16, right: 16),
        child: Align(
          alignment: Alignment.topCenter,
          child: GestureDetector(
            onTap: () {},
            child: Container(
              constraints: const BoxConstraints(maxWidth: 580),
              decoration: BoxDecoration(
                color: DocsTheme.surface,
                borderRadius: const BorderRadius.circular(16),
                border: Border.all(color: DocsTheme.borderLight, width: 1.5),
                boxShadow: const [
                  BoxShadow(
                    color: Color(0x88000000),
                    blurRadius: 32,
                    offset: Offset(0, 12),
                  ),
                ],
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Container(
                    padding: const EdgeInsets.symmetric(
                        horizontal: 16, vertical: 12),
                    decoration: const BoxDecoration(
                      border: Border(
                        bottom: BorderSide(color: DocsTheme.border, width: 1),
                      ),
                    ),
                    child: Row(
                      children: [
                        const Icon(Icons.search,
                            color: DocsTheme.accentGreen, size: 20),
                        const SizedBox(width: 12),
                        Expanded(
                          child: TextField(
                            controller: _controller,
                            autofocus: true,
                            placeholder:
                                'Search documentation, widgets, APIs...',
                            style: const TextStyle(
                              fontSize: 16,
                              color: DocsTheme.textPrimary,
                            ),
                            onChanged: _performSearch,
                          ),
                        ),
                        const SizedBox(width: 12),
                        GestureDetector(
                          onTap: widget.onClose,
                          child: Container(
                            padding: const EdgeInsets.symmetric(
                                horizontal: 8, vertical: 4),
                            decoration: BoxDecoration(
                              color: DocsTheme.card,
                              borderRadius: const BorderRadius.circular(6),
                              border:
                                  Border.all(color: DocsTheme.borderLight),
                            ),
                            child: const Text(
                              'ESC',
                              style: TextStyle(
                                  fontSize: 11,
                                  fontWeight: FontWeight.bold,
                                  color: DocsTheme.textMuted),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Container(
                    constraints: const BoxConstraints(maxHeight: 380),
                    child: SingleChildScrollView(
                      child: Column(
                        children: [
                          if (_results.isEmpty &&
                              _currentQuery.isNotEmpty)
                            Padding(
                              padding: const EdgeInsets.all(32),
                              child: Column(
                                children: [
                                  const Icon(Icons.info,
                                      size: 32, color: DocsTheme.textMuted),
                                  const SizedBox(height: 12),
                                  Text(
                                    'No results found for "$_currentQuery"',
                                    style: const TextStyle(
                                        color: DocsTheme.textSecondary,
                                        fontSize: 14),
                                  ),
                                ],
                              ),
                            ),
                          if (_results.isEmpty && _currentQuery.isEmpty)
                            Padding(
                              padding: const EdgeInsets.all(24),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  const Text(
                                    'Quick Suggestions',
                                    style: TextStyle(
                                      fontSize: 12,
                                      fontWeight: FontWeight.bold,
                                      color: DocsTheme.textMuted,
                                      letterSpacing: 0.5,
                                    ),
                                  ),
                                  const SizedBox(height: 12),
                                  _buildQuickTag(
                                      'Installation', '/docs/installation'),
                                  _buildQuickTag('Virtual DOM Architecture',
                                      '/docs/architecture'),
                                  _buildQuickTag(
                                      'Responsive Design', '/docs/responsive'),
                                  _buildQuickTag('Widgets: Layout & Structure',
                                      '/docs/widgets/layout'),
                                  _buildQuickTag(
                                      'State Management', '/docs/state'),
                                ],
                              ),
                            ),
                          for (final item in _results) _buildResultRow(item),
                        ],
                      ),
                    ),
                  ),
                  const Container(
                    padding:
                        EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                    decoration: BoxDecoration(
                      color: DocsTheme.surfaceAlt,
                      borderRadius: BorderRadius.vertical(bottom: 15),
                      border:
                          Border(top: BorderSide(color: DocsTheme.border)),
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          'Instant local search across all documentation',
                          style: TextStyle(
                              fontSize: 11, color: DocsTheme.textMuted),
                        ),
                        Text(
                          'Flart v2.2.0',
                          style: TextStyle(
                              fontSize: 11,
                              fontWeight: FontWeight.bold,
                              color: DocsTheme.accentGreen),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildQuickTag(String label, String route) {
    return GestureDetector(
      onTap: () {
        widget.onClose();
        PageNavigator.pushNamed(route);
      },
      child: Container(
        margin: const EdgeInsets.only(bottom: 6),
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
        decoration: const BoxDecoration(
          color: DocsTheme.card,
          borderRadius: BorderRadius.circular(8),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(label,
                style: const TextStyle(
                    fontSize: 13, color: DocsTheme.textPrimary)),
            const Icon(Icons.arrow_forward,
                size: 14, color: DocsTheme.textMuted),
          ],
        ),
      ),
    );
  }

  Widget _buildResultRow(Map<String, dynamic> item) {
    final title = item['title'] as String? ?? '';
    final category = item['category'] as String? ?? 'Doc';
    final desc = item['description'] as String? ?? '';
    final path = item['path'] as String? ?? '/';

    return GestureDetector(
      onTap: () {
        widget.onClose();
        PageNavigator.pushNamed(path);
      },
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
        decoration: const BoxDecoration(
          border: Border(bottom: BorderSide(color: DocsTheme.border)),
        ),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              padding:
                  const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
              decoration: BoxDecoration(
                color: DocsTheme.primary.withValues(alpha: 0.15),
                borderRadius: const BorderRadius.circular(6),
                border: Border.all(
                    color: DocsTheme.primary.withValues(alpha: 0.3)),
              ),
              child: Text(
                category.toUpperCase(),
                style: const TextStyle(
                    fontSize: 10,
                    fontWeight: FontWeight.bold,
                    color: DocsTheme.primary),
              ),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: const TextStyle(
                      fontSize: 14,
                      fontWeight: FontWeight.w600,
                      color: DocsTheme.textPrimary,
                    ),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    desc,
                    style: const TextStyle(
                      fontSize: 12,
                      color: DocsTheme.textSecondary,
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(width: 8),
            const Icon(Icons.chevron_right,
                size: 18, color: DocsTheme.textMuted),
          ],
        ),
      ),
    );
  }
}
