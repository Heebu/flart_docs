import 'package:flartdart/flartdart.dart';
import '../theme/docs_theme.dart';

class DocsSidebar extends StatelessWidget {
  final String currentRoute;
  final VoidCallback? onItemClick;
  final bool isDrawer;

  const DocsSidebar({
    required this.currentRoute,
    this.onItemClick,
    this.isDrawer = false,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      id: isDrawer ? 'flart-docs-drawer-content' : 'flart-docs-sidebar',
      width: 260,
      decoration: const BoxDecoration(
        color: DocsTheme.surface,
        border: Border(
          right: BorderSide(color: DocsTheme.border, width: 1),
        ),
      ),
      child: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 12),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _buildSectionHeader('GETTING STARTED'),
              _buildNavItem('Overview', '/', Icons.home),
              _buildNavItem(
                  'Installation & CLI', '/docs/installation', Icons.terminal),
              _buildNavItem('Virtual DOM Architecture', '/docs/architecture',
                  Icons.memory),

              const SizedBox(height: 20),
              _buildSectionHeader('CORE CONCEPTS'),
              _buildNavItem(
                  'Responsive Design', '/docs/responsive', Icons.devices),
              _buildNavItem('State Management', '/docs/state', Icons.refresh),
              _buildNavItem(
                  'Declarative Routing', '/docs/routing', Icons.alt_route),

              const SizedBox(height: 20),
              _buildSectionHeader('THE 9 WIDGET CATEGORIES'),
              _buildNavItem(
                  '1. Basic & Core', '/docs/widgets/basic', Icons.widgets),
              _buildNavItem('2. Layout & Structure', '/docs/widgets/layout',
                  Icons.view_quilt),
              _buildNavItem('3. Decoration & Style', '/docs/widgets/decoration',
                  Icons.palette),
              _buildNavItem('4. Scrollables & Lists',
                  '/docs/widgets/scrollables', Icons.view_stream),
              _buildNavItem(
                  '5. Form & Inputs', '/docs/widgets/inputs', Icons.edit),
              _buildNavItem('6. Buttons & Gestures', '/docs/widgets/buttons',
                  Icons.touch_app),
              _buildNavItem(
                  '7. Animations', '/docs/widgets/animation', Icons.animation),
              _buildNavItem(
                  '8. Media & Feedback', '/docs/widgets/media', Icons.image),
              _buildNavItem(
                  '9. Utility & Modals', '/docs/widgets/utility', Icons.layers),

            ],
          ),
        ),
      ),
    );
  }

  Widget _buildSectionHeader(String title) {
    return Padding(
      padding: const EdgeInsets.only(left: 12, bottom: 8, top: 4),
      child: Text(
        title,
        style: const TextStyle(
          fontSize: 11,
          fontWeight: FontWeight.w700,
          color: DocsTheme.textMuted,
          letterSpacing: 0.8,
        ),
      ),
    );
  }

  Widget _buildNavItem(String label, String route, dynamic icon) {
    final isActive = currentRoute == route;

    return GestureDetector(
      onTap: () {
        onItemClick?.call();
        if (!isActive) {
          PageNavigator.pushNamed(route);
        }
      },
      child: Container(
        margin: const EdgeInsets.only(bottom: 2),
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
        decoration: BoxDecoration(
          color: isActive
              ? DocsTheme.accentGreen.withValues(alpha: 0.12)
              : Colors.transparent,
          borderRadius: const BorderRadius.circular(8),
          border: isActive
              ? Border.all(
                  color: DocsTheme.accentGreen.withValues(alpha: 0.3), width: 1)
              : null,
        ),
        child: Row(
          children: [
            Icon(
              icon,
              size: 16,
              color: isActive ? DocsTheme.accentGreen : DocsTheme.textMuted,
            ),
            const SizedBox(width: 10),
            Expanded(
              child: Text(
                label,
                style: TextStyle(
                  fontSize: 13,
                  fontWeight: isActive ? FontWeight.w700 : FontWeight.w400,
                  color: isActive
                      ? DocsTheme.accentGreen
                      : DocsTheme.textSecondary,
                ),
              ),
            ),
            if (isActive)
              const Container(
                width: 6,
                height: 6,
                decoration: BoxDecoration(
                  color: DocsTheme.accentGreen,
                  shape: BoxShape.circle,
                  boxShadow: [
                    BoxShadow(
                      color: Color(0x6610B981),
                      blurRadius: 6,
                    ),
                  ],
                ),
              ),
          ],
        ),
      ),
    );
  }
}
