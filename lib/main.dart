import 'package:dadjokes/splash.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const DadJokesApp());
}

class DadJokesApp extends StatelessWidget {
  const DadJokesApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Jokes de Papa',
      theme: ThemeData(
        primarySwatch: Colors.red,
      ),
      home: SplashScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}
