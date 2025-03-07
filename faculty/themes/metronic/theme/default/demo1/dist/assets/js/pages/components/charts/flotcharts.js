"use strict";
var KTFlotchartsDemo=function() {
    var t=function() {
        function t() {
            return Math.floor(21*Math.random())+20
        }
        var e=[[1,
        t()],
        [2,
        t()],
        [3,
        2+t()],
        [4,
        3+t()],
        [5,
        5+t()],
        [6,
        10+t()],
        [7,
        15+t()],
        [8,
        20+t()],
        [9,
        25+t()],
        [10,
        30+t()],
        [11,
        35+t()],
        [12,
        25+t()],
        [13,
        15+t()],
        [14,
        20+t()],
        [15,
        45+t()],
        [16,
        50+t()],
        [17,
        65+t()],
        [18,
        70+t()],
        [19,
        85+t()],
        [20,
        80+t()],
        [21,
        75+t()],
        [22,
        80+t()],
        [23,
        75+t()],
        [24,
        70+t()],
        [25,
        65+t()],
        [26,
        75+t()],
        [27,
        80+t()],
        [28,
        85+t()],
        [29,
        90+t()],
        [30,
        95+t()]],
        o=[[1,
        t()-5],
        [2,
        t()-5],
        [3,
        t()-5],
        [4,
        6+t()],
        [5,
        5+t()],
        [6,
        20+t()],
        [7,
        25+t()],
        [8,
        36+t()],
        [9,
        26+t()],
        [10,
        38+t()],
        [11,
        39+t()],
        [12,
        50+t()],
        [13,
        51+t()],
        [14,
        12+t()],
        [15,
        13+t()],
        [16,
        14+t()],
        [17,
        15+t()],
        [18,
        15+t()],
        [19,
        16+t()],
        [20,
        17+t()],
        [21,
        18+t()],
        [22,
        19+t()],
        [23,
        20+t()],
        [24,
        21+t()],
        [25,
        14+t()],
        [26,
        24+t()],
        [27,
        25+t()],
        [28,
        26+t()],
        [29,
        27+t()],
        [30,
        31+t()]];
        $.plot($("#kt_flotcharts_2"), [ {
            data:e, label:"Unique Visits", lines: {
                lineWidth: 1
            }
            , shadowSize:0
        }
        , {
            data:o, label:"Page Views", lines: {
                lineWidth: 1
            }
            , shadowSize:0
        }
        ], {
            series: {
                lines: {
                    show:!0, lineWidth:2, fill:!0, fillColor: {
                        colors:[ {
                            opacity: .05
                        }
                        , {
                            opacity: .01
                        }
                        ]
                    }
                }
                , points: {
                    show: !0, radius: 3, lineWidth: 1
                }
                , shadowSize:2
            }
            , grid: {
                hoverable: !0, clickable: !0, tickColor: "#eee", borderColor: "#eee", borderWidth: 1
            }
            , colors:[KTApp.getStateColor("brand"), KTApp.getStateColor("danger")], xaxis: {
                ticks: 11, tickDecimals: 0, tickColor: "#eee"
            }
            , yaxis: {
                ticks: 11, tickDecimals: 0, tickColor: "#eee"
            }
        }
        );
        var a=null;
        $("#chart_2").bind("plothover", function(t, e, o) {
            if($("#x").text(e.x.toFixed(2)), $("#y").text(e.y.toFixed(2)), o) {
                if(a!=o.dataIndex) {
                    a=o.dataIndex, $("#tooltip").remove();
                    var r=o.datapoint[0].toFixed(2), l=o.datapoint[1].toFixed(2);
                    !function(t, e, o) {
                        $('<div id="tooltip">'+o+"</div>").css( {
                            position: "absolute", display: "none", top: e+5, left: t+15, border: "1px solid #333", padding: "4px", color: "#fff", "border-radius": "3px", "background-color": "#333", opacity: .8
                        }
                        ).appendTo("body").fadeIn(200)
                    }
                    (o.pageX, o.pageY, o.series.label+" of "+r+" = "+l)
                }
            }
            else $("#tooltip").remove(), a=null
        }
        )
    }
    ;
    return {
        init:function() {
            var e,
            o;
            !function() {
                for(var t=[], e=0;
                e<2*Math.PI;
                e+=.25)t.push([e, Math.sin(e)]);
                var o=[];
                for(e=0;
                e<2*Math.PI;
                e+=.25)o.push([e, Math.cos(e)]);
                var a=[];
                for(e=0;
                e<2*Math.PI;
                e+=.1)a.push([e, Math.tan(e)]);
                $.plot($("#kt_flotcharts_1"), [ {
                    label:"sin(x)", data:t, lines: {
                        lineWidth: 1
                    }
                    , shadowSize:0
                }
                , {
                    label:"cos(x)", data:o, lines: {
                        lineWidth: 1
                    }
                    , shadowSize:0
                }
                , {
                    label:"tan(x)", data:a, lines: {
                        lineWidth: 1
                    }
                    , shadowSize:0
                }
                ], {
                    colors:[KTApp.getStateColor("success"), KTApp.getStateColor("brand"), KTApp.getStateColor("danger")], series: {
                        lines: {
                            show: !0
                        }
                        , points: {
                            show: !0, fill: !0, radius: 3, lineWidth: 1
                        }
                    }
                    , xaxis: {
                        tickColor: "#eee", ticks: [0, [Math.PI/2, "π/2"], [Math.PI, "π"], [3*Math.PI/2, "3π/2"], [2*Math.PI, "2π"]]
                    }
                    , yaxis: {
                        tickColor: "#eee", ticks: 10, min: -2, max: 2
                    }
                    , grid: {
                        borderColor: "#eee", borderWidth: 1
                    }
                }
                )
            }
            (),
            t(),
            function() {
                for(var t=[], e=[], o=0;
                o<14;
                o+=.1)t.push([o, Math.sin(o)]),
                e.push([o, Math.cos(o)]);
                var a=$.plot($("#kt_flotcharts_3"), [ {
                    data:t, label:"sin(x) = -0.00", lines: {
                        lineWidth: 1
                    }
                    , shadowSize:0
                }
                , {
                    data:e, label:"cos(x) = -0.00", lines: {
                        lineWidth: 1
                    }
                    , shadowSize:0
                }
                ], {
                    colors:[KTApp.getStateColor("brand"), KTApp.getStateColor("warning")], series: {
                        lines: {
                            show: !0
                        }
                    }
                    , crosshair: {
                        mode: "x"
                    }
                    , grid: {
                        hoverable: !0, autoHighlight: !1, tickColor: "#eee", borderColor: "#eee", borderWidth: 1
                    }
                    , yaxis: {
                        min: -1.2, max: 1.2
                    }
                }
                ),
                r=$("#kt_flotcharts_3 .legendLabel");
                r.each(function() {
                    $(this).css("width", $(this).width())
                }
                );
                var l=null,
                i=null;
                function n() {
                    l=null;
                    var t=i,
                    e=a.getAxes();
                    if(!(t.x<e.xaxis.min||t.x>e.xaxis.max||t.y<e.yaxis.min||t.y>e.yaxis.max)) {
                        var o,
                        n,
                        s=a.getData();
                        for(o=0;
                        o<s.length;
                        ++o) {
                            var d=s[o];
                            for(n=0;
                            n<d.data.length&&!(d.data[n][0]>t.x);
                            ++n);
                            var c,
                            h=d.data[n-1],
                            p=d.data[n];
                            c=null==h?p[1]: null==p?h[1]: h[1]+(p[1]-h[1])*(t.x-h[0])/(p[0]-h[0]), r.eq(o).text(d.label.replace(/=.*/, "= "+c.toFixed(2)))
                        }
                    }
                }
                $("#kt_flotcharts_3").bind("plothover", function(t, e, o) {
                    i=e, l||(l=setTimeout(n, 50))
                }
                )
            }
            (),
            function() {
                var t=[],
                e=250;
                function o() {
                    for(t.length>0&&(t=t.slice(1));
                    t.length<e;
                    ) {
                        var o=(t.length>0?t[t.length-1]: 50)+10*Math.random()-5;
                        o<0&&(o=0),
                        o>100&&(o=100),
                        t.push(o)
                    }
                    for(var a=[], r=0;
                    r<t.length;
                    ++r)a.push([r, t[r]]);
                    return a
                }
                var a= {
                    colors:[KTApp.getStateColor("danger"),
                    KTApp.getStateColor("brand")],
                    series: {
                        shadowSize: 1
                    }
                    ,
                    lines: {
                        show:!0,
                        lineWidth:.5,
                        fill:!0,
                        fillColor: {
                            colors:[ {
                                opacity: .1
                            }
                            ,
                            {
                                opacity: 1
                            }
                            ]
                        }
                    }
                    ,
                    yaxis: {
                        min:0,
                        max:100,
                        tickColor:"#eee",
                        tickFormatter:function(t) {
                            return t+"%"
                        }
                    }
                    ,
                    xaxis: {
                        show: !1
                    }
                    ,
                    colors:[KTApp.getStateColor("brand")],
                    grid: {
                        tickColor: "#eee", borderWidth: 0
                    }
                }
                ,
                r=30,
                l=$.plot($("#kt_flotcharts_4"), [o()], a);
                !function t() {
                    l.setData([o()]),
                    l.draw(),
                    setTimeout(t, r)
                }
                ()
            }
            (),
            function() {
                for(var t=[], e=0;
                e<=10;
                e+=1)t.push([e, parseInt(30*Math.random())]);
                var o=[];
                for(e=0;
                e<=10;
                e+=1)o.push([e, parseInt(30*Math.random())]);
                var a=[];
                for(e=0;
                e<=10;
                e+=1)a.push([e, parseInt(30*Math.random())]);
                var r=0,
                l=!0,
                i=!1,
                n=!1;
                function s() {
                    $.plot($("#kt_flotcharts_5"), [ {
                        label:"sales", data:t, lines: {
                            lineWidth: 1
                        }
                        , shadowSize:0
                    }
                    , {
                        label:"tax", data:o, lines: {
                            lineWidth: 1
                        }
                        , shadowSize:0
                    }
                    , {
                        label:"profit", data:a, lines: {
                            lineWidth: 1
                        }
                        , shadowSize:0
                    }
                    ], {
                        colors:[KTApp.getStateColor("danger"), KTApp.getStateColor("brand")], series: {
                            stack:r, lines: {
                                show: i, fill: !0, steps: n, lineWidth: 0
                            }
                            , bars: {
                                show: l, barWidth: .5, lineWidth: 0, shadowSize: 0, align: "center"
                            }
                        }
                        , grid: {
                            tickColor: "#eee", borderColor: "#eee", borderWidth: 1
                        }
                    }
                    )
                }
                $(".stackControls input").click(function(t) {
                    t.preventDefault(), r="With stacking"==$(this).val()||null, s()
                }
                ),
                $(".graphControls input").click(function(t) {
                    t.preventDefault(), l=-1!=$(this).val().indexOf("Bars"), i=-1!=$(this).val().indexOf("Lines"), n=-1!=$(this).val().indexOf("steps"), s()
                }
                ),
                s()
            }
            (),
            function() {
                var t=function(t) {
                    for(var e=[], o=100+t, a=200+t, r=1;
                    r<=20;
                    r++) {
                        var l=Math.floor(Math.random()*(a-o+1)+o);
                        e.push([r, l]),
                        o++,
                        a++
                    }
                    return e
                }
                (0);
                var e= {
                    colors:[KTApp.getStateColor("success"),
                    KTApp.getStateColor("brand")],
                    series: {
                        bars: {
                            show: !0
                        }
                    }
                    ,
                    bars: {
                        barWidth: .8, lineWidth: 0, shadowSize: 0, align: "left"
                    }
                    ,
                    grid: {
                        tickColor: "#eee", borderColor: "#eee", borderWidth: 1
                    }
                }
                ;
                $.plot($("#kt_flotcharts_6"), [ {
                    data:t, lines: {
                        lineWidth: 1
                    }
                    , shadowSize:0
                }
                ], e)
            }
            (),
            e= {
                colors:[KTApp.getStateColor("brand")],
                series: {
                    bars: {
                        show: !0
                    }
                }
                ,
                bars: {
                    horizontal: !0, barWidth: 6, lineWidth: 0, shadowSize: 0, align: "left"
                }
                ,
                grid: {
                    tickColor: "#eee", borderColor: "#eee", borderWidth: 1
                }
            }
            ,
            $.plot($("#kt_flotcharts_7"), [[[10, 10], [20, 20], [30, 30], [40, 40], [50, 50]]], e),
            o=[ {
                label: "CSS", data: 10, color: KTApp.getStateColor("brand")
            }
            ,
            {
                label: "HTML5", data: 40, color: KTApp.getStateColor("success")
            }
            ,
            {
                label: "PHP", data: 30, color: KTApp.getStateColor("danger")
            }
            ,
            {
                label: "Angular", data: 20, color: KTApp.getStateColor("warning")
            }
            ],
            $.plot($("#kt_flotcharts_8"), o, {
                series: {
                    pie: {
                        show: !0
                    }
                }
            }
            ),
            function() {
                var t=[ {
                    label: "USA", data: 10, color: KTApp.getStateColor("brand")
                }
                ,
                {
                    label: "Germany", data: 25, color: KTApp.getStateColor("success")
                }
                ,
                {
                    label: "Norway", data: 30, color: KTApp.getStateColor("danger")
                }
                ,
                {
                    label: "Malaysia", data: 15, color: KTApp.getStateColor("warning")
                }
                ,
                {
                    label: "France", data: 10, color: KTApp.getStateColor("info")
                }
                ];
                $.plot($("#kt_flotcharts_9"), t, {
                    series: {
                        pie: {
                            show: !0
                        }
                    }
                    , legend: {
                        show: !1
                    }
                }
                )
            }
            (),
            function() {
                var t=[ {
                    label: "Google", data: 20, color: KTApp.getStateColor("brand")
                }
                ,
                {
                    label: "Twitter", data: 35, color: KTApp.getStateColor("success")
                }
                ,
                {
                    label: "Linkedin", data: 20, color: KTApp.getStateColor("danger")
                }
                ,
                {
                    label: "Instagram", data: 25, color: KTApp.getStateColor("warning")
                }
                ,
                {
                    label: "Facebook", data: 10, color: KTApp.getStateColor("info")
                }
                ];
                $.plot($("#kt_flotcharts_10"), t, {
                    series: {
                        pie: {
                            show:!0, radius:1, label: {
                                show:!0, radius:1, formatter:function(t, e) {
                                    return'<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'+t+"<br/>"+Math.round(e.percent)+"%</div>"
                                }
                                , background: {
                                    opacity: .8
                                }
                            }
                        }
                    }
                    , legend: {
                        show: !1
                    }
                }
                )
            }
            (),
            function() {
                var t=[ {
                    label: "Vue", data: 13, color: KTApp.getStateColor("danger")
                }
                ,
                {
                    label: "Angular", data: 25, color: KTApp.getStateColor("success")
                }
                ,
                {
                    label: "React", data: 15, color: KTApp.getStateColor("brand")
                }
                ,
                {
                    label: "Ember", data: 10, color: KTApp.getStateColor("warning")
                }
                ,
                {
                    label: "Backbone", data: 8, color: KTApp.getStateColor("info")
                }
                ];
                $.plot($("#kt_flotcharts_11"), t, {
                    series: {
                        pie: {
                            show:!0, radius:1, label: {
                                show:!0, radius:1, formatter:function(t, e) {
                                    return'<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'+t+"<br/>"+Math.round(e.percent)+"%</div>"
                                }
                                , background: {
                                    opacity: .8
                                }
                            }
                        }
                    }
                    , legend: {
                        show: !1
                    }
                }
                )
            }
            ()
        }
    }
}

();
jQuery(document).ready(function() {
    KTFlotchartsDemo.init()
}

);