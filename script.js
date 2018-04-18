$(".circle").throwable({
                        containment:[0,0,1440,900],
                        drag:true,
                        gravity:{x:0,y:0},
                        impulse:{
                            f:52,
                            p:{x:1,y:1}
                        },
                        shape:"circle",
                        autostart:false,
                        bounce:0.5,
                        damping:100,
                        areaDetection:[[0,0,300,300]],
                        collisionDetection: true
                    });
