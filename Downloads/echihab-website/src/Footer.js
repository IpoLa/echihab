import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
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
                    src='/logo-echihab-gold.png'
                    alt=''
                />
            </Heading>
			<FooterLink dir="rtl" href="#">الصفحة الرئيسية</FooterLink>
			<FooterLink  dir="rtl" href="/numbers">أعداد المجلة</FooterLink>
			<FooterLink href="#">فريق المجلة</FooterLink>
            <FooterLink href="#">تبرع للمجلة</FooterLink>
            <FooterLink href="#">إتصل بنا</FooterLink>
		</Column>
		<Column style={{ marginRight:"-100px", display: "flex", width: "300px" }} >
			<Heading>تواصل</Heading>
                <p dir="rtl">
                    بإمكانكم أيضا التواصل معنا عبر وسائل 
                    وسائل التواصل الإجتماعي ومشاركتنا 
                    تطلعاتكم أفكاركم تعليقاتكم, سنسعد بذلك كثيرا,
                    تحيات فريق المجلة العلمية.
                </p>
			<div style={{ 
				direction:"ltr", 
				display: "inline", 
				marginLeft: "auto", 
				marginRight: "auto",
				marginTop: "30px",
				width: "200px"
			}}>
				<FooterLink style={{ width: "80px", height: "80px" }} className='Social' href="#">
					<FacebookIcon sx={{ width: 40, height: 40 }} />
				</FooterLink>
				<FooterLink className='Social' href="#">
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
				<p style={{ direction:"ltr" }} >
					مالك حداد قسنطينة الجزائر
					contact@siriusalgeria-mag.net
				</p>
				<p>
					Phone : +213 (0)771 56 06 58
				</p>
			</FooterLink>
			<FooterLink href="#">
				<img 
					src="/donation.png"
					alt=""
				/>
			</FooterLink>
		</Column>
		<Column style={{ width:"300px" }} >
			<Heading>لاستقبال الأعداد القادمة, إشترك معنا.</Heading>
			<div style={{ 
				width:"285px", 
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
						src="/ico_sirius.png"
						alt=""
					/>
				</FooterLink>
				<FooterLink href="#">
					<img 
						src="/ico_rsdt.png"
						alt=""
					/>
				</FooterLink>
				<FooterLink href="#">
					<img 
						src="/ico_resunit.png"
						alt=""
					/>
				</FooterLink>
				<FooterLink href="#">
					<img 
						src="/ico_cerist.png"
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
