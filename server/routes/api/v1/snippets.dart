import 'package:dart_frog/dart_frog.dart';

final Map<String, Map<String, dynamic>> _snippets = {
  'counter': {
    'title': 'Reactive Counter Widget',
    'description': 'Simple stateful counter showcasing Flart\'s setState and Virtual DOM patching.',
    'code': '''class CounterWidget extends StatefulWidget {
  const CounterWidget({super.key});

  @override
  State<CounterWidget> createState() => _CounterWidgetState();
}

class _CounterWidgetState extends State<CounterWidget> {
  int _count = 0;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: const Color(0xFF1E293B),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFF334155)),
      ),
      child: Column(
        children: [
          Text('Flart Counter: \$_count',
            style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold, color: Colors.white)),
          const SizedBox(height: 16),
          ElevatedButton(
            onPressed: () => setState(() => _count++),
            child: const Text('Increment +1'),
          ),
        ],
      ),
    );
  }
}''',
  },
  'card': {
    'title': 'Glassmorphic Card',
    'description': 'Modern aesthetic card with gradient border, rounded corners, and elevation.',
    'code': '''Widget buildModernCard() {
  return Container(
    width: 320,
    padding: const EdgeInsets.all(20),
    decoration: BoxDecoration(
      color: const Color(0xFF111827),
      borderRadius: BorderRadius.circular(20),
      border: Border.all(color: const Color(0xFF374151), width: 1.5),
      boxShadow: [
        BoxShadow(
          color: const Color(0x33000000),
          blurRadius: 16,
          offset: const Offset(0, 8),
        ),
      ],
    ),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          width: 48,
          height: 48,
          decoration: BoxDecoration(
            color: const Color(0xFF3B82F6),
            borderRadius: BorderRadius.circular(12),
          ),
          child: const Center(child: Icon(Icons.bolt, color: Colors.white)),
        ),
        const SizedBox(height: 16),
        const Text('Ultra-Fast Virtual DOM',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Colors.white)),
        const SizedBox(height: 8),
        const Text('Flart compiles directly to semantic HTML elements with microsecond DOM updates.',
          style: TextStyle(fontSize: 14, color: Color(0xFF94A3B8))),
      ],
    ),
  );
}''',
  },
  'fullstack': {
    'title': 'Full-Stack Dart Frog Client',
    'description': 'Asynchronous HTTP integration calling Dart Frog backend REST APIs.',
    'code': '''class ServerStatsWidget extends StatefulWidget {
  const ServerStatsWidget({super.key});

  @override
  State<ServerStatsWidget> createState() => _ServerStatsWidgetState();
}

class _ServerStatsWidgetState extends State<ServerStatsWidget> {
  String _status = 'Connecting to Dart Frog...';

  @override
  void initState() {
    super.initState();
    _fetchStats();
  }

  Future<void> _fetchStats() async {
    final response = await http.get(Uri.parse('http://localhost:8080/api/v1/stats'));
    final data = jsonDecode(response.body);
    setState(() {
      _status = 'Dart Frog Server: \${data['server']['status']} (\${data['version']})';
    });
  }

  @override
  Widget build(BuildContext context) {
    return Text(_status, style: const TextStyle(color: Color(0xFF10B981)));
  }
}''',
  },
};

Response onRequest(RequestContext context) {
  if (context.request.method != HttpMethod.get) {
    return Response(statusCode: 405);
  }

  final topic = context.request.uri.queryParameters['topic'];
  if (topic != null && _snippets.containsKey(topic)) {
    return Response.json(body: {
      'topic': topic,
      ..._snippets[topic]!,
    });
  }

  return Response.json(body: {
    'count': _snippets.length,
    'snippets': _snippets,
  });
}
