import { useState } from "react"

export default function LoanCalculator() {

	const [cost, setAmount] = useState(0)
	const [interestRate, setInterestRate] = useState(0)
	const [downPayment, setDownPayment] = useState(0)
	const [fee, setFee] = useState(1)
	const [emi, setEMI] = useState(0)
	const [tenureValue, setTenure] = useState("")
	const tenure = [12, 24, 36, 48]

	const updateEMI = (e) => {
	}
	const calculateEMI = (cost, interestRate, downPayment, fee, tenure) => {
		if (!cost || !interestRate || !tenure) return;

		const processingFeeAmount = (cost * fee) / 100;
		const principal = cost - downPayment + processingFeeAmount;
		const monthlyInterestRate = interestRate / (12 * 100);

		// EMI formula
		const emiValue = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenure)) /
			(Math.pow(1 + monthlyInterestRate, tenure) - 1);

		setEMI(emiValue.toFixed(2));
	};

	const onCostChange = (e) => {
		const val = Number(e.target.value);
		setAmount(val);
		calculateEMI(val, interestRate, downPayment, fee, tenureValue);
	};

	// When user inputs interest rate
	const onInterestChange = (e) => {
		const val = Number(e.target.value);
		setInterestRate(val);
		calculateEMI(cost, val, downPayment, fee, tenureValue);
	};

	// When user inputs fee
	const onFeeChange = (e) => {
		const val = Number(e.target.value);
		setFee(val);
		calculateEMI(cost, interestRate, downPayment, val, tenureValue);
	};

	// When user selects tenure
	const onTenureChange = (value) => {
		setTenure(value);
		calculateEMI(cost, interestRate, downPayment, fee, value);
	};

	const updateDownPayment = (e) => {
		const dp = Number(e.target.value);
		setDownPayment(dp);
		calculateEMI(cost, interestRate, dp, fee, tenureValue);
	};


	return (<div className="root">
		<div className="title">EMI Calculator</div>
		<div className="field"><span>Total Cost of Asset</span>
			<input type="number" onChange={onCostChange} />
		</div>
		<div className="field"><span>Interest Rate(%)</span>
			<input type="number" onChange={onInterestChange} /></div>

		<div className="field"><span>Processing Fee (in %)</span>
			<input type="number" onChange={onFeeChange} /></div>
		<div className="field"><span>Down Payment</span>
			<input type="range" onChange={updateDownPayment} />


		</div>
		<div className="labels"><label>{downPayment}</label>
			<label>{downPayment}</label>
			<label>{cost - downPayment}</label>
		</div>
		<div className="field">
			<span>Loan Per month</span>
			<input type="range" onChange={updateDownPayment} />
		</div>

		<div className="field">
			<span>Tenure</span>
			<div className="labels">
				{tenure.map((item) => {
					return (
						<button className="label-item" onClick={() => onTenureChange(item)}>{item} </button>
					)
				})}
			</div>
		</div>
		EMI Per Month :{emi}


	</div>)
}