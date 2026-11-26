import 'package:flartdart/flartdart.dart';
import '../theme/docs_theme.dart';
import 'code_block.dart';

class InteractivePreview extends StatefulWidget {
  final String title;
  final String description;
  final Widget preview;
  final String code;

  const InteractivePreview({
    required this.title,
    required this.description,
    required this.preview,
    required this.code,
    super.key,
  });

  @override
  State<InteractivePreview> createState() => _InteractivePreviewState();
}

class _InteractivePreviewState extends State<InteractivePreview> {
  bool _showCode = false;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      margin: const EdgeInsets.symmetric(vertical: 16),
      decoration: BoxDecoration(
        color: DocsTheme.surface,
        borderRadius: const BorderRadius.circular(16),
        border: Border.all(color: DocsTheme.borderLight, width: 1),
        boxShadow: const [
          BoxShadow(
            color: Color(0x22000000),
            blurRadius: 16,
            offset: Offset(0, 4),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
            decoration: const BoxDecoration(
              color: DocsTheme.surfaceAlt,
              borderRadius: BorderRadius.vertical(top: 15),
              border: Border(
                bottom: BorderSide(color: DocsTheme.border, width: 1),
              ),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      widget.title,
                      style: const TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                        color: DocsTheme.textPrimary,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      widget.description,
                      style: const TextStyle(
                        fontSize: 13,
                        color: DocsTheme.textSecondary,
                      ),
                    ),
                  ],
                ),
                Container(
                  padding: const EdgeInsets.all(3),
                  decoration: BoxDecoration(
                    color: DocsTheme.card,
                    borderRadius: const BorderRadius.circular(8),
                    border: Border.all(color: DocsTheme.borderLight, width: 1),
                  ),
                  child: Row(
                    children: [
                      GestureDetector(
                        onTap: () => setState(() => _showCode = false),
                        child: Container(
                          padding: const EdgeInsets.symmetric(
                              horizontal: 12, vertical: 6),
                          decoration: BoxDecoration(
                            color: !_showCode
                                ? DocsTheme.primary
                                : Colors.transparent,
                            borderRadius: const BorderRadius.circular(6),
                          ),
                          child: Text(
                            'Preview',
                            style: TextStyle(
                              fontSize: 12,
                              fontWeight: FontWeight.w600,
                              color: !_showCode
                                  ? Colors.white
                                  : DocsTheme.textSecondary,
                            ),
                          ),
                        ),
                      ),
                      GestureDetector(
                        onTap: () => setState(() => _showCode = true),
                        child: Container(
                          padding: const EdgeInsets.symmetric(
                              horizontal: 12, vertical: 6),
                          decoration: BoxDecoration(
                            color: _showCode
                                ? DocsTheme.primary
                                : Colors.transparent,
                            borderRadius: const BorderRadius.circular(6),
                          ),
                          child: Text(
                            'Code',
                            style: TextStyle(
                              fontSize: 12,
                              fontWeight: FontWeight.w600,
                              color: _showCode
                                  ? Colors.white
                                  : DocsTheme.textSecondary,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),

          if (!_showCode)
            Container(
              padding: const EdgeInsets.all(24),
              decoration: const BoxDecoration(
                color: Color(0xFF0D131F),
                borderRadius: BorderRadius.vertical(bottom: 15),
              ),
              child: Center(
                child: widget.preview,
              ),
            )
          else
            Padding(
              padding: const EdgeInsets.all(12),
              child: CodeBlock(
                code: widget.code,
                title: widget.title,
              ),
            ),
        ],
      ),
    );
  }
}
