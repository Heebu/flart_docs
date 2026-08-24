import 'package:flartdart/flartdart.dart';
import '../components/docs_layout.dart';
import '../components/widget_showcase.dart';

class AnimationWidgetsPage extends StatelessWidget {
  const AnimationWidgetsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return DocsLayout(
      currentRoute: '/animations',
      title: 'Animation Widgets',
      child: FDColumn(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          FDText(
            'Animation Widgets',
            style: TextStyle(
              fontSize: 32.0,
              fontWeight: FontWeight.bold,
              color: FlartColors.blueGrey.shade900,
            ),
          ),
          const FDSizedBox(height: 16.0),
          FDText(
            'Bring your application to life with smooth, 60fps animations. FlartDart makes it incredibly easy to add motion to your UI.',
            style: TextStyle(
              fontSize: 18.0,
              color: FlartColors.blueGrey.shade700,
              height: 1.5,
            ),
          ),
          const FDSizedBox(height: 48.0),
          
          const WidgetShowcase(
            title: 'FDAnimate (Entrance Animations)',
            description: 'A powerful wrapper to easily animate any widget when it first appears.',
            child: FDAnimate(
              fadeIn: true,
              slideY: 20,
              duration: Duration(milliseconds: 600),
              child: FDContainer(
                width: 200.0,
                height: 100.0,
                decoration: BoxDecoration(
                  color: FlartColors.deepPurple,
                  borderRadius: BorderRadius.circular(12.0),
                ),
                child: FDCenter(
                  child: FDText(
                    'Slide & Fade In',
                    style: TextStyle(color: FlartColors.white, fontWeight: FontWeight.bold),
                  ),
                ),
              ),
            ),
            code: '''FDAnimate(
  fadeIn: true,
  slideY: 20,
  duration: Duration(milliseconds: 600),
  child: FDContainer(
    width: 200.0,
    height: 100.0,
    color: FlartColors.deepPurple,
    child: FDCenter(
      child: FDText('Slide & Fade In'),
    ),
  ),
)''',
          ),
          
          const WidgetShowcase(
            title: 'AnimatedContainer',
            description: 'Animates size and color between begin and end states using an AnimationController.',
            child: _AnimatedContainerExample(),
            code: '''// Inside a StatefulWidget
AnimatedContainer(
  controller: _controller,
  beginWidth: 150.0,
  endWidth: 300.0,
  beginHeight: 100.0,
  endHeight: 100.0,
  beginColor: FlartColors.red,
  endColor: FlartColors.blue,
  cssStyle: const {'border-radius': '12px'},
  child: const FDCenter(
    child: FDText('Tap to Animate'),
  ),
)''',
          ),
          
          const WidgetShowcase(
            title: 'FDSkeleton',
            description: 'A shimmer loader perfect for modern data-fetching UX.',
            child: FDSkeleton(
              width: 300.0,
              height: 100.0,
              borderRadius: BorderRadius.circular(8.0),
            ),
            code: '''FDSkeleton(
  width: 300.0,
  height: 100.0,
  borderRadius: BorderRadius.circular(8.0),
)''',
          ),
        ],
      ),
    );
  }
}

class _AnimatedContainerExample extends StatefulWidget {
  const _AnimatedContainerExample();

  @override
  State<_AnimatedContainerExample> createState() => _AnimatedContainerExampleState();
}

class _AnimatedContainerExampleState extends State<_AnimatedContainerExample> with SingleTickerProviderStateMixin {
  late AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(milliseconds: 500),
      vsync: this,
    )..addListener(() => setState(() {}));
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return FDGestureDetector(
      onTap: () {
        if (_controller.value == 0.0) {
          _controller.forward();
        } else {
          _controller.reverse();
        }
      },
      child: AnimatedContainer(
        controller: _controller,
        beginWidth: 150.0,
        endWidth: 300.0,
        beginHeight: 100.0,
        endHeight: 100.0,
        beginColor: FlartColors.red,
        endColor: FlartColors.blue,
        cssStyle: const {'border-radius': '12px'},
        child: const FDCenter(
          child: FDText(
            'Tap to Animate',
            style: TextStyle(color: FlartColors.white, fontWeight: FontWeight.bold),
          ),
        ),
      ),
    );
  }
}
