window.onload = function()
{ 
    /*const startpath = generateRandomPoints();    
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttributeNS(null, "d", startpath);
    path.setAttributeNS(null, "stroke", "black");
    path.setAttributeNS(null, "fill", "transparent");
    path.setAttributeNS(null, "stroke-width", "1");
    path.setAttributeNS(null, "id", "start");
    document.getElementById("svg").appendChild(path);
        
    const finalpath = generateRandomPoints();
    /*const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttributeNS(null, "d", finalpath);
    path1.setAttributeNS(null, "stroke", "black");
    path1.setAttributeNS(null, "fill", "transparent");
    path1.setAttributeNS(null, "stroke-width", "1");
    path1.setAttributeNS(null, "id", "final");
    document.getElementById("svg").appendChild(path1);
    document.write (startpath + "/"+ finalpathg)
    const value= 'M 155 177 C 513 80 261 515 403 552';
    const value1= 'M 771 515 C 55 174 204 138 716 724';*/

random();

}

function random(){
    var percorso = generateRandomPoints();
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttributeNS(null, "d", "M 9 1274 C 541 1397 55 969 1461 1100");
    path.setAttributeNS(null, "fill", "none");
    path.setAttributeNS(null, "id", "end");
    document.getElementById("svg").appendChild(path);
    
    const pointsx1 = [];
    const pointsy1 = [];
    const pointsx2 = [];
    const pointsy2 = [];
    
    var length = document.getElementById("start").getTotalLength();
    var nn=0;
    for(let i=20; i < length; i =i+20)
    {
        var point = document.getElementById('start').getPointAtLength(i);
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        nn=nn+1;
        circle.setAttributeNS(null, 'cx', point.x);
        circle.setAttributeNS(null, 'cy', point.y);
        circle.setAttributeNS(null, 'r', 700);
        circle.setAttributeNS(null, 'fill', "url('#myGradient')" );
        circle.setAttributeNS(null, "id", "1."+ nn);
        
        document.getElementById( 'svg' ).appendChild(circle);
        pointsx1.push(point.x);
        pointsy1.push(point.y);
    }
    
    var length2 = document.getElementById("end").getTotalLength();
    var n = Math.floor(length / 20);
    var dist = length2 / n;
    var nn=0;
    for(let i=dist; i < length2; i =i+dist)
    {
        var point = document.getElementById('end').getPointAtLength(i);
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        nn=nn+1;
        circle.setAttributeNS(null, 'cx', point.x);
        circle.setAttributeNS(null, 'cy', point.y);
        circle.setAttributeNS(null, 'r', 200);
        circle.setAttributeNS(null, 'style', 'fill: none' );
        circle.setAttributeNS(null, "id", "2."+ nn);
        document.getElementById( 'svg' ).appendChild(circle);
        pointsx2.push(point.x);
        pointsy2.push(point.y);
    }
    
    for(i=1;i<=n;i++){
   anime({
            targets: document.getElementById("1." + i),
            translateX: pointsx2[i-1]-pointsx1[i-1],
            translateY: pointsy2[i-1]-pointsy1[i-1],
            duration: 2500,
            easing: 'linear',
        });
}
    /*anime({
        targets: document.getElementById('move'),
        d: spline2,
        duration: 2500,
        easing: 'linear',
        complete: random
    });*/



}

function generateRandomPoints()
{

   const points = [];

    for(let i = 0; i < 4; i++)
    {
        const point = [Math.floor(Math.random() * 2000), Math.floor(Math.random() * 4000)];
        
        points.push(point);
        
        /*var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttributeNS(null, 'cx', points[i][0]);
        circle.setAttributeNS(null, 'cy', points[i][1]);
        circle.setAttributeNS(null, 'r', 5);
        circle.setAttributeNS(null, 'style', 'fill: blue; stroke-width: 1px;' );
        document.getElementById( 'svg' ).appendChild(circle);*/
    }
   const pathPoints = ["M", points[0][0], points[0][1], "C"];
        
    for(let p = 1, l = points.length; p < l; p++)
    {
        pathPoints.push(points[p][0]);
        pathPoints.push(points[p][1]);
    }
    return pathPoints.join(" ");
    setTimeout(arguments.callee, 60000);
       
}






