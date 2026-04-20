function calculateBMI(){
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let heightM = height*0.0254;
    let bmi = weight/(heightM*heightM);
    document.getElementById('bmi').value = bmi.toFixed(2);

    let minWeight = 18.5 * (heightM * heightM);
    let maxWeight = 24.9 * (heightM * heightM);

    let resultText = "";

    if (weight < minWeight) {
        let gain = (minWeight - weight).toFixed(2);
        resultText = `You are underweight. You need to gain at least ${gain} kg to reach a healthy BMI.`;
    } 
    else if (weight > maxWeight) {
        let lose = (weight - maxWeight).toFixed(2);
        resultText = `You are overweight. You need to lose at least ${lose} kg to reach a healthy BMI.`;
    } 
    else {
        resultText = "You are in a healthy weight range. Great job!";
    }
    // console.log(resultText);
    document.getElementById('result').innerHTML = resultText;
}