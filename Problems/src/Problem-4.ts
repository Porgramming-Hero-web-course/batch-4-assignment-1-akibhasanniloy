{
    // 
    type Circle={
        shape:"circle";
        radius: number;
    };
    type Rectangle={
        shape:"rectangle";
        width: number;
        height: number;
    };
    type Shapes= Circle | Rectangle;

    function calculateShapeArea(shape:Shapes):number{
        if(shape.shape==="circle"){
            return 3.1416 * shape.radius * shape.radius;
        }else if(shape.shape==="rectangle"){
            return shape.width * shape.height
        }
    }

    const circleArea= calculateShapeArea({shape:"circle", radius:5});
    console.log(circleArea);
    const rectangleArea= calculateShapeArea({shape:"rectangle", width:4, height:6});
    console.log(rectangleArea);

    // 
}