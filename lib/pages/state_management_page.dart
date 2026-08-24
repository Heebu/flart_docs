import 'package:flartdart/flartdart.dart';
import '../components/docs_layout.dart';
import '../components/widget_showcase.dart';

class StateManagementPage extends StatelessWidget {
  const StateManagementPage({super.key});

  @override
  Widget build(BuildContext context) {
    return DocsLayout(
      currentRoute: '/state',
      title: 'State Management',
      child: FDColumn(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          FDText(
            'State Management',
            style: TextStyle(
              fontSize: 32.0,
              fontWeight: FontWeight.bold,
              color: FlartColors.blueGrey.shade900,
            ),
          ),
          const FDSizedBox(height: 16.0),
          FDText(
            'FlartDart implements familiar patterns like ChangeNotifier, FDProvider, and a Stacked-style FDViewModelBuilder for zero-config reactive logic.',
            style: TextStyle(
              fontSize: 18.0,
              color: FlartColors.blueGrey.shade700,
              height: 1.5,
            ),
          ),
          const FDSizedBox(height: 48.0),
          
          FDText(
            'FDViewModelBuilder',
            style: TextStyle(
              fontSize: 24.0,
              fontWeight: FontWeight.bold,
              color: FlartColors.blueGrey.shade800,
            ),
          ),
          const FDSizedBox(height: 16.0),
          FDText(
            'Tired of complex state registration? Use FDViewModelBuilder to bind a ViewModel directly to your UI.',
            style: TextStyle(
              fontSize: 16.0,
              color: FlartColors.blueGrey.shade700,
              height: 1.5,
            ),
          ),
          const FDSizedBox(height: 16.0),
          
          WidgetShowcase(
            title: 'Counter Example',
            description: 'A classic counter demonstrating reactive state updates with FDViewModelBuilder.',
            child: FDViewModelBuilder<_CounterViewModel>(
              viewModelBuilder: () => _CounterViewModel(),
              builder: (context, model, child) {
                return FDColumn(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    const FDText(
                      'Count: \${model.count}',
                      style: TextStyle(
                        fontSize: 32.0,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const FDSizedBox(height: 20.0),
                    FDElevatedButton(
                      onPressed: model.increment,
                      child: const FDText('Increment'),
                    ),
                  ],
                );
              },
            ),
            code: '''class CounterViewModel extends ViewModel {
  int count = 0;
  void increment() {
    count++;
    notifyListeners();
  }
}

// In your View
FDViewModelBuilder<CounterViewModel>(
  viewModelBuilder: () => CounterViewModel(),
  builder: (context, model, child) {
    return FDColumn(
      children: [
        FDText('Count: \${model.count}'),
        FDElevatedButton(
          onPressed: model.increment,
          child: FDText('Increment'),
        ),
      ],
    );
  },
)''',
          ),
        ],
      ),
    );
  }
}

class _CounterViewModel extends ViewModel {
  int count = 0;
  void increment() {
    count++;
    notifyListeners();
  }
}
