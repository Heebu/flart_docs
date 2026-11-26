import 'package:flartdart/flartdart.dart';
import 'package:web/web.dart' as web;
import '../theme/docs_theme.dart';

class CodeBlock extends StatefulWidget {
  final String code;
  final String language;
  final String? title;

  const CodeBlock({
    required this.code,
    this.language = 'dart',
    this.title,
    super.key,
  });

  @override
  State<CodeBlock> createState() => _CodeBlockState();
}

class _CodeBlockState extends State<CodeBlock> {
  bool _copied = false;

  void _copyToClipboard() {
    try {
      web.window.navigator.clipboard.writeText(widget.code);
      setState(() => _copied = true);
      Future.delayed(const Duration(seconds: 2), () {
        if (mounted) {
          setState(() => _copied = false);
        }
      });
    } catch (_) {}
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      margin: const EdgeInsets.symmetric(vertical: 12),
      decoration: BoxDecoration(
        color: DocsTheme.codeBackground,
        borderRadius: const BorderRadius.circular(12),
        border: Border.all(color: DocsTheme.borderLight, width: 1),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            decoration: const BoxDecoration(
              color: DocsTheme.surface,
              borderRadius: BorderRadius.vertical(top: 11),
              border: Border(
                bottom: BorderSide(color: DocsTheme.border, width: 1),
              ),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  children: [
                    const Container(
                      width: 10,
                      height: 10,
                      decoration: BoxDecoration(
                        color: Color(0xFFEF4444),
                        shape: BoxShape.circle,
                      ),
                    ),
                    const SizedBox(width: 6),
                    const Container(
                      width: 10,
                      height: 10,
                      decoration: BoxDecoration(
                        color: Color(0xFFF59E0B),
                        shape: BoxShape.circle,
                      ),
                    ),
                    const SizedBox(width: 6),
                    const Container(
                      width: 10,
                      height: 10,
                      decoration: BoxDecoration(
                        color: Color(0xFF10B981),
                        shape: BoxShape.circle,
                      ),
                    ),
                    const SizedBox(width: 14),
                    Text(
                      widget.title ?? widget.language.toUpperCase(),
                      style: const TextStyle(
                        fontSize: 12,
                        fontWeight: FontWeight.w600,
                        color: DocsTheme.textSecondary,
                        letterSpacing: 0.8,
                      ),
                    ),
                  ],
                ),
                GestureDetector(
                  onTap: _copyToClipboard,
                  child: Container(
                    padding:
                        const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(
                      color: _copied
                          ? DocsTheme.accentGreen.withValues(alpha: 0.2)
                          : DocsTheme.card,
                      borderRadius: const BorderRadius.circular(6),
                      border: Border.all(
                        color: _copied
                            ? DocsTheme.accentGreen
                            : DocsTheme.borderLight,
                        width: 1,
                      ),
                    ),
                    child: Text(
                      _copied ? '✓ Copied!' : 'Copy',
                      style: TextStyle(
                        fontSize: 11,
                        fontWeight: FontWeight.w600,
                        color: _copied
                            ? DocsTheme.accentGreen
                            : DocsTheme.textSecondary,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Container(
              padding: const EdgeInsets.all(16),
              child: Text(
                widget.code,
                style: const TextStyle(
                  fontFamily: 'JetBrains Mono',
                  fontSize: 13,
                  height: 1.6,
                  color: Color(0xFFE2E8F0),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
