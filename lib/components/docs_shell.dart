import 'package:flartdart/flartdart.dart';
import '../theme/docs_theme.dart';
import 'navbar.dart';
import 'sidebar.dart';
import 'footer.dart';
import 'search_dialog.dart';

class DocsShell extends StatefulWidget {
  final String currentRoute;
  final Widget child;
  final String title;

  const DocsShell({
    required this.currentRoute,
    required this.child,
    required this.title,
    super.key,
  });

  @override
  State<DocsShell> createState() => _DocsShellState();
}

class _DocsShellState extends State<DocsShell> {
  bool _isSearchOpen = false;
  bool _isMobileMenuOpen = false;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final width = constraints.maxWidth;
        final isMobile = DocsTheme.isMobile(width);
        final isTablet = DocsTheme.isTablet(width);
        final isDesktop = DocsTheme.isDesktop(width);

        return Container(
          width: double.infinity,
          color: DocsTheme.background,
          child: Stack(
            clipBehavior: Clip.none,
            children: [
              Column(
                children: [
                  // Top navbar
                  DocsNavbar(
                    onOpenSearch: () => setState(() => _isSearchOpen = true),
                    onToggleMobileMenu: () => setState(
                        () => _isMobileMenuOpen = !_isMobileMenuOpen),
                    isMobileMenuOpen: _isMobileMenuOpen,
                  ),

                  // Main Content + Sidebar
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      // Desktop Sidebar only (>= 1024px)
                      if (isDesktop)
                        DocsSidebar(
                          currentRoute: widget.currentRoute,
                        ),

                      // Content Area (takes full width on Mobile & Tablet)
                      Expanded(
                        child: Column(
                          children: [
                            Center(
                              child: Container(
                                constraints:
                                    const BoxConstraints(maxWidth: 960),
                                padding: EdgeInsets.symmetric(
                                  horizontal: isMobile ? 16 : (isTablet ? 28 : 48),
                                  vertical: isMobile ? 24 : 36,
                                ),
                                child: widget.child,
                              ),
                            ),
                            const DocsFooter(),
                          ],
                        ),
                      ),
                    ],
                  ),
                ],
              ),

              // Drawer overlay for Mobile & Tablet (< 1024px)
              if (!isDesktop && _isMobileMenuOpen)
                Positioned(
                  top: 64,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  child: GestureDetector(
                    onTap: () => setState(() => _isMobileMenuOpen = false),
                    child: Container(
                      color: const Color(0xE6000000),
                      child: Align(
                        alignment: Alignment.topLeft,
                        child: GestureDetector(
                          onTap: () {}, // Prevent taps inside drawer from closing
                          child: DocsSidebar(
                            currentRoute: widget.currentRoute,
                            onItemClick: () =>
                                setState(() => _isMobileMenuOpen = false),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),

              // Global search modal
              if (_isSearchOpen)
                Positioned(
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  child: SearchDialog(
                    onClose: () => setState(() => _isSearchOpen = false),
                  ),
                ),
            ],
          ),
        );
      },
    );
  }
}
