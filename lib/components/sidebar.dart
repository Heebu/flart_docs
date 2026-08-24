import 'package:flartdart/flartdart.dart';

class DocsSidebar extends StatelessWidget {
  final String currentRoute;

  const DocsSidebar({
    required this.currentRoute,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return FDContainer(
      width: 250.0,
      rawCss: 'height: 100vh; border-right: 1px solid #eaeaea; position: sticky; top: 0;',
      padding: const EdgeInsets.symmetric(vertical: 24.0),
      decoration: BoxDecoration(
        color: FlartColors.blueGrey.shade50,
      ),
      child: FDSingleChildScrollView(
        child: FDColumn(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildBrand(),
            const FDSizedBox(height: 32.0),
            _buildSection('GETTING STARTED', [
              _NavItem(title: 'Introduction', route: '/', currentRoute: currentRoute),
              _NavItem(title: 'Installation & CLI', route: '/installation', currentRoute: currentRoute),
            ]),
            const FDSizedBox(height: 24.0),
            _buildSection('CORE CONCEPTS', [
              _NavItem(title: 'Responsive Sizing', route: '/responsive', currentRoute: currentRoute),
              _NavItem(title: 'State Management', route: '/state', currentRoute: currentRoute),
              _NavItem(title: 'Advanced Routing', route: '/routing', currentRoute: currentRoute),
            ]),
            const FDSizedBox(height: 24.0),
            _buildSection('COMPONENTS', [
              _NavItem(title: 'Basic Widgets', route: '/basic', currentRoute: currentRoute),
              _NavItem(title: 'Layout Widgets', route: '/layout', currentRoute: currentRoute),
              _NavItem(title: 'Input Widgets', route: '/inputs', currentRoute: currentRoute),
              _NavItem(title: 'Interaction Widgets', route: '/interactions', currentRoute: currentRoute),
              _NavItem(title: 'Animation Widgets', route: '/animations', currentRoute: currentRoute),
            ]),
          ],
        ),
      ),
    );
  }

  Widget _buildBrand() {
    return FDContainer(
      padding: const EdgeInsets.symmetric(horizontal: 24.0),
      child: FDRow(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          FDContainer(
            width: 32.0,
            height: 32.0,
            decoration: BoxDecoration(
              color: FlartColors.blue.shade600,
              borderRadius: const BorderRadius.circular(8.0),
            ),
            child: const FDCenter(
              child: FDText(
                'F',
                style: TextStyle(
                  color: FlartColors.white,
                  fontWeight: FontWeight.bold,
                  fontSize: 20.0,
                ),
              ),
            ),
          ),
          const FDSizedBox(width: 12.0),
          FDText(
            'FlartDocs',
            style: TextStyle(
              fontSize: 20.0,
              fontWeight: FontWeight.bold,
              color: FlartColors.blueGrey.shade900,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSection(String title, List<Widget> items) {
    return FDColumn(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        FDContainer(
          padding: const EdgeInsets.symmetric(horizontal: 24.0),
          margin: const EdgeInsets.only(bottom: 8.0),
          child: FDText(
            title,
            style: TextStyle(
              fontSize: 12.0,
              fontWeight: FontWeight.w700,
              color: FlartColors.blueGrey.shade400,
              letterSpacing: 1.0,
            ),
          ),
        ),
        ...items,
      ],
    );
  }
}

class _NavItem extends StatelessWidget {
  final String title;
  final String route;
  final String currentRoute;

  const _NavItem({
    required this.title,
    required this.route,
    required this.currentRoute,
  });

  @override
  Widget build(BuildContext context) {
    final isActive = currentRoute == route;
    
    return FDGestureDetector(
      onTap: () {
        if (!isActive) {
          PageNavigator.pushNamed(route, transition: RouteTransition.fade);
        }
      },
      child: FDContainer(
        width: double.infinity,
        padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 10.0),
        rawCss: isActive ? 'border-left: 3px solid \${FlartColors.blue.shade600};' : 'border-left: 3px solid transparent;',
        decoration: BoxDecoration(
          color: isActive ? FlartColors.blue.shade50 : FlartColors.transparent,
        ),
        child: FDText(
          title,
          style: TextStyle(
            fontSize: 14.0,
            fontWeight: isActive ? FontWeight.w600 : FontWeight.w500,
            color: isActive ? FlartColors.blue.shade700 : FlartColors.blueGrey.shade700,
          ),
        ),
      ),
    );
  }
}
