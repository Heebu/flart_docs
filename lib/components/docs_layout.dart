import 'package:flartdart/flartdart.dart';
import 'sidebar.dart';

class DocsLayout extends StatelessWidget {
  final String currentRoute;
  final String title;
  final Widget child;

  const DocsLayout({
    required this.currentRoute,
    required this.title,
    required this.child,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return FDScaffold(
      body: FDRow(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Sidebar (Fixed width 250px)
          DocsSidebar(currentRoute: currentRoute),
          
          // Main Content Area
          FDExpanded(
            child: FDContainer(
              rawCss: 'height: 100vh;',
              decoration: const BoxDecoration(color: FlartColors.white),
              child: FDColumn(
                children: [
                  // App Bar
                  FDContainer(
                    height: 70.0,
                    width: double.infinity,
                    padding: const EdgeInsets.symmetric(horizontal: 40.0),
                    rawCss: 'border-bottom: 1px solid #eaeaea;',
                    decoration: const BoxDecoration(
                      color: FlartColors.white,
                    ),
                    child: FDRow(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        FDText(
                          title,
                          style: TextStyle(
                            fontSize: 20.0,
                            fontWeight: FontWeight.w600,
                            color: FlartColors.blueGrey.shade800,
                          ),
                        ),
                        FDRow(
                          children: [
                            FDElevatedButton(
                              onPressed: () {},
                              child: const FDText('GitHub'),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                  
                  // Scrollable Content
                  FDExpanded(
                    child: FDSingleChildScrollView(
                      child: FDContainer(
                        width: double.infinity,
                        padding: const EdgeInsets.all(40.0),
                        child: FDContainer(
                          // Max width for readability
                          rawCss: 'max-width: 900px; margin: 0 auto;',
                          child: child,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
