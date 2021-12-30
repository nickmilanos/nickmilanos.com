let width = typeof window !== "undefined" ? window.innerWidth : "";

const PersonalInfoSchema = () => [
	{
		header: "Age",
		content: `${new Date().getFullYear() - 1991} years`
	},
	{
		header: "Location",
		content: width > 768 ? <a className="location" href="https://www.google.gr/maps/place/%CE%9A%CE%BF%CF%81%CF%85%CE%B4%CE%B1%CE%BB%CE%BB%CF%8C%CF%82/@37.9868148,23.6318729,14z/data=!3m1!4b1!4m5!3m4!1s0x14a1bb6c6e9ae079:0x3428b0c49e5a6363!8m2!3d37.9845574!4d23.6478138" target="_blank" rel="noopener noreferrer">Korydallos, Athens, Greece</a> : "Korydallos, Athens", 
	},
	{
		header: "Military Service",
		content: "Fulfilled"
	}
];

export default PersonalInfoSchema;