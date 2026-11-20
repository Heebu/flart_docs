import 'package:dart_frog/dart_frog.dart';

final List<Map<String, dynamic>> _docIndex = [
  {
    'title': 'Getting Started & Installation',
    'path': '/docs/installation',
    'category': 'Guide',
    'description': 'How to install the Flart CLI, create new projects, and configure pubspec.yaml.',
    'keywords': ['install', 'cli', 'setup', 'pubspec', 'getting started', 'create', 'new', 'flart', 'runapp'],
  },
  {
    'title': 'Virtual DOM & Architecture',
    'path': '/docs/architecture',
    'category': 'Architecture',
    'description': 'Deep dive into Flart\'s pure Dart Virtual DOM, reconciler, and zero-CanvasKit DOM rendering.',
    'keywords': ['vdom', 'virtual dom', 'reconciler', 'diff', 'patch', 'performance', 'dom', 'architecture', 'canvaskit', 'lightweight'],
  },
  {
    'title': 'Responsive Design & ScreenUtil',
    'path': '/docs/responsive',
    'category': 'Core',
    'description': 'Master responsive layouts with ScreenUtil (.w, .h, .sp), LayoutBuilder, and MediaQuery breakpoints.',
    'keywords': ['responsive', 'screenutil', 'mobile', 'tablet', 'desktop', 'breakpoints', 'layoutbuilder', 'mediaquery', 'scaling'],
  },
  {
    'title': 'State Management: Stateful & Reactive',
    'path': '/docs/state',
    'category': 'Core',
    'description': 'StatefulWidget, setState, ValueNotifier, and lightweight reactive state without complex boilerplate.',
    'keywords': ['state', 'setstate', 'valuenotifier', 'valuelistenablebuilder', 'reactive', 'lifecycle', 'initstate', 'dispose'],
  },
  {
    'title': 'Declarative Routing & History',
    'path': '/docs/routing',
    'category': 'Navigation',
    'description': 'PageNavigator, pushNamed, replaceNamed, hash-based URLs, route guards, and transitions.',
    'keywords': ['routing', 'pagenavigator', 'navigation', 'history', 'hash', 'routes', 'guards', 'transitions', 'push', 'pop'],
  },
  {
    'title': 'Full-Stack Dart with Dart Frog',
    'path': '/docs/fullstack',
    'category': 'Full-Stack',
    'description': 'How to build full-stack web applications using Flart on the frontend and Dart Frog on the backend.',
    'keywords': ['dart frog', 'full stack', 'backend', 'api', 'server', 'shelf', 'middleware', 'routes', 'rest', 'http'],
  },
  {
    'title': 'Category 1: Basic & Core Widgets',
    'path': '/docs/widgets/basic',
    'category': 'Widgets',
    'description': 'Container, Text, RichText, Padding, Center, SizedBox, FractionallySizedBox, and ColoredBox.',
    'keywords': ['container', 'text', 'richtext', 'padding', 'center', 'sizedbox', 'fractionallysizedbox', 'coloredbox', 'core'],
  },
  {
    'title': 'Category 2: Layout & Structure Widgets',
    'path': '/docs/widgets/layout',
    'category': 'Widgets',
    'description': 'Column, Row, Flex, Expanded, Spacer, Wrap, Stack, Positioned, and Align.',
    'keywords': ['column', 'row', 'flex', 'expanded', 'spacer', 'wrap', 'stack', 'positioned', 'align', 'flexbox', 'layout'],
  },
  {
    'title': 'Category 3: Decoration & Styling',
    'path': '/docs/widgets/decoration',
    'category': 'Widgets',
    'description': 'BoxDecoration, Border, BorderRadius, BoxShadow, Gradient, ClipRRect, ClipOval, and DecoratedBox.',
    'keywords': ['boxdecoration', 'border', 'borderradius', 'boxshadow', 'gradient', 'cliprrect', 'clipoval', 'decoratedbox', 'styling'],
  },
  {
    'title': 'Category 4: Scrollable & Data-Driven Widgets',
    'path': '/docs/widgets/scrollables',
    'category': 'Widgets',
    'description': 'ListView, ListView.builder, GridView, GridView.count, SingleChildScrollView, and Scrollbar.',
    'keywords': ['listview', 'gridview', 'singlechildscrollview', 'scroll', 'virtualized', 'builder', 'data', 'scrollbar'],
  },
  {
    'title': 'Category 5: Form & Interactive Input Widgets',
    'path': '/docs/widgets/inputs',
    'category': 'Widgets',
    'description': 'TextField, TextFormField, Form, Checkbox, Radio, Switch, Slider, DropdownButton, and FormState.',
    'keywords': ['textfield', 'textformfield', 'form', 'checkbox', 'radio', 'switch', 'slider', 'dropdown', 'input', 'validation'],
  },
  {
    'title': 'Category 6: Buttons & Gestures',
    'path': '/docs/widgets/buttons',
    'category': 'Widgets',
    'description': 'ElevatedButton, TextButton, OutlinedButton, IconButton, GestureDetector, and InkWell.',
    'keywords': ['elevatedbutton', 'textbutton', 'outlinedbutton', 'iconbutton', 'gesturedetector', 'inkwell', 'button', 'click', 'tap'],
  },
  {
    'title': 'Category 7: Animation & Motion Widgets',
    'path': '/docs/widgets/animation',
    'category': 'Widgets',
    'description': 'AnimatedContainer, AnimatedOpacity, FadeTransition, SlideTransition, ScaleTransition, and FDAnimate.',
    'keywords': ['animatedcontainer', 'animatedopacity', 'fadetransition', 'slidetransition', 'scaletransition', 'fdanimate', 'animation', 'motion'],
  },
  {
    'title': 'Category 8: Media & Feedback Widgets',
    'path': '/docs/widgets/media',
    'category': 'Widgets',
    'description': 'Image.network, Image.asset, Icon, CircularProgressIndicator, LinearProgressIndicator, Tooltip, and SnackBar.',
    'keywords': ['image', 'icon', 'circularprogressindicator', 'linearprogressindicator', 'tooltip', 'snackbar', 'toast', 'loading'],
  },
  {
    'title': 'Category 9: Utility & Overlay Widgets',
    'path': '/docs/widgets/utility',
    'category': 'Widgets',
    'description': 'Dialog, AlertDialog, BottomSheet, Divider, VerticalDivider, Spacer, Opacity, and Visibility.',
    'keywords': ['dialog', 'alertdialog', 'bottomsheet', 'modal', 'divider', 'verticaldivider', 'opacity', 'visibility', 'utility', 'overlay'],
  },
];

Response onRequest(RequestContext context) {
  if (context.request.method != HttpMethod.get) {
    return Response(statusCode: 405);
  }

  final query = (context.request.uri.queryParameters['q'] ?? '').trim().toLowerCase();
  if (query.isEmpty) {
    return Response.json(body: {
      'query': '',
      'count': 0,
      'results': <Map<String, dynamic>>[],
    });
  }

  final words = query.split(RegExp(r'\s+')).where((w) => w.isNotEmpty).toList();

  final scoredResults = <Map<String, dynamic>>[];

  for (final doc in _docIndex) {
    var score = 0;
    final title = (doc['title'] as String).toLowerCase();
    final desc = (doc['description'] as String).toLowerCase();
    final keywords = (doc['keywords'] as List<String>).map((k) => k.toLowerCase()).toList();

    for (final word in words) {
      if (title.contains(word)) score += 15;
      if (keywords.contains(word)) score += 10;
      if (keywords.any((k) => k.contains(word))) score += 5;
      if (desc.contains(word)) score += 3;
    }

    if (score > 0) {
      scoredResults.add({
        ...doc,
        'score': score,
      });
    }
  }

  scoredResults.sort((a, b) => (b['score'] as int).compareTo(a['score'] as int));

  return Response.json(body: {
    'query': query,
    'count': scoredResults.length,
    'results': scoredResults.take(8).toList(),
  });
}
