const time =2000;
/**
 * fonction qui renvoie aire et périmètre du rectangle
 * @param {float} x : longueur du rectangle
 * @param {float} y : base du rectangle
 * @param {function} callback : renvoie message erreur ou résultat
 */
module.exports = (x,y,callback) => {            //sans export, la fonction ne peut pas être utilisé ailleurs
 
    if (x <= 0 || y <= 0)
        setTimeout(() => 
            callback(new Error("Rectangle dimensions should be greater than zero: l = "
                + x + ", and b = " + y), 
            null),
            time);
    else
        setTimeout(() => 
            callback(null, {
                perimeter: () => (2*(x+y)),
                area:() => (x*y)
            }), 
            time);
}



