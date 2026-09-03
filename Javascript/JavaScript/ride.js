const sumDistances = (...distances) => distances.reduce((total, distance) => total + distance, 0);
const calculateBaseFare = (totalDistance, rateperKm = 15) => totalDistance * rateperKm; 
const formatCurrency = (amount) => `${amount.toFixed(2)} ETB`;

function makeSurgeMultiplier(surgeRate) {
    return function(baseFare) {
        return baseFare * surgeRate;
    }
}
function makeDriverTracker(){
    let tripsCompleted = 0;
    return {
        recordTrip() {
            tripsCompleted += 1;
        },
        getTrips(){ 
            return tripsCompleted; }
    };
}
function generateReceipt(distances, surgenFn, tracker, Callback){
    tracker.recordTrip();
    const totalDistance = sumDistances(...distances);
    const baseFare = calculateBaseFare(totalDistance);
    const finalFare = surgenFn(baseFare);
    const formattedFare = formatCurrency(finalFare);

    const message = `Trip #${tracker.getTrips()}: Total Fare is ${formattedFare}.`; Callback(message);
}

const tayesTracker = makeDriverTracker();
const standardPricing = makeSurgeMultiplier(1.0);
const rushHourPricing = makeSurgeMultiplier(1.5);

const printToConsole = (message) => console.log(message);

generateReceipt([2, 3], standardPricing, tayesTracker, printToConsole);
generateReceipt([10], rushHourPricing, tayesTracker, printToConsole);