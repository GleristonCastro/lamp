(function(){
    'use strict'

    const turnOn = document.getElementById ( 'turnOn' );
    const turnOff = document.getElementById ( 'turnOff' );
    const lamp = document.getElementById ( 'lamp' );

        function isLampBroken () {
            return lamp.src.indexOf('broken_lamp') > -1;
        }

        function lampOn () {
            if ( !isLampBroken () ) {
                lamp.src = './img/turn_on.jpg';
            }
        }

        function lampOff () {
            if ( !isLampBroken () ) {
                lamp.src = './img/turn_off.jpg';
            }
        }

        function lampBroken () {
            lamp.src = './img/broken_lamp.jpg';
        }

    turnOn.addEventListener ('click', lampOn );
    turnOff.addEventListener ('click', lampOff );
    lamp.addEventListener ('dblclick', lampBroken );

})();