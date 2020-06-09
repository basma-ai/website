<template>
    <div class="pyro">
        <div class="before"></div>
        <div class="after"></div>
    </div>
</template>

<style>
    .pyro > .before,
    .pyro > .after {
        position: absolute;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;
        -moz-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
        -webkit-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
        -o-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
        -ms-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
        animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
    }

    .pyro > .after {
        -moz-animation-delay: 1.25s, 1.25s, 1.25s;
        -webkit-animation-delay: 1.25s, 1.25s, 1.25s;
        -o-animation-delay: 1.25s, 1.25s, 1.25s;
        -ms-animation-delay: 1.25s, 1.25s, 1.25s;
        animation-delay: 1.25s, 1.25s, 1.25s;
        -moz-animation-duration: 1.25s, 1.25s, 6.25s;
        -webkit-animation-duration: 1.25s, 1.25s, 6.25s;
        -o-animation-duration: 1.25s, 1.25s, 6.25s;
        -ms-animation-duration: 1.25s, 1.25s, 6.25s;
        animation-duration: 1.25s, 1.25s, 6.25s;
    }

    @-webkit-keyframes bang {
        to {
            box-shadow: -64px -80.6666666667px #fffb00, 119px -62.6666666667px #d500ff, 88px -380.6666666667px #7bff00, 33px -115.6666666667px #ff5e00, -244px -384.6666666667px #0044ff, 77px 60.3333333333px #9dff00, 119px -213.6666666667px #2600ff, 107px -291.6666666667px #ff0900, -220px 34.3333333333px #99ff00, 128px -338.6666666667px #00ff5e, 216px -212.6666666667px #fffb00, -81px 76.3333333333px #ff0400, 92px -207.6666666667px #00ff22, 14px 10.3333333333px #bb00ff, 47px -296.6666666667px #9dff00, 248px -356.6666666667px #95ff00, -165px -198.6666666667px #e100ff, 204px -79.6666666667px #ff1500, 156px -250.6666666667px #8800ff, 220px 42.3333333333px #11ff00, -81px -324.6666666667px #0084ff, 186px 46.3333333333px #0059ff, -136px 77.3333333333px #00ff80, 217px -101.6666666667px #ff008c, -237px -33.6666666667px #00fff2, -186px -124.6666666667px #2200ff, -21px -125.6666666667px #bbff00, 39px -10.6666666667px #ff0099, -249px -3.6666666667px #00ff0d, -236px -257.6666666667px #00ff84, -37px -402.6666666667px #ffc800, 27px 45.3333333333px #00ff8c, 249px -145.6666666667px #ffd000, -176px -267.6666666667px #0009ff, 88px -298.6666666667px #b700ff, -196px -356.6666666667px #ff6f00, 19px 46.3333333333px #b3ff00, 46px -95.6666666667px #eaff00, 53px -325.6666666667px #bfff00, 8px -154.6666666667px #ff00aa, 195px -216.6666666667px #4800ff, 67px -310.6666666667px #8c00ff, 72px -323.6666666667px #ff1a00, -102px -14.6666666667px #5900ff, 0px -157.6666666667px #ff0088, -218px -260.6666666667px #ff4800, 76px -87.6666666667px #ffea00, 240px -7.6666666667px #0095ff, -13px -8.6666666667px #a6ff00, -71px -230.6666666667px #ffc400, -89px -347.6666666667px #00ffd9;
        }
    }
    @-moz-keyframes bang {
        to {
            box-shadow: -64px -80.6666666667px #fffb00, 119px -62.6666666667px #d500ff, 88px -380.6666666667px #7bff00, 33px -115.6666666667px #ff5e00, -244px -384.6666666667px #0044ff, 77px 60.3333333333px #9dff00, 119px -213.6666666667px #2600ff, 107px -291.6666666667px #ff0900, -220px 34.3333333333px #99ff00, 128px -338.6666666667px #00ff5e, 216px -212.6666666667px #fffb00, -81px 76.3333333333px #ff0400, 92px -207.6666666667px #00ff22, 14px 10.3333333333px #bb00ff, 47px -296.6666666667px #9dff00, 248px -356.6666666667px #95ff00, -165px -198.6666666667px #e100ff, 204px -79.6666666667px #ff1500, 156px -250.6666666667px #8800ff, 220px 42.3333333333px #11ff00, -81px -324.6666666667px #0084ff, 186px 46.3333333333px #0059ff, -136px 77.3333333333px #00ff80, 217px -101.6666666667px #ff008c, -237px -33.6666666667px #00fff2, -186px -124.6666666667px #2200ff, -21px -125.6666666667px #bbff00, 39px -10.6666666667px #ff0099, -249px -3.6666666667px #00ff0d, -236px -257.6666666667px #00ff84, -37px -402.6666666667px #ffc800, 27px 45.3333333333px #00ff8c, 249px -145.6666666667px #ffd000, -176px -267.6666666667px #0009ff, 88px -298.6666666667px #b700ff, -196px -356.6666666667px #ff6f00, 19px 46.3333333333px #b3ff00, 46px -95.6666666667px #eaff00, 53px -325.6666666667px #bfff00, 8px -154.6666666667px #ff00aa, 195px -216.6666666667px #4800ff, 67px -310.6666666667px #8c00ff, 72px -323.6666666667px #ff1a00, -102px -14.6666666667px #5900ff, 0px -157.6666666667px #ff0088, -218px -260.6666666667px #ff4800, 76px -87.6666666667px #ffea00, 240px -7.6666666667px #0095ff, -13px -8.6666666667px #a6ff00, -71px -230.6666666667px #ffc400, -89px -347.6666666667px #00ffd9;
        }
    }
    @-o-keyframes bang {
        to {
            box-shadow: -64px -80.6666666667px #fffb00, 119px -62.6666666667px #d500ff, 88px -380.6666666667px #7bff00, 33px -115.6666666667px #ff5e00, -244px -384.6666666667px #0044ff, 77px 60.3333333333px #9dff00, 119px -213.6666666667px #2600ff, 107px -291.6666666667px #ff0900, -220px 34.3333333333px #99ff00, 128px -338.6666666667px #00ff5e, 216px -212.6666666667px #fffb00, -81px 76.3333333333px #ff0400, 92px -207.6666666667px #00ff22, 14px 10.3333333333px #bb00ff, 47px -296.6666666667px #9dff00, 248px -356.6666666667px #95ff00, -165px -198.6666666667px #e100ff, 204px -79.6666666667px #ff1500, 156px -250.6666666667px #8800ff, 220px 42.3333333333px #11ff00, -81px -324.6666666667px #0084ff, 186px 46.3333333333px #0059ff, -136px 77.3333333333px #00ff80, 217px -101.6666666667px #ff008c, -237px -33.6666666667px #00fff2, -186px -124.6666666667px #2200ff, -21px -125.6666666667px #bbff00, 39px -10.6666666667px #ff0099, -249px -3.6666666667px #00ff0d, -236px -257.6666666667px #00ff84, -37px -402.6666666667px #ffc800, 27px 45.3333333333px #00ff8c, 249px -145.6666666667px #ffd000, -176px -267.6666666667px #0009ff, 88px -298.6666666667px #b700ff, -196px -356.6666666667px #ff6f00, 19px 46.3333333333px #b3ff00, 46px -95.6666666667px #eaff00, 53px -325.6666666667px #bfff00, 8px -154.6666666667px #ff00aa, 195px -216.6666666667px #4800ff, 67px -310.6666666667px #8c00ff, 72px -323.6666666667px #ff1a00, -102px -14.6666666667px #5900ff, 0px -157.6666666667px #ff0088, -218px -260.6666666667px #ff4800, 76px -87.6666666667px #ffea00, 240px -7.6666666667px #0095ff, -13px -8.6666666667px #a6ff00, -71px -230.6666666667px #ffc400, -89px -347.6666666667px #00ffd9;
        }
    }
    @-ms-keyframes bang {
        to {
            box-shadow: -64px -80.6666666667px #fffb00, 119px -62.6666666667px #d500ff, 88px -380.6666666667px #7bff00, 33px -115.6666666667px #ff5e00, -244px -384.6666666667px #0044ff, 77px 60.3333333333px #9dff00, 119px -213.6666666667px #2600ff, 107px -291.6666666667px #ff0900, -220px 34.3333333333px #99ff00, 128px -338.6666666667px #00ff5e, 216px -212.6666666667px #fffb00, -81px 76.3333333333px #ff0400, 92px -207.6666666667px #00ff22, 14px 10.3333333333px #bb00ff, 47px -296.6666666667px #9dff00, 248px -356.6666666667px #95ff00, -165px -198.6666666667px #e100ff, 204px -79.6666666667px #ff1500, 156px -250.6666666667px #8800ff, 220px 42.3333333333px #11ff00, -81px -324.6666666667px #0084ff, 186px 46.3333333333px #0059ff, -136px 77.3333333333px #00ff80, 217px -101.6666666667px #ff008c, -237px -33.6666666667px #00fff2, -186px -124.6666666667px #2200ff, -21px -125.6666666667px #bbff00, 39px -10.6666666667px #ff0099, -249px -3.6666666667px #00ff0d, -236px -257.6666666667px #00ff84, -37px -402.6666666667px #ffc800, 27px 45.3333333333px #00ff8c, 249px -145.6666666667px #ffd000, -176px -267.6666666667px #0009ff, 88px -298.6666666667px #b700ff, -196px -356.6666666667px #ff6f00, 19px 46.3333333333px #b3ff00, 46px -95.6666666667px #eaff00, 53px -325.6666666667px #bfff00, 8px -154.6666666667px #ff00aa, 195px -216.6666666667px #4800ff, 67px -310.6666666667px #8c00ff, 72px -323.6666666667px #ff1a00, -102px -14.6666666667px #5900ff, 0px -157.6666666667px #ff0088, -218px -260.6666666667px #ff4800, 76px -87.6666666667px #ffea00, 240px -7.6666666667px #0095ff, -13px -8.6666666667px #a6ff00, -71px -230.6666666667px #ffc400, -89px -347.6666666667px #00ffd9;
        }
    }
    @keyframes bang {
        to {
            box-shadow: -64px -80.6666666667px #fffb00, 119px -62.6666666667px #d500ff, 88px -380.6666666667px #7bff00, 33px -115.6666666667px #ff5e00, -244px -384.6666666667px #0044ff, 77px 60.3333333333px #9dff00, 119px -213.6666666667px #2600ff, 107px -291.6666666667px #ff0900, -220px 34.3333333333px #99ff00, 128px -338.6666666667px #00ff5e, 216px -212.6666666667px #fffb00, -81px 76.3333333333px #ff0400, 92px -207.6666666667px #00ff22, 14px 10.3333333333px #bb00ff, 47px -296.6666666667px #9dff00, 248px -356.6666666667px #95ff00, -165px -198.6666666667px #e100ff, 204px -79.6666666667px #ff1500, 156px -250.6666666667px #8800ff, 220px 42.3333333333px #11ff00, -81px -324.6666666667px #0084ff, 186px 46.3333333333px #0059ff, -136px 77.3333333333px #00ff80, 217px -101.6666666667px #ff008c, -237px -33.6666666667px #00fff2, -186px -124.6666666667px #2200ff, -21px -125.6666666667px #bbff00, 39px -10.6666666667px #ff0099, -249px -3.6666666667px #00ff0d, -236px -257.6666666667px #00ff84, -37px -402.6666666667px #ffc800, 27px 45.3333333333px #00ff8c, 249px -145.6666666667px #ffd000, -176px -267.6666666667px #0009ff, 88px -298.6666666667px #b700ff, -196px -356.6666666667px #ff6f00, 19px 46.3333333333px #b3ff00, 46px -95.6666666667px #eaff00, 53px -325.6666666667px #bfff00, 8px -154.6666666667px #ff00aa, 195px -216.6666666667px #4800ff, 67px -310.6666666667px #8c00ff, 72px -323.6666666667px #ff1a00, -102px -14.6666666667px #5900ff, 0px -157.6666666667px #ff0088, -218px -260.6666666667px #ff4800, 76px -87.6666666667px #ffea00, 240px -7.6666666667px #0095ff, -13px -8.6666666667px #a6ff00, -71px -230.6666666667px #ffc400, -89px -347.6666666667px #00ffd9;
        }
    }
    @-webkit-keyframes gravity {
        to {
            transform: translateY(200px);
            -moz-transform: translateY(200px);
            -webkit-transform: translateY(200px);
            -o-transform: translateY(200px);
            -ms-transform: translateY(200px);
            opacity: 0;
        }
    }
    @-moz-keyframes gravity {
        to {
            transform: translateY(200px);
            -moz-transform: translateY(200px);
            -webkit-transform: translateY(200px);
            -o-transform: translateY(200px);
            -ms-transform: translateY(200px);
            opacity: 0;
        }
    }
    @-o-keyframes gravity {
        to {
            transform: translateY(200px);
            -moz-transform: translateY(200px);
            -webkit-transform: translateY(200px);
            -o-transform: translateY(200px);
            -ms-transform: translateY(200px);
            opacity: 0;
        }
    }
    @-ms-keyframes gravity {
        to {
            transform: translateY(200px);
            -moz-transform: translateY(200px);
            -webkit-transform: translateY(200px);
            -o-transform: translateY(200px);
            -ms-transform: translateY(200px);
            opacity: 0;
        }
    }
    @keyframes gravity {
        to {
            transform: translateY(200px);
            -moz-transform: translateY(200px);
            -webkit-transform: translateY(200px);
            -o-transform: translateY(200px);
            -ms-transform: translateY(200px);
            opacity: 0;
        }
    }
    @-webkit-keyframes position {
        0%,
        19.9% {
            margin-top: 10%;
            margin-left: 40%;
        }
        20%,
        39.9% {
            margin-top: 40%;
            margin-left: 30%;
        }
        40%,
        59.9% {
            margin-top: 20%;
            margin-left: 70%;
        }
        60%,
        79.9% {
            margin-top: 30%;
            margin-left: 20%;
        }
        80%,
        99.9% {
            margin-top: 30%;
            margin-left: 80%;
        }
    }
    @-moz-keyframes position {
        0%,
        19.9% {
            margin-top: 10%;
            margin-left: 40%;
        }
        20%,
        39.9% {
            margin-top: 40%;
            margin-left: 30%;
        }
        40%,
        59.9% {
            margin-top: 20%;
            margin-left: 70%;
        }
        60%,
        79.9% {
            margin-top: 30%;
            margin-left: 20%;
        }
        80%,
        99.9% {
            margin-top: 30%;
            margin-left: 80%;
        }
    }
    @-o-keyframes position {
        0%,
        19.9% {
            margin-top: 10%;
            margin-left: 40%;
        }
        20%,
        39.9% {
            margin-top: 40%;
            margin-left: 30%;
        }
        40%,
        59.9% {
            margin-top: 20%;
            margin-left: 70%;
        }
        60%,
        79.9% {
            margin-top: 30%;
            margin-left: 20%;
        }
        80%,
        99.9% {
            margin-top: 30%;
            margin-left: 80%;
        }
    }
    @-ms-keyframes position {
        0%,
        19.9% {
            margin-top: 10%;
            margin-left: 40%;
        }
        20%,
        39.9% {
            margin-top: 40%;
            margin-left: 30%;
        }
        40%,
        59.9% {
            margin-top: 20%;
            margin-left: 70%;
        }
        60%,
        79.9% {
            margin-top: 30%;
            margin-left: 20%;
        }
        80%,
        99.9% {
            margin-top: 30%;
            margin-left: 80%;
        }
    }
    @keyframes position {
        0%,
        19.9% {
            margin-top: 10%;
            margin-left: 40%;
        }
        20%,
        39.9% {
            margin-top: 40%;
            margin-left: 30%;
        }
        40%,
        59.9% {
            margin-top: 20%;
            margin-left: 70%;
        }
        60%,
        79.9% {
            margin-top: 30%;
            margin-left: 20%;
        }
        80%,
        99.9% {
            margin-top: 30%;
            margin-left: 80%;
        }
    }
</style>
