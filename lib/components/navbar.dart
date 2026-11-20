import 'package:flartdart/flartdart.dart';
import '../theme/docs_theme.dart';

class DocsNavbar extends StatelessWidget {
  final VoidCallback onOpenSearch;
  final VoidCallback onToggleMobileMenu;
  final bool isMobileMenuOpen;

  const DocsNavbar({
    required this.onOpenSearch,
    required this.onToggleMobileMenu,
    this.isMobileMenuOpen = false,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final width = constraints.maxWidth;
        final isMobile = DocsTheme.isMobile(width);
        final isDesktop = DocsTheme.isDesktop(width);
        final isTablet = DocsTheme.isTablet(width);

        return Container(
          width: double.infinity,
          height: 64,
          padding: EdgeInsets.symmetric(horizontal: isMobile ? 16 : 24),
          decoration: const BoxDecoration(
            color: DocsTheme.surface,
            border: Border(
              bottom: BorderSide(color: DocsTheme.border, width: 1),
            ),
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              // Left: Logo & Brand & Version Pill
              GestureDetector(
                onTap: () => PageNavigator.pushNamed('/'),
                child: Row(
                  children: [
                    const Container(
                      width: 32,
                      height: 32,
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          colors: [Color(0xFF10B981), Color(0xFF3B82F6)],
                          begin: Alignment.topLeft,
                          end: Alignment.bottomRight,
                        ),
                        borderRadius: BorderRadius.circular(8),
                        boxShadow: [
                          BoxShadow(
                            color: Color(0x4410B981),
                            blurRadius: 8,
                            offset: Offset(0, 2),
                          ),
                        ],
                      ),
                      child: Center(
                        child: Text(
                          '⚡',
                          style: TextStyle(fontSize: 16),
                        ),
                      ),
                    ),
                    const SizedBox(width: 10),
                    const Text(
                      'Flart',
                      style: TextStyle(
                        fontSize: 19,
                        fontWeight: FontWeight.w800,
                        color: DocsTheme.textPrimary,
                        letterSpacing: -0.5,
                      ),
                    ),
                    const SizedBox(width: 8),
                    Container(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 7, vertical: 2),
                      decoration: BoxDecoration(
                        color: DocsTheme.accentGreen.withValues(alpha: 0.15),
                        borderRadius: const BorderRadius.circular(12),
                        border: Border.all(
                            color:
                                DocsTheme.accentGreen.withValues(alpha: 0.3)),
                      ),
                      child: const Text(
                        'v2.1.0',
                        style: TextStyle(
                          fontSize: 11,
                          fontWeight: FontWeight.w700,
                          color: DocsTheme.accentGreen,
                        ),
                      ),
                    ),
                  ],
                ),
              ),

              // Center / Search trigger (on Desktop)
              if (isDesktop)
                GestureDetector(
                  onTap: onOpenSearch,
                  child: Container(
                    width: 260,
                    padding:
                        const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
                    decoration: BoxDecoration(
                      color: DocsTheme.surfaceAlt,
                      borderRadius: const BorderRadius.circular(8),
                      border:
                          Border.all(color: DocsTheme.borderLight, width: 1),
                    ),
                    child: const Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Row(
                          children: [
                            Icon(Icons.search,
                                size: 16, color: DocsTheme.textMuted),
                            SizedBox(width: 8),
                            Text(
                              'Search documentation...',
                              style: TextStyle(
                                  fontSize: 13, color: DocsTheme.textMuted),
                            ),
                          ],
                        ),
                        Text(
                          'Ctrl K',
                          style: TextStyle(
                            fontSize: 11,
                            fontWeight: FontWeight.bold,
                            color: DocsTheme.textMuted,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),

              // Right Navigation Links & Action Buttons
              if (isDesktop)
                Row(
                  children: [
                    _buildNavLink('Docs', '/docs/installation'),
                    _buildNavLink('Architecture', '/docs/architecture'),
                    _buildNavLink('Widgets', '/docs/widgets/basic'),
                    _buildNavLink('Dart Frog', '/docs/fullstack'),
                    const SizedBox(width: 16),
                    _buildPubDevButton(),
                  ],
                )
              else if (isTablet)
                // Tablet: Search trigger + pub.dev + Hamburger
                Row(
                  children: [
                    GestureDetector(
                      onTap: onOpenSearch,
                      child: Container(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 12, vertical: 7),
                        decoration: BoxDecoration(
                          color: DocsTheme.surfaceAlt,
                          borderRadius: const BorderRadius.circular(8),
                          border: Border.all(color: DocsTheme.borderLight),
                        ),
                        child: const Row(
                          children: [
                            Icon(Icons.search,
                                size: 16, color: DocsTheme.textMuted),
                            SizedBox(width: 6),
                            Text(
                              'Search...',
                              style: TextStyle(
                                  fontSize: 12, color: DocsTheme.textMuted),
                            ),
                          ],
                        ),
                      ),
                    ),
                    const SizedBox(width: 12),
                    _buildPubDevButton(),
                    const SizedBox(width: 12),
                    GestureDetector(
                      onTap: onToggleMobileMenu,
                      child: Container(
                        padding: const EdgeInsets.all(8),
                        child: Icon(
                          isMobileMenuOpen ? Icons.close : Icons.menu,
                          size: 24,
                          color: DocsTheme.textPrimary,
                        ),
                      ),
                    ),
                  ],
                )
              else
                // Mobile icons: Search + Hamburger
                Row(
                  children: [
                    GestureDetector(
                      onTap: onOpenSearch,
                      child: const Container(
                        padding: EdgeInsets.all(8),
                        child: Icon(Icons.search,
                            size: 20, color: DocsTheme.textPrimary),
                      ),
                    ),
                    const SizedBox(width: 8),
                    GestureDetector(
                      onTap: onToggleMobileMenu,
                      child: Container(
                        padding: const EdgeInsets.all(8),
                        child: Icon(
                          isMobileMenuOpen ? Icons.close : Icons.menu,
                          size: 24,
                          color: DocsTheme.textPrimary,
                        ),
                      ),
                    ),
                  ],
                ),
            ],
          ),
        );
      },
    );
  }

  Widget _buildPubDevButton() {
    return GestureDetector(
      onTap: () {
        PageNavigator.pushNewTab('https://pub.dev/packages/flartdart');
      },
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
        decoration: BoxDecoration(
          color: DocsTheme.card,
          borderRadius: const BorderRadius.circular(8),
          border: Border.all(color: DocsTheme.borderLight),
        ),
        child: const Row(
          children: [
            Icon(Icons.star, size: 14, color: DocsTheme.accentAmber),
            SizedBox(width: 6),
            Text(
              'pub.dev',
              style: TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.bold,
                color: DocsTheme.textPrimary,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildNavLink(String label, String route) {
    return GestureDetector(
      onTap: () => PageNavigator.pushNamed(route),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 12),
        child: Text(
          label,
          style: const TextStyle(
            fontSize: 14,
            fontWeight: FontWeight.w500,
            color: DocsTheme.textSecondary,
          ),
        ),
      ),
    );
  }
}
