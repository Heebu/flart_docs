import 'package:flartdart/flartdart.dart';

class DocsTheme {
  // Backgrounds
  static const Color background = Color(0xFF0B0F19);
  static const Color surface = Color(0xFF111827);
  static const Color surfaceAlt = Color(0xFF161F30);
  static const Color card = Color(0xFF1E293B);
  static const Color cardHover = Color(0xFF243247);
  static const Color codeBackground = Color(0xFF0F172A);

  // Accents
  static const Color primary = Color(0xFF3B82F6); // Electric Blue
  static const Color primaryDark = Color(0xFF2563EB);
  static const Color accentGreen = Color(0xFF10B981); // Emerald / Frog Green
  static const Color accentPurple = Color(0xFF8B5CF6);
  static const Color accentAmber = Color(0xFFF59E0B);
  static const Color accentCyan = Color(0xFF06B6D4);

  // Borders
  static const Color border = Color(0xFF1E293B);
  static const Color borderLight = Color(0xFF334155);
  static const Color borderHover = Color(0xFF475569);

  // Typography
  static const Color textPrimary = Color(0xFFF8FAFC);
  static const Color textSecondary = Color(0xFF94A3B8);
  static const Color textMuted = Color(0xFF64748B);

  // Breakpoints
  static bool isMobile(double width) => width < 768;
  static bool isTablet(double width) => width >= 768 && width < 1024;
  static bool isDesktop(double width) => width >= 1024;
}
