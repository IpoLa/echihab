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
                <h1>
                    فريق المجلة:
                </h1>
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
                    التدقيق اللغوي
                </h1>
                <p>
                هشام قرقوري، ياسمين بوالجدري، ندى دراجي، خالد شبري، أسماء فيلالي، زينب دراجي، خالد شبري، أسماء فيلالي، زينب عيساني، إيمان خشة، الشيماء أمين خوجة، عيساني، إيمان خشة، الشيماء أمين خوجة، سلمى حجاب، محمد القريشي بن يلس، وليد سلمى حجاب، محمد القريشي بن يلس، وليد بن خليفة، بكير حفار، مراد حمدوش، أسماء بن خليفة، بكير حفار، مراد حمدوش، أسماء بو سحابة، إحسان سالم، موسى مدوربو سحابة، إحسان سالم، موسى مدور
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

