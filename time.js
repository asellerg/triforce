function parseTime(timeStr) {
	var chunks = timeStr.split(':');
	if (chunks.length < 2) {
		return -1;
	}
	var hours = 0;
	if (chunks.length == 3) {
		hours = parseInt(chunks[0]);
	}
	var minutes = parseInt(chunks[chunks.length - 2]);
	var seconds = parseInt(chunks[chunks.length - 1]);
	return hours * 3600 + minutes * 60 + seconds;
}

function formatTime(seconds) {
	var hours = Math.floor(seconds / 3600);
	var minutes = 0;
	var timeStr = '';
	var minutesStr = '';
	if (hours > 0) {
		timeStr += hours + ':';
		minutes = Math.floor((seconds % 3600) / 60);
	} else {
		minutes = Math.floor(seconds / 60);
	}
	if (hours > 0 && minutes < 10) {
		minutesStr += '0' + minutes;
	} else {
		minutesStr += minutes;
	}
	var secondsStr = '';
	if (Math.round(seconds % 60) < 10) {
		secondsStr = '0' + Math.round(seconds % 60);
	} else {
		secondsStr = Math.round(seconds % 60);
	}
	return timeStr + minutesStr + ':' + secondsStr;
}