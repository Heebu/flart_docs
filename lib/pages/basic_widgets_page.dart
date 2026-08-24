import 'package:flartdart/flartdart.dart';
import '../components/docs_layout.dart';
import '../components/widget_showcase.dart';

class BasicWidgetsPage extends StatelessWidget {
  const BasicWidgetsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return DocsLayout(
      currentRoute: '/basic',
      title: 'Basic Widgets',
      child: FDColumn(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          FDText(
            'Basic Widgets',
            style: TextStyle(
              fontSize: 32.0,
              fontWeight: FontWeight.bold,
              color: FlartColors.blueGrey.shade900,
            ),
          ),
          const FDSizedBox(height: 16.0),
          FDText(
            'The foundational building blocks of any FlartDart interface. These widgets are absolutely essential to everything you build.',
            style: TextStyle(
              fontSize: 18.0,
              color: FlartColors.blueGrey.shade700,
              height: 1.5,
            ),
          ),
          const FDSizedBox(height: 48.0),
          
          const WidgetShowcase(
            title: 'FDContainer',
            description: 'A convenience widget that combines common painting, positioning, and sizing widgets.',
            child: FDContainer(
              width: 100.0,
              height: 100.0,
              decoration: BoxDecoration(
                color: FlartColors.blue,
                borderRadius: BorderRadius.circular(12.0),
                boxShadow: [
                  BoxShadow(
                    color: FlartColor('rgba(59, 130, 246, 0.5)'),
                    blurRadius: 15,
                    offsetY: 8,
                  ),
                ],
              ),
              child: FDCenter(
                child: FDText(
                  'Hello',
                  style: TextStyle(color: FlartColors.white, fontWeight: FontWeight.bold),
                ),
              ),
            ),
            code: '''
FDContainer(
  width: 100.0,
  height: 100.0,
  decoration: BoxDecoration(
    color: FlartColors.blue,
    borderRadius: BorderRadius.circular(12.0),
    boxShadow: const [
      BoxShadow(
        color: FlartColor('rgba(59, 130, 246, 0.5)'),
        blurRadius: 15,
        offsetY: 8,
      ),
    ],
  ),
  child: FDCenter(
    child: FDText(
      'Hello',
      style: TextStyle(
        color: FlartColors.white, 
        fontWeight: FontWeight.bold
      ),
    ),
  ),
)''',
          ),

          WidgetShowcase(
            title: 'FDButton',
            description: 'A material design elevated button.',
            child: FDElevatedButton(
              onPressed: () {},
              child: const FDText('Click Me'),
            ),
            code: '''
FDElevatedButton(
  onPressed: () {
    print('Clicked!');
  },
  child: FDText('Click Me'),
)''',
          ),
        ],
      ),
    );
  }
}
