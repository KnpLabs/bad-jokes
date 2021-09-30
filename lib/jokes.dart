import 'dart:async';
import 'dart:convert';
import 'dart:math';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class DadJokes extends StatefulWidget {
  const DadJokes({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<DadJokes> createState() => _DadJokesState();
}

class _DadJokesState extends State<DadJokes> {
  List<String> _items = [];
  int _counter = 0;
  final _random = Random();

  Future<void> readJson() async {
    final String response = await rootBundle.loadString('assets/jokes.json');
    final data = await json.decode(response);

    setState(() {
      if (data != null) {
        _items = List.from(data["items"]);

        if (_counter == 0) {
          _counter = _random.nextInt(_items.length);
        }
      }
    });
  }

  void _shuffleCounter() {
    int nextJokeNumber = _random.nextInt(_items.length);

    try {
      var element = _items.elementAt(nextJokeNumber);

      setState(() {
        _counter = nextJokeNumber;
      });
    } catch (Exception) {
      return _shuffleCounter();
    }
  }

  Card _displayJoke() {
    if (_items.length <= 0) {
      return const Card(
        margin: EdgeInsets.all(10),
        child: Padding(
          padding: EdgeInsets.all(50),
          child: Center(child: CircularProgressIndicator())
        )
      );
    }

    try {
      return Card(
        margin: EdgeInsets.all(10),
        child: Padding(
          padding: EdgeInsets.all(50),
          child: ListTile(
            title: Text(
              'Joke N°' + (_counter + 1).toString() + ' : ' + _items[_counter].toString(),  
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            )
          ),
        ),
      );
    } catch (Exception) {
      return const Card(
        margin: EdgeInsets.all(10),
        child: Padding(
          padding: EdgeInsets.all(50),
          child: ListTile(
            title: Text(
              'Une erreur est survenue. Veuillez réessayer.', 
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            )
          ),
        ),
      );
    }
  }


  @override
  Widget build(BuildContext context) {
    readJson();

    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            _displayJoke()
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: _shuffleCounter,
        tooltip: 'Shuffle',
        label: const Text('Regénérer'),
        icon: const Icon(Icons.shuffle),
      )
    );
  }
}
