import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const socialMediaBtn = [
	{
		icon: "fa-brands fa-facebook",
		href: "https://www.facebook.com",
	},
	{
		icon: "fa-brands fa-instagram",
		href: "https://www.instagram.com/gibranafkara",
	},
	{
		icon: "fa-brands fa-x-twitter",
		href: "https://www.twitter.com/gibranafkara",
	},
	{
		icon: "fa-brands fa-linkedin",
		href: "https://www.linkedin.com/in/muhammad-gibran-8460b6236/",
	},
	{
		icon: "fa-brands fa-github",
		href: "https://github.com/limbahpabrik",
	},
];

const middleIndex = Math.floor(socialMediaBtn.length / 2);
const btnLeft = socialMediaBtn.slice(0, middleIndex);
const btnRight = socialMediaBtn.slice(middleIndex);

function SocialButtons({ icon, link }) {
	return (
		<>
			<button onClick={() => window.open(link, "_blank")}>
				<i className={`fa-brands ${icon}`}></i>
			</button>
		</>
	);
}

function Header() {
	return (
		<>
			<div className="social-buttons">
				{btnLeft.map((data) => (
					<SocialButtons icon={data.icon} link={data.href} />
				))}
			</div>
			<div className="social-buttons right">
				{btnRight.map((data) => (
					<SocialButtons icon={data.icon} link={data.href} />
				))}
			</div>
		</>
	);
}

export default Header;
