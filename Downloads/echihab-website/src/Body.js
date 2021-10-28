import React from 'react'
import Slider from './Slider'
import './Body.css'

function Body() {
    return (
        <div className='body'>
            <Slider />

            <div className='body_Parag'>
                <h1 style={{ margin:"20px" }}>
                    ماهي مجلة الشهاب العلمي ؟
                </h1>
                <div classsName='body_Arab'>
                    <p style={{ margin:"20px", color: "#212832" }}>
                        مجلة علمية تصدر عن جمعية الشعرى لعلم الفلك الجزائرية ووحدة البحث في الوساطة العلميّة (CERIST)، ومديريّة البحث العلميّ والتطوير التكنولوجيّ بالجزائر (DGRSDT)، تتناول المواضيع الفلكية بصفة خاصة والعلمية بصفة عامة، من إعداد ثلة من الباحثين وهواة الفلك المتقدمين من شتى مجالات. 
                        تهدف مجلّة الشهاب العلمي إلى نشر الثقافة العلمية و تبسيطها للعامّة، وتحاول تقريب الأفكار من المصادر الموثوقة عن طريق الحوارات التي تجريها مع العديد من العلماء والباحثين في أنحاء المعمورة. 
                        اسم المجلة مُستوحى من مجلة الشهاب التي أسّسها الشيخ عبد الحميد بن باديس رحمه الله مؤسس جمعية العلماء المسلمين الجزائريين التي لعبت دورا كبيرا في إعداد الشعب الجزائري للكفاح المظفر من أجل الاستقلال.  
                    </p>
                </div>
            </div>
            <div className='body_Parag' style={{ direction:"ltr" }}>
                <h1 style={{ direction:"ltr", margin:"20px" }}>
                    What is CHIHAB Science Magazine ?
                </h1>
                <div className='body_English'>
                    <p style={{ direction:"ltr", margin:"20px" }}>
                    “CHIHAB Science Magazine” is a science magazine conceived and edited by the Sirius Astronomy Association from Constantine in Algeria and the Research Unit in Scientific Mediation (CERIST), in collaboration with the Directorate of Scientific Research and Technological Development (DGRSDT). It tackles scientific issues of timely relevance with a strong focus on astronomical ones. It is  produced by a group of astronomers both professional and amateurs, as well as students from various scientific fields. It  aims at spreading scientific culture. It will also ensure that information given is from reputable and reliable sources, and will relentlessly fight against fake news. It also makes a point of bringing the information from leaders in the fields from around the World by conducting extensive interviews with them.
                    The name of the magazine is inspired by the Chihab magazine, founded by Sheikh Abd El-Hamid Ibn Badis, the founder of the Association of Algerian Muslim Ulema which was instrumental in preparing the Algerian people to the struggle for independence.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Body
