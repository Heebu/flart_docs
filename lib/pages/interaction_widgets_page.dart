import 'package:flartdart/flartdart.dart';
import '../components/docs_layout.dart';
import '../components/widget_showcase.dart';

class InteractionWidgetsPage extends StatelessWidget {
  const InteractionWidgetsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return DocsLayout(
      currentRoute: '/interactions',
      title: 'Button & Interaction Widgets',
      child: FDColumn(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          FDText(
            'Interaction Widgets',
            style: TextStyle(
              fontSize: 32.0,
              fontWeight: FontWeight.bold,
              color: FlartColors.blueGrey.shade900,
            ),
          ),
          const FDSizedBox(height: 16.0),
          FDText(
            'Buttons and gesture detectors that allow users to interact with your application.',
            style: TextStyle(
              fontSize: 18.0,
              color: FlartColors.blueGrey.shade700,
              height: 1.5,
            ),
          ),
          const FDSizedBox(height: 48.0),
          
          WidgetShowcase(
            title: 'FDElevatedButton & FDTextButton',
            description: 'Standard material design buttons for primary and secondary actions.',
            child: FDRow(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                FDElevatedButton(
                  onPressed: () {},
                  child: const FDText('Elevated Button'),
                ),
                const FDSizedBox(width: 24.0),
                FDTextButton(
                  onPressed: () {},
                  child: const FDText('Text Button'),
                ),
              ],
            ),
            code: '''FDRow(
  children: [
    FDElevatedButton(
      onPressed: () {},
      child: FDText('Elevated Button'),
    ),
    FDSizedBox(width: 24.0),
    FDTextButton(
      onPressed: () {},
      child: FDText('Text Button'),
    ),
  ],
)''',
          ),
          
          WidgetShowcase(
            title: 'FDIconButton',
            description: 'A button containing only an icon.',
            child: FDIconButton(
              icon: const FDIcon(icon: FDIcons.delete),
              onPressed: () {},
            ),
            code: '''FDIconButton(
  icon: FDIcons.delete,
  onPressed: () {},
)''',
          ),
          
          WidgetShowcase(
            title: 'FDGestureDetector',
            description: 'A widget that detects gestures (taps, hovers, swipes) on its child.',
            child: FDGestureDetector(
              onTap: () => print('Tapped!'),
              onHover: () => print('Hovering!'),
              child: const FDContainer(
                width: 100.0,
                height: 100.0,
                decoration: BoxDecoration(
                  color: FlartColors.amber,
                  borderRadius: BorderRadius.circular(12.0),
                ),
                child: FDCenter(
                  child: FDText(
                    'Interact\\nWith Me',
                    textAlign: TextAlign.center,
                    style: TextStyle(fontWeight: FontWeight.bold),
                  ),
                ),
              ),
            ),
            code: '''FDGestureDetector(
  onTap: () => print('Tapped!'),
  onHover: () => print('Hovering!'),
  child: FDContainer(
    width: 100.0,
    height: 100.0,
    color: FlartColors.amber,
    child: FDCenter(
      child: FDText('Interact\\nWith Me'),
    ),
  ),
)''',
          ),
        ],
      ),
    );
  }
}
