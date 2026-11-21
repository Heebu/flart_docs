import 'package:flartdart/flartdart.dart';
import 'package:flart_docs/pages/home_page.dart';
import 'package:flart_docs/pages/installation_page.dart';
import 'package:flart_docs/pages/architecture_page.dart';
import 'package:flart_docs/pages/responsive_sizing_page.dart';
import 'package:flart_docs/pages/state_management_page.dart';
import 'package:flart_docs/pages/routing_page.dart';

import 'package:flart_docs/pages/widgets/basic_widgets_page.dart';
import 'package:flart_docs/pages/widgets/layout_widgets_page.dart';
import 'package:flart_docs/pages/widgets/decoration_widgets_page.dart';
import 'package:flart_docs/pages/widgets/scrollables_page.dart';
import 'package:flart_docs/pages/widgets/inputs_page.dart';
import 'package:flart_docs/pages/widgets/buttons_page.dart';
import 'package:flart_docs/pages/widgets/animation_page.dart';
import 'package:flart_docs/pages/widgets/media_page.dart';
import 'package:flart_docs/pages/widgets/utility_page.dart';

void main() {
  ScreenUtil.init();

  PageNavigator.registerRoutes({
    // Home & Guides
    '/': const HomePage(),
    '/docs/installation': const InstallationPage(),
    '/docs/architecture': const ArchitecturePage(),
    '/docs/responsive': const ResponsiveSizingPage(),
    '/docs/state': const StateManagementPage(),
    '/docs/routing': const RoutingPage(),

    // The 9 Widget Categories
    '/docs/widgets/basic': const BasicWidgetsPage(),
    '/docs/widgets/layout': const LayoutWidgetsPage(),
    '/docs/widgets/decoration': const DecorationWidgetsPage(),
    '/docs/widgets/scrollables': const ScrollablesPage(),
    '/docs/widgets/inputs': const InputsPage(),
    '/docs/widgets/buttons': const ButtonsPage(),
    '/docs/widgets/animation': const AnimationPage(),
    '/docs/widgets/media': const MediaPage(),
    '/docs/widgets/utility': const UtilityPage(),

    // Aliases / Legacy Routes for backwards compatibility
    '/installation': const InstallationPage(),
    '/responsive': const ResponsiveSizingPage(),
    '/state': const StateManagementPage(),
    '/routing': const RoutingPage(),
    '/basic': const BasicWidgetsPage(),
    '/layout': const LayoutWidgetsPage(),
    '/inputs': const InputsPage(),
    '/interactions': const ButtonsPage(),
    '/animations': const AnimationPage(),
  });

  PageNavigator.init();

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return FDMaterialApp(
      title: 'Flart — Pure Dart Web Framework',
      debugShowCheckedModeBanner: false,
      home: PageNavigator.current,
    );
  }
}
