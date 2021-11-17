$(document).ready(function(){
    var $video=$('video-item');
     $video.on('click',function(event){
        event.preventDefault();
        $video[0].play();
    }
    );
    $video.trigger('click');
    var $btnNext=$('.step-btn');
    var currentStep=0;
    var $step=$('.step-item');
    var totalStep=$step.length;
    $btnNext.not('.submit-btn').on('click',function(){
        currentStep++;
        $step.hide().eq(currentStep).fadeIn();
    }
    );
}
);