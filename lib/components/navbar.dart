import 'package:flartdart/flartdart.dart';
import '../theme/docs_theme.dart';

class DocsNavbar extends StatelessWidget {
  final VoidCallback onOpenSearch;
  final VoidCallback onToggleMobileMenu;
  final bool isMobileMenuOpen;
  final String currentRoute;

  const DocsNavbar({
    required this.onOpenSearch,
    required this.onToggleMobileMenu,
    this.isMobileMenuOpen = false,
    this.currentRoute = '/',
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

        final isArchitectureActive = currentRoute.contains('/architecture');
        final isWidgetsActive = currentRoute.contains('/widgets');
        final isDocsActive = !isArchitectureActive &&
            !isWidgetsActive &&
            (currentRoute == '/' || currentRoute.startsWith('/docs'));

        return Container(
          id: 'flart-docs-navbar',
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
              _buildBrandLogo(),

              // Center: Modern Search trigger (on Desktop)
              if (isDesktop) _buildSearchTrigger(),

              // Right: Navigation Links & Ecosystem Buttons (Desktop)
              if (isDesktop)
                Row(
                  children: [
                    _buildNavLink(
                        'Docs', '/docs/installation', isDocsActive),
                    _buildNavLink('Architecture', '/docs/architecture',
                        isArchitectureActive),
                    _buildNavLink(
                        'Widgets', '/docs/widgets/basic', isWidgetsActive),
                    const SizedBox(width: 8),
                    const Container(
                      width: 1,
                      height: 18,
                      color: Color(0x26FFFFFF),
                      margin: EdgeInsets.symmetric(horizontal: 6),
                    ),
                    const SizedBox(width: 4),
                    _buildPubDevButton(),
                  ],
                )
              else if (isTablet)
                // Tablet: Compact Search pill + pub.dev + Hamburger
                Row(
                  children: [
                    GestureDetector(
                      onTap: onOpenSearch,
                      child: Container(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 12, vertical: 7),
                        decoration: BoxDecoration(
                          color: const Color(0x0FFFFFFF),
                          borderRadius: const BorderRadius.circular(8),
                          border: Border.all(
                              color: const Color(0x1FFFFFFF), width: 1),
                        ),
                        child: const Row(
                          children: [
                            Icon(Icons.search,
                                size: 15, color: Color(0xFF94A3B8)),
                            SizedBox(width: 6),
                            Text(
                              'Search docs...',
                              style: TextStyle(
                                  fontSize: 12, color: Color(0xFF94A3B8)),
                            ),
                          ],
                        ),
                      ),
                    ),
                    const SizedBox(width: 10),
                    _buildPubDevButton(),
                    const SizedBox(width: 10),
                    _buildHamburgerButton(),
                  ],
                )
              else
                // Mobile: Search icon + Hamburger
                Row(
                  children: [
                    GestureDetector(
                      onTap: onOpenSearch,
                      child: Container(
                        padding: const EdgeInsets.all(8),
                        decoration: BoxDecoration(
                          color: const Color(0x0AFFFFFF),
                          borderRadius: const BorderRadius.circular(8),
                          border: Border.all(
                              color: const Color(0x14FFFFFF), width: 1),
                        ),
                        child: const Icon(Icons.search,
                            size: 18, color: DocsTheme.textPrimary),
                      ),
                    ),
                    const SizedBox(width: 8),
                    _buildHamburgerButton(),
                  ],
                ),
            ],
          ),
        );
      },
    );
  }

  Widget _buildBrandLogo() {
    return GestureDetector(
      onTap: () => PageNavigator.pushNamed('/'),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            width: 32,
            height: 32,
            alignment: Alignment.center,
            child: Image.network(
              'assets/dart_logo.png',
              width: 32,
              height: 32,
              fit: BoxFit.contain,
              alt: 'Dart Logo',
            ),
          ),
          const SizedBox(width: 10),
          const Text(
            'Flart',
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.w800,
              color: Color(0xFFF8FAFC),
              letterSpacing: -0.6,
            ),
          ),
          const SizedBox(width: 8),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 2.5),
            decoration: BoxDecoration(
              color: const Color(0x1A10B981),
              borderRadius: const BorderRadius.circular(12),
              border: Border.all(color: const Color(0x3310B981), width: 1),
            ),
            child: const Text(
              'v2.2.0',
              style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.w700,
                color: Color(0xFF10B981),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSearchTrigger() {
    return GestureDetector(
      onTap: onOpenSearch,
      child: Container(
        width: 400,
        margin: const EdgeInsets.symmetric(horizontal: 10),
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
        decoration: BoxDecoration(
          color: const Color(0x0FFFFFFF),
          borderRadius: const BorderRadius.circular(9),
          border: Border.all(color: const Color(0x1FFFFFFF), width: 1),
        ),
        child: const Row(
          children: [
            Icon(Icons.search, size: 16, color: Color(0xFF64748B)),
            SizedBox(width: 10),
            Text(
              'Search documentation...',
              style: TextStyle(fontSize: 13, color: Color(0xFF94A3B8)),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildNavLink(String label, String route, bool isActive) {
    return GestureDetector(
      onTap: () {
        if (!isActive) PageNavigator.pushNamed(route);
      },
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 2),
        padding: const EdgeInsets.symmetric(horizontal: 13, vertical: 6),
        decoration: BoxDecoration(
          color: isActive ? const Color(0x1F10B981) : Colors.transparent,
          borderRadius: const BorderRadius.circular(8),
          border: isActive
              ? Border.all(color: const Color(0x4D10B981), width: 1)
              : null,
        ),
        child: Text(
          label,
          style: TextStyle(
            fontSize: 13,
            fontWeight: isActive ? FontWeight.w700 : FontWeight.w500,
            color:
                isActive ? const Color(0xFF10B981) : const Color(0xFF94A3B8),
          ),
        ),
      ),
    );
  }

  Widget _buildPubDevButton() {
    return GestureDetector(
      onTap: () {
        PageNavigator.pushNewTab('https://pub.dev/packages/flartdart');
      },
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 11, vertical: 6),
        decoration: BoxDecoration(
          color: const Color(0x0DFFFFFF),
          borderRadius: const BorderRadius.circular(8),
          border: Border.all(color: const Color(0x1FFFFFFF), width: 1),
        ),
        child: const Row(
          children: [
            Icon(Icons.star, size: 14, color: Color(0xFFF59E0B)),
            SizedBox(width: 6),
            Text(
              'pub.dev',
              style: TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.bold,
                color: Color(0xFFF8FAFC),
              ),
            ),
            SizedBox(width: 5),
            Text(
              '↗',
              style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: Color(0xFF64748B),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildHamburgerButton() {
    return GestureDetector(
      onTap: onToggleMobileMenu,
      child: Container(
        padding: const EdgeInsets.all(7),
        decoration: BoxDecoration(
          color: const Color(0x0AFFFFFF),
          borderRadius: const BorderRadius.circular(8),
          border: Border.all(color: const Color(0x14FFFFFF), width: 1),
        ),
        child: Icon(
          isMobileMenuOpen ? Icons.close : Icons.menu,
          size: 20,
          color: DocsTheme.textPrimary,
        ),
      ),
    );
  }
}
