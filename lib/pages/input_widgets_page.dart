import 'package:flartdart/flartdart.dart';
import '../components/docs_layout.dart';
import '../components/widget_showcase.dart';

class InputWidgetsPage extends StatelessWidget {
  const InputWidgetsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return DocsLayout(
      currentRoute: '/inputs',
      title: 'Input Widgets',
      child: FDColumn(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          FDText(
            'Input Widgets',
            style: TextStyle(
              fontSize: 32.0,
              fontWeight: FontWeight.bold,
              color: FlartColors.blueGrey.shade900,
            ),
          ),
          const FDSizedBox(height: 16.0),
          FDText(
            'Gather data from users with text fields, checkboxes, switches, and other form controls.',
            style: TextStyle(
              fontSize: 18.0,
              color: FlartColors.blueGrey.shade700,
              height: 1.5,
            ),
          ),
          const FDSizedBox(height: 48.0),
          
          WidgetShowcase(
            title: 'FDTextField',
            description: 'A basic text input field with placeholder support.',
            child: FDContainer(
              width: 300.0,
              child: FDTextField(
                label: 'Username',
                placeholder: 'Enter your username',
                onChanged: (value) {
                  // value updated
                },
              ),
            ),
            code: '''FDTextField(
  label: 'Username',
  placeholder: 'Enter your username',
  onChanged: (value) {
    print(value);
  },
)''',
          ),
          
          WidgetShowcase(
            title: 'FDCheckbox & FDSwitch',
            description: 'Boolean toggles for selecting options.',
            child: _BooleanInputsExample(),
            code: '''FDRow(
  children: [
    FDCheckbox(
      value: isChecked,
      onChanged: (val) => setState(() => isChecked = val),
    ),
    FDSizedBox(width: 8.0),
    FDText('Remember Me'),
    
    FDSizedBox(width: 32.0),
    
    FDSwitch(
      value: isEnabled,
      onChanged: (val) => setState(() => isEnabled = val),
    ),
    FDSizedBox(width: 8.0),
    FDText('Enable Feature'),
  ],
)''',
          ),
        ],
      ),
    );
  }
}

class _BooleanInputsExample extends StatefulWidget {
  @override
  State<_BooleanInputsExample> createState() => _BooleanInputsExampleState();
}

class _BooleanInputsExampleState extends State<_BooleanInputsExample> {
  bool isChecked = false;
  bool isEnabled = true;

  @override
  Widget build(BuildContext context) {
    return FDRow(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        FDRow(
          children: [
            FDCheckbox(
              value: isChecked,
              onChanged: (val) {
                setState(() => isChecked = val);
              },
            ),
            const FDSizedBox(width: 8.0),
            const FDText('Remember Me'),
          ],
        ),
        const FDSizedBox(width: 32.0),
        FDRow(
          children: [
            FDSwitch(
              value: isEnabled,
              onChanged: (val) {
                setState(() => isEnabled = val);
              },
            ),
            const FDSizedBox(width: 8.0),
            const FDText('Enable Feature'),
          ],
        ),
      ],
    );
  }
}
