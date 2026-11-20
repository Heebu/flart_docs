import 'package:flartdart/flartdart.dart';
import '../theme/docs_theme.dart';
import '../components/docs_shell.dart';
import '../components/code_block.dart';
import '../components/interactive_preview.dart';

class StateManagementPage extends StatefulWidget {
  const StateManagementPage({super.key});

  @override
  State<StateManagementPage> createState() => _StateManagementPageState();
}

class _StateManagementPageState extends State<StateManagementPage> {
  final List<String> _todos = [
    'Audit widget styling',
    'Verify zero rawCss',
    'Deploy Flart docs'
  ];
  final TextEditingController _todoController = TextEditingController();

  void _addTodo() {
    final text = _todoController.text.trim();
    if (text.isNotEmpty) {
      setState(() {
        _todos.add(text);
        _todoController.text = '';
      });
    }
  }

  void _removeTodo(int index) {
    setState(() {
      _todos.removeAt(index);
    });
  }

  @override
  Widget build(BuildContext context) {
    return DocsShell(
      currentRoute: '/docs/state',
      title: 'State Management',
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildHeader(),
          const SizedBox(height: 32),
          _buildInteractiveTodoDemo(),
          const SizedBox(height: 32),
          _buildSetStateGuide(),
          const SizedBox(height: 32),
          _buildValueNotifierGuide(),
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
            color: DocsTheme.accentPurple.withValues(alpha: 0.15),
            borderRadius: const BorderRadius.circular(6),
          ),
          child: const Text(
            'CORE CONCEPTS',
            style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: DocsTheme.accentPurple),
          ),
        ),
        const SizedBox(height: 12),
        const Text(
          'State Management',
          style: TextStyle(
              fontSize: 36,
              fontWeight: FontWeight.w800,
              color: DocsTheme.textPrimary),
        ),
        const SizedBox(height: 8),
        const Text(
          'Manage local UI state and global application data with zero external boilerplate.',
          style: TextStyle(fontSize: 16, color: DocsTheme.textSecondary),
        ),
      ],
    );
  }

  Widget _buildInteractiveTodoDemo() {
    return InteractivePreview(
      title: 'Interactive State Management Demo',
      description:
          'Add and remove tasks live to see StatefulWidget and setState diffing in action.',
      preview: Container(
        width: 360,
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          color: DocsTheme.surface,
          borderRadius: const BorderRadius.circular(16),
          border: Border.all(color: DocsTheme.borderLight),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const Text(
              'Flart Task Manager',
              style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                  color: DocsTheme.textPrimary),
            ),
            const SizedBox(height: 12),
            Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _todoController,
                    placeholder: 'New task...',
                    style: const TextStyle(
                        fontSize: 13, color: DocsTheme.textPrimary),
                  ),
                ),
                const SizedBox(width: 8),
                ElevatedButton(
                  onPressed: _addTodo,
                  child: const Text('Add'),
                ),
              ],
            ),
            const SizedBox(height: 16),
            Column(
              children: [
                for (int i = 0; i < _todos.length; i++)
                  Container(
                    margin: const EdgeInsets.only(bottom: 8),
                    padding:
                        const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                    decoration: const BoxDecoration(
                      color: DocsTheme.card,
                      borderRadius: BorderRadius.circular(8),
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(_todos[i],
                            style: const TextStyle(
                                fontSize: 13, color: DocsTheme.textPrimary)),
                        GestureDetector(
                          onTap: () => _removeTodo(i),
                          child: const Icon(Icons.close,
                              size: 16, color: DocsTheme.textMuted),
                        ),
                      ],
                    ),
                  ),
              ],
            ),
          ],
        ),
      ),
      code: '''class TodoListWidget extends StatefulWidget {
  const TodoListWidget({super.key});

  @override
  State<TodoListWidget> createState() => _TodoListWidgetState();
}

class _TodoListWidgetState extends State<TodoListWidget> {
  final List<String> _todos = ['Task 1', 'Task 2'];
  final TextEditingController _ctrl = TextEditingController();

  void _add() {
    if (_ctrl.text.isNotEmpty) {
      setState(() {
        _todos.add(_ctrl.text);
        _ctrl.text = '';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        TextField(controller: _ctrl),
        ElevatedButton(onPressed: _add, child: const Text('Add')),
        for (final t in _todos) Text(t),
      ],
    );
  }
}''',
    );
  }

  Widget _buildSetStateGuide() {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          '1. StatefulWidget & setState()',
          style: TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.bold,
              color: DocsTheme.textPrimary),
        ),
        SizedBox(height: 12),
        Text(
          'Every StatefulWidget in Flart has its own persistent State object and lifecycle (initState, didUpdateWidget, dispose). Calling setState() batches changes and schedules a Virtual DOM reconciliation pass.',
          style: TextStyle(
              fontSize: 14, color: DocsTheme.textSecondary, height: 1.5),
        ),
      ],
    );
  }

  Widget _buildValueNotifierGuide() {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          '2. Reactive ValueNotifier & ValueListenableBuilder',
          style: TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.bold,
              color: DocsTheme.textPrimary),
        ),
        SizedBox(height: 12),
        Text(
          'For decoupled or scoped state, use ValueNotifier without needing an entire StatefulWidget:',
          style: TextStyle(fontSize: 14, color: DocsTheme.textSecondary),
        ),
        SizedBox(height: 12),
        CodeBlock(
          code: '''final counterNotifier = ValueNotifier<int>(0);

// In your UI:
ValueListenableBuilder<int>(
  valueListenable: counterNotifier,
  builder: (context, value, child) {
    return Text('Count: \$value');
  },
);

// Mutating state anywhere:
counterNotifier.value++;''',
          language: 'dart',
          title: 'ValueNotifier Pattern',
        ),
      ],
    );
  }
}
