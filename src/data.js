export const API_KEY='AIzaSyAGrcAPdgh-rO_Z_2m9rQznRmw7XOp9n3M';
export const value_converter = (value) =>{
    if(value>=1000000) 
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K"
    }
    else{
        return value;
    }
}