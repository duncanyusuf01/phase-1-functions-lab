// Code your solution in this file!
function distanceFromHqInBlocks(pickuplocation){
    return Math.abs(pickuplocation-42)
}
function distanceFromHqInFeet(pickuplocation){
    return Math.abs(pickuplocation-42)*264
}
function distanceTravelledInFeet(start, destination){
    return Math.abs(start-destination)*264
}
function calculatesFarePrice(start,destination){
    calculatesFarePrice=Math.abs(start-destination)*264;
    if (calculatesFarePrice<=400) {
        return 0;
    } else if (calculatesFarePrice>400 && calculatesFarePrice<=2000) {
        return (calculatesFarePrice-400)*.02;
    } else if (calculatesFarePrice>2000 && calculatesFarePrice<2500) {
        return 25;
    } else{return 'cannot travel that far'}
}