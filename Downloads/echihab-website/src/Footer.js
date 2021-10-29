import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import {Link} from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import CustomInput from '@mui/material/Input';
import Button from '@mui/material/Button';

const Footer = () => {
return (
	<Box style={{ direction: "rtl" }}>
	<h1 style={{ color: "white",
				textAlign: "center",
                direction: "rtl",
				marginTop: "-50px" }}>
		معلومات عنا
	</h1>
	<Container style={{ direction: "rtl", marginTop: "50px" }} >
		<Row>
		<Column style={{ direction: "rtl", marginRight: "-100px", width: "200px" }} >
			<Heading>
                <img 
					style={{ height: "50px" }}
                    src={process.env.PUBLIC_URL + `/logo-echihab-gold.png`}
                    alt=''
                />
            </Heading>
			<Link style={{ textDecoration: "none", color: "white" }} dir="rtl" to="/">الصفحة الرئيسية</Link>
			<Link  style={{ textDecoration: "none", color: "white" }} dir="rtl" to="/numbers/">أعداد المجلة</Link>
			<Link style={{ textDecoration: "none", color: "white" }} to="/team/" rel="noopener noreferrer">فريق المجلة</Link>
            <Link style={{ textDecoration: "none", color: "white" }} to={{ pathname: "https://www.paypal.com/donate?token=-_DbW3TGtjrET5eTRpFdbz-lPvjDPerlg_Kc9aA4AtpVy52J0xxO6Btf08foUqsot5yqJz-4zVfQi0de" }} target="_blank" >تبرع للمجلة</Link>
            {/* <FooterLink href="/contact">إتصل بنا</FooterLink> */}
		</Column>
		<Column style={{ marginRight:"-100px", display: "flex", width: "300px", direction:"rtl" }} >
			<Heading style={{ marginLeft:"100px" }}>تابعونا</Heading>
                <p style={{ direction: "rtl" }}>
				يمكنكم أيضا التواصل معنا عبر وسائل وسائل التواصل الاجتماعي ومشاركتنا تطلعاتكم  وأفكاركم وتعليقاتكم التي تُسعدنا، مع تحيات مجلة الشهاب العلميّ
				</p>
			<div style={{ 
				direction:"ltr", 
				display: "inline", 
				marginLeft: "auto", 
				marginRight: "auto",
				marginTop: "30px",
				width: "200px"
			}}>
				<FooterLink style={{ width: "80px", height: "80px" }} className='Social' href="https://www.facebook.com/SiriusMagazine">
					<FacebookIcon sx={{ width: 40, height: 40 }} />
				</FooterLink>
				<FooterLink className='Social' href="https://www.instagram.com/sirius.algeria/">
					<InstagramIcon sx={{ width: 40, height: 40 }} />
				</FooterLink>
				<FooterLink className='Social' href="#">
					<YouTubeIcon sx={{ width: 40, height: 40 }} />
				</FooterLink>
				<FooterLink className='Social' href="#">
					<TwitterIcon sx={{ width: 40, height: 40 }} />
				</FooterLink>
			</div>
			{/* <FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink> */}
		</Column>
		<Column>
			<Heading>عنوان المجلة</Heading>
			<FooterLink href="#">
				<p style={{ direction:"rtl", width:"250px", marginRight:"-60px", fontSize:"15px" }} >
					وحدة البحث في الوساطة العلمية -CERIST
					جامعة قسطينة 3	
				</p>
				<p style={{ direction:"rtl", width:"250px", marginRight: "-60px" }}>
					contact@siriusalgeria-mag.net
					Phone : +213 (0)771 56 06 58
				</p>
			</FooterLink>
			<FooterLink href="https://www.paypal.com/donate?token=-_DbW3TGtjrET5eTRpFdbz-lPvjDPerlg_Kc9aA4AtpVy52J0xxO6Btf08foUqsot5yqJz-4zVfQi0de">
				<img 
					src={process.env.PUBLIC_URL + `/donation.png`}
					alt=""
					onClick="https://www.paypal.com/donate?token=-_DbW3TGtjrET5eTRpFdbz-lPvjDPerlg_Kc9aA4AtpVy52J0xxO6Btf08foUqsot5yqJz-4zVfQi0de"
				/>
			</FooterLink>
		</Column>
		<Column style={{ width:"310px" }} >
			<Heading>إشترك معنا ليصلك كل جديد.</Heading>
			<div style={{ 
				width:"300px", 
				display: "inline-block", 
				border: "1px solid", 
				marginBottom: "20px",
				borderRadius: "5px" 
			}} >
				<CustomInput 
					aria-label="Demo input" 
					placeholder=" Email..."
				/>
				<Button variant="contained">Submit</Button>
			</div>
			<div style={{ display:"inline-block" }}>
				<FooterLink href="#">
					<img 
						src={process.env.PUBLIC_URL + `/ico_sirius.png`}
						alt=""
					/>
				</FooterLink>
				<FooterLink href="#">
					<img 
						src={process.env.PUBLIC_URL + `/ico_rsdt.png`}
						alt=""
					/>
				</FooterLink>
				<FooterLink href="#">
					<img 
						src={process.env.PUBLIC_URL + `/ico_resunit.png`}
						alt=""
					/>
				</FooterLink>
				<FooterLink href="#">
					<img 
						src={process.env.PUBLIC_URL + `/img/ico_cerist.png`}
						alt=""
					/>
				</FooterLink>
			</div>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
