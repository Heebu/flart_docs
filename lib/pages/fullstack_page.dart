import 'dart:convert';
import 'package:flartdart/flartdart.dart';
import 'package:http/http.dart' as http;
import '../theme/docs_theme.dart';
import '../components/docs_shell.dart';
import '../components/code_block.dart';

class FullstackPage extends StatefulWidget {
  const FullstackPage({super.key});

  @override
  State<FullstackPage> createState() => _FullstackPageState();
}

class _FullstackPageState extends State<FullstackPage> {
  String _serverStatus = 'Connecting to Dart Frog...';
  bool _isConnected = false;
  Map<String, dynamic>? _serverData;

  @override
  void initState() {
    super.initState();
    _checkServer();
  }

  Future<void> _checkServer() async {
    try {
      final res = await http.get(Uri.parse('http://localhost:8081/'));
      if (res.statusCode == 200) {
        final data = jsonDecode(res.body) as Map<String, dynamic>;
        if (mounted) {
          setState(() {
            _serverStatus = 'Connected to ${data['poweredBy']}';
            _isConnected = true;
            _serverData = data;
          });
        }
      }
    } catch (e) {
      if (mounted) {
        setState(() {
          _serverStatus =
              'Dart Frog server offline (Run: dart_frog dev --port 8081)';
          _isConnected = false;
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return DocsShell(
      currentRoute: '/docs/fullstack',
      title: 'Full-Stack Dart with Dart Frog',
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildHeader(),
          const SizedBox(height: 32),
          _buildLiveServerCard(),
          const SizedBox(height: 32),
          _buildMonorepoStructure(),
          const SizedBox(height: 32),
          _buildSharedModelsExample(),
          const SizedBox(height: 32),
          _buildClientRequestExample(),
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
            color: DocsTheme.accentGreen.withValues(alpha: 0.15),
            borderRadius: const BorderRadius.circular(6),
          ),
          child: const Text(
            'FULL-STACK DART',
            style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: DocsTheme.accentGreen),
          ),
        ),
        const SizedBox(height: 12),
        const Text(
          'Full-Stack Dart: Flart + Dart Frog',
          style: TextStyle(
              fontSize: 36,
              fontWeight: FontWeight.w800,
              color: DocsTheme.textPrimary),
        ),
        const SizedBox(height: 8),
        const Text(
          'One language from client to server. Zero context switching, 100% shared models, and instant full-stack iterations.',
          style: TextStyle(fontSize: 16, color: DocsTheme.textSecondary),
        ),
      ],
    );
  }

  Widget _buildLiveServerCard() {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: DocsTheme.surface,
        borderRadius: const BorderRadius.circular(16),
        border: Border.all(
          color: _isConnected
              ? DocsTheme.accentGreen.withValues(alpha: 0.4)
              : DocsTheme.borderLight,
        ),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: [
                  Container(
                    width: 12,
                    height: 12,
                    decoration: BoxDecoration(
                      color: _isConnected
                          ? DocsTheme.accentGreen
                          : const Color(0xFFEF4444),
                      shape: BoxShape.circle,
                    ),
                  ),
                  const SizedBox(width: 10),
                  Text(
                    _serverStatus,
                    style: TextStyle(
                      fontSize: 15,
                      fontWeight: FontWeight.bold,
                      color: _isConnected
                          ? DocsTheme.accentGreen
                          : const Color(0xFFEF4444),
                    ),
                  ),
                ],
              ),
              ElevatedButton(
                onPressed: _checkServer,
                child: const Text('Ping Server'),
              ),
            ],
          ),
          if (_serverData != null) ...[
            const SizedBox(height: 16),
            const Divider(color: DocsTheme.border),
            const SizedBox(height: 12),
            const Text('Live API Response from http://localhost:8081/:',
                style: TextStyle(fontSize: 12, color: DocsTheme.textMuted)),
            const SizedBox(height: 8),
            CodeBlock(
              code: const JsonEncoder.withIndent('  ').convert(_serverData),
              language: 'json',
              title: 'Dart Frog Response',
            ),
          ],
        ],
      ),
    );
  }

  Widget _buildMonorepoStructure() {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Monorepo Directory Structure',
          style: TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.bold,
              color: DocsTheme.textPrimary),
        ),
        SizedBox(height: 12),
        Text(
          'Organizing your frontend Flart application and backend Dart Frog server in one repository:',
          style: TextStyle(fontSize: 14, color: DocsTheme.textSecondary),
        ),
        SizedBox(height: 12),
        CodeBlock(
          code: '''my_fullstack_project/
├── packages/
│   └── shared_models/       # Shared Dart DTOs & business logic
│       ├── lib/
│       └── pubspec.yaml
├── server/                  # Dart Frog backend
│   ├── routes/
│   │   ├── _middleware.dart # CORS, Auth & Logging
│   │   ├── index.dart
│   │   └── api/v1/
│   └── pubspec.yaml
├── web/                     # FlartDart frontend
│   ├── lib/
│   │   ├── components/
│   │   └── pages/
│   ├── web/index.html
│   └── pubspec.yaml
└── pubspec.yaml             # Workspace root''',
          language: 'bash',
          title: 'Project Tree',
        ),
      ],
    );
  }

  Widget _buildSharedModelsExample() {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Shared Data Transfer Objects (DTOs)',
          style: TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.bold,
              color: DocsTheme.textPrimary),
        ),
        SizedBox(height: 12),
        Text(
          'Write your data models once in pure Dart. Both the backend Dart Frog routes and frontend Flart widgets use the exact same classes without code duplication:',
          style: TextStyle(fontSize: 14, color: DocsTheme.textSecondary),
        ),
        SizedBox(height: 12),
        CodeBlock(
          code: '''class UserProfile {
  final String id;
  final String username;
  final String email;
  final bool isVerified;

  const UserProfile({
    required this.id,
    required this.username,
    required this.email,
    required this.isVerified,
  });

  Map<String, dynamic> toJson() => {
    'id': id,
    'username': username,
    'email': email,
    'isVerified': isVerified,
  };

  factory UserProfile.fromJson(Map<String, dynamic> json) => UserProfile(
    id: json['id'] as String,
    username: json['username'] as String,
    email: json['email'] as String,
    isVerified: json['isVerified'] as bool,
  );
}''',
          language: 'dart',
          title: 'shared_models/lib/user.dart',
        ),
      ],
    );
  }

  Widget _buildClientRequestExample() {
    return const Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Frontend Flart Client Integration',
          style: TextStyle(
              fontSize: 22,
              fontWeight: FontWeight.bold,
              color: DocsTheme.textPrimary),
        ),
        SizedBox(height: 12),
        Text(
          'Consuming your Dart Frog endpoints with package:http inside a Flart StatefulWidget:',
          style: TextStyle(fontSize: 14, color: DocsTheme.textSecondary),
        ),
        SizedBox(height: 12),
        CodeBlock(
          code: '''class UserWidget extends StatefulWidget {
  const UserWidget({super.key});

  @override
  State<UserWidget> createState() => _UserWidgetState();
}

class _UserWidgetState extends State<UserWidget> {
  UserProfile? _profile;
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _fetchProfile();
  }

  Future<void> _fetchProfile() async {
    final response = await http.get(Uri.parse('http://localhost:8081/api/v1/user/1'));
    if (response.statusCode == 200) {
      final json = jsonDecode(response.body);
      setState(() {
        _profile = UserProfile.fromJson(json);
        _loading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) return const CircularProgressIndicator();
    return Text('Welcome back, \${_profile!.username}!');
  }
}''',
          language: 'dart',
          title: 'Flart Component',
        ),
      ],
    );
  }
}
