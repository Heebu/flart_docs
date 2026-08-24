import 'package:flartdart/flartdart.dart';
import 'package:flart_docs/pages/home_page.dart';
import 'package:flart_docs/pages/installation_page.dart';
import 'package:flart_docs/pages/responsive_sizing_page.dart';
import 'package:flart_docs/pages/state_management_page.dart';
import 'package:flart_docs/pages/routing_page.dart';
import 'package:flart_docs/pages/basic_widgets_page.dart';
import 'package:flart_docs/pages/layout_widgets_page.dart';
import 'package:flart_docs/pages/input_widgets_page.dart';
import 'package:flart_docs/pages/interaction_widgets_page.dart';
import 'package:flart_docs/pages/animation_widgets_page.dart';

void main() {
  ScreenUtil.init();

  PageNavigator.registerRoutes({
    '/': const HomePage(),
    '/installation': const InstallationPage(),
    '/responsive': const ResponsiveSizingPage(),
    '/state': const StateManagementPage(),
    '/routing': const RoutingPage(),
    '/basic': const BasicWidgetsPage(),
    '/layout': const LayoutWidgetsPage(),
    '/inputs': const InputWidgetsPage(),
    '/interactions': const InteractionWidgetsPage(),
    '/animations': const AnimationWidgetsPage(),
  });

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return FDMaterialApp(
      title: 'Flart Docs',
      home: PageNavigator.current,
    );
  }
}

