fetch('data.json')
.then(response => response.json()) 
.then(data => {
    $(".b2").text(data[0].title);
    $(".b3").text(data[1].title);
    $(".b4").text(data[2].title);
    $(".b5").text(data[3].title);
    $(".b6").text(data[4].title);
    $(".b7").text(data[5].title);

    $(".a1").on('click',function(){
        $(".a1").css('opacity',1);
        $(".a2").css('opacity',0.5);
        $(".a3").css('opacity',0.5);

        updateData('daily');
    });

    $(".a2").on('click',function(){
        $(".a2").css('opacity',1);
        $(".a1").css('opacity',0.5);
        $(".a3").css('opacity',0.5);
        updateData('weekly');
    });

    $(".a3").on('click',function(){
        $(".a3").css('opacity',1);
        $(".a1").css('opacity',0.5);
        $(".a2").css('opacity',0.5);
        updateData('monthly');
    });

    function updateData(timeframe) {
        if (timeframe == 'daily') {
            $(".a2, .a3").removeClass('active');
            $(".a1").addClass('active');
        } else if (timeframe == 'weekly') {
            $(".a1, .a3").removeClass('active');
            $(".a2").addClass('active');
        } else {
            $(".a2, .a1").removeClass('active');
            $(".a3").addClass('active');
        }

        $(".c2").text(data[0].timeframes[timeframe].current + "hrs"); 
        $(".d2").text("Last Week - " + data[0].timeframes[timeframe].previous + "hrs");
        $(".c3").text(data[1].timeframes[timeframe].current + "hrs"); 
        $(".d3").text("Last Week - " + data[1].timeframes[timeframe].previous + "hrs");
        $(".c4").text(data[2].timeframes[timeframe].current + "hrs"); 
        $(".d4").text("Last Week - " + data[2].timeframes[timeframe].previous + "hrs");
        $(".c5").text(data[3].timeframes[timeframe].current + "hrs"); 
        $(".d5").text("Last Week - " + data[3].timeframes[timeframe].previous + "hrs");
        $(".c6").text(data[4].timeframes[timeframe].current + "hrs"); 
        $(".d6").text("Last Week - " + data[4].timeframes[timeframe].previous + "hrs");
        $(".c7").text(data[5].timeframes[timeframe].current + "hrs"); 
        $(".d7").text("Last Week - " + data[5].timeframes[timeframe].previous + "hrs");
    }
});
