import 'package:flartdart/flartdart.dart';
import '../../theme/docs_theme.dart';
import '../../components/docs_shell.dart';
import '../../components/interactive_preview.dart';

class ScrollablesPage extends StatelessWidget {
  const ScrollablesPage({super.key});

  @override
  Widget build(BuildContext context) {
    return DocsShell(
      currentRoute: '/docs/widgets/scrollables',
      title: 'Category 4: Scrollables & Lists',
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildHeader(),
          const SizedBox(height: 32),
          _buildListViewDemo(),
          const SizedBox(height: 32),
          _buildGridViewDemo(),
        ],
      ),
    );
  }

  Widget _buildHeader() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
          decoration: BoxDecoration(
            color: DocsTheme.accentAmber.withValues(alpha: 0.15),
            borderRadius: const BorderRadius.circular(6),
          ),
          child: const Text(
            'CATEGORY 4 • WIDGET CATALOG',
            style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: DocsTheme.accentAmber),
          ),
        ),
        const SizedBox(height: 12),
        const Text(
          'Scrollable & Data-Driven Widgets',
          style: TextStyle(
              fontSize: 36,
              fontWeight: FontWeight.w800,
              color: DocsTheme.textPrimary),
        ),
        const SizedBox(height: 8),
        const Text(
          'Virtualized and continuous scrolling for large datasets: ListView, ListView.builder, GridView, GridView.count, SingleChildScrollView, and Scrollbar.',
          style: TextStyle(fontSize: 16, color: DocsTheme.textSecondary),
        ),
      ],
    );
  }

  Widget _buildListViewDemo() {
    return InteractivePreview(
      title: 'ListView.builder',
      description:
          'Scrollable list of items generated dynamically via an itemBuilder callback.',
      preview: Container(
        width: 320,
        height: 220,
        decoration: BoxDecoration(
          color: DocsTheme.card,
          borderRadius: const BorderRadius.circular(14),
          border: Border.all(color: DocsTheme.borderLight),
        ),
        child: ListView.builder(
          itemCount: 15,
          itemBuilder: (context, index) {
            return Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
              decoration: const BoxDecoration(
                border: Border(bottom: BorderSide(color: DocsTheme.border)),
              ),
              child: Row(
                children: [
                  Container(
                    width: 28,
                    height: 28,
                    decoration: BoxDecoration(
                      color: DocsTheme.primary.withValues(alpha: 0.2),
                      shape: BoxShape.circle,
                    ),
                    child: Center(
                      child: Text('${index + 1}',
                          style: const TextStyle(
                              fontSize: 12,
                              fontWeight: FontWeight.bold,
                              color: DocsTheme.primary)),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Text('Data Item #${index + 1}',
                      style: const TextStyle(
                          fontSize: 13, color: DocsTheme.textPrimary)),
                ],
              ),
            );
          },
        ),
      ),
      code: '''ListView.builder(
  itemCount: 15,
  itemBuilder: (context, index) {
    return ListTile(
      leading: CircleAvatar(child: Text('\${index + 1}')),
      title: Text('Data Item #\${index + 1}'),
    );
  },
)''',
    );
  }

  Widget _buildGridViewDemo() {
    return InteractivePreview(
      title: 'GridView.count',
      description:
          'Responsive multi-column grid with crossAxisCount and aspect ratio control.',
      preview: Container(
        width: 360,
        height: 220,
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          color: DocsTheme.card,
          borderRadius: const BorderRadius.circular(14),
          border: Border.all(color: DocsTheme.borderLight),
        ),
        child: GridView.count(
          crossAxisCount: 3,
          crossAxisSpacing: 10,
          mainAxisSpacing: 10,
          children: [
            for (int i = 1; i <= 6; i++)
              Container(
                decoration: BoxDecoration(
                  color: DocsTheme.surface,
                  borderRadius: const BorderRadius.circular(10),
                  border: Border.all(color: DocsTheme.borderLight),
                ),
                child: Center(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Icon(Icons.grid_view,
                          size: 20, color: DocsTheme.accentGreen),
                      const SizedBox(height: 6),
                      Text('Cell $i',
                          style: const TextStyle(
                              fontSize: 12,
                              fontWeight: FontWeight.bold,
                              color: DocsTheme.textPrimary)),
                    ],
                  ),
                ),
              ),
          ],
        ),
      ),
      code: '''GridView.count(
  crossAxisCount: 3,
  crossAxisSpacing: 10,
  mainAxisSpacing: 10,
  children: [
    for (int i = 1; i <= 6; i++)
      Card(child: Center(child: Text('Cell \$i'))),
  ],
)''',
    );
  }
}
