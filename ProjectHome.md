## Latest News ##

**6 Jun 2010**

jsChessboard 0.2.0 has been released. Download [here](http://jschessboard.googlecode.com/files/jsChessboard-0.2.0.zip).

**18 Mar 2009**

jsChessboard 0.1.0 has been released. Download [here](http://jschessboard.googlecode.com/files/jsChessboard-0.1.0.zip).

## What is jsChessboard ? ##

jsChessboard is a JavaScript library designed to programmatically display chessboard diagrams in web pages or web applications.

jsChessboard knows chess notation therefore jsChessboard can interpret a sequence of chess moves in algebraic notation from a given position and draw the new position.

## Supported browsers ##
Most browsers supporting the `<canvas>` HTML tag are supported by jsChessboard.

  * Mozilla Firefox (3.0+)
  * Safari
  * Google Chrome / Chromium (4.0+)
  * Opera (10+)

## Demo ##

  * [Demo 1](http://jschessboard.googlecode.com/svn/trunk/examples/operagame.html)
  * [Demo 2](http://jschessboard.googlecode.com/svn/trunk/examples/checkmate.html)
  * [Demo 3](http://jschessboard.googlecode.com/svn/trunk/examples/fen.html)

## Getting started ##

### Preparing the HTML ###
Add the script headers for jsChessboard to work.

```
<script type="text/javascript" src="chessboard.js"></script>
```

Then add a `<canvas>` where you want the chessboard diagram to appear. Note that the canvas element width and height must have the same value.

```
<canvas id="myboard" width="300" height="300"></canvas>
```

### JavaScript ###

Add this inline script in your web page

```
<script type="text/javascript"> 
  function showBoard() {
    game = Chessboard.newGame();
    game.move("e4, Nf6");
    game.draw("myboard");
  }
</script> 
```

And call this script on page load.

```
<body onload="showBoard();">
```

The result should look like that:

![http://jschessboard.googlecode.com/svn/wiki/pictures/sample.png](http://jschessboard.googlecode.com/svn/wiki/pictures/sample.png)