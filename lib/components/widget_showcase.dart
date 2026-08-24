import 'package:flartdart/flartdart.dart';

class WidgetShowcase extends StatelessWidget {
  final String title;
  final String description;
  final Widget child;
  final String code;

  const WidgetShowcase({
    required this.title,
    required this.description,
    required this.child,
    required this.code,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return FDContainer(
      margin: const EdgeInsets.only(bottom: 32.0),
      rawCss: 'border: 1px solid #eaeaea;',
      decoration: const BoxDecoration(
        color: FlartColors.white,
        borderRadius: BorderRadius.circular(12.0),
        boxShadow: [
          BoxShadow(
            color: FlartColor('rgba(0, 0, 0, 0.05)'),
            blurRadius: 10,
            offsetY: 4,
          ),
        ],
      ),
      child: FDColumn(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header
          FDContainer(
            padding: const EdgeInsets.all(24.0),
            rawCss: 'border-bottom: 1px solid #eaeaea;',
            child: FDColumn(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                FDText(
                  title,
                  style: TextStyle(
                    fontSize: 24.0,
                    fontWeight: FontWeight.w600,
                    color: FlartColors.blueGrey.shade800,
                  ),
                ),
                const FDSizedBox(height: 8.0),
                FDText(
                  description,
                  style: TextStyle(
                    fontSize: 16.0,
                    color: FlartColors.blueGrey.shade700,
                    height: 1.5,
                  ),
                ),
              ],
            ),
          ),
          
          // Live Preview Area
          FDContainer(
            padding: const EdgeInsets.all(32.0),
            child: FDCenter(
              child: child,
            ),
          ),
          
          // Code Snippet Area
          FDContainer(
            width: double.infinity,
            padding: const EdgeInsets.all(24.0),
            decoration: BoxDecoration(
              color: FlartColors.blueGrey.shade900,
              borderRadius: const BorderRadius.only(
                bottomLeft: 12.0,
                bottomRight: 12.0,
              ),
            ),
            child: const FDRawHTML('''
                <pre style="margin: 0; overflow-x: auto; font-family: 'JetBrains Mono', 'Fira Code', monospace; color: #e2e8f0; font-size: 14px; line-height: 1.5;">
                  <code>\${code.replaceAll('<', '&lt;').replaceAll('>', '&gt;')}</code>
                </pre>
              '''),
          ),
        ],
      ),
    );
  }
}
