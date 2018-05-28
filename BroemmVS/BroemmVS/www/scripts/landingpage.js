﻿(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        console.log("works as intended");

        $(document).ready(function () {
            console.log("Document is ready!");

            var $app = $(".app");

            var $step1 = $("#step1");
            var $step2 = $("#step2");
            var $step3 = $("#step3");
            var $step4 = $("#step4");

            var totalpages = 4;
            var currentpage = 1;

            $step2.hide();
            $step3.hide();
            $step4.hide();

            $app.hammer().on("swipe", function (event) {
                //console.log(event.gesture.direction + " gesture detected");

                if (event.gesture.direction === 2) { // right -> left
                    console.log("gesture right -> left detected");

                    if (currentpage < totalpages) {
                        currentpage += 1;
                        console.log("page: " + currentpage);

                        switch (currentpage) {
                            /*case 1:
                                break;*/
                            case 2:
                                $step1.hide();
                                $step2.show();
                                $(".stepcircle2").addClass("active");
                                $(".ball1").toggleClass("active");
                                $(".ball2").toggleClass("active");
                                break;
                            case 3:
                                $step2.hide();
                                $step3.show();
                                $(".stepcircle3").addClass("active");
                                $(".ball2").toggleClass("active");
                                $(".ball3").toggleClass("active");
                                break;
                            case 4:
                                $step3.hide();
                                $step4.show();
                                $(".stepcircle4").addClass("active");
                                $(".ball3").toggleClass("active");
                                $(".ball4").toggleClass("active");
                                break;
                        };
                    };
                } /*else if (event.gesture.direction === 4) { // right <- left 
                    console.log("gesture right <- left detected");

                    if (currentpage > 1) {
                        currentpage -= 1;
                        console.log("page: " + currentpage);

                        switch (currentpage) {
                            //case 4:
                                //break;
                            case 3:
                                $step4.hide();
                                $step3.show();
                                $(".ball4").toggleClass("active");
                                $(".ball3").toggleClass("active");
                                break;
                            case 2:
                                $step3.hide();
                                $step2.show();
                                $(".ball3").toggleClass("active");
                                $(".ball2").toggleClass("active");
                                break;
                            case 1:
                                $step2.hide();
                                //$container.css("padding-top", "");
                                $step1.show();
                                $(".ball2").toggleClass("active");
                                $(".ball1").toggleClass("active");
                                break;
                        };
                    };
                };*/
            });
        }); 
    }
})();