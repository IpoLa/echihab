import * as React from 'react';
import './Team.css';


function Team() {
    return (
        <div className='team'>
            {/* <Stack className='stack' direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + `/ico_rsdt.png`} sx={{ width: 200, height: 200 }} />
                <Avatar alt="Travis Howard" src={process.env.PUBLIC_URL + `/ico_rsdt.png`} sx={{ width: 200, height: 200 }} />
                <Avatar alt="Cindy Baker" src={process.env.PUBLIC_URL + `/ico_rsdt.png`} sx={{ width: 200, height: 200 }} />
            </Stack> */}
            <div className='words'>
                <div style={{ border: "1px solid",borderColor:"#2c79fe", borderRadius: "20px", marginBottom:"10px", width: "180px", backgroundColor:"#2c79fe" }} >
                    <h1 style={{ fontSize: "25px", marginRight: "10px", marginLeft:"10px", color: "white" }} >
                        فريق المجلة:
                    </h1>
                </div> 
                <h1>
                    رئيس التحرير
                </h1>
                <p>
                    خولة العقون
                </p>
                <h1>
                    الإشراف العام والتدقيق العلمي
                </h1>
                <p>
                    د. جمال ميموني
                </p>
                <h1>
                    مسؤول التصميم والأعمال الفنية
                </h1>
                <p>
                    شمس الدين مواتسي
                </p>
                <h1>
                    فريق التحرير
                </h1>
                <p>
                    هشام قرقوري، ياسمين بو الجدري، ندى دراجي، خالد شبري، أسماء فيلالي، زينب عيساني، الشيماء أمين خوجة، إيمان خشة، خولة العقون، سلمى حجاب، محمد القريشي بن يلس، وليد بن خليفة، صابر مخلوف، أسماء بو سحابة، فلة داود، إحسان سالم، موسى مدور، بكير حفار، مراد حمدوش.
                </p>
                <h1>
                    فريق التدقيق اللغوي
                </h1>
                <p>
                    خولة العقون، وليد بن خليفة، صابر مخلوف، فلة داود
                </p>
                <h1>
                    الشطار الصغار
                </h1>
                <p>
                    لينة لحمر، عبد الغفار العقون، دانية لحمر، أحمد تاج الدين رامول
                </p>
                <h1>
                    التطوير والبرمجة
                </h1>
                <p>
                    أكرم مزعاش,
                    سلمى حجاب
                </p>
            </div>
        </div>
    )
}

export default Team;

