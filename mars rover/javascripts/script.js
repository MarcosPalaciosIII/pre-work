var rover = {
direction: 'N',
x: 0,
y: 0,
travelLog: (xi, yi)
};
var xi = 0;
var yi = 0;

function turnLeft(rover) {
	switch (rover.direction) {
	case 'N':
	rover.direction = 'W';
	break;
	case 'S':
	rover.direction = 'E';
	break;
	case 'E':
	rover.direction = 'S';
	break;
	case 'W':
	rover.direction = 'N';
	break;
	default:
	break;
	}
	console.log('turned right');
}

function turnRight(rover) {
	switch (rover.direction) {
	case 'N':
	rover.direction = 'E';
	break;
	case 'S':
	rover.direction = 'W';
	break;
	case 'E':
	rover.direction = 'N';
	break;
	case 'W':
	rover.direction = 'S';
	break;
	default:
	break;
	}
	console.log('turned left');
}

function moveForward(rover) {
	if(rover.direction === 'N' && 1 < rover.y < 8) {
	rover.y -= 1;
	rover.travlLog.push(xi, yi -= 1);
	}  else if (rover.direction === 'E' && 1 < rover.x < 8) {
	rover.x += 1;
	rover.travlLog.push(xi += 1, yi);
	}  else if (rover.direction === 'S' && 1 < rover.y < 8) {
	rover.y += 1;
	rover.travlLog.push(xi, yi += 1);
	}  else if (rover.direction === 'W' && 1 < rover.x < 8) {
	rover.x -= 1;
	rover.travlLog.push(xi -= 1, yi);
	}  else
	console.log('unable to move forward!');
	}
	console.log('moved forward');


function moveBackward(rover) {
	if(rover.direction === 'N' && 1 < rover.y < 8) {
	rover.y += 1;
	rover.travlLog.push(xi, yi += 1);
	}  else if (rover.direction === 'E' && 1 < rover.x < 8) {
	rover.x -= 1;
	rover.travlLog.push(xi-= 1, yi);
	}  else if (rover.direction === 'S' && 1 < rover.y < 8) {
	rover.y -= 1;
	rover.travlLog.push(xi, yi -= 1);
	}  else if (rover.direction === 'W' && 1 < rover.x < 8) {
	rover.x += 1;
	rover.travlLog.push(xi += 1, yi);
	} else
	console.log('unable to move backward!');
	}
	console.log('moved backward');


j = prompt('Select a direction (f)orward, (l)eft, (r)ight, (b)ackward', '');

function roverCommand (moveCommand) {
	for( var j = 0; j < moveCommand.length; j++ ) {
		switch (moveCommand[j]) {
		case 'f':
		moveForward(rover);
		break;
		case 'r':
		turnRight(rover);
		break;
		case 'b':
		moveBackward(rover);
		break;
		case 'l':
		turnLeft(rover);
		break;
		default:
		break;
		}
	}


}

console.log('rover traveled: ' + rover.travelLog);
console.log('rover is facing: ' + rover.direction);
console.log('the rover is at: ' + [rover.x, rover.y]);
