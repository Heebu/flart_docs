import 'package:flartdart/flartdart.dart';
import '../theme/docs_theme.dart';

class DocsFooter extends StatelessWidget {
  const DocsFooter({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(vertical: 48, horizontal: 32),
      decoration: const BoxDecoration(
        color: DocsTheme.surface,
        border: Border(
          top: BorderSide(color: DocsTheme.border, width: 1),
        ),
      ),
      child: Center(
        child: Container(
          constraints: const BoxConstraints(maxWidth: 1100),
          child: Column(
            children: [
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  // Brand & summary
                  const Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Container(
                            width: 28,
                            height: 28,
                            decoration: BoxDecoration(
                              gradient: LinearGradient(
                                colors: [Color(0xFF10B981), Color(0xFF3B82F6)],
                              ),
                              borderRadius: BorderRadius.circular(6),
                            ),
                            child: Center(
                              child: Text('⚡', style: TextStyle(fontSize: 14)),
                            ),
                          ),
                          SizedBox(width: 10),
                          Text(
                            'FlartDart',
                            style: TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                              color: DocsTheme.textPrimary,
                            ),
                          ),
                        ],
                      ),
                      SizedBox(height: 12),
                      SizedBox(
                        width: 300,
                        child: Text(
                          'The lightweight web framework for Dart.\nPure Dart Virtual DOM, zero CanvasKit overhead, 100% Flutter API parity.',
                          style: TextStyle(
                            fontSize: 13,
                            height: 1.5,
                            color: DocsTheme.textSecondary,
                          ),
                        ),
                      ),
                    ],
                  ),

                  // Quick links
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text(
                        'ECOSYSTEM',
                        style: TextStyle(
                          fontSize: 11,
                          fontWeight: FontWeight.bold,
                          color: DocsTheme.textMuted,
                          letterSpacing: 0.8,
                        ),
                      ),
                      const SizedBox(height: 12),
                      _buildFooterLink('pub.dev / flartdart',
                          'https://pub.dev/packages/flartdart'),
                      _buildFooterLink('Dart SDK', 'https://dart.dev'),
                    ],
                  ),
                ],
              ),
              const SizedBox(height: 36),
              const Divider(color: DocsTheme.border),
              const SizedBox(height: 20),
              const Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    '© 2026 FlartDart Authors • Released under the MIT License',
                    style: TextStyle(fontSize: 12, color: DocsTheme.textMuted),
                  ),
                  Text(
                    'Built with Flart v2.1.0',
                    style: TextStyle(
                      fontSize: 12,
                      fontWeight: FontWeight.w600,
                      color: DocsTheme.accentGreen,
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildFooterLink(String label, String url) {
    return GestureDetector(
      onTap: () => PageNavigator.pushNewTab(url),
      child: Padding(
        padding: const EdgeInsets.only(bottom: 8),
        child: Text(
          label,
          style: const TextStyle(
            fontSize: 13,
            color: DocsTheme.textSecondary,
          ),
        ),
      ),
    );
  }
}
