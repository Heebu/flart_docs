import 'package:flartdart/flartdart.dart';
import '../components/docs_layout.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return DocsLayout(
      currentRoute: '/',
      title: 'Introduction',
      child: FDColumn(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          FDText(
            'FlartDart',
            style: TextStyle(
              fontSize: 48.0,
              fontWeight: FontWeight.bold,
              color: FlartColors.blueGrey.shade900,
            ),
          ),
          const FDSizedBox(height: 16.0),
          FDText(
            'A comprehensive Flutter-inspired UI framework for Dart Web applications.',
            style: TextStyle(
              fontSize: 20.0,
              color: FlartColors.blueGrey.shade700,
              height: 1.5,
            ),
          ),
          const FDSizedBox(height: 48.0),
          
          FDText(
            'Features',
            style: TextStyle(
              fontSize: 24.0,
              fontWeight: FontWeight.bold,
              color: FlartColors.blueGrey.shade800,
            ),
          ),
          const FDSizedBox(height: 16.0),
          const _FeatureCard(
            title: '100+ Widgets',
            description: 'From simple buttons to complex data tables, FlartDart has you covered with a massive library of pre-built UI components.',
          ),
          const FDSizedBox(height: 16.0),
          const _FeatureCard(
            title: 'Virtual DOM Engine',
            description: 'Lightning-fast rendering with a highly optimized Virtual DOM reconciler that only patches what actually changes.',
          ),
          const FDSizedBox(height: 16.0),
          const _FeatureCard(
            title: 'Responsive & Accessible',
            description: 'Built-in support for responsive scaling, screen utilities, and strict semantic HTML output.',
          ),
        ],
      ),
    );
  }
}

class _FeatureCard extends StatelessWidget {
  final String title;
  final String description;

  const _FeatureCard({
    required this.title,
    required this.description,
  });

  @override
  Widget build(BuildContext context) {
    return FDContainer(
      width: double.infinity,
      padding: const EdgeInsets.all(24.0),
      rawCss: 'border: 1px solid #eaeaea;',
      decoration: BoxDecoration(
        color: FlartColors.blueGrey.shade50,
        borderRadius: const BorderRadius.circular(12.0),
      ),
      child: FDColumn(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          FDText(
            title,
            style: TextStyle(
              fontSize: 18.0,
              fontWeight: FontWeight.w600,
              color: FlartColors.blueGrey.shade900,
            ),
          ),
          const FDSizedBox(height: 8.0),
          FDText(
            description,
            style: TextStyle(
              fontSize: 16.0,
              color: FlartColors.blueGrey.shade700,
              height: 1.5,
            ),
          ),
        ],
      ),
    );
  }
}
