import 'package:flartdart/flartdart.dart';
import '../components/docs_layout.dart';
import '../components/widget_showcase.dart';

class LayoutWidgetsPage extends StatelessWidget {
  const LayoutWidgetsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return DocsLayout(
      currentRoute: '/layout',
      title: 'Layout Widgets',
      child: FDColumn(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          FDText(
            'Layout Widgets',
            style: TextStyle(
              fontSize: 32.0,
              fontWeight: FontWeight.bold,
              color: FlartColors.blueGrey.shade900,
            ),
          ),
          const FDSizedBox(height: 16.0),
          FDText(
            'Control how widgets are positioned relative to each other using Rows, Columns, Stacks, and Lists.',
            style: TextStyle(
              fontSize: 18.0,
              color: FlartColors.blueGrey.shade700,
              height: 1.5,
            ),
          ),
          const FDSizedBox(height: 48.0),
          
          const WidgetShowcase(
            title: 'FDRow & FDColumn',
            description: 'Layout children in a horizontal or vertical array.',
            child: FDColumn(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                FDRow(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    _DemoBox(color: FlartColors.red),
                    FDSizedBox(width: 8.0),
                    _DemoBox(color: FlartColors.green),
                    FDSizedBox(width: 8.0),
                    _DemoBox(color: FlartColors.blue),
                  ],
                ),
                FDSizedBox(height: 16.0),
                FDText('^ FDRow'),
              ],
            ),
            code: '''FDRow(
  mainAxisAlignment: MainAxisAlignment.center,
  children: [
    FDContainer(width: 50, height: 50, color: FlartColors.red),
    FDSizedBox(width: 8.0),
    FDContainer(width: 50, height: 50, color: FlartColors.green),
    FDSizedBox(width: 8.0),
    FDContainer(width: 50, height: 50, color: FlartColors.blue),
  ],
)''',
          ),
          
          WidgetShowcase(
            title: 'FDStack & FDPositioned',
            description: 'Layers children on top of each other. Use FDPositioned to position children precisely.',
            child: FDStack(
              children: [
                FDContainer(
                  width: 200.0,
                  height: 200.0,
                  decoration: BoxDecoration(
                    color: FlartColors.blueGrey.shade200,
                    borderRadius: const BorderRadius.circular(12.0),
                  ),
                ),
                FDPositioned(
                  top: 16.0,
                  right: 16.0,
                  child: const FDContainer(
                    width: 50.0,
                    height: 50.0,
                    decoration: BoxDecoration(
                      color: FlartColors.orange,
                      borderRadius: BorderRadius.circular(25.0),
                    ),
                  ),
                ),
              ],
            ),
            code: '''FDStack(
  children: [
    FDContainer(
      width: 200.0,
      height: 200.0,
      color: FlartColors.blueGrey.shade200,
    ),
    FDPositioned(
      top: 16.0,
      right: 16.0,
      child: FDContainer(
        width: 50.0,
        height: 50.0,
        decoration: BoxDecoration(
          color: FlartColors.orange,
          borderRadius: BorderRadius.circular(25.0),
        ),
      ),
    ),
  ],
)''',
          ),
          
        ],
      ),
    );
  }
}

class _DemoBox extends StatelessWidget {
  final FlartColor color;
  
  const _DemoBox({required this.color});

  @override
  Widget build(BuildContext context) {
    return FDContainer(
      width: 50.0,
      height: 50.0,
      decoration: BoxDecoration(
        color: color,
        borderRadius: const BorderRadius.circular(8.0),
      ),
    );
  }
}
