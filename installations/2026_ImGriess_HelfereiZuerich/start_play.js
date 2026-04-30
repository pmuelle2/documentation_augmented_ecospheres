function oscEvent(address, args)
{
	if(address == "/play")
	{
		var sequence = root.sequences.getItemAt(0);
		sequence.play.trigger();
	}

    if(address == "/pause")
	{
		var sequence = root.sequences.getItemAt(0);
		sequence.pause.trigger();
	}

	if(address == "/stop")
	{
		var sequence = root.sequences.getItemAt(0);
		sequence.stop.trigger();
	}
    
    if(address == "/nextCue")
    {
	    var sequence = root.sequences.getItemAt(0);
	    sequence.nextCue.trigger();
    }
    
    if(address == "/prevCue")
    {
	    var sequence = root.sequences.getItemAt(0);
	    sequence.nextCue.trigger();
    }
}

var lastPlaying = false;
var lastSendTime = 0;

function update(deltaTime)
{
	var sequence = root.sequences.getItemAt(0);

	var nowPlaying = sequence.isPlaying.get();
	var time = sequence.currentTime.get();

	// PLAY / PAUSE detection
	if(nowPlaying != lastPlaying)
	{
		if(nowPlaying)
		{
			local.send("/play", 1);
		}
		else
		{
			local.send("/pause", 1);
		}

		lastPlaying = nowPlaying;
	}

	// TIME sending
	lastSendTime += deltaTime;

	if(lastSendTime >= 0.05)
	{
		local.send("/time", time);
		lastSendTime = 0;
	}
}