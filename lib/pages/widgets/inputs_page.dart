import 'package:flartdart/flartdart.dart';
import '../../theme/docs_theme.dart';
import '../../components/docs_shell.dart';
import '../../components/interactive_preview.dart';

class InputsPage extends StatefulWidget {
  const InputsPage({super.key});

  @override
  State<InputsPage> createState() => _InputsPageState();
}

class _InputsPageState extends State<InputsPage> {
  final TextEditingController _textCtrl = TextEditingController();
  bool _checkboxVal = true;
  int _radioVal = 1;
  bool _switchVal = true;
  double _sliderVal = 40.0;
  String _dropdownVal = 'Option 1';

  @override
  Widget build(BuildContext context) {
    return DocsShell(
      currentRoute: '/docs/widgets/inputs',
      title: 'Category 5: Form & Input Widgets',
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildHeader(),
          const SizedBox(height: 32),
          _buildFormInputsDemo(),
          const SizedBox(height: 32),
          _buildTogglesDemo(),
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
            color: DocsTheme.accentCyan.withValues(alpha: 0.15),
            borderRadius: const BorderRadius.circular(6),
          ),
          child: const Text(
            'CATEGORY 5 • WIDGET CATALOG',
            style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: DocsTheme.accentCyan),
          ),
        ),
        const SizedBox(height: 12),
        const Text(
          'Form & Interactive Input Widgets',
          style: TextStyle(
              fontSize: 36,
              fontWeight: FontWeight.w800,
              color: DocsTheme.textPrimary),
        ),
        const SizedBox(height: 8),
        const Text(
          'Capture user data with validation: TextField, TextFormField, Form, Checkbox, Radio, Switch, Slider, and DropdownButton.',
          style: TextStyle(fontSize: 16, color: DocsTheme.textSecondary),
        ),
      ],
    );
  }

  Widget _buildFormInputsDemo() {
    return InteractivePreview(
      title: 'TextField & DropdownButton',
      description:
          'Single-line text entry and selection menus with reactive state.',
      preview: Container(
        width: 360,
        padding: const EdgeInsets.all(20),
        decoration: const BoxDecoration(
          color: DocsTheme.card,
          borderRadius: BorderRadius.circular(14),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            TextField(
              controller: _textCtrl,
              placeholder: 'Enter username...',
              style: const TextStyle(color: DocsTheme.textPrimary),
              onChanged: (_) => setState(() {}),
            ),
            const SizedBox(height: 12),
            Text(
              'Live value: ${_textCtrl.text.isEmpty ? "(empty)" : _textCtrl.text}',
              style:
                  const TextStyle(fontSize: 12, color: DocsTheme.accentGreen),
            ),
            const SizedBox(height: 16),
            DropdownButton<String>(
              value: _dropdownVal,
              items: const [
                DropdownMenuItem(value: 'Option 1', child: Text('Option 1')),
                DropdownMenuItem(value: 'Option 2', child: Text('Option 2')),
                DropdownMenuItem(value: 'Option 3', child: Text('Option 3')),
              ],
              onChanged: (val) {
                if (val != null) setState(() => _dropdownVal = val);
              },
            ),
          ],
        ),
      ),
      code: '''TextField(
  controller: _textCtrl,
  placeholder: 'Enter username...',
  onChanged: (val) => setState(() {}),
)

DropdownButton<String>(
  value: _dropdownVal,
  items: const [
    DropdownMenuItem(value: 'Option 1', child: Text('Option 1')),
    DropdownMenuItem(value: 'Option 2', child: Text('Option 2')),
  ],
  onChanged: (val) => setState(() => _dropdownVal = val!),
)''',
    );
  }

  Widget _buildTogglesDemo() {
    return InteractivePreview(
      title: 'Checkbox, Switch, Radio & Slider',
      description:
          'Boolean toggles, exclusive selections, and continuous sliders.',
      preview: Container(
        width: 360,
        padding: const EdgeInsets.all(20),
        decoration: const BoxDecoration(
          color: DocsTheme.card,
          borderRadius: BorderRadius.circular(14),
        ),
        child: Column(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text('Checkbox:',
                    style: TextStyle(color: DocsTheme.textPrimary)),
                Checkbox(
                  value: _checkboxVal,
                  onChanged: (val) =>
                      setState(() => _checkboxVal = val ?? false),
                ),
              ],
            ),
            const SizedBox(height: 12),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text('Switch:',
                    style: TextStyle(color: DocsTheme.textPrimary)),
                Switch(
                  value: _switchVal,
                  onChanged: (val) => setState(() => _switchVal = val),
                ),
              ],
            ),
            const SizedBox(height: 12),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text('Radio (Option 1):',
                    style: TextStyle(color: DocsTheme.textPrimary)),
                Radio<int>(
                  value: 1,
                  groupValue: _radioVal,
                  onChanged: (val) => setState(() => _radioVal = val!),
                ),
              ],
            ),
            const SizedBox(height: 12),
            Slider(
              value: _sliderVal,
              min: 0,
              max: 100,
              onChanged: (val) => setState(() => _sliderVal = val),
            ),
          ],
        ),
      ),
      code: '''Checkbox(
  value: _checkboxVal,
  onChanged: (val) => setState(() => _checkboxVal = val!),
)

Switch(
  value: _switchVal,
  onChanged: (val) => setState(() => _switchVal = val),
)

Slider(
  value: _sliderVal,
  min: 0,
  max: 100,
  onChanged: (val) => setState(() => _sliderVal = val),
)''',
    );
  }
}
