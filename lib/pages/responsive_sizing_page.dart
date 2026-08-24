import 'package:flartdart/flartdart.dart';
import '../components/docs_layout.dart';
import '../components/widget_showcase.dart';

class ResponsiveSizingPage extends StatelessWidget {
  const ResponsiveSizingPage({super.key});

  @override
  Widget build(BuildContext context) {
    return DocsLayout(
      currentRoute: '/responsive',
      title: 'Responsive Sizing',
      child: FDColumn(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          FDText(
            'Responsive Sizing',
            style: TextStyle(
              fontSize: 32.0,
              fontWeight: FontWeight.bold,
              color: FlartColors.blueGrey.shade900,
            ),
          ),
          const FDSizedBox(height: 16.0),
          FDText(
            'FlartDart treats responsiveness as a first-class citizen. Using the 1440x900 desktop design standard by default, you can scale any number to fit perfectly on any device.',
            style: TextStyle(
              fontSize: 18.0,
              color: FlartColors.blueGrey.shade700,
              height: 1.5,
            ),
          ),
          const FDSizedBox(height: 48.0),
          
          FDText(
            '1. Initialization',
            style: TextStyle(
              fontSize: 24.0,
              fontWeight: FontWeight.bold,
              color: FlartColors.blueGrey.shade800,
            ),
          ),
          const FDSizedBox(height: 16.0),
          FDText(
            'Before using the responsive extensions, initialize `ScreenUtil` in your `main()` method:',
            style: TextStyle(
              fontSize: 16.0,
              color: FlartColors.blueGrey.shade700,
              height: 1.5,
            ),
          ),
          const FDSizedBox(height: 16.0),
          const _CodeSnippet(
            code: '''void main() {
  ScreenUtil.init(width: 1440, height: 900); // Defaults to 1440x900
  runApp(const MyApp());
}''',
          ),
          const FDSizedBox(height: 48.0),
          
          FDText(
            '2. Usage',
            style: TextStyle(
              fontSize: 24.0,
              fontWeight: FontWeight.bold,
              color: FlartColors.blueGrey.shade800,
            ),
          ),
          const FDSizedBox(height: 16.0),
          FDText(
            'Append `.w` for width, `.h` for height, and `.sp` for fonts to any number:',
            style: TextStyle(
              fontSize: 16.0,
              color: FlartColors.blueGrey.shade700,
              height: 1.5,
            ),
          ),
          const FDSizedBox(height: 16.0),
          
          WidgetShowcase(
            title: 'Responsive Scaling Example',
            description: 'This container uses .w, .h, and .sp to scale based on the viewport size.',
            child: FDContainer(
              width: 300.w,
              height: 150.h,
              padding: EdgeInsets.all(20.w),
              decoration: const BoxDecoration(
                color: FlartColors.teal,
                borderRadius: BorderRadius.circular(16.0),
              ),
              child: FDCenter(
                child: FDText(
                  'Responsive Content',
                  style: TextStyle(
                    fontSize: 24.sp,
                    color: FlartColors.white,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ),
            code: '''FDContainer(
  width: 300.w,  // Scaled width
  height: 150.h, // Scaled height
  padding: EdgeInsets.all(20.w),
  decoration: BoxDecoration(
    color: FlartColors.teal,
    borderRadius: BorderRadius.circular(16.0),
  ),
  child: FDCenter(
    child: FDText(
      'Responsive Content',
      style: TextStyle(
        fontSize: 24.sp, // Scaled font
        color: FlartColors.white,
        fontWeight: FontWeight.bold,
      ),
    ),
  ),
)''',
          ),
          
          const FDSizedBox(height: 32.0),
          FDText(
            'Unit Reference',
            style: TextStyle(
              fontSize: 24.0,
              fontWeight: FontWeight.bold,
              color: FlartColors.blueGrey.shade800,
            ),
          ),
          const FDSizedBox(height: 16.0),
          _UnitTable(),
        ],
      ),
    );
  }
}

class _CodeSnippet extends StatelessWidget {
  final String code;

  const _CodeSnippet({required this.code});

  @override
  Widget build(BuildContext context) {
    return FDContainer(
      width: double.infinity,
      padding: const EdgeInsets.all(24.0),
      decoration: BoxDecoration(
        color: FlartColors.blueGrey.shade900,
        borderRadius: const BorderRadius.circular(12.0),
      ),
      child: const FDRawHTML('''
        <pre style="margin: 0; overflow-x: auto; font-family: 'JetBrains Mono', 'Fira Code', monospace; color: #e2e8f0; font-size: 14px; line-height: 1.5;">
          <code>\${code.replaceAll('<', '&lt;').replaceAll('>', '&gt;')}</code>
        </pre>
      '''),
    );
  }
}

class _UnitTable extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return const FDContainer(
      width: double.infinity,
      rawCss: 'border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden;',
      child: FDColumn(
        children: [
          _TableRow(unit: 'Extension', target: 'Target', description: 'Description', isHeader: true),
          _TableRow(unit: '.w', target: 'Width', description: 'Horizontal scaling relative to design width'),
          _TableRow(unit: '.h', target: 'Height', description: 'Vertical scaling relative to design height'),
          _TableRow(unit: '.sp', target: 'Text Size', description: 'Width-based font scaling'),
          _TableRow(unit: '.sw / .sh', target: 'Screensize', description: 'Percentage of viewport (0-100)'),
        ],
      ),
    );
  }
}

class _TableRow extends StatelessWidget {
  final String unit;
  final String target;
  final String description;
  final bool isHeader;

  const _TableRow({
    required this.unit,
    required this.target,
    required this.description,
    this.isHeader = false,
  });

  @override
  Widget build(BuildContext context) {
    return FDContainer(
      padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 16.0),
      rawCss: isHeader ? '' : 'border-top: 1px solid #eaeaea;',
      decoration: BoxDecoration(
        color: isHeader ? FlartColors.blueGrey.shade50 : FlartColors.white,
      ),
      child: FDRow(
        children: [
          FDExpanded(
            flex: 1,
            child: FDText(
              unit,
              style: TextStyle(
                fontWeight: isHeader ? FontWeight.bold : FontWeight.w500,
                color: isHeader ? FlartColors.blueGrey.shade900 : FlartColors.blue.shade700,
                fontFamily: isHeader ? 'inherit' : 'monospace',
              ),
            ),
          ),
          FDExpanded(
            flex: 2,
            child: FDText(
              target,
              style: TextStyle(
                fontWeight: isHeader ? FontWeight.bold : FontWeight.normal,
                color: isHeader ? FlartColors.blueGrey.shade900 : FlartColors.blueGrey.shade700,
              ),
            ),
          ),
          FDExpanded(
            flex: 3,
            child: FDText(
              description,
              style: TextStyle(
                fontWeight: isHeader ? FontWeight.bold : FontWeight.normal,
                color: isHeader ? FlartColors.blueGrey.shade900 : FlartColors.blueGrey.shade700,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
