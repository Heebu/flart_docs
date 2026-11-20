import 'dart:convert';
import 'package:flartdart/flartdart.dart';
import 'package:http/http.dart' as http;
import '../theme/docs_theme.dart';

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
  bool _isLoading = false;
  String _currentQuery = '';

  Future<void> _performSearch(String query) async {
    final trimmed = query.trim();
    if (trimmed.isEmpty) {
      setState(() {
        _currentQuery = '';
        _results = [];
        _isLoading = false;
      });
      return;
    }

    setState(() {
      _currentQuery = trimmed;
      _isLoading = true;
    });

    try {
      final uri = Uri.parse(
          'http://localhost:8081/api/v1/search?q=${Uri.encodeComponent(trimmed)}');
      final response = await http.get(uri);
      if (response.statusCode == 200) {
        final data = jsonDecode(response.body) as Map<String, dynamic>;
        final results =
            (data['results'] as List? ?? []).cast<Map<String, dynamic>>();
        if (mounted && _currentQuery == trimmed) {
          setState(() {
            _results = results;
            _isLoading = false;
          });
        }
      } else {
        if (mounted) setState(() => _isLoading = false);
      }
    } catch (e) {
      // In case server is offline, fallback search
      if (mounted) {
        setState(() => _isLoading = false);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: widget.onClose,
      child: Container(
        width: double.infinity,
        decoration: const BoxDecoration(
          color: Color(0xCC000000), // Dark modal backdrop
        ),
        padding:
            const EdgeInsets.only(top: 80, bottom: 40, left: 16, right: 16),
        child: Align(
          alignment: Alignment.topCenter,
          child: GestureDetector(
            onTap: () {}, // Prevent clicks inside modal from closing
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
              // Search input bar
              Container(
                padding:
                    const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
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
                        placeholder: 'Search documentation, widgets, APIs...',
                        style: const TextStyle(
                          fontSize: 16,
                          color: DocsTheme.textPrimary,
                        ),
                        onChanged: _performSearch,
                      ),
                    ),
                    if (_isLoading)
                      const SizedBox(
                        width: 16,
                        height: 16,
                        child: CircularProgressIndicator(
                            strokeWidth: 2, color: DocsTheme.accentGreen),
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
                          border: Border.all(color: DocsTheme.borderLight),
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

              // Results container
              Container(
                constraints: const BoxConstraints(maxHeight: 380),
                child: SingleChildScrollView(
                  child: Column(
                    children: [
                      if (_results.isEmpty &&
                          _currentQuery.isNotEmpty &&
                          !_isLoading)
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
                                  'Full-Stack Dart Frog', '/docs/fullstack'),
                            ],
                          ),
                        ),
                      for (final item in _results) _buildResultRow(item),
                    ],
                  ),
                ),
              ),

              // Footer info
              const Container(
                padding: EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                decoration: BoxDecoration(
                  color: DocsTheme.surfaceAlt,
                  borderRadius: BorderRadius.vertical(bottom: 15),
                  border: Border(top: BorderSide(color: DocsTheme.border)),
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      'Powered by Dart Frog Backend v1.2 REST API',
                      style:
                          TextStyle(fontSize: 11, color: DocsTheme.textMuted),
                    ),
                    Text(
                      'Flart v2.1.0',
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
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
              decoration: BoxDecoration(
                color: DocsTheme.primary.withValues(alpha: 0.15),
                borderRadius: const BorderRadius.circular(6),
                border:
                    Border.all(color: DocsTheme.primary.withValues(alpha: 0.3)),
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
